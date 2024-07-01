import { createContext } from 'preact/compat';
import {
  ICartItemRequest,
  IProductSize,
  IProductVariant,
  IRetailer,
  IRetailerFulfillment,
} from '@liquidcommercedev/sdk';

export type ISelectedProduct = {
  size: IProductSize;
  variant: IProductVariant;
  quantity: number;
  fulfillment: IRetailerFulfillment;
  retailer: IRetailer;
  engravingMessage: string[];
};

export interface UpdateCartParams {
  retailerId: string;
  item: ICartItemRequest;
}

export interface ICartContext {
  updateCart?: (params: UpdateCartParams) => Promise<void>;
  addToCart?: (params: UpdateCartParams) => Promise<void>;
  handleCartBackButton?: () => void;
  handleSingleRetailerClick?: (retailerId: string) => void;
  onClickContinueShopping?: () => void;
  onCheckout?: () => void;
  openDialogCartClick?: () => void;

  cartMode?: 'standard' | 'dialog';
  header?: boolean;
  footer?: boolean;
  allowBackDrop?: boolean;
  emptyCartText?: string;
}

export const CartContext = createContext<ICartContext>({});
