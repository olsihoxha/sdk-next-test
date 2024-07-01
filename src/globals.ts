import { ILocInterface, ISDKConfig, LiquidCommerce } from '@liquidcommercedev/sdk';
import {
  closeCart as internalCloseCart,
  openCart as internalOpenCart,
  setDeliveryInformation,
  setLiquid,
  setLoc,
  isCartDialogOpen,
  setIsCartDialogOpen,
  setIsCheckout,
  setSelectedRetailerId,
} from '@/signals';

const setDeliveryAddress = (address: ILocInterface) => {
  setLoc(address);
  setDeliveryInformation({
    one: address.address?.one,
    two: address.address?.two,
    city: address.address.city,
    state: address.address.state,
    zip: address.address.zip,
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    canEmail: false,
    canSms: false,
  });
};

const closeCart = () => {
  internalCloseCart();
};

const openCart = () => {
  internalOpenCart();
};

const toggleCart = () => {
  setIsCartDialogOpen(!isCartDialogOpen.value);
};

const toggleCheckout = () => {
  setIsCheckout();
};

const setRetailerId = (id: string) => {
  setSelectedRetailerId(id);
};

export const LiquidModules = async (apiKey: string, config?: ISDKConfig) => {
  try {
    const client = await LiquidCommerce(apiKey, config);
    setLiquid(client);
    return {
      client,
      setDeliveryAddress,
      openCart,
      toggleCart,
      closeCart,
      toggleCheckout,
      setRetailerId,
    };
  } catch (error) {
    console.error('Liquid modules auth error: ', error);
  }
};
