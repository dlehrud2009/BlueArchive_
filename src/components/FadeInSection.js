import React from 'react';
import useInView from '../hooks/useInView';

export default function FadeInSection({ children }) {
  const [ref, inView] = useInView(0.2);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {children}
    </div>
  );
}