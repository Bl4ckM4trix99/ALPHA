import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CapabilitiesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const squares: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    const squareCount = 50;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize squares
    for (let i = 0; i < squareCount; i++) {
      squares.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.3
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      squares.forEach((square) => {
        // Move square upwards
        square.y -= square.speed;

        // Reset position if square goes off screen
        if (square.y + square.size < 0) {
          square.y = canvas.height + square.size;
          square.x = Math.random() * canvas.width;
        }

        // Draw square with gradient
        ctx.beginPath();
        ctx.strokeStyle = `rgba(249, 115, 22, ${square.opacity})`; // Orange color
        ctx.lineWidth = 2;
        ctx.strokeRect(square.x, square.y, square.size, square.size);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default CapabilitiesBackground;
