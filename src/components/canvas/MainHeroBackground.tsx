'use client';

import { useEffect, useRef } from 'react';

const MainHeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      life: number;
      maxLife: number;
    }> = [];

    const createParticle = (x: number, y: number) => {
      const radius = Math.random() * 2 + 1;
      const speedX = (Math.random() - 0.5) * 2;
      const speedY = (Math.random() - 0.5) * 2;
      const maxLife = Math.random() * 100 + 100;
      
      return {
        x,
        y,
        radius,
        color: `rgba(249, 115, 22, ${Math.random() * 0.5})`, // Orange with varying opacity
        speedX,
        speedY,
        life: 0,
        maxLife
      };
    };

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 10000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(
          createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }
    };

    const drawParticles = () => {
      particles.forEach((particle, index) => {
        // Update
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life++;

        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particles.splice(index, 1);
          particles.push(
            createParticle(
              Math.random() * canvas.width,
              Math.random() * canvas.height
            )
          );
          return;
        }

        // Draw
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Connect particles
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 17, 32, 0.1)'; // Dark blue background with trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
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

export default MainHeroBackground;
