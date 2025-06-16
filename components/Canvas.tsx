"use client"
import { useEffect, useRef } from "react";

const GOLD = "rgb(173, 151, 79)";
const WHITE = "rgb(255, 255, 255)"

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;
  create: () => void;
  animate: () => void;
};

type DotsType = {
  nb: number;
  distance: number;
  d_radius: number;
  array: Dot[];
};

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    const colorDot = [
      GOLD,
      GOLD,
      GOLD,
      WHITE,
    ];

    let displayWidth = 0;
    let displayHeight = 0;

    const updateCanvasSize = () => {
      if (canvas) {
        const dpr = window.devicePixelRatio || 1;
        displayWidth = document.body.scrollWidth;
        displayHeight = canvas.parentElement?.offsetHeight || window.innerHeight;
        
        // Set the actual canvas size in memory (scaled up for high DPI)
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
        
        // Scale the canvas back down using CSS
        canvas.style.width = displayWidth + 'px';
        canvas.style.height = displayHeight + 'px';
        canvas.style.display = 'block';
        
        // Scale the drawing context so everything draws at the correct size
        if (ctx) {
          ctx.scale(dpr, dpr);
        }
      }
    };

    updateCanvasSize();
    
    if (ctx) {
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = GOLD;
    }

    let mousePosition = {
      x: (30 * displayWidth) / 100,
      y: (30 * displayHeight) / 100,
    };

    const windowSize = window.innerWidth;
    let dots: DotsType;

    if (windowSize > 1600) {
      dots = { nb: 600, distance: 0, d_radius: 0, array: [] };
    } else if (windowSize > 1300) {
      dots = { nb: 575, distance: 0, d_radius: 0, array: [] };
    } else if (windowSize > 1100) {
      dots = { nb: 300, distance: 0, d_radius: 0, array: [] };
    } else if (windowSize > 800) {
      dots = { nb: 200, distance: 0, d_radius: 0, array: [] };
      if (ctx) ctx.globalAlpha = 0;
    } else if (windowSize > 600) {
      dots = { nb: 150, distance: 0, d_radius: 0, array: [] };
      if (ctx) ctx.globalAlpha = 0;
    } else {
      dots = { nb: 100, distance: 0, d_radius: 0, array: [] };
      if (ctx) ctx.globalAlpha = 0;
    }

    function Dot(this: Dot) {
      this.x = Math.random() * displayWidth;
      this.y = Math.random() * displayHeight;
      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();
      this.radius = Math.random() * 1.5;
      this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
    }

    Dot.prototype = {
      create: function () {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        const top = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
        const dotDistance = Math.sqrt((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y + top) ** 2);
        const distanceRatio = dotDistance / (windowSize / 2);

        ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;
        ctx.fill();
      },
      animate: function () {
        for (let i = 1; i < dots.nb; i++) {
          const dot = dots.array[i];
          if (dot.y < 0 || dot.y > displayHeight) {
            dot.vx = dot.vx;
            dot.vy = -dot.vy;
          } else if (dot.x < 0 || dot.x > displayWidth) {
            dot.vx = -dot.vx;
            dot.vy = dot.vy;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      },
    };

    function createDots() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, displayWidth, displayHeight);
      }
      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(new (Dot as any)() as Dot);
        const dot = dots.array[i];
        dot.create();
      }

      dots.array[0].radius = 1.5;
      dots.array[0].colour = GOLD;
      dots.array[0].animate();
    }

    const draw = setInterval(createDots, 1000 / 30);

    window.onscroll = function () {
      mousePosition.x = window.innerWidth / 2;
      mousePosition.y = window.innerHeight / 2;
      const top = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
      mousePosition.y += top;
    };

    window.onresize = function () {
      clearInterval(draw);
      updateCanvasSize();
      createDots();
    };

    return () => {
      clearInterval(draw);
      window.onscroll = null;
      window.onresize = null;
    };
  }, []);

  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
}

export default Canvas;
