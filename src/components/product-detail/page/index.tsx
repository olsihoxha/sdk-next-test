import ImageCarousel from './components/ImageCarousel';
import AtcSection from '../../common/component/AtcSection';
import About from './components/About';
import Variants from './components/Variants';
import StoreSelector from './components/StoreSelector';
import { useResponsive, useBounds } from '../../../hooks';
import PDPTitle from './components/PDPTitle';
import { useAppContext } from '../../common/context/AppContext/hooks/useAppContext';

interface ProductDetailPageProps {
  openDialogCartClick?: () => void;
}

function ProductDetail({ openDialogCartClick }: ProductDetailPageProps) {
  const { config } = useAppContext();
  const { ref, width } = useBounds();
  const { isMobile: isMobileFn } = useResponsive();

  const isMobile = config.useWidthFromWindow ? isMobileFn() : isMobileFn(width);

  return (
    <div ref={ref} className="flex w-full justify-center">
      <div className="flex items-start justify-center flex-wrap md:flex-nowrap lg:flex-nowrap max-w-[1536px]">
        <div className="flex flex-col mb-8 w-full md:max-w-[350px] lg:max-w-[50%] xl:max-w-full xl:mr-6 justify-center lg:justify-end min-w-[100%] md:min-w-[calc(50%-2rem)] xl:min-w-[calc(33%-2rem)] mx-auto">
          <div className="block md:hidden">
            <PDPTitle />
          </div>
          <ImageCarousel isMobile={isMobile} />
        </div>
        <div className="grid xl:grid-cols-2 items-start max-xl:justify-center md:ml-6 lg:ml-0 min-w-[100%] md:min-w-[calc(50%-2rem)] xl:min-w-[calc(66%-2rem)]">
          <div className="flex justify-center lg:justify-start xl:justify-center mx-0 z-50 max-w-full md:max-w-md lg:max-w-full">
            <div className="md:max-w-[384px] xl:max-w-full">
              <div className="hidden md:block">
                <span className="py-1 px-1.5 inline-flex rounded bg-[#E1EFFE] text-[#1E429F] text-xs font-bold font-['Open_Sans'] mb-2.5">
                  Best Seller
                </span>
                <PDPTitle />
              </div>
              <Variants />
              <div className="block xl:hidden mt-6">
                <StoreSelector height="328px" />
              </div>
              {!isMobile && (
                <div className="z-50 pb-4 md:pb-0 px-[15px] md:px-0 fixed md:static bottom-0 md:bottom-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent">
                  <AtcSection openDialogCartClick={openDialogCartClick} />
                </div>
              )}
              <About />
              {isMobile && (
                <div className="z-50 pb-4 md:pb-0 px-[15px] md:px-0 fixed md:static bottom-0 md:bottom-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent">
                  <AtcSection openDialogCartClick={openDialogCartClick} />
                </div>
              )}
            </div>
          </div>
          <div className="hidden xl:flex justify-center lg:justify-start xl:justify-center xl:ml-6  z-50 mx-0 mb-8 max-w-full">
            <StoreSelector height="488px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
