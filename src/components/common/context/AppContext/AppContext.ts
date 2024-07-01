import { createContext } from 'preact/compat';
import {
  ICatalog,
  ICatalogParams,
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

export interface ProductDetailConfig {
  useWidthFromWindow: boolean;
}

export interface IAppContext {
  config?: ProductDetailConfig;

  getCatalog?: (params: ICatalogParams) => Promise<ICatalog>;
  allowBackDrop?: boolean;
  cartId?: string;
}

export const AppContext = createContext<IAppContext>({
  config: { useWidthFromWindow: false },
});
