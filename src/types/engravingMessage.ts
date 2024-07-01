import { ICartItemEngraving } from '@liquidcommercedev/sdk';

export const DF_ENGRAVING_MESSAGE = {
  line1: '',
  line2: '',
  line3: '',
  line4: '',
};

export type EngravingMessage = {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  type?: ICartItemEngraving;
};
