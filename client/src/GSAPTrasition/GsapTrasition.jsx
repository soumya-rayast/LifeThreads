import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';

const GsapTransition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const animation = gsap.fromTo(
      '.page',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );

    return () => animation.kill();
  }, [location]);

  return <div className="page">{children}</div>;
};

export default GsapTransition;
