import { useEffect, useRef } from 'react';

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
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
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
    <div ref={targetRef} className="transition-opacity duration-1000 opacity-0">
      {children}
    </div>
  );
};

export default FadeInOnVisible;
