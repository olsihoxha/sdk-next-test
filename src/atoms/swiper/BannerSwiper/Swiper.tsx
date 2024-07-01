import { useRef, useState } from 'preact/hooks';
import SwiperItem from './SwiperItem';
import { BannerItem } from '@/build-types';

const MIN_SWIPE_REQUIRED = 40;

interface Props {
  items: BannerItem[];
}

function Swiper({ items }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidthRef = useRef<number>(0);
  const currentOffsetXRef = useRef<number>(0);
  const startXRef = useRef<number>(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const onTouchStart = (e: TouchEvent | MouseEvent) => {
    setIsSwiping(true);
    currentOffsetXRef.current = offsetX;
    startXRef.current = 'touches' in e ? e.touches[0].clientX : e.clientX;

    // Set container width on touch start
    const containerEl = containerRef.current;
    containerWidthRef.current = containerEl.offsetWidth;
  };

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    if (!isSwiping) return;

    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = startXRef.current - currentX;
    const newOffsetX = currentOffsetXRef.current - diff;

    const maxOffsetX = 0;
    const minOffsetX = containerWidthRef.current - containerRef.current.scrollWidth;

    const clampedOffsetX = Math.max(Math.min(newOffsetX, maxOffsetX), minOffsetX);
    setOffsetX(clampedOffsetX);
  };

  const onTouchEnd = () => {
    if (!isSwiping) return;

    const containerWidth = containerWidthRef.current;
    let newOffsetX = offsetX;
    const diff = currentOffsetXRef.current - newOffsetX;

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    } else {
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }

    setIsSwiping(false);
    setOffsetX(newOffsetX);
    setCurrentIdx(Math.abs(newOffsetX / containerWidth));
  };

  const indicatorOnClick = (idx: number) => {
    const containerWidth = containerRef.current.offsetWidth;
    setCurrentIdx(idx);
    setOffsetX(-(containerWidth * idx));
  };

  return (
    <div
      className="flex-1 w-full max-w-full h-full overflow-hidden touch-action-pan-y"
      onTouchStart={onTouchStart}
      onMouseDown={onTouchStart}
      onTouchMove={onTouchMove}
      onMouseMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseUp={onTouchEnd}
    >
      <div
        ref={containerRef}
        className={`flex ${isSwiping ? 'transition-none' : 'transition-transform duration-300 ease-out'} transform h-[200px] sm:h-[283px]`}
        style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
      >
        {items.map((item, idx) => (
          <SwiperItem key={idx} item={item} />
        ))}
      </div>
      <div className="flex justify-center py-4 items-center gap-2 self-stretch">
        {items.map((_item, idx) => (
          <span
            key={idx}
            className={`w-[10px] h-[10px] rounded-full  cursor-pointer ${
              currentIdx === idx ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => indicatorOnClick(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Swiper;
