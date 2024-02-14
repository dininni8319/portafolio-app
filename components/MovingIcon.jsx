import { useState, useEffect } from 'react';
import styles from './MovingIcon.module.css';
import Image from 'next/image';
import witchIcon from '../public/assets/witch.png';

const MovingIcon = () => {
  const [animationFlag, setAnimationFlag] = useState(true);
  const [position, setPosition] = useState(0);
  const [verticalPosition, setVerticalPosition] = useState(0);
  const [direction, setDirection] = useState(2); // 1 for forward, -1 for backward
  const startTime = Date.now();
  let iconSize = 35;

  useEffect(() => {
    const iconElement = document.getElementById("icon");
    const moveIcon = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      // Change direction when reaching the edges of the screen horizontally
      if (position >= window.innerWidth || position <= 0) {
        setPosition(0)
      } 

      if(verticalPosition >= window.innerHeigth ) {
        setDirection(direction => -direction);
      }

      // Update horizontal position based on direction
      setPosition(position => position + 1.5 * direction); // Adjust horizontal speed as needed

      // Move downward slowly
      setVerticalPosition(verticalPosition => verticalPosition + 0.02); // Adjust downward speed as needed

      if (iconElement) {
        iconElement.style.left = `${position}px`;
        iconElement.style.top = `${verticalPosition}px`;

        if (elapsedTime < 10000 && animationFlag) {``

          window.requestAnimationFrame(moveIcon);
        } else {
          iconElement.style.display = 'none';
        }
      }
    };

    const animationFrameId = requestAnimationFrame(moveIcon);

    setTimeout(() => {
      setAnimationFlag(false);
    }, 10000);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [animationFlag, position, verticalPosition]);

  return (
    <div id="icon" className={styles.icon}>
      <Image width={iconSize} heigth={iconSize} src={witchIcon} alt='/'/>
    </div>
  );
};

export default MovingIcon;
