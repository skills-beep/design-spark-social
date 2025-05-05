
import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/use-theme';

const StarryBackground = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create stars for dark mode
    const createStars = (count: number) => {
      const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];
      
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05
        });
      }
      
      return stars;
    };
    
    // Create heat waves for light mode
    const createHeatWaves = (count: number) => {
      const waves: { x: number; y: number; width: number; height: number; speed: number; opacity: number }[] = [];
      
      for (let i = 0; i < count; i++) {
        waves.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          width: Math.random() * 100 + 50,
          height: Math.random() * 10 + 5,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
      
      return waves;
    };
    
    // Animate stars (dark mode)
    const animateStars = (stars: { x: number; y: number; radius: number; opacity: number; speed: number }[]) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Move star
        star.y += star.speed;
        
        // Reset star position when it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      if (theme === 'dark') {
        requestAnimationFrame(() => animateStars(stars));
      }
    };
    
    // Animate heat waves (light mode)
    const animateHeatWaves = (waves: { x: number; y: number; width: number; height: number; speed: number; opacity: number }[]) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient for heat waves
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, 'rgba(255, 196, 161, 0.4)'); // Soft orange
      gradient.addColorStop(0.5, 'rgba(255, 247, 205, 0.4)'); // Soft yellow
      gradient.addColorStop(1, 'rgba(255, 196, 161, 0.4)'); // Soft orange
      
      // Draw heat waves
      waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(wave.x, wave.y);
        ctx.bezierCurveTo(
          wave.x + wave.width / 4, wave.y - wave.height,
          wave.x + wave.width * 3 / 4, wave.y - wave.height,
          wave.x + wave.width, wave.y
        );
        ctx.lineWidth = wave.height / 2;
        ctx.strokeStyle = `rgba(255, 196, 161, ${wave.opacity})`;
        ctx.stroke();
        
        // Move wave
        wave.x += wave.speed;
        
        // Reset wave position when it goes off screen
        if (wave.x > canvas.width) {
          wave.x = -wave.width;
          wave.y = Math.random() * canvas.height;
        }
      });
      
      if (theme === 'light') {
        requestAnimationFrame(() => animateHeatWaves(waves));
      }
    };
    
    // Initialize
    resizeCanvas();
    
    if (theme === 'dark') {
      const stars = createStars(150);
      animateStars(stars);
    } else {
      const waves = createHeatWaves(20);
      animateHeatWaves(waves);
    }
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
    
  }, [theme]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] opacity-70 pointer-events-none"
    />
  );
};

export default StarryBackground;
