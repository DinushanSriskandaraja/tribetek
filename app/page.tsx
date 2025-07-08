"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RollerCoasterGeometry } from "three/examples/jsm/misc/RollerCoaster";

export default function CleanMilestoneRollerCoaster() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create scene with dark background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111122);

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));
    const pointLight = new THREE.PointLight(0xf97316, 2, 10);
    scene.add(pointLight);

    // Create train (camera container)
    const train = new THREE.Object3D();
    scene.add(train);

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    train.add(camera);

    // Create rollercoaster curve
    const PI2 = Math.PI * 2;
    const curve = {
      getPointAt: function (t: number) {
        t = t * PI2;
        const x = Math.sin(t * 3) * Math.cos(t * 4) * 20;
        const y = Math.sin(t * 10) * 2 + Math.cos(t * 17) * 2 + 5;
        const z = Math.sin(t) * Math.sin(t * 4) * 50;
        return new THREE.Vector3(x, y, z).multiplyScalar(2);
      },
      getTangentAt: function (t: number) {
        const delta = 0.0001;
        const t1 = Math.max(0, t - delta);
        const t2 = Math.min(1, t + delta);
        return this.getPointAt(t2).sub(this.getPointAt(t1)).normalize();
      },
    };

    // Create track with orange color
    const geometry = new RollerCoasterGeometry(curve, 1000);
    const material = new THREE.MeshPhongMaterial({
      color: 0xf97316,
      emissive: 0xf97316,
      emissiveIntensity: 0.2,
      specular: 0xffb74d,
      shininess: 50,
    });
    const track = new THREE.Mesh(geometry, material);
    scene.add(track);

    // Digital transformation concepts
    const transformationStages = [
      "Legacy Systems",
      "Cloud Migration",
      "Data Analytics",
      "AI Integration",
      "Automation",
      "Digital Transformation",
    ];

    // Define milestones
    const milestones = transformationStages.map((stage, i) => ({
      progress: (i + 1) / (transformationStages.length + 1),
      duration: 0.02,
      label: stage,
    }));

    // Create clean milestone markers (without dark center)
    const createMilestoneMarker = (
      position: THREE.Vector3,
      radius: number,
      label: string
    ) => {
      // Only create the glowing ring (no dark platform)
      const ringGeometry = new THREE.TorusGeometry(radius, 0.15, 16, 32);
      const ringMaterial = new THREE.MeshPhongMaterial({
        color: 0xf97316,
        emissive: 0xf97316,
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.9,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(position);
      ring.position.y += 0.3; // Slightly above track
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);

      // Add floating tech symbols instead of displays
      const techSymbol = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 16, 16),
        new THREE.MeshPhongMaterial({
          color: 0x00aaff,
          emissive: 0x003366,
          emissiveIntensity: 0.5,
        })
      );
      techSymbol.position.copy(position);
      techSymbol.position.y += 1.2;
      scene.add(techSymbol);

      // Add text label
      const textCanvas = document.createElement("canvas");
      textCanvas.width = 512;
      textCanvas.height = 256;
      const context = textCanvas.getContext("2d");
      if (context) {
        context.fillStyle = "#f97316";
        context.font = "Bold 36px Arial";
        context.textAlign = "center";
        context.fillText(label, textCanvas.width / 2, 100);

        const texture = new THREE.CanvasTexture(textCanvas);
        const spriteMaterial = new THREE.SpriteMaterial({
          map: texture,
          transparent: true,
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(position);
        sprite.position.y += 1.8;
        sprite.scale.set(4, 2, 1);
        scene.add(sprite);
      }
    };

    // Create all milestone markers
    milestones.forEach((milestone, index) => {
      const pos = curve.getPointAt(milestone.progress);
      createMilestoneMarker(pos, 2.5, milestone.label);
    });

    // Animation variables
    const position = new THREE.Vector3();
    const tangent = new THREE.Vector3();
    const lookAt = new THREE.Vector3();
    let progress = 0;
    let targetProgress = 0;
    let isAtMilestone = false;
    let currentMilestone = -1;
    let milestoneStart = 0;

    // Handle scroll events
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const rawProgress = scrollPosition / scrollHeight;

      // Check if we're currently in a milestone pause
      if (isAtMilestone) {
        const milestone = milestones[currentMilestone];
        const milestoneEnd = milestoneStart + milestone.duration;

        if (rawProgress >= milestoneEnd) {
          // Exit milestone
          isAtMilestone = false;
          targetProgress = rawProgress;
        } else {
          // Stay at milestone progress
          targetProgress = milestone.progress;
        }
      } else {
        // Check if we've reached a new milestone
        for (let i = 0; i < milestones.length; i++) {
          const milestone = milestones[i];
          if (
            rawProgress >= milestone.progress &&
            currentMilestone < i &&
            Math.abs(rawProgress - milestone.progress) < 0.02
          ) {
            currentMilestone = i;
            isAtMilestone = true;
            milestoneStart = rawProgress;
            targetProgress = milestone.progress;

            // Visual feedback when reaching milestone
            pointLight.color.setHex(0x00ff00);
            setTimeout(() => {
              pointLight.color.setHex(0xf97316);
            }, 500);
            break;
          }
        }

        // If not at milestone, follow scroll normally
        if (!isAtMilestone) {
          targetProgress = rawProgress;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth progress transition
      progress += (targetProgress - progress) * 0.1;

      // Update rollercoaster position
      position.copy(curve.getPointAt(progress));
      position.y += 0.3;
      train.position.copy(position);

      // Update orientation
      tangent.copy(curve.getTangentAt(progress));
      train.lookAt(lookAt.copy(position).sub(tangent));

      // Update point light position to follow train
      pointLight.position.copy(position);
      pointLight.position.y += 1;

      renderer.render(scene, camera);
    };

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onWindowResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div>
      {/* 3D Canvas */}
      <div
        ref={mountRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Scrollable content spacer */}
      <div style={{ height: "500vh" }} />
    </div>
  );
}
