import { useEffect, useLayoutEffect, useState } from 'react';

const MOBILE_MEDIA = '(max-width: 768px)';

export const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  if (size.width > 0 && size.height > 0) return size;
  if (typeof window === 'undefined') return { width: 0, height: 0 };
  return { width: window.innerWidth, height: window.innerHeight };
};

export const usePortrait = () => {
  const { width, height } = useWindowSize();
  return width < height;
};

/**
 * Uses matchMedia. Returns undefined until after first layout effect (SSR / first client frame).
 * Caller should treat undefined as mobile so we never show fixed full-screen on mobile.
 */
export const useIsMobile = (): boolean | undefined => {
  const [mobile, setMobile] = useState<boolean | undefined>(undefined);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(MOBILE_MEDIA);
    const update = () => setMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  return mobile;
};
