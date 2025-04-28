import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(current); // remove observador para não re-observar
        }
      },
      { threshold: 0.1, ...options }
    );

    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isVisible];
};