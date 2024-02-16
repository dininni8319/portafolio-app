import { useState, useEffect } from 'react';
import styles from './MovingIcon.module.css';
import Image from 'next/image';
import rocketIcon from '../public/assets/rocket.png';

const MovingIcon = () => {
  const [animationFlag, setAnimationFlag] = useState(true);
  const [position, setPosition] = useState(0);
  const [verticalPosition, setVerticalPosition] = useState(0);
  const [direction, setDirection] = useState(-1); // Set initial direction to move upwards
  const startTime = Date.now();
  let iconSize = 35;

  useEffect(() => {
    const iconElement = document.getElementById("icon");
    const windowHeight = window.innerHeight;
    setVerticalPosition(windowHeight); // Set initial vertical position to bottom of the screen

    const moveIcon = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      // Change direction when reaching the top of the screen
      if (verticalPosition <= 0) {
        setDirection(1); // Change direction to move downwards
      }

      // Update vertical position based on direction
      setVerticalPosition(verticalPosition => verticalPosition - 1.5 * direction); // Adjust vertical speed as needed

      if (iconElement) {
        iconElement.style.left = `${position}px`;
        iconElement.style.top = `${verticalPosition}px`;

        if (elapsedTime < 10000 && animationFlag) {
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
      {/* <Image width={iconSize} height={iconSize} src={rocketIcon} alt='/'/> */}
    </div>
  );
};

export default MovingIcon;


