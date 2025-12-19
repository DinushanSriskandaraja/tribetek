"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let current = 0;
    let target = 0;
    const ease = 0.08;

    const onScroll = () => {
      target = window.scrollY;
    };

    const animate = () => {
      current += (target - current) * ease;

      // smooth transform
      el.style.transform = `translateY(${-current}px)`;

      // 🔥 keep body height matched exactly
      document.body.style.height = `${el.offsetHeight}px`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll);
    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.style.height = "";
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
}
