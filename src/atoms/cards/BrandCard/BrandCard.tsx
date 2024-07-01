import { getBrandValue } from '@/signals/catalog.signals';

export interface BrandCardProps {
  iconUrl: string;
  label: string;
  onClick?: (label: string) => void;
}

const BrandCard = ({ iconUrl, label, onClick }: BrandCardProps) => {
  return (
    <div
      className="bg-white shadow-[0_1px_2px_1px_rgb(0,0,0,0.1)] rounded-lg px-[11px] py-[13px] flex items-center justify-center cursor-pointer"
      onClick={() => {
        onClick(label);
        getBrandValue(label);
      }}
    >
      <img src={iconUrl} alt={label} />
    </div>
  );
};

export default BrandCard;
