import { PlusCircleSolid } from '@liquidcommerceteam/preact-heroicons';
import { useStyles } from '../../../components/common/context/ThemeContext/ThemeContext';
import { IProduct } from '@liquidcommercedev/sdk';
import Badge from '../../badges';
import { FC } from 'preact/compat';
import currencyFormat from '@/components/common/util/currencyFormat';
import { useCart } from '@/components/common/context/CartContext/hooks/useCart';
import { UpdateCartParams } from '@/components/common/context/CartContext/CartContext';

export interface ProductCardProps {
  badge?: {
    label: string;
    background: string;
    color: string;
    icon?: string;
  };
  product?: IProduct;
  onClick?: (upc: string) => void;
}

const ProductCard: FC<ProductCardProps> = ({ badge, product, onClick }: ProductCardProps) => {
  const styles = useStyles();
  const { addToCart } = useCart();

  const addProductToCart = async () => {
    const fulfillmentId = product?.sizes[0]?.variants[0]?.fulfillments[0];
    const updatedItem: UpdateCartParams = {
      retailerId: product?.sizes[0]?.variants[0]?.retailerId,
      item: {
        partNumber: product?.sizes[0]?.variants[0]?.partNumber,
        fulfillmentId,
        quantity: 1,
      },
    };
    await addToCart(updatedItem);
  };

  return (
    <div
      className="pt-3 cursor-pointer h-full"
      onClick={() => {
        onClick?.(product?.sizes[0]?.upc as string);
      }}
    >
      <div className="relative h-full px-2 py-4 bg-white shadow-[0_1px_2px_1px_rgb(0,0,0,0.1)] rounded-lg flex flex-col gap-2 transition-shadow duration-300 hover:shadow-[0_1px_5px_2px_rgb(0,0,0,0.1)]">
        {badge?.label !== null && (
          <Badge
            label={badge?.label}
            background={badge?.background}
            color={badge?.color}
            icon={badge?.icon !== null ? badge?.icon : ''}
            floating={true}
          />
        )}
        <img
          alt="product card image"
          className="h-32 m-auto"
          src={product?.images[0] as string}
          onError={(e) => {
            (e.target as HTMLImageElement).referrerPolicy = 'no-referrer';
          }}
        />
        <div className="mt-auto justify-self-stretch flex-col content-start justify-center gap-2 flex text-gray-900 text-left font-semibold text-[10px] lg:text-xs">
          <div className="leading-[18px]">{product?.name || ''}</div>
          <div className="flex flex-row gap-2 items-center">
            <div className="text-gray-900 text-sm lg:text-base font-bold leading-[150%]">
              {currencyFormat(product?.sizes[0]?.variants[0]?.price)}
            </div>
            {product?.sizes[0]?.variants[0]?.salePrice !== 0 && (
              <div className="text-red-700 line-through">
                {currencyFormat(product?.sizes[0]?.variants[0]?.salePrice)}
              </div>
            )}
          </div>
          <div className="leading-[18px]">{product?.sizes[0]?.size || ''}, Bottle</div>
        </div>
        <PlusCircleSolid
          className="w-8 h-8 absolute bottom-2 right-2 rounded-full hover:transition-transform hover:ease-in-out hover:scale-105 cursor-pointer"
          style={{ color: styles.colors.primary }}
          onClick={async (e) => {
            e.stopPropagation();
            await addProductToCart();
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
