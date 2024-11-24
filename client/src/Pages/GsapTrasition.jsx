import React, { useEffect, useRef } from 'react';
import {useLocation } from "react-router-dom";
import gsap from "gsap";

const GsapTransition = ({ children }) => {
  const nodeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const element = nodeRef.current;
    
    // Fade-out animation when leaving a page
    const fadeOut = gsap.to(element, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // Fade-in animation when entering a page
        gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
      }
    });

    // Cleanup the animation on component unmount
    return () => fadeOut.kill();
  }, [location]);

  return (
    <div ref={nodeRef} className="page-transition-wrapper">
      {children}
    </div>
  );
};

export default GsapTransition;
