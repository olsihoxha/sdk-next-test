import { signal } from '@preact/signals';
import { IProduct, IRetailer } from '@liquidcommercedev/sdk';
import { ISelectedProduct } from '@/components/common/context/AppContext/AppContext';

export const products = signal<IProduct[]>([]);
export const product = signal<IProduct | null>(null);
export const selectedProduct = signal<ISelectedProduct | null>(null);
export const retailers = signal<IRetailer[]>([]);

export function setProducts(value: IProduct[]) {
  products.value = value;
}

export function setProduct(value: IProduct) {
  product.value = value;
}

export function setSelectedProduct(value: ISelectedProduct) {
  selectedProduct.value = value;
}

export function setRetailers(value: IRetailer[]) {
  retailers.value = value;
}
