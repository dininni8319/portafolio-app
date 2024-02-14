import { useState, useEffect } from 'react';
import styles from './MovingIcon.module.css';
import Image from 'next/image';
import witchIcon from '../public/assets/witch.png'

const MovingIcon = () => {
  const [animationFlag, setAnimationFlag] = useState(true);

  useEffect(() => {
    const iconElement = document.getElementById("icon");
    let angle = 0; // Initialize angle for circular motion
    let position = 0; // Initialize position for moving around the screen
    let height = 0; // Initialize height for moving around the screen
    let bottom = 0; // Initialize bottom for moving around the screen
    const startTime = Date.now();

    const moveIcon = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      // Calculate new position based on circular path
      const radius = 100; // Radius of the circle
      const centerX = window.innerWidth / 2; // X coordinate of the center
      const centerY = window.innerHeight / 2; // Y coordinate of the center
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      angle += 0.02; // Increment angle to make the icon move around the circle

      position += 2; // Move the icon horizontally
      height += Math.round(Math.random() * 5); // Move the icon randomly vertically
      bottom += Math.round(Math.random() * 5); // Move the icon randomly vertically
      
      if (iconElement) {
        iconElement.style.left = `${position}px`;
        iconElement.style.top = `${y + height}px`; // Add random vertical movement to circular motion
        iconElement.style.bottom = `${bottom}px`; // Add random vertical movement to circular motion

        if (elapsedTime < 30000 && animationFlag) {
          window.requestAnimationFrame(moveIcon);
        } else {
          iconElement.style.display = 'none';
        }
        
        if (position >= window.innerWidth) {
          position = 0;
        }
      }
    };

    const animationFrameId = requestAnimationFrame(moveIcon);

    setTimeout(() => {
      setAnimationFlag(false);
    }, 30000);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [animationFlag]);

  return (
      <div id="icon" className={styles.icon}>
        <Image className="w-20 h-20" src={witchIcon} alt='/'/>
      </div>
  );
};

export default MovingIcon;
