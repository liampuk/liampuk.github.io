import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import styles from './window.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Window = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const branchRef = useRef<HTMLImageElement>(null);
  const branchRef2 = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!boxRef.current) return;

    const tl = gsap.timeline();

    tl.to(boxRef.current, {
      opacity: 0.1,
      duration: 1,
      ease: 'power1.in',
    });

    tl.to(boxRef.current, {
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      ease: 'power1.in',
      translateX: -100,
      scaleX: 1.5,
      scaleY: 1.2,
      skewY: -10,
      filter: 'blur(4px)',
    });

    tl.fromTo(
      branchRef2.current,
      {
        filter: 'blur(6px) grayscale(1) contrast(2)',
      },
      {
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
        ease: 'power1.in',
        filter: 'blur(12px) grayscale(1) contrast(2)',
        translateX: -100,
        translateY: 30,
      }
    );

    tl.fromTo(
      branchRef.current,
      {
        filter: 'blur(4px) grayscale(1) contrast(2)',
      },
      {
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
        ease: 'power1.in',
        filter: 'blur(8px) grayscale(1) contrast(2)',
        translateX: -100,
        translateY: 30,
      }
    );

    gsap.to(branchRef.current, {
      y: -20,
      rotation: 10,
      skewY: -3,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: 0.2,
    });

    gsap.to(branchRef2.current, {
      y: -100,
      rotation: 20,
      skewY: 3,
      duration: 5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: 0.8,
    });
  }, []);

  return (
    <>
      <div className={styles.window} ref={boxRef}>
        <img
          className={styles.branch}
          ref={branchRef}
          src="/branch5.png"
          alt="tree"
        />
        <img
          className={styles.branch2}
          ref={branchRef2}
          src="/branch5.png"
          alt="tree"
        />
      </div>
    </>
  );
};
