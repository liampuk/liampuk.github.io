import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TITLE = 'Liam Piesley';
const MOVE_EASE = 'power1.out';
const FADE_EASE = 'power2.out';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle() {
  const rootRef = useRef<HTMLSpanElement>(null);
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const buildTimeline = () => {
        if (!rootRef.current || !leftRef.current || !rightRef.current) {
          return null;
        }

        const rootRect = rootRef.current.getBoundingClientRect();
        const leftRect = leftRef.current.getBoundingClientRect();
        const rightRect = rightRef.current.getBoundingClientRect();

        const targetX = rootRect.left + rootRect.width * (1 / 4);
        const leftCenterX = leftRect.left + leftRect.width / 2 + 1;
        const rightCenterX = rightRect.left + rightRect.width / 2;

        const leftShift = targetX - leftCenterX;
        const rightShift = targetX - rightCenterX;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: '+=220',
            scrub: true,
          },
        });

        tl.to(
          '.title-full-char',
          { opacity: 0, duration: 0.05, ease: FADE_EASE },
          0
        )
          .to(
            '.title-segmented-char',
            { opacity: 1, duration: 0.05, ease: FADE_EASE },
            0
          )
          .to('.title-full-left', { x: leftShift, ease: MOVE_EASE }, 0)
          .to('.title-full-left', { opacity: 0, ease: FADE_EASE }, 0)
          .to('.title-full-right', { x: rightShift, ease: MOVE_EASE }, 0)
          .to('.title-full-right', { opacity: 0, ease: FADE_EASE }, 0)
          .to(leftRef.current, { x: leftShift, ease: MOVE_EASE }, 0)
          .to(rightRef.current, { x: rightShift, ease: MOVE_EASE }, 0);

        return tl;
      };

      let tl = buildTimeline();

      const recalc = () => {
        tl?.kill();
        tl = buildTimeline();
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', recalc);
      window.addEventListener('orientationchange', recalc);
      document.fonts.ready.then(recalc);

      return () => {
        window.removeEventListener('resize', recalc);
        window.removeEventListener('orientationchange', recalc);
        tl?.kill();
      };
    },
    { scope: rootRef }
  );

  return (
    <span
      ref={rootRef}
      aria-label={TITLE}
      style={{
        position: 'relative',
        display: 'inline-block',
        whiteSpace: 'pre',
        lineHeight: 1,
        color: '#222',
      }}
    >
      <span
        className="title-full"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'inline-flex',
          alignItems: 'baseline',
          pointerEvents: 'none',
        }}
      >
        <span className="title-full-left">Liam</span>
        <span className="title-full-middle">&nbsp;</span>
        <span className="title-full-right">Piesley</span>
      </span>

      <span
        className="title-segmented"
        aria-hidden="true"
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'baseline',
        }}
      >
        <span
          className="title-left title-segmented-char"
          ref={leftRef}
          style={{
            display: 'inline-block',
            opacity: 0,
          }}
        >
          L
        </span>
        <span
          className="title-segmented-middle"
          style={{ opacity: 0, marginLeft: '-0.08em' }}
        >
          iam
        </span>
        <span className="title-segmented-middle" style={{ opacity: 0 }}>
          &nbsp;
        </span>
        <span
          className="title-right title-segmented-char"
          ref={rightRef}
          style={{
            display: 'inline-block',
            opacity: 0,
          }}
        >
          P
        </span>
        <span className="title-segmented-middle" style={{ opacity: 0 }}>
          iesley
        </span>
      </span>
    </span>
  );
}
