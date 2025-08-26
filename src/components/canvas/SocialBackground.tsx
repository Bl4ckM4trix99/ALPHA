'use client';

import { useRef, useEffect } from 'react';

const SocialBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Setup canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Node class for social network visualization
    class Node {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      radius: number;
      color: string;
      connections: Node[];
      speed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
        this.radius = Math.random() * 2 + 1;
        this.color = `rgba(249, 115, 22, ${Math.random() * 0.5 + 0.2})`; // Orange theme
        this.connections = [];
        this.speed = Math.random() * 0.02 + 0.01;
      }

      update() {
        // Smooth movement towards target
        this.x += (this.targetX - this.x) * this.speed;
        this.y += (this.targetY - this.y) * this.speed;

        // Update target position with subtle movement
        this.targetX += (Math.random() - 0.5) * 0.5;
        this.targetY += (Math.random() - 0.5) * 0.5;

        // Keep within bounds
        if (!canvas) return;
        if (this.targetX < 0 || this.targetX > canvas.width) this.targetX = canvas.width / 2;
        if (this.targetY < 0 || this.targetY > canvas.height) this.targetY = canvas.height / 2;
      }

      draw() {
        if (!ctx) return;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Draw connections
        this.connections.forEach(node => {
          const distance = Math.hypot(this.x - node.x, this.y - node.y);
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(node.x, node.y);
            
            // Gradient line
            const gradient = ctx.createLinearGradient(this.x, this.y, node.x, node.y);
            gradient.addColorStop(0, `rgba(249, 115, 22, ${0.2 * (1 - distance / maxDistance)})`);
            gradient.addColorStop(1, `rgba(249, 115, 22, ${0.1 * (1 - distance / maxDistance)})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = 50;

    for (let i = 0; i < nodeCount; i++) {
      const node = new Node(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );
      nodes.push(node);
    }

    // Create connections
    nodes.forEach(node => {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < connectionCount; i++) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        if (randomNode !== node && !node.connections.includes(randomNode)) {
          node.connections.push(randomNode);
        }
      }
    });

    // Draw glowing background grid
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.05)';
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      drawGrid();
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      // Create glow effect
      ctx.fillStyle = 'rgba(249, 115, 22, 0.03)';
      nodes.forEach(node => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, 50
        );
        gradient.addColorStop(0, 'rgba(249, 115, 22, 0.05)');
        gradient.addColorStop(1, 'rgba(249, 115, 22, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, 50, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
    />
  );
};

export default SocialBackground;
