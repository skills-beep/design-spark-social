
import { useEffect, useState } from 'react';

const SunEffect = () => {
  const [heatWaves, setHeatWaves] = useState<{ id: number; delay: number; top: string; width: string }[]>([]);

  // Create heat waves on component mount
  useEffect(() => {
    const waves = [];
    for (let i = 0; i < 5; i++) {
      waves.push({
        id: i,
        delay: Math.random() * 5,
        top: `${20 + i * 15}%`,
        width: `${50 + Math.random() * 30}%`
      });
    }
    setHeatWaves(waves);
  }, []);

  return (
    <div className="sun-container animate-fade-in">
      <div className="sun"></div>
      
      {/* Heat waves animation */}
      {heatWaves.map((wave) => (
        <div
          key={wave.id}
          className="heat-wave"
          style={{
            top: wave.top,
            width: wave.width,
            animationDelay: `${wave.delay}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default SunEffect;
