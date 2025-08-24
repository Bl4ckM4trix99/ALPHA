import { useEffect, useRef } from 'react';

const ManagementBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let hexagons: { x: number; y: number; size: number; opacity: number }[] = [];
    const hexagonCount = 30;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawHexagon = (x: number, y: number, size: number, opacity: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const nextX = x + size * Math.cos(angle);
        const nextY = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(nextX, nextY);
        else ctx.lineTo(nextX, nextY);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(249, 115, 22, ${opacity * 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const createHexagons = () => {
      hexagons = [];
      for (let i = 0; i < hexagonCount; i++) {
        hexagons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 30 + 20,
          opacity: Math.random()
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      hexagons.forEach((hex, index) => {
        hex.y -= 0.2;
        hex.opacity = (Math.sin(Date.now() / 1000 + index) + 1) / 2;

        if (hex.y + hex.size < 0) {
          hex.y = canvas.height + hex.size;
          hex.x = Math.random() * canvas.width;
        }

        drawHexagon(hex.x, hex.y, hex.size, hex.opacity);

        // Draw connecting lines to nearby hexagons
        hexagons.forEach((otherHex) => {
          const dx = hex.x - otherHex.x;
          const dy = hex.y - otherHex.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(hex.x, hex.y);
            ctx.lineTo(otherHex.x, otherHex.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.1 * (1 - distance / 150) * hex.opacity * otherHex.opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', () => {
      resizeCanvas();
      createHexagons();
    });

    resizeCanvas();
    createHexagons();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ManagementBackground;
