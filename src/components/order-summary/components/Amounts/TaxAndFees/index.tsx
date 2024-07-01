import currencyFormat from '../../../../common/util/currencyFormat';
import ExpansiveRow from '../ExpansiveRow';
import { ICheckoutTaxes } from '@liquidcommercedev/sdk';

const TAXES_AND_FEES = [
  {
    key: 'bottleDeposits',
    label: 'Bottle Deposit Fee',
  },
  {
    key: 'engraving',
    label: 'Engraving Fee',
  },
  {
    key: 'bag',
    label: 'Bag Fee',
  },
  {
    key: 'service',
    label: 'Service Fee',
  },
  {
    key: 'retailDelivery',
    label: 'Delivery Fee',
  },
  {
    key: 'tax',
    label: 'Sales Tax',
  },
  // taxes inclide only 'Shipping' and 'Product'
  {
    key: 'taxes',
    label: 'Taxes',
  },
  {
    key: 'platformAndService',
    label: 'Platform and Service Fee',
  },
];

type TaxAndFeesProps = ICheckoutTaxes & {
  total: number;
  // added because of Platform and Service Fee and Taxes
  platformAndService: number;
  taxes: number;
};

function TaxAndFees({ total, ...taxes }: TaxAndFeesProps) {
  return (
    <ExpansiveRow title="Taxes and Fees" titleValue={currencyFormat(total)}>
      {TAXES_AND_FEES.filter((item) => taxes[item.key] > 0).map(({ key, label }) => {
        return (
          <div key={key} className="text-xs flex justify-between">
            <div>{label}</div>
            <div className="flex justify-end">{currencyFormat(taxes[key])}</div>
          </div>
        );
      })}
    </ExpansiveRow>
  );
}

export default TaxAndFees;
