import { FC, useMemo, useState } from 'preact/compat';
import { TagSolid, XMarkSolid } from '@liquidcommerceteam/preact-heroicons';
import GenericFormInput from '../../../common/component/GenericFormInput';
import classNames from 'classnames';
import currencyFormat from '../../../common/util/currencyFormat';
import { cart, getTheme, selectedRetailerId } from '@/signals';

const PromoCode: FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [showPriceSection, setShowPriceSection] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [errors, setErrors] = useState(null);
  const { checkout } = getTheme().cart;

  const totalPriceByRetailer = useMemo(() => {
    if (!selectedRetailerId.value) {
      return cart.value.subtotal;
    }

    const price = cart.value.items
      .filter((el) => el.retailerId === selectedRetailerId.value)
      .reduce((sum, item) => sum + item.price * item.quantity, 0);

    return price;
  }, []);

  const handleChange = (id: string | number, value: string | ((prevState: string) => string)) => {
    setPromoCode(value);

    if (value === '') {
      setErrors({ ...errors, promoCode: null });
    }
  };

  const handleApply = (e: Event) => {
    e.preventDefault();
    if (promoCode !== cart.value.attributes?.promoCode?.value) {
      setErrors('Invalid promo code');
      setPromoCode('');
    } else {
      setErrors('');
      setShowInput(false);
    }
    if (!errors && promoCode === cart.value.attributes?.promoCode?.value) {
      setShowPriceSection(true);
      setShowInput(false);
    } else {
      setShowPriceSection(false);
      setShowInput(true);
    }
  };

  return (
    <div className={'bg-transparent'}>
      <p
        className={classNames(
          checkout.text.havePromo.animation,
          checkout.text.havePromo.text,
          !showInput && !promoCode
            ? checkout.text.havePromo.maxOppacity
            : checkout.text.havePromo.minOppacity,
        )}
        onClick={() => setShowInput(true)}
      >
        Have a Promo code?
      </p>
      <div className={checkout.wrapper.apply}>
        <form
          className={classNames(
            checkout.form.animation,
            checkout.form.text,
            showInput ? checkout.form.maxOppacity : checkout.form.minOppacity,
          )}
          onSubmit={handleApply}
        >
          <GenericFormInput
            label=""
            id="promoCode"
            className={checkout.wrapper.input}
            formData={{ promoCode }}
            handleChange={handleChange}
            error={(errors as string) || null}
            placeholder="Enter Promo Code"
            required={false}
          />
          <button className={checkout.button.apply} type="submit">
            Apply
          </button>
        </form>
      </div>

      <div
        className={classNames(
          checkout.price.text,
          checkout.price.animation,
          !errors && showPriceSection ? checkout.price.maxOppacity : checkout.price.minOppacity,
        )}
      >
        <div className={checkout.wrapper.subtotal}>
          <div className={checkout.text.base}>Subtotal</div>
          <div className={checkout.text.base}>{currencyFormat(totalPriceByRetailer)}</div>
        </div>
        <div className={checkout.wrapper.promoCode}>
          <div className={checkout.text.base}>
            Promo Code
            <span className={checkout.wrapper.logo}>
              <TagSolid className={checkout.logo.tag} />
              <span className={checkout.text.promoCode}>{promoCode}</span>
              <XMarkSolid
                className={checkout.logo.xmark}
                onClick={() => {
                  setPromoCode('');
                  setShowPriceSection(false);
                }}
              />
            </span>
          </div>
          <div className={checkout.text.base}>- {currencyFormat(cart.value.discounts)}</div>
        </div>
      </div>
    </div>
  );
};

export default PromoCode;
