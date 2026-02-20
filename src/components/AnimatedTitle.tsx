import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TITLE = 'Liam Piesley';
const FORWARD_EASE = 'power2.out';
const REVERSE_EASE = 'power2.in';
const INVERT_BG = 'rgba(0,0,0,0.1)';
const INVERT_BG_HOVER = 'rgba(0,0,0,0.18)';
const SHRINK_SCALE = 3 / 4;
const MOBILE_MEDIA_QUERY = '(max-width: 768px)';
const LEFT_HOVER_ENABLED_CLASS = 'title-left-hover-enabled';
const ANIMATION_COMPLETE_THRESHOLD = 0.8;
const RESIZE_WIDTH_THRESHOLD = 2;
const TRIGGER_START_OFFSET = 20;
const CONTENT_HORIZONTAL_PADDING = 16;

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle() {
  const rootRef = useRef<HTMLSpanElement>(null);
  const backgroundBlockRef = useRef<HTMLSpanElement>(null);
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);
  const leftVisualRef = useRef<HTMLSpanElement>(null);
  const rightVisualRef = useRef<HTMLSpanElement>(null);
  const handleLeftVisualClick = () => {
    const isEnabled = leftVisualRef.current?.classList.contains(
      LEFT_HOVER_ENABLED_CLASS
    );
    if (!isEnabled) {
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useGSAP(
    () => {
      const buildTimeline = () => {
        if (
          !rootRef.current ||
          !backgroundBlockRef.current ||
          !leftRef.current ||
          !rightRef.current ||
          !leftVisualRef.current ||
          !rightVisualRef.current
        ) {
          return null;
        }

        const isMobile = window.matchMedia(MOBILE_MEDIA_QUERY).matches;

        const rootRect = rootRef.current.getBoundingClientRect();
        const mainElement = rootRef.current.closest('main');
        const mainRect = mainElement?.getBoundingClientRect() ?? rootRect;
        const leftRect = leftRef.current.getBoundingClientRect();
        const rightRect = rightRef.current.getBoundingClientRect();
        const mainStyles = mainElement
          ? window.getComputedStyle(mainElement)
          : null;
        const mainPaddingLeft = mainStyles
          ? Number.parseFloat(mainStyles.paddingLeft) || 0
          : 0;
        const mainPaddingRight = mainStyles
          ? Number.parseFloat(mainStyles.paddingRight) || 0
          : 0;
        const contentLeft = mainRect.left + mainPaddingLeft;
        const contentWidth =
          mainRect.width - mainPaddingLeft - mainPaddingRight;
        const backgroundLeft =
          contentLeft - rootRect.left - CONTENT_HORIZONTAL_PADDING;
        const backgroundWidth = contentWidth + CONTENT_HORIZONTAL_PADDING * 2;

        const targetX =
          rootRect.left + rootRect.width * (isMobile ? 1 / 16 : 1 / 6);
        const leftCenterX = leftRect.left + leftRect.width / 2 + 1;
        const rightCenterX = rightRect.left + rightRect.width / 2;

        const leftShift = targetX - leftCenterX;
        const rightShift = targetX - rightCenterX;
        const finalVisualTweenPosition = 0;

        gsap.set('.title-full-left', { x: 0, opacity: 1, filter: 'none' });
        gsap.set('.title-full-right', { x: 0, opacity: 1, filter: 'none' });
        gsap.set('.title-segmented-char', { opacity: 0 });
        gsap.set(leftRef.current, { x: 0 });
        gsap.set(rightRef.current, { x: 0 });
        gsap.set([leftVisualRef.current, rightVisualRef.current], { scale: 1 });
        gsap.set([leftVisualRef.current, rightVisualRef.current], {
          color: 'inherit',
        });
        gsap.set(backgroundBlockRef.current, {
          left: backgroundLeft,
          width: backgroundWidth,
          opacity: 0,
        });
        gsap.set('.title-visual-invert', { opacity: 0 });
        gsap.set('.title-visual-base', { opacity: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.documentElement,
            start: `top+=${TRIGGER_START_OFFSET} top`,
            end: '+=220',
            scrub: false,
            toggleActions: 'play none none none',
            onLeaveBack: (self) => {
              self.animation?.reverse();
            },
            onUpdate: ({ progress }) => {
              leftVisualRef.current?.classList.toggle(
                LEFT_HOVER_ENABLED_CLASS,
                progress >= ANIMATION_COMPLETE_THRESHOLD
              );
            },
          },
        });
        const forwardEase = gsap.parseEase(FORWARD_EASE);
        const reverseEase = gsap.parseEase(REVERSE_EASE);
        const directionalEase = (progress: number) =>
          tl.reversed() ? reverseEase(progress) : forwardEase(progress);

        tl.to(
          '.title-full-char',
          { opacity: 0, duration: 0.05, ease: directionalEase },
          0
        )
          .to(
            '.title-segmented-char',
            { opacity: 1, duration: 0.05, ease: directionalEase },
            0
          )
          .to('.title-full-left', { x: leftShift, ease: directionalEase }, 0)
          .to(
            '.title-full-left',
            {
              opacity: 0,
              filter: 'blur(8px)',
              ease: directionalEase,
            },
            0
          )
          .to('.title-full-right', { x: rightShift, ease: directionalEase }, 0)
          .to(
            '.title-full-right',
            {
              opacity: 0,
              filter: 'blur(8px)',
              ease: directionalEase,
            },
            0
          )
          .to(leftRef.current, { x: leftShift, ease: directionalEase }, 0)
          .to(rightRef.current, { x: rightShift, ease: directionalEase }, 0)
          .to(
            [leftVisualRef.current, rightVisualRef.current],
            { scale: isMobile ? 0.9 : SHRINK_SCALE, ease: directionalEase },
            0
          )
          .to(
            '.title-visual-invert',
            {
              opacity: 1,
              ease: directionalEase,
            },
            finalVisualTweenPosition
          )
          .to(
            '.title-visual-base',
            {
              opacity: 0,
              ease: directionalEase,
            },
            '<'
          )
          .to(
            backgroundBlockRef.current,
            {
              opacity: 1,
              ease: directionalEase,
            },
            '<'
          )
          .to(
            '.title-left-visual',
            {
              cursor: 'pointer',
              ease: directionalEase,
            },
            '<'
          );

        return tl;
      };

      let tl = buildTimeline();
      let lastViewportWidth = window.innerWidth;

      const recalc = () => {
        tl?.kill();
        tl = buildTimeline();
        ScrollTrigger.refresh();
      };

      const handleResize = () => {
        // iOS Safari/Chrome can fire resize while scrolling due to browser chrome;
        // ignore height-only changes to avoid scrubbing timeline breakage.
        const nextWidth = window.innerWidth;
        if (Math.abs(nextWidth - lastViewportWidth) < RESIZE_WIDTH_THRESHOLD) {
          return;
        }
        lastViewportWidth = nextWidth;
        recalc();
      };

      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', recalc);
      document.fonts.ready.then(recalc);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', recalc);
        leftVisualRef.current?.classList.remove(LEFT_HOVER_ENABLED_CLASS);
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
        ref={backgroundBlockRef}
        className="title-background-block"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-16px',
          width: 'calc(100% + 32px)',
          top: '0',
          height: '1em',
          backgroundColor: 'rgba(0,0,0,0.05)',
          opacity: 0,
          pointerEvents: 'none',
          backdropFilter: 'blur(10px)',
          zIndex: 0,
          borderRadius: '6px',
        }}
      />
      <span
        className="title-full"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'inline-flex',
          alignItems: 'baseline',
          pointerEvents: 'none',
          zIndex: 1,
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
          zIndex: 1,
        }}
      >
        <span
          className="title-left title-segmented-char"
          ref={leftRef}
          style={{
            position: 'relative',
            display: 'inline-block',
            opacity: 0,
          }}
        >
          <span style={{ opacity: 0 }}>L</span>
          <span
            ref={leftVisualRef}
            className="title-left-visual"
            onClick={handleLeftVisualClick}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'inherit',
              display: 'inline-block',
              padding: '0.05em 0.25em',
              whiteSpace: 'pre',
            }}
          >
            <span
              className="title-visual-invert"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                whiteSpace: 'pre',
                opacity: 0,
              }}
            >
              L
            </span>
          </span>
        </span>
        <span
          className="title-segmented-middle"
          style={{ opacity: 0, marginLeft: '-0.08em', pointerEvents: 'none' }}
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
            position: 'relative',
            display: 'inline-block',
            opacity: 0,
            pointerEvents: 'none',
          }}
        >
          <span style={{ opacity: 0 }}>P</span>
          <span
            ref={rightVisualRef}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'inherit',
              display: 'inline-block',
              padding: '0.05em 0.25em',
              backgroundColor: 'transparent',
              whiteSpace: 'pre',
              pointerEvents: 'none',
            }}
          >
            <span
              className="title-visual-invert"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                whiteSpace: 'pre',
                opacity: 0,
              }}
            >
              P
            </span>
          </span>
        </span>
        <span
          className="title-segmented-middle"
          style={{ opacity: 0, pointerEvents: 'none' }}
        >
          iesley
        </span>
      </span>
      <style>
        {`
          @media (max-width: 768px) {
            .title-background-block {
              top: -0.2em !important;
              height: 1.4em !important;
            }
          }
        `}
      </style>
    </span>
  );
}
