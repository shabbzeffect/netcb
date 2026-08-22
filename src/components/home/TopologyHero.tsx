"use client";

import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
  active: boolean;
}

interface Connection {
  a: number;
  b: number;
  strength: number;
  active: boolean;
}

export function TopologyHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      setDimensions({ w: rect.width, h: rect.height });
    };

    const initNodes = (w: number, h: number) => {
      const count = Math.min(Math.floor((w * h) / 18000), 60);
      nodesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        active: Math.random() > 0.7,
      }));

      connectionsRef.current = [];
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const dx = nodesRef.current[i].x - nodesRef.current[j].x;
          const dy = nodesRef.current[i].y - nodesRef.current[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            connectionsRef.current.push({
              a: i,
              b: j,
              strength: 1 - dist / 180,
              active: Math.random() > 0.6,
            });
          }
        }
      }
    };

    const draw = () => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      ctx.clearRect(0, 0, w, h);

      if (!prefersReduced) {
        nodesRef.current.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > w) node.vx *= -1;
          if (node.y < 0 || node.y > h) node.vy *= -1;
          node.x = Math.max(0, Math.min(w, node.x));
          node.y = Math.max(0, Math.min(h, node.y));
          node.pulse += node.pulseSpeed;
        });
      }

      // Draw connections
      connectionsRef.current.forEach((conn) => {
        const a = nodesRef.current[conn.a];
        const b = nodesRef.current[conn.b];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const alpha = (1 - dist / 200) * 0.15 * conn.strength;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = conn.active
            ? `rgba(0, 229, 255, ${alpha})`
            : `rgba(255, 255, 255, ${alpha * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      // Draw nodes
      nodesRef.current.forEach((node) => {
        const pulseScale = 1 + Math.sin(node.pulse) * 0.3;
        const r = node.radius * pulseScale;

        // Glow
        if (node.active) {
          const gradient = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            r * 4
          );
          gradient.addColorStop(0, "rgba(0, 229, 255, 0.15)");
          gradient.addColorStop(1, "rgba(0, 229, 255, 0)");
          ctx.beginPath();
          ctx.arc(node.x, node.y, r * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = node.active
          ? "rgba(0, 229, 255, 0.8)"
          : "rgba(255, 255, 255, 0.3)";
        ctx.fill();
      });

      // Mouse interaction glow
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx > 0 && my > 0) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 150);
        gradient.addColorStop(0, "rgba(0, 229, 255, 0.05)");
        gradient.addColorStop(1, "rgba(0, 229, 255, 0)");
        ctx.beginPath();
        ctx.arc(mx, my, 150, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    resize();
    initNodes(dimensions.w || 1200, dimensions.h || 600);

    if (!prefersReduced) {
      window.addEventListener("resize", () => {
        resize();
        initNodes(
          canvas.getBoundingClientRect().width,
          canvas.getBoundingClientRect().height
        );
      });
      canvas.addEventListener("mousemove", handleMouseMove);
      draw();
    } else {
      // Draw static frame
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      initNodes(w, h);
      draw();
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
