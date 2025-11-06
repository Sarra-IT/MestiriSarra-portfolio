import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  rotation: number;
  opacity: number;
  scale: number;
  drift: number;
  velocity: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    let petalId = 0;
    
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Create new petals on mouse move
      const newPetals: Petal[] = [];
      for (let i = 0; i < 2; i++) {
        newPetals.push({
          id: petalId++,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          rotation: Math.random() * 360,
          opacity: 1,
          scale: 0.5 + Math.random() * 0.5,
          drift: (Math.random() - 0.5) * 2,
          velocity: 1 + Math.random() * 2,
        });
      }
      
      setPetals(prev => [...prev, ...newPetals]);
    };
    
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPetals(prev => 
        prev
          .map(petal => ({
            ...petal,
            y: petal.y + petal.velocity,
            x: petal.x + Math.sin(petal.y * 0.02) * petal.drift,
            rotation: petal.rotation + 2,
            opacity: petal.opacity - 0.01,
          }))
          .filter(petal => petal.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 182, 193, 0.6)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.05s ease-out',
          zIndex: 9999,
          boxShadow: '0 0 10px rgba(255, 182, 193, 0.8)',
        }}
      />
      
      {/* Sakura petals */}
      {petals.map(petal => (
        <div
          key={petal.id}
          style={{
            position: 'fixed',
            top: petal.y,
            left: petal.x,
            width: '12px',
            height: '12px',
            pointerEvents: 'none',
            transform: `translate(-50%, -50%) rotate(${petal.rotation}deg) scale(${petal.scale})`,
            opacity: petal.opacity,
            zIndex: 9998,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C12 2 8 6 8 10C8 12 9.5 14 12 14C14.5 14 16 12 16 10C16 6 12 2 12 2Z"
              fill="#FFB6C1"
              opacity="0.9"
            />
            <path
              d="M12 10C12 10 16 6 20 6C22 6 24 7.5 24 10C24 12.5 22 14 20 14C16 14 12 10 12 10Z"
              fill="#FFC0CB"
              opacity="0.8"
            />
            <path
              d="M12 10C12 10 8 6 4 6C2 6 0 7.5 0 10C0 12.5 2 14 4 14C8 14 12 10 12 10Z"
              fill="#FFB6C1"
              opacity="0.8"
            />
            <path
              d="M12 10C12 10 16 14 20 18C22 20 22 22.5 20 24C17.5 26 15 24 14 22C10 18 12 10 12 10Z"
              fill="#FFC0CB"
              opacity="0.7"
            />
            <path
              d="M12 10C12 10 8 14 4 18C2 20 2 22.5 4 24C6.5 26 9 24 10 22C14 18 12 10 12 10Z"
              fill="#FFB6C1"
              opacity="0.7"
            />
          </svg>
        </div>
      ))}
    </>
  );
};

export default CustomCursor;