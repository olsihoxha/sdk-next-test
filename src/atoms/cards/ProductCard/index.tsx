import React, { FC } from 'preact/compat';

import Element, { ProductCardProps } from './ProductCard';
import AppProvider from '../../../components/common/context/AppContext/AppProvider';
import CartProvider from '@/components/common/context/CartContext/CartProvider';

const ProductCard: FC<ProductCardProps> = ({ badge, product, onClick }: ProductCardProps) => {
  return (
    <AppProvider>
      <CartProvider>
        <Element badge={badge} product={product} onClick={onClick} />
      </CartProvider>
    </AppProvider>
  );
};


export default ProductCard;
