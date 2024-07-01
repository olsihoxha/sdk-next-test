import { useState } from 'preact/compat';
import { useStyles } from '../../common/context/ThemeContext/ThemeContext';
import AgeRequirement from './AgeRequirement';
import Header from './Header';
import PromoLoader from './PromoLoader';
import Amounts from './Amounts';
import Legal from './Legal';
import Footer from './Footer';
import PlaceYourOrder from './PlaceYourOrder';
import GeneralHeader from '../../shared/Header';
import { AnotherRetailerLogo } from '@/assets/icons/AnotherRetailerLogo';
import { SingleRetailerBody } from '../../cart/components/SingleRetailer/components';
import { OrderSummaryProps } from '@/build-types';
import { cart, checkout, selectedRetailerId } from '@/signals';

function OrderSummary({ readOnly, onPlaceOrder }: OrderSummaryProps) {
  const styles = useStyles();
  const [showItems, setShowItems] = useState(false);

  if (!checkout.value) {
    return null;
  }

  const retailer = cart.value.retailers.find((el) => el.id === selectedRetailerId.value);

  return (
    <div className="flex flex-col gap-6" style={{ fontFamily: styles.text.headings.font }}>
      <div className="flex flex-col gap-6">
        {!readOnly && <Header showItems={showItems} setShowItems={setShowItems} />}

        {(showItems || readOnly) && (
          <>
            <div key={retailer.id} className="flex flex-col gap-6">
              <GeneralHeader
                className="flex flex-start text-base font-bold gap-1"
                title={retailer.name}
                showCloseIcon={false}
                icon={<AnotherRetailerLogo />}
              />
              <div className="rounded-2xl gap-4 py-4 bg-light-secondary-background">
                <SingleRetailerBody readOnly={readOnly} retailerId={selectedRetailerId.value} />
              </div>
            </div>
          </>
        )}

        {!readOnly && <PromoLoader />}
        <div className={readOnly ? 'px-4' : 'px-0'}>
          <Amounts />
        </div>
        {!readOnly && (
          <>
            <div>
              <AgeRequirement />
              {checkout.value?.hasSubstitutionPolicy && <Legal />}
            </div>
            <PlaceYourOrder onPlaceOrder={onPlaceOrder} />
          </>
        )}
      </div>
      {!readOnly && <Footer />}
    </div>
  );
}

export default OrderSummary;
