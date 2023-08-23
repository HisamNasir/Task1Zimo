import { useEffect, useRef } from 'react';
import styles from './FadeInOnVisible.module.css'; // Import your CSS module

const FadeInOnVisible = ({ children }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // Intersection threshold of 80%
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.fadeIn); // Use styles.fadeIn from your CSS module
        } else {
          entry.target.classList.remove(styles.fadeIn);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div ref={targetRef} className={`transition-opacity duration-1000 ${styles.fadeIn}`}>
      {children}
    </div>
  );
};

export default FadeInOnVisible;