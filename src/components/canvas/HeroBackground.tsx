import { useEffect, useRef } from 'react';

const HeroBackground = () => {
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
      dx: number;
      dy: number;
      life: number;
      maxLife: number;
      color: string;
    }> = [];

    const createParticle = (x: number, y: number) => ({
      x,
      y,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      life: 0,
      maxLife: Math.random() * 100 + 100,
      color: `rgba(249, 115, 22, ${Math.random() * 0.5 + 0.2})`
    });

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    const generateParticles = () => {
      if (particles.length < 100) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(createParticle(x, y));
      }
    };

    const drawParticle = (particle: typeof particles[0]) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Draw connecting lines
      particles.forEach(otherParticle => {
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
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 17, 32, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      generateParticles();

      particles = particles.filter(particle => {
        particle.life++;
        if (particle.life >= particle.maxLife) return false;

        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        drawParticle(particle);
        return true;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    // Matrix rain effect
    let fontSize = 14;
    let columns = canvas.width / fontSize;
    let drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(11, 17, 32, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(249, 115, 22, 0.2)';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 33);
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    let matrixInterval = setInterval(drawMatrix, 60);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(matrixInterval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default HeroBackground;
