import BeerIcon from '../../imagery/icons/categories/components/BeerIcon';
import WhiskeyIcon from '../../imagery/icons/subcategories/components/WhiskeyIcon';
import VodkaIcon from '../../imagery/icons/subcategories/components/VodkaIcon';
import WineIcon from '../../imagery/icons/categories/components/WineIcon';
import BrandyIcon from '../../imagery/icons/subcategories/components/BrandyIcon';
import TequilaIcon from '../../imagery/icons/subcategories/components/TequilaIcon';
import HardSeltzerIcon from '../../imagery/icons/subcategories/components/HardSeltzerIcon';
import HotDealsIcon from '../../imagery/icons/subcategories/components/HotDealsIcon';
import NotFoundIcon from '../../../assets/icons/Categories/NotFound';
import PopularIcon from '../../imagery/icons/subcategories/components/PopularIcon';
import SpiritsIcon from '../../imagery/icons/categories/components/SpiritsIcon';
import ReadyToDrinkIcon from '../../imagery/icons/categories/components/ReadyToDrinkIcon';
import AgaveIcon from '../../imagery/icons/subcategories/components/AgaveIcon';
import NonAlcoholicIcon from '../../imagery/icons/categories/components/NonAlcoholicIcon';
import OtherIcon from '../../imagery/icons/subcategories/components/OtherIcon';
import { useStyles } from '../../../components/common/context/ThemeContext/ThemeContext';
import { CategoryCardProps } from '.';
import { getCategoryValue } from '@/signals/catalog.signals';

export interface IconProps {
  color?: string;
  size?: string;
}
export const categoryIcons = {
  Popular: {
    label: 'Popular',
    icon: ({ color, size }: IconProps) => <PopularIcon color={color} size={size} />,
  },
  Whiskey: {
    label: 'Whiskey',
    icon: ({ color, size }: IconProps) => <WhiskeyIcon color={color} size={size} />,
  },
  Vodka: {
    label: 'Vodka',
    icon: ({ color, size }: IconProps) => <VodkaIcon color={color} size={size} />,
  },
  Wine: {
    label: 'Wine',
    icon: ({ color, size }: IconProps) => <WineIcon color={color} size={size} />,
  },
  Brandy: {
    label: 'Brandy',
    icon: ({ color, size }: IconProps) => <BrandyIcon color={color} size={size} />,
  },
  Tequila: {
    label: 'Tequila',
    icon: ({ color, size }: IconProps) => <TequilaIcon color={color} size={size} />,
  },
  Beer: {
    label: 'Beer',
    icon: ({ color, size }: IconProps) => <BeerIcon color={color} size={size} />,
  },
  HardSeltzer: {
    label: 'Hard Seltzer',
    icon: ({ color, size }: IconProps) => <HardSeltzerIcon color={color} size={size} />,
  },
  HotDeals: {
    label: 'Hot Deals',
    icon: ({ color, size }: IconProps) => <HotDealsIcon color={color} size={size} />,
  },
  Spirits: {
    label: 'Spirits',
    icon: ({ color, size }: IconProps) => <SpiritsIcon color={color} size={size} />,
  },
  ReadyToDrink: {
    label: 'Ready To Drink',
    icon: ({ color, size }: IconProps) => <ReadyToDrinkIcon color={color} size={size} />,
  },
  Agave: {
    label: 'Agave',
    icon: ({ color, size }: IconProps) => <AgaveIcon color={color} size={size} />,
  },
  NonAlcoholic: {
    label: 'Non Alcoholic',
    icon: ({ color, size }: IconProps) => <NonAlcoholicIcon color={color} size={size} />,
  },
  Other: {
    label: 'Others',
    icon: ({ color, size }: IconProps) => <OtherIcon color={color} size={size} />,
  },
  NotFound: {
    label: 'Not Found',
    icon: ({ color, size }: IconProps) => <NotFoundIcon color={color} size={size} />,
  },
};

const CategoryCard = ({ label, onClick }: CategoryCardProps) => {
  const styles = useStyles();

  const renderIcon = () => {
    return label.icon({
      color: styles.colors.primary,
      size: '50',
    });
  };

  return (
    <div
      className="bg-white rounded-lg shadow-[0_1px_2px_1px_rgb(0,0,0,0.1)] px-2 py-2.5 lg:px-[11px] lg:py-[13px] flex items-center justify-center flex-col cursor-pointer"
      onClick={() => {
        onClick(label?.label);
        getCategoryValue(label?.label);
      }}
    >
      {renderIcon()}
      <span className="text-[10px] lg:text-xs text-center font-semibold text-gray-600 whitespace-nowrap overflow-hidden w-full">
        {label.label}
      </span>
    </div>
  );
};

export default CategoryCard;
