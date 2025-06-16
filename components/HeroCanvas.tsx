// Inspired by https://github.com/bscottnz/portfolio-site/
"use client";
import { useEffect, useRef } from "react";

const GOLD = "rgb(173, 151, 79)";
const WHITE = "rgb(255, 255, 255)";

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;
  create: () => void;
  animate: () => void;
  line: () => void;
};

type DotsType = {
  nb: number;
  distance: number;
  d_radius: number;
  array: Dot[];
};

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    const colorDot = [GOLD, GOLD, GOLD, GOLD, WHITE];
    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    if (ctx) {
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = GOLD;
    }

    let mousePosition = {
      x: (30 * canvas.width) / 100,
      y: (30 * canvas.height) / 100,
    };

    const windowSize = window.innerWidth;
    let dots: DotsType;

    if (windowSize > 1600) {
      dots = { nb: 600, distance: 70, d_radius: 300, array: [] };
    } else if (windowSize > 1300) {
      dots = { nb: 575, distance: 60, d_radius: 280, array: [] };
    } else if (windowSize > 1100) {
      dots = { nb: 500, distance: 55, d_radius: 250, array: [] };
    } else if (windowSize > 800) {
      dots = { nb: 300, distance: 0, d_radius: 0, array: [] };
    } else if (windowSize > 600) {
      dots = { nb: 200, distance: 0, d_radius: 0, array: [] };
    } else {
      dots = { nb: 100, distance: 0, d_radius: 0, array: [] };
    }

    function Dot(this: Dot) {
      this.x = Math.random() * (canvas ? canvas.width : 0);
      this.y = Math.random() * (canvas ? canvas.height : 0);
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
        const dotDistance = Math.sqrt(
          (this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y) ** 2
        );
        const distanceRatio = dotDistance / (windowSize / 1.7);
        ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;
        ctx.fill();
      },
      animate: function () {
        for (let i = 1; i < dots.nb; i++) {
          const dot = dots.array[i];
          if (dot.y < 0 || dot.y > canvas.height) {
            dot.vx = dot.vx;
            dot.vy = -dot.vy;
          } else if (dot.x < 0 || dot.x > canvas.width) {
            dot.vx = -dot.vx;
            dot.vy = dot.vy;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      },
      line: function () {
        if (!ctx) return;
        for (let i = 0; i < dots.nb; i++) {
          for (let j = 0; j < dots.nb; j++) {
            const i_dot = dots.array[i];
            const j_dot = dots.array[j];
            if (
              i_dot.x - j_dot.x < dots.distance &&
              i_dot.y - j_dot.y < dots.distance &&
              i_dot.x - j_dot.x > -dots.distance &&
              i_dot.y - j_dot.y > -dots.distance
            ) {
              if (
                i_dot.x - mousePosition.x < dots.d_radius &&
                i_dot.y - mousePosition.y < dots.d_radius &&
                i_dot.x - mousePosition.x > -dots.d_radius &&
                i_dot.y - mousePosition.y > -dots.d_radius
              ) {
                ctx.beginPath();
                ctx.moveTo(i_dot.x, i_dot.y);
                ctx.lineTo(j_dot.x, j_dot.y);
                const dotDistance = Math.sqrt(
                  (i_dot.x - mousePosition.x) ** 2 +
                    (i_dot.y - mousePosition.y) ** 2
                );
                let distanceRatio = dotDistance / dots.d_radius;
                distanceRatio -= 0.3;
                if (distanceRatio < 0) {
                  distanceRatio = 0;
                }
                ctx.strokeStyle = `rgb(173, 151, 79, ${1 - distanceRatio})`;
                ctx.stroke();
                ctx.closePath();
              }
            }
          }
        }
      },
    };

    function createDots() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(new (Dot as any)() as Dot);
        const dot = dots.array[i];
        dot.create();
      }
      dots.array[0].radius = 1.5;
      dots.array[0].colour = GOLD;
      dots.array[0].line();
      dots.array[0].animate();
    }

    const draw = setInterval(createDots, 1000 / 30);

    window.onmousemove = function (e) {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
      try {
        dots.array[0].x = e.pageX;
        dots.array[0].y = e.pageY;
      } catch {
        // handle error
      }
    };

    window.onresize = function () {
      clearInterval(draw);
      canvas.width = document.body.scrollWidth;
      canvas.height = window.innerHeight;
      createDots();
    };

    return () => {
      clearInterval(draw);
      window.onmousemove = null;
      window.onresize = null;
    };
  }, []);

  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full"></canvas>
    </div>
  );
}

export default HeroCanvas;
