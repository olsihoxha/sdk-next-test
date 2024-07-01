import { memo, useRef, useState, useEffect } from 'preact/compat';
import { useResponsive, useBounds } from '../../../../../hooks';

import PDPTitle from './../PDPTitle';
import AtcSection from '../../../../common/component/AtcSection';
import About from './../About';
import Variants from './../Variants';
import { useAppContext } from '../../../../common/context/AppContext/hooks/useAppContext';

function ProductInfo() {
  const { config } = useAppContext();
  const { width } = useBounds();
  const bottomRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bottomMenuHeight, setBottomMenuHeight] = useState(0);

  useEffect(() => {
    if (bottomRef.current) {
      setBottomMenuHeight(bottomRef.current.offsetHeight);
    }
  }, [bottomRef]);
  const { isMobile: isMobileFn } = useResponsive();
  const isMobile = config.useWidthFromWindow ? isMobileFn() : isMobileFn(width);

  return (
    <div className="sm:max-w-md xl:max-w-full">
      {!isMobile && (
        <>
          <span className="py-0.5 px-1.5 inline-flex rounded bg-[#E1EFFE] text-[#1E429F] text-xs font-bold font-['Open_Sans'] mb-2.5">
            Best Seller
          </span>
          <PDPTitle />
        </>
      )}
      <Variants />
      <div
        className={isMobile ? 'z-50 pb-5 px-[15px] fixed bottom-0 left-0 w-full bg-white' : ''}
        ref={bottomRef}
      >
        <AtcSection />
      </div>
      <About />
    </div>
  );
}

export default memo(ProductInfo);
