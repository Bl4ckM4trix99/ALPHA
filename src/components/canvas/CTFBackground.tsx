'use client';

import { useEffect, useRef } from 'react';

const CTFBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const gridSize = 30;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawHexagon = (x: number, y: number, size: number, intensity: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const nextX = x + size * Math.cos(angle);
        const nextY = y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(nextX, nextY);
        } else {
          ctx.lineTo(nextX, nextY);
        }
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(249, 115, 22, ${intensity * 0.2})`;
      ctx.stroke();
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 17, 32, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const columns = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);

      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize + (j % 2) * gridSize / 2;
          const y = j * (gridSize * 0.866);
          
          const distanceToCenter = Math.sqrt(
            Math.pow((x - canvas.width / 2) / canvas.width, 2) +
            Math.pow((y - canvas.height / 2) / canvas.height, 2)
          );
          
          const intensity = Math.sin(time * 0.001 + distanceToCenter * 5) * 0.5 + 0.5;
          drawHexagon(x, y, gridSize / 2, intensity);
        }
      }

      time++;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none mix-blend-screen"
    />
  );
};

export default CTFBackground;
