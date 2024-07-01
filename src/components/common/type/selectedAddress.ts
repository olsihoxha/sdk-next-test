import { ILocInterface } from '@liquidcommercedev/sdk';

export interface SelectedAddress extends ILocInterface {
  active: boolean;
  apt: string;
}

export interface AddressPrediction {
  id: string;
  val: string;
  meta: string;
}
