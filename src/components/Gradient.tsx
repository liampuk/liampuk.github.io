import { useEffect, useRef, useState } from 'react';
import { usePortrait, useWindowSize } from '../hooks/general';
import styles from './gradient.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Gradient = () => {
  const mobile = usePortrait();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [gradientShift, setGradientShift] = useState(0);
  const prevScrollY = useRef(window.scrollY);
  const gradientRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gradientRef.current) return;

    const tl = gsap.timeline();

    tl.to(gradientRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power1.in',
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (mobile) {
        return;
      }

      prevScrollY.current = window.scrollY;

      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight;
      const clientHeight = doc.clientHeight;

      const scrollable = scrollHeight - clientHeight;
      const progress = Math.min(scrollable > 0 ? scrollTop / scrollable : 0, 1);

      // console.log("@@ progress", progress)

      setGradientShift(-(progress * windowHeight * 3));
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobile, windowHeight]);

  // Update container height on mount and resize
  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  return (
    <div
      ref={gradientRef}
      className={styles.gradient}
      style={{
        height: mobile ? windowHeight : windowHeight * 4,
        marginTop: gradientShift,
      }}
    ></div>
  );
};
