import { useEffect, useRef, useState } from 'react';
import { usePortrait, useWindowSize } from '../hooks/general';
import styles from './gradient.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GRADIENT_STOPS = [
  { stop: 0, rgb: [255, 249, 240] as const },
  { stop: 0.6, rgb: [255, 210, 167] as const },
  { stop: 0.9, rgb: [255, 158, 72] as const },
  { stop: 1, rgb: [213, 120, 70] as const },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const getTopGradientRgb = (progress: number) => {
  const t = clamp(progress * 0.75, 0, 1);
  const upperIndex = GRADIENT_STOPS.findIndex(({ stop }) => stop >= t);

  if (upperIndex <= 0) {
    return GRADIENT_STOPS[0].rgb.join(', ');
  }

  if (upperIndex === -1) {
    return GRADIENT_STOPS[GRADIENT_STOPS.length - 1].rgb.join(', ');
  }

  const lower = GRADIENT_STOPS[upperIndex - 1];
  const upper = GRADIENT_STOPS[upperIndex];
  const localT = (t - lower.stop) / (upper.stop - lower.stop);

  const r = Math.round(lower.rgb[0] + (upper.rgb[0] - lower.rgb[0]) * localT);
  const g = Math.round(lower.rgb[1] + (upper.rgb[1] - lower.rgb[1]) * localT);
  const b = Math.round(lower.rgb[2] + (upper.rgb[2] - lower.rgb[2]) * localT);

  return `${r}, ${g}, ${b}`;
};

export const Gradient = () => {
  const mobile = usePortrait();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [gradientShift, setGradientShift] = useState(0);
  const prevScrollY = useRef(window.scrollY);
  const gradientRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gradientRef.current) return;

    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--gradient-overlay-opacity', '0');
    const tl = gsap.timeline();
    const fadeState = { opacity: 0 };

    tl.to(gradientRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power1.in',
    }).to(
      fadeState,
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.in',
        onUpdate: () => {
          rootStyle.setProperty(
            '--gradient-overlay-opacity',
            `${fadeState.opacity}`
          );
        },
      },
      0
    );

    return () => {
      rootStyle.removeProperty('--gradient-overlay-opacity');
    };
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

      document.documentElement.style.setProperty(
        '--page-top-rgb',
        getTopGradientRgb(progress)
      );
      setGradientShift(-(progress * windowHeight * 3));
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.removeProperty('--page-top-rgb');
    };
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
