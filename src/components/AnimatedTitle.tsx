import { useRef, useCallback } from 'react';
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
const TITLE_SPACER_ID = 'title-fixed-spacer';

gsap.registerPlugin(ScrollTrigger);

function pinH1(h1: HTMLElement) {
  if (h1.style.position === 'fixed') return;
  const rect = h1.getBoundingClientRect();
  const spacer = document.createElement('div');
  spacer.id = TITLE_SPACER_ID;
  spacer.style.height = `${rect.height}px`;
  h1.parentElement?.insertBefore(spacer, h1);
  h1.style.position = 'fixed';
  h1.style.top = `${rect.top}px`;
  h1.style.left = `${rect.left}px`;
  h1.style.margin = '0';
}

function unpinH1(h1: HTMLElement) {
  if (h1.style.position !== 'fixed') return;
  document.getElementById(TITLE_SPACER_ID)?.remove();
  h1.style.position = '';
  h1.style.top = '';
  h1.style.left = '';
  h1.style.margin = '';
}

export default function AnimatedTitle() {
  const rootRef = useRef<HTMLSpanElement>(null);
  const backgroundBlockRef = useRef<HTMLSpanElement>(null);
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);
  const leftVisualRef = useRef<HTMLSpanElement>(null);
  const rightVisualRef = useRef<HTMLSpanElement>(null);
  const plusButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const menuOpenRef = useRef(false);

  const handleLeftVisualClick = () => {
    const isEnabled = leftVisualRef.current?.classList.contains(
      LEFT_HOVER_ENABLED_CLASS
    );
    if (!isEnabled) {
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleMenu = useCallback(() => {
    if (!menuTimelineRef.current) return;
    if (menuOpenRef.current) {
      menuTimelineRef.current.reverse();
      menuOpenRef.current = false;
    } else {
      menuTimelineRef.current.play();
      menuOpenRef.current = true;
    }
  }, []);

  useGSAP(
    () => {
      const buildTimeline = () => {
        if (
          !rootRef.current ||
          !backgroundBlockRef.current ||
          !leftRef.current ||
          !rightRef.current ||
          !leftVisualRef.current ||
          !rightVisualRef.current ||
          !plusButtonRef.current ||
          !menuRef.current
        ) {
          return null;
        }

        const isMobile = window.matchMedia(MOBILE_MEDIA_QUERY).matches;
        const h1 = rootRef.current.closest('h1') as HTMLElement | null;
        if (h1) unpinH1(h1);

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
          height: isMobile ? '1.4em' : '1em',
          top: isMobile ? '-0.2em' : '0',
        });
        const bgLeftViewportX = rootRect.left + backgroundLeft;
        const lpFromBlockLeft = targetX - bgLeftViewportX;
        const plusIconSize = isMobile ? '0.4em' : '0.3em';
        gsap.set(plusButtonRef.current, {
          opacity: 0,
          pointerEvents: 'none',
          right: lpFromBlockLeft,
          xPercent: 50,
          top: isMobile ? '0.7em' : '0.5em',
          yPercent: -50,
        });
        gsap.set(plusButtonRef.current.querySelector('svg'), {
          attr: { width: plusIconSize, height: plusIconSize },
        });
        gsap.set(menuRef.current, { opacity: 0, y: -5 });
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
              if (menuOpenRef.current) {
                menuTimelineRef.current?.progress(0);
                menuOpenRef.current = false;
              }
              if (h1) unpinH1(h1);
              self.animation?.reverse();
            },
            onUpdate: ({ progress }) => {
              const isComplete = progress >= ANIMATION_COMPLETE_THRESHOLD;
              leftVisualRef.current?.classList.toggle(
                LEFT_HOVER_ENABLED_CLASS,
                isComplete
              );
              if (plusButtonRef.current) {
                plusButtonRef.current.style.pointerEvents = isComplete
                  ? 'auto'
                  : 'none';
              }
              if (!isComplete && menuOpenRef.current) {
                menuTimelineRef.current?.progress(0);
                menuOpenRef.current = false;
              }
              if (h1) {
                if (isComplete) pinH1(h1);
                else unpinH1(h1);
              }
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
          )
          .to(
            plusButtonRef.current,
            {
              opacity: 1,
              ease: directionalEase,
            },
            '<'
          );

        const menuTl = gsap.timeline({ paused: true });
        const expandedHeight = isMobile ? '3.7em' : '2.9em';
        menuTl
          .to(backgroundBlockRef.current, {
            height: expandedHeight,
            duration: 0.35,
            ease: 'power2.out',
          })
          .to(
            plusButtonRef.current!.querySelector('svg'),
            { rotation: 45, duration: 0.25, ease: 'power2.out' },
            0
          )
          .to(
            menuRef.current,
            {
              opacity: 1,
              y: 0,
              pointerEvents: 'auto',
              duration: 0.25,
              ease: 'power2.out',
            },
            0.1
          );
        menuTimelineRef.current = menuTl;

        return tl;
      };

      let tl = buildTimeline();
      let lastViewportWidth = window.innerWidth;

      const recalc = () => {
        if (menuOpenRef.current) {
          menuTimelineRef.current?.progress(0);
          menuOpenRef.current = false;
        }
        menuTimelineRef.current?.kill();
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
        const h1 = rootRef.current?.closest('h1') as HTMLElement | null;
        if (h1) unpinH1(h1);
        menuTimelineRef.current?.kill();
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
          overflow: 'hidden',
        }}
      >
        <button
          ref={plusButtonRef}
          onClick={handleToggleMenu}
          className="title-menu-button"
          aria-label="Menu"
          style={{
            position: 'absolute',
            right: 0,
            top: '0',
            height: '1em',
            width: '1em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            pointerEvents: 'none',
            opacity: 0,
            padding: 0,
            color: '#222',
            borderRadius: '4px',
            fontSize: 'inherit',
          }}
        >
          <svg
            width="0.3em"
            height="0.3em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <div
          ref={menuRef}
          className="title-menu"
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            opacity: 0,
            display: 'flex',
            flexDirection: 'column',
            padding: '8px 24px',
            gap: '8px',
            pointerEvents: 'none',
          }}
        >
          <a
            href="https://cal.com/liam-piesley-iof3ud"
            target="_blank"
            rel="noopener"
            className="title-menu-item"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Book a call
          </a>
          <a
            href="mailto:liampiesley@gmail.com"
            target="_blank"
            rel="noopener"
            className="title-menu-item"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Send an email
          </a>
        </div>
      </span>
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
          pointerEvents: 'none',
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
              pointerEvents: 'auto',
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
          .title-menu-button:hover {
            background-color: rgba(0,0,0,0.08);
          }
          .title-menu-item {
            display: flex;
            align-items: center;
            gap: 0.4em;
            padding: 16px;
            border-radius: 4px;
            text-decoration: none;
            color: #222;
            font-size: 14px;
            font-family: Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif;
            white-space: nowrap;
            transition: background-color 0.15s ease;
          }
          .title-menu-item:hover {
            background-color: rgba(0,0,0,0.08);
          }
          .title-menu-item:active {
            background-color: rgba(0,0,0,0.12);
          }
        `}
      </style>
    </span>
  );
}
