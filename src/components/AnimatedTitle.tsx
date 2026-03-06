import { useRef, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail } from 'lucide-react';
import { useWebHaptics } from 'web-haptics/react';

const TITLE = 'Liam Piesley';
const FORWARD_EASE = 'power2.out';
const REVERSE_EASE = 'power2.in';
const SHRINK_SCALE = 3 / 4;
const MOBILE_MEDIA_QUERY = '(max-width: 768px)';
const ANIMATION_START_THRESHOLD = 0.01;
const RESIZE_WIDTH_THRESHOLD = 2;
const TRIGGER_START_OFFSET = 20;
const CONTENT_HORIZONTAL_PADDING = 16;
const TITLE_SPACER_ID = 'title-fixed-spacer';

gsap.registerPlugin(ScrollTrigger);

function pinH1(h1: HTMLElement) {
  if (h1.style.position === 'fixed') return;
  const rect = h1.getBoundingClientRect();
  const computed = window.getComputedStyle(h1);
  const spacer = document.createElement('div');
  spacer.id = TITLE_SPACER_ID;
  spacer.style.height = `${rect.height}px`;
  spacer.style.marginTop = computed.marginTop;
  spacer.style.marginBottom = computed.marginBottom;
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
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const menuOpenRef = useRef(false);
  const leftHoverEnabledRef = useRef(false);

  const { trigger } = useWebHaptics();

  const handleLeftVisualClick = () => {
    trigger({ pattern: [{ duration: 100 }] });
    if (!leftHoverEnabledRef.current) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleMenu = useCallback(() => {
    trigger({ pattern: [{ duration: 100 }] });
    if (!menuTimelineRef.current) return;
    if (menuOpenRef.current) {
      menuTimelineRef.current.reverse();
      menuOpenRef.current = false;
    } else {
      menuTimelineRef.current.play();
      menuOpenRef.current = true;
    }
  }, []);

  const handleCloseMenu = useCallback(() => {
    if (!menuTimelineRef.current || !menuOpenRef.current) return;
    menuTimelineRef.current.reverse();
    menuOpenRef.current = false;
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
          !menuRef.current ||
          !overlayRef.current
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
          // color: 'inherit',
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
        gsap.set(overlayRef.current, { opacity: 0, pointerEvents: 'none' });
        gsap.set('.title-visual-invert', { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.documentElement,
            start: `top+=${TRIGGER_START_OFFSET} top`,
            end: '+=220',
            scrub: false,
            toggleActions: 'play none none none',
            onLeaveBack: (self) => {
              if (menuOpenRef.current) {
                menuTimelineRef.current?.reverse();
                menuOpenRef.current = false;
              }
              if (h1) unpinH1(h1);
              self.animation?.reverse();
            },
            onUpdate: ({ progress }) => {
              const isComplete = progress >= ANIMATION_START_THRESHOLD;
              leftHoverEnabledRef.current = isComplete;
              if (!isComplete && menuOpenRef.current) {
                menuTimelineRef.current?.reverse();
                menuOpenRef.current = false;
              }
              if (h1) {
                if (progress > 0.9) pinH1(h1);
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

        tl.eventCallback('onComplete', () => {
          leftHoverEnabledRef.current = true;
          if (plusButtonRef.current) {
            gsap.set(plusButtonRef.current, { pointerEvents: 'auto' });
          }
        });
        tl.eventCallback('onReverseComplete', () => {
          leftHoverEnabledRef.current = false;
          if (plusButtonRef.current) {
            gsap.set(plusButtonRef.current, { pointerEvents: 'none' });
          }
        });

        const menuTl = gsap.timeline({ paused: true });
        const menuDirectionalEase = (progress: number) =>
          menuTl.reversed() ? reverseEase(progress) : forwardEase(progress);
        const expandedHeight = isMobile ? '3.9em' : '3.05em';
        menuTl
          .to(backgroundBlockRef.current, {
            height: expandedHeight,
            duration: 0.35,
            ease: menuDirectionalEase,
          })
          .to(
            plusButtonRef.current!.querySelector('svg'),
            { rotation: 45, duration: 0.25, ease: menuDirectionalEase },
            0
          )
          .to(
            menuRef.current,
            {
              opacity: 1,
              y: 0,
              pointerEvents: 'auto',
              duration: 0.25,
              ease: menuDirectionalEase,
            },
            0.1
          )
          .to(
            overlayRef.current,
            {
              opacity: 1,
              pointerEvents: 'auto',
              duration: 0.25,
              ease: menuDirectionalEase,
            },
            0
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
        leftHoverEnabledRef.current = false;
        if (plusButtonRef.current) {
          gsap.set(plusButtonRef.current, { pointerEvents: 'none' });
        }
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
      className="relative inline-block whitespace-pre leading-none text-[#222]"
    >
      <span
        ref={backgroundBlockRef}
        className="title-background-block absolute -left-4 w-[calc(100%+32px)] top-0 h-[1em] bg-black/5 opacity-0 pointer-events-none backdrop-blur-[10px] z-0 rounded-[14px] overflow-hidden"
      >
        <button
          ref={plusButtonRef}
          onClick={handleToggleMenu}
          className="title-menu-button absolute right-0 top-0 min-w-[0.75em] min-h-[0.75em] flex items-center justify-center border-none cursor-pointer pointer-events-none opacity-0 text-[#222] rounded-[14px] bg-transparent transition-[background-color,transform] duration-200 ease-in-out hover:bg-black/10 active:bg-black/[0.14]"
          aria-label="Menu"
          style={{ fontSize: 'inherit' }}
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
          className="title-menu absolute top-16 left-0 right-0 opacity-0 flex flex-col px-6 py-2 gap-2 pointer-events-none"
        >
          <a
            href="https://cal.com/liam-piesley-iof3ud"
            target="_blank"
            rel="noopener"
            className="title-menu-item flex items-center gap-[0.8em] p-4 rounded-[14px] no-underline text-[#222] text-sm whitespace-nowrap transition-colors duration-150 ease-in-out hover:bg-black/8 active:bg-black/12"
            style={{
              fontFamily:
                "Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif",
            }}
          >
            <Phone size={16} />
            Book a call
          </a>
          <a
            href="mailto:liampiesley@gmail.com"
            target="_blank"
            rel="noopener"
            className="title-menu-item flex items-center gap-[0.8em] p-4 rounded-[14px] no-underline text-[#222] text-sm whitespace-nowrap transition-colors duration-150 ease-in-out hover:bg-black/8 active:bg-black/12"
            style={{
              fontFamily:
                "Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif",
            }}
          >
            <Mail size={16} />
            Send an email
          </a>
        </div>
      </span>
      <div
        ref={overlayRef}
        onClick={handleCloseMenu}
        className="fixed inset-0 opacity-0 pointer-events-none z-[-1]"
      />
      <span
        className="title-full absolute inset-0 inline-flex items-baseline pointer-events-none z-1"
        aria-hidden="true"
      >
        <span className="title-full-left">Liam</span>
        <span className="title-full-middle">&nbsp;</span>
        <span className="title-full-right">Piesley</span>
      </span>

      <span
        className="title-segmented relative inline-flex items-baseline z-1 pointer-events-none hover:opacity-80 transition-opacity"
        aria-hidden="true"
      >
        <span
          className="title-left title-segmented-char relative inline-block opacity-0"
          ref={leftRef}
        >
          <span className="opacity-0">L</span>
          <span
            ref={leftVisualRef}
            className="title-left-visual absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block px-[0.25em] py-[0.05em] whitespace-pre pointer-events-auto"
            onClick={handleLeftVisualClick}
          >
            <span className="title-visual-invert absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-pre opacity-0">
              L
            </span>
          </span>
        </span>
        <span className="title-segmented-middle opacity-0 -ml-[0.08em] pointer-events-none">
          iam
        </span>
        <span className="title-segmented-middle opacity-0">&nbsp;</span>
        <span
          className="title-right title-segmented-char relative inline-block opacity-0 pointer-events-none"
          ref={rightRef}
        >
          <span className="opacity-0">P</span>
          <span
            ref={rightVisualRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block px-[0.25em] py-[0.05em] bg-transparent whitespace-pre pointer-events-none"
          >
            <span className="title-visual-invert absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-pre opacity-0">
              P
            </span>
          </span>
        </span>
        <span className="title-segmented-middle opacity-0 pointer-events-none">
          iesley
        </span>
      </span>
    </span>
  );
}
