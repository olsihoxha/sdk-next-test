import RetailerLogo from '../../../assets/icons/RetailerLogo';
import Badge from '@/atoms/badges';

interface RetailerHeaderProps {
  title: string;
  supportText: string;
}

function ProductCarousel({ title, supportText }: RetailerHeaderProps) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div>
        <RetailerLogo />
      </div>
      <div className="text-left" style={{ color: '#333333' }}>
        <div className="w-fit">
          <Badge label="BestSeller" background="#E1EFFE" color="#1E429F" floating={false} />
        </div>
        <div className="font-bold text-lg lg:text-2xl">{title}</div>
        <div className="font-semibold text-xs lg:text-sm">{supportText}</div>
      </div>
    </div>
  );
}

export default ProductCarousel;
