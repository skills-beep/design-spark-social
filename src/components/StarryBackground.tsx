
import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/use-theme';

const StarryBackground = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (theme !== 'dark') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create stars
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
    
    // Animate stars
    const animate = (stars: { x: number; y: number; radius: number; opacity: number; speed: number }[]) => {
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
        requestAnimationFrame(() => animate(stars));
      }
    };
    
    // Initialize
    resizeCanvas();
    const stars = createStars(150); // Adjust number of stars
    animate(stars);
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
    
  }, [theme]);
  
  if (theme !== 'dark') return null;
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] opacity-70 pointer-events-none"
    />
  );
};

export default StarryBackground;
