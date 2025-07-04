'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function AnimatedText() {
  const { scrollYProgress } = useScroll(); // Track scroll progress

  // Dynamically adjust position based on scroll for each line
  const positions = [
    useTransform(scrollYProgress, [0, 0.15], ['-100%', '0%']), // Line 1
    useTransform(scrollYProgress, [0.08, 0.23], ['100%', '0%']), // Line 2
    useTransform(scrollYProgress, [0.16, 0.3], ['-100%', '0%']), // Line 3
  ];

  const textLines = [
    "Transform your ideas.",
    "Thrive in your industry.",
    "Triumph over challenges.",
  ];

  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  const handleMouseEnter = (word: string) => {
    setHoveredWord(word);
  };

  const handleMouseLeave = () => {
    setHoveredWord(null);
  };

  // Client-side cursor logic with useEffect
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
    const cursor = cursorRef.current;

    const mouseMoveHandler = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursorPosition = () => {
      cursorX += (mouseX - cursorX) * 0.1; // Smoother movement
      cursorY += (mouseY - cursorY) * 0.1;

      if (cursor) {
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
      }

      requestAnimationFrame(updateCursorPosition); // Keep updating the position
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    updateCursorPosition();

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <section className="min-h-[110vh] overflow-x-hidden flex items-center justify-center relative">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        id="custom-cursor"
        className="absolute z-50 w-16 h-16 rounded-full bg-gray-400 opacity-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      ></div>

      <div className="text-center space-y-6 relative z-10">
        {textLines.map((line, index) => (
          <motion.h2
            key={index}
            style={{
              x: positions[index], // Apply dynamic position
            }}
            className="text-3xl sm:text-7xl font-bold text-gray-300"
          >
            {line.split(' ').map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className={`inline-block mx-5 transition-colors duration-300 ${
                  hoveredWord === word ? 'text-orange-500' : 'text-gray-300'
                }`}
                onMouseEnter={() => handleMouseEnter(word)}
                onMouseLeave={handleMouseLeave}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        ))}
      </div>

      <style jsx>{`
        #custom-cursor {
          position: fixed;
          pointer-events: none;
          transition: transform 0.1s ease-out; /* Smooth cursor movement */
        }
        body {
          cursor: none;
        }
      `}</style>
    </section>
  );
}
