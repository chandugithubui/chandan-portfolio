import React, { useEffect, useRef } from 'react';

const Canvas3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse coordinates for 3D perspective rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseX = (clientX / width - 0.5) * 2;
      mouseY = (clientY / height - 0.5) * 2;
      targetRotY = mouseX * 0.45;
      targetRotX = -mouseY * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate 3D Particle Cloud
    const particleCount = window.innerWidth < 768 ? 35 : 65;
    const particles = [];
    const sphereRadius = Math.min(width, height) * 0.38;

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on 3D sphere surface + volume
      const phi = Math.acos(1 - (2 * (i + 0.5)) / particleCount);
      const theta = Math.PI * (1 + 5 ** 0.5) * (i + 0.5);
      const r = sphereRadius * (0.6 + Math.random() * 0.4);

      particles.push({
        baseX: r * Math.sin(phi) * Math.cos(theta),
        baseY: r * Math.sin(phi) * Math.sin(theta),
        baseZ: r * Math.cos(phi),
        x: 0,
        y: 0,
        z: 0,
        size: Math.random() * 2.2 + 1.2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    let tick = 0;
    const focalLength = 400;

    const render = () => {
      tick += 0.008;

      // Smooth camera interpolation
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      const autoSpin = tick * 0.35;
      const totalRotY = currentRotY + autoSpin;
      const totalRotX = currentRotX + Math.sin(tick * 0.5) * 0.1;

      ctx.clearRect(0, 0, width, height);

      const cosY = Math.cos(totalRotY);
      const sinY = Math.sin(totalRotY);
      const cosX = Math.cos(totalRotX);
      const sinX = Math.sin(totalRotX);

      const projected = [];

      // Project 3D to 2D
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Rotation around Y
        let x1 = p.baseX * cosY - p.baseZ * sinY;
        let z1 = p.baseZ * cosY + p.baseX * sinY;

        // Rotation around X
        let y2 = p.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.baseY * sinX;

        // Perspective projection
        const zOffset = z2 + focalLength;
        if (zOffset <= 10) continue;

        const scale = focalLength / zOffset;
        const projX = x1 * scale + width * 0.5;
        const projY = y2 * scale + height * 0.5;

        const alpha = Math.max(0.08, Math.min(0.9, (z2 + sphereRadius) / (sphereRadius * 2)));

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          scale,
          alpha,
          size: p.size * scale,
          pulse: Math.sin(tick * 3 + p.pulseOffset) * 0.3 + 0.7
        });
      }

      // Draw subtle connective geometry links
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 7500) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / 86) * Math.min(projected[i].alpha, projected[j].alpha) * 0.18;
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw 3D nodes with depth glow
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const radius = Math.max(0.8, p.size * p.pulse);

        // Ambient glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3.5);
        glow.addColorStop(0, `rgba(56, 189, 248, ${p.alpha * 0.45})`);
        glow.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Node center
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.75})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block'
      }}
      aria-hidden="true"
    />
  );
};

export default Canvas3D;

