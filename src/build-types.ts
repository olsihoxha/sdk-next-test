import { Styles } from './types';
import { ICatalogParams, IClient, ILocInterface, LiquidTaxonomy } from '@liquidcommercedev/sdk';
import { DeliveryTimeInterface } from './components/delivery-time/components/interfaces';
import { CollectionStyles } from '@/components/collection/Collection.styles';
import { JSXInternal } from 'preact/src/jsx';
import { BreadcrumbItem, BreadcrumbProps } from '@/components/breadcrumb';
import { CartProps } from '@/components/cart';
import { LiquidUIProps } from './components/liquid-ui/';

export interface ProductDetailProps {
  upc?: string;
  loc?: ILocInterface;
  styles?: Styles;
  useWidthFromWindow?: boolean;
  openDialogCartClick?: () => void;
}

export interface ProductCarouselProps {
  category?: LiquidTaxonomy | string;
  retailer?: string;
  styles?: Styles;
  onSeeAllClick?: (retailer?: string, category?: string) => void;
  onCardClick?: (upc: string) => void;
}

export interface BrandCarouselProps {
  styles?: Styles;
  brandIcons?: { label: string; iconUrl: string }[];
  onCardClick?: (clickedItem) => void;
}

export interface CategoryCarouselProps {
  styles?: Styles;
  onCardClick?: (clickedItem) => void;
}

export interface CommonComponentsProps {
  styles?: Styles;
}

export interface CheckoutProps {
  styles?: Styles;
  mode: 'standard' | 'dialog';
  onPlaceOrder: () => void;
  onContinueShopping?: () => void;
  closeDialogCart?: () => void;
}

export interface SingleRetailerBodyProps {
  retailerId: string;
  readOnly?: boolean;
}

export interface MulticartProps {
  header?: boolean;
  footer?: boolean;
  closeDialogCart?: () => void;
}

export interface DeliveryInfoProps {
  styles?: Styles;
}

export interface IPaymentInterface {
  provider: 'braintree';
  token: string;
  brandCode: string;
  last4: string;
  month: string;
  year: string;
  bin: string;
}

export interface PaymentProps {
  styles?: Styles;
  disabled?: boolean;
  children?: any;
}

export interface OrderSummaryProps {
  styles?: Styles;
  readOnly?: boolean;
  onPlaceOrder?: () => void;
}

export interface ItemsCountProps {
  styles?: Styles;
  count?: number;
  bgColor?: string;
  textColor?: string;
  openDialogCartClick?: () => void;
}

export interface CounterProps {
  styles?: Styles;
  count: number;
  bgColor?: string;
  textColor?: string;
}

export interface OrderConfirmationProps {
  mode?: 'standard' | 'dialog';
  styles?: Styles;
  onClickCheckDeliveryStatus?: () => void;
}

export interface OrderTrackingProps {
  styles?: Styles;
}

export interface DeliveryTimeProps {
  styles?: Styles;
  sx?: string;
}

export interface StripeProps {
  styles?: Styles;
  variant?: DeliveryTimeInterface;
}

export interface BraintreeProps {
  styles?: Styles;
  setToken?: (token: IPaymentInterface) => void;
}

export interface LiquidPLPProps {
  styles?: Styles;
  catalogParams?: ICatalogParams;
  onCardClick?: (upc: string) => void;
  breadcrumbCurrent?: string;
  breadcrumbCatPaths?: Array<BreadcrumbItem>;
}

export type SearchOption = {
  id?: string;
  label: string;
};

export interface SearchProps {
  styles?: Styles;
  placeholder?: string;
  options: Array<SearchOption> | string;
  onSelect?: (option: SearchOption | string) => void;
  onSearch?: (query: string) => Promise<Array<SearchOption>>;
}

export interface CollectionProps {
  category?: LiquidTaxonomy | string;
  styles?: CollectionStyles;
  onSeeAllClick?: (category: LiquidTaxonomy) => void;
  onCardClick?: (upc: string) => void;
}

export type BannerItem = {
  imageSrc?: string;
  imageAlt?: string;
  component?: JSXInternal.Element;
};

export interface BannerProps {
  styles?: Styles;
  bannerItems: BannerItem[];
  onShopNow?: (category: string) => void;
}

// TODO: after changing mock-up values, update this interface
export interface BannerSwiperProps {
  styles?: Styles;
}

