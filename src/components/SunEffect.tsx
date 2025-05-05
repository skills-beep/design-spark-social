
import { useEffect, useRef } from 'react';

const SunEffect = () => {
  const sunRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const sun = sunRef.current;
      if (!sun) return;
      
      // Make the sun move slightly with mouse movement for interactive effect
      const moveX = (e.clientX - window.innerWidth / 2) / 50;
      const moveY = (e.clientY - window.innerHeight / 2) / 50;
      
      sun.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="sun-container">
      <div ref={sunRef} className="sun"></div>
    </div>
  );
};

export default SunEffect;
