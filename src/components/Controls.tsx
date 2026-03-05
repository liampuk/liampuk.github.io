import { Leva } from 'leva';
import { usePortrait, useWindowSize } from '../hooks/general';

export const LevaControls = () => {
  const { width } = useWindowSize();
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
      <Leva
        collapsed
        hidden={true}
        titleBar={{ position: { x: -width + 300, y: 0 } }}
      />
    </div>
  );
};