export interface TrackingMapProps {
  styles?: Styles;
  sx?: string;
}

export interface LiquidBanner extends Partial<HTMLElement>, BannerProps {}

export interface LiquidBannerSwiper extends Partial<HTMLElement>, BannerSwiperProps {}

export interface LiquidCart extends Partial<HTMLElement>, CartProps {}

export interface LiquidCollection extends Partial<HTMLElement>, CollectionProps {}

export interface LiquidSearch extends Partial<HTMLElement>, SearchProps {}

export interface LiquidOrderSummary extends Partial<HTMLElement>, OrderSummaryProps {}

export interface LiquidItemsCount extends Partial<HTMLElement>, ItemsCountProps {}
export interface LiquidCounter extends Partial<HTMLElement>, CounterProps {}

export interface LiquidProduct extends Partial<HTMLElement>, ProductDetailProps {}

export interface LiquidProductCarousel extends Partial<HTMLElement>, ProductCarouselProps {}

export interface LiquidStoreSelector extends Partial<HTMLElement>, ProductDetailProps {}

export interface LiquidDeliveryInfo extends Partial<HTMLElement>, DeliveryInfoProps {}

export interface LiquidProductInfo extends Partial<HTMLElement>, ProductDetailProps {}

export interface LiquidProductImage extends Partial<HTMLElement>, ProductDetailProps {}

export interface LiquidBrandCarousel extends Partial<HTMLElement>, BrandCarouselProps {}

export interface LiquidCategoryCarousel extends Partial<HTMLElement>, CategoryCarouselProps {}

export interface LiquidDeliveryTime extends Partial<HTMLElement>, DeliveryTimeProps {}

export interface LiquidPayment extends Partial<HTMLElement>, PaymentProps {
  children?: any;
}

export interface LiquidBraintree extends Partial<HTMLElement>, BraintreeProps {}

export interface LiquidOrderConfirmation extends Partial<HTMLElement>, OrderConfirmationProps {}

export interface LiquidOrderTracking extends Partial<HTMLElement>, OrderTrackingProps {}

export interface LiquidCheckout extends Partial<HTMLElement>, CheckoutProps {}

export interface LiquidBreadcrumb extends Partial<HTMLElement>, BreadcrumbProps {}

export interface LiquidCommonComponents extends Partial<HTMLElement>, CommonComponentsProps {}

export interface LiquidProductListPage extends Partial<HTMLElement>, LiquidPLPProps {}

export interface LiquidTrackingMap extends Partial<HTMLElement>, TrackingMapProps {}

export interface LiquidUIWrapper extends Partial<HTMLElement>, LiquidUIProps {
  children?: any;
}

declare global {
  interface Window {
    LiquidUI: (config: IClient) => Promise<any>;
    setLiquidClient: (liquid: any) => void;
    setDeliveryAddress: (loc: ILocInterface) => void;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
  }

  namespace JSX {
    interface IntrinsicElements {
      'liquid-banner': LiquidBanner;
      'liquid-collection': LiquidCollection;
      'liquid-product': LiquidProduct;
      'liquid-search': LiquidSearch;
      'liquid-product-info': LiquidProductInfo;
      'liquid-store-selector': LiquidStoreSelector;
      'liquid-shipping': LiquidDeliveryInfo;
      'liquid-braintree': LiquidBraintree;
      'liquid-product-carousel': LiquidProductCarousel;
      'liquid-payment': LiquidPayment;
      'liquid-delivery-time': LiquidDeliveryTime;
      'liquid-cart': LiquidCart;
      'liquid-order-summary': LiquidOrderSummary;
      'liquid-product-image': LiquidProductImage;
      'liquid-brand-carousel': LiquidBrandCarousel;
      'liquid-category-carousel': LiquidCategoryCarousel;
      'liquid-order-confirmation': LiquidOrderConfirmation;
      'liquid-order-tracking': LiquidOrderTracking;
      'liquid-checkout': LiquidCheckout;
      'liquid-breadcrumb': LiquidBreadcrumb;
      'liquid-common-components': LiquidCommonComponents;
      'liquid-product-list-page': LiquidProductListPage;
      'liquid-items-counter': LiquidItemsCount;
      'liquid-counter': LiquidCounter;
      'liquid-tracking-map': LiquidTrackingMap;
    }
  }
}
