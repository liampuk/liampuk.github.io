import { useState } from 'react';
import { useWebHaptics } from 'web-haptics/react';

export const Toggle = () => {
  const [active, setActive] = useState(false);
  const { trigger } = useWebHaptics();

  const toggle = (active: boolean) => {
    trigger({ pattern: [{ duration: 100 }] });
    setActive(active);

    const root = document.getElementById('content');
    if (root) {
      root.dataset.view = active ? 'feed' : 'about';
    }
  };

  return (
    <div className="flex relative items-center rounded-full bg-black/8 w-fit h-10 md:h-8">
      <div
        className={`absolute inset-y-px w-1/2 rounded-full bg-white transition-all duration-200 ease-out ${
          active ? 'left-[calc(50%-1px)]' : 'left-px'
        }`}
      />
      <button
        className={`z-1 rounded-full py-1 w-[84px] text-center cursor-pointer transition-colors duration-300
            ${!active ? 'text-black' : 'text-black/60 hover:text-black'}`}
        onClick={() => toggle(false)}
      >
        <span>About</span>
      </button>
      <button
        className={`z-1 rounded-full py-1 w-[84px] text-center cursor-pointer transition-colors duration-300
        ${active ? 'text-black' : 'text-black/60 hover:text-black'}`}
        onClick={() => toggle(true)}
      >
        <span>Feed</span>
      </button>
    </div>
  );
};
