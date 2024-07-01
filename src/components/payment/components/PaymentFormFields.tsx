import Joi from 'joi';
import { useEffect, useMemo, useState } from 'preact/compat';
import GenericForm, { GenericFormField } from '../../common/component/GenericForm';
import GenericFormInput from '../../common/component/GenericFormInput';
import { useStyles } from '../../common/context/ThemeContext/ThemeContext';
import Title from '../../common/component/Title';
import PaymentSummary from './PaymentSummary';
import { token } from '@/signals/payment.signals';
import { PaymentProvider } from './PaymentOptionProviders';
import {
  deliveryInformation,
  paymentDetails,
  readyToPay,
  setPaymentDetails,
} from '@/signals/checkout.signals';
import { useSignalEffect } from '@preact/signals';

interface PaymentProps {
  disabled?: boolean;
}

function PaymentFormFields({ disabled }: PaymentProps) {
  const styles = useStyles();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(null);
  const [paymentProvider, setPaymentProvider] = useState(PaymentProvider.Card);

  const [sameAddress, setSameAddress] = useState(true);

  useEffect(() => {
    setIsDisabled(disabled);
    setPaymentProvider(PaymentProvider.Card);
  }, [disabled]);

  useSignalEffect(() => {
    setIsDisabled(!readyToPay.value);
  });

  useEffect(() => {
    setIsCollapsed(paymentProvider !== PaymentProvider.Card);
  }, [paymentProvider]);

  const onSubmit = (formData) => {
    setPaymentDetails(formData);
    setIsCollapsed(true);
  };

  const defaultFields = useMemo(() => {
    return [
      {
        name: 'paymentForm',
        validation: Joi.any().custom((value, helper) => {
          if (!token?.value?.token) {
            token?.value?.forceValidation();
            return helper.message({ custom: 'Payment form invalid' });
          }
          return true;
        }),
        render: () => {
          return (
            <div className="basis-full">
              <slot name="payment-form" />
            </div>
          );
        },
      },
      {
        name: 'cardName',
        label: 'Name on Card',
        validation: Joi.string().required().label('Name on Card'),
        render: (formData, handleFocus, handleChange, error, label) => (
          <GenericFormInput
            id="cardName"
            className="basis-full"
            placeholderColor="placeholder-[#757575]"
            inputFieldPadding="py-[9px]"
            placeholder="John Smith"
            formData={formData}
            handleFocus={handleFocus}
            handleChange={handleChange}
            error={error}
            label={label}
            required
          />
        ),
      },
    ] as GenericFormField[];
  }, []);

  const billingAddressFields = useMemo(() => {
    return [
      {
        render: () => <Title title="Billing address" className="basis-full" />,
      },
      {
        name: 'firstName',
        label: 'First Name',
        validation: sameAddress ? Joi.optional() : Joi.string().required().label('First Name'),
        render: (formData, handleFocus, handleChange, error, label) => (
          <GenericFormInput
            id="firstName"
            placeholder="John"
            className="basis-full sm:basis-1/2 sm:pr-2 pr-0"
            formData={formData}
            handleFocus={handleFocus}
            handleChange={handleChange}
            error={error}
            label={label}
            required
          />
        ),
      },
      {
        name: 'lastName',
        label: 'Last Name',
        validation: sameAddress ? Joi.optional() : Joi.string().required().label('Last Name'),
        render: (formData, handleFocus, handleChange, error, label) => (
          <GenericFormInput
            id="lastName"
            placeholder="Smith"
            className="basis-full sm:basis-1/2 sm:pl-2 pr-0"
            formData={formData}
            handleFocus={handleFocus}
            handleChange={handleChange}
            error={error}
            label={label}
            required
          />
        ),
      },
      {
        name: 'one',
        label: 'Address 1',
        validation: Joi.string().required().label('Address 1'),
        render: (formData, handleFocus, handleChange, error, label) => (
          <GenericFormInput
            id="one"
            className="basis-full"
            formData={formData}
            handleFocus={handleFocus}
            handleChange={handleChange}
            error={error}
            label={label}
            required
          />
        ),
      },
      {
        name: 'two',
        label: 'Address 2 (Apt, Suite, etc)',
        validation: sameAddress ? Joi.optional() : Joi.string().required().label('Address 2'),
        render: (formData, handleFocus, handleChange, error, label) => (
          <GenericFormInput
            id="two"
            className="basis-full sm:basis-1/2 sm:pr-2 pr-0"
            formData={formData}
            handleFocus={handleFocus}
            handleChange={handleChange}
            error={error}
            label={label}
          />
        ),
      },
      {
        name: 'city',
        label: 'City',
        validation: Joi.string().allow('').required().label('City'),
        render: (formData, handleFocus, handleChange, error, label) => (
          <GenericFormInput
            id="city"
            className="basis-full sm:basis-1/2 sm:pl-2 p-0"
            formData={formData}
            handleFocus={handleFocus}
            handleChange={handleChange}
            error={error}
            label={label}
          />
        ),
      },
      {
        name: 'state',
        label: 'State',
        validation: Joi.string().allow('').required().label('State'),
        render: (formData, handleFocus, handleChange, error, label) => (
          <GenericFormInput
            id="state"
            className="basis-full sm:basis-1/2 sm:pr-2 pr-0"
            formData={formData}
            handleFocus={handleFocus}
            handleChange={handleChange}
            error={error}
            label={label}
          />
        ),
      },
      {
        name: 'zip',
        label: 'Zip',
        validation: Joi.string().allow('').required().label('Zip'),
        render: (formData, handleFocus, handleChange, error, label) => (
          <GenericFormInput
            id="zip"
            className="basis-full sm:basis-1/2 sm:pl-2 pl-0"
            formData={formData}
            handleFocus={handleFocus}
            handleChange={handleChange}
            error={error}
            label={label}
          />
        ),
      },
    ] as GenericFormField[];
  }, [sameAddress]);

  const fields = useMemo(
    () => (sameAddress ? [...defaultFields] : [...defaultFields, ...billingAddressFields]),
    [billingAddressFields, defaultFields, sameAddress],
  );

  return (
    <div
      className="py-4 px-6 flex flex-col gap-4 rounded-2xl"
      style={{
        fontFamily: styles.text.headings.font,
        backgroundColor: styles.colors.bg.secondary,
      }}
    >
      {isCollapsed || isDisabled ? (
        <Title title="Pay With" textClassName={`${isDisabled ? 'opacity-50' : 'opacity-100'}`}>
          {!isDisabled && paymentDetails.value && (
            <div
              className="text-md font-semibold text-blue-500 cursor-pointer"
              onClick={() => setIsCollapsed(false)}
            >
              Edit
            </div>
          )}
        </Title>
      ) : (
        <Title title="Pay With" className="flex-col lg:flex-row items-start gap-2">
          <label className="font-medium text-sm flex items-center">
            <input
              type="checkbox"
              name="subscribe"
              checked={sameAddress}
              onChange={(event) => setSameAddress(event.currentTarget.checked)}
              className="mr-2"
            />
            {'Same Billing & Shipping Address'}
          </label>
        </Title>
      )}
      {/* TODO: Uncomment when we have multiple payment options */}
      {/*{!isDisabled && !(isCollapsed && paymentProvider) && (*/}
      {/*  <PaymentOptionProviders selected={paymentProvider} onSelected={setPaymentProvider} />*/}
      {/*)}*/}
      {isCollapsed || isDisabled
        ? paymentDetails.value && (
            <PaymentSummary paymentDetails={paymentDetails?.value} token={token.value?.token} />
          )
        : paymentProvider && (
            <GenericForm
              className="flex flex-wrap gap-y-6 items-center"
              fields={fields}
              initialData={{
                paymentForm: null,
                ...deliveryInformation.value,
                ...paymentDetails?.value,
              }}
              submitText="Save & Continue"
              onSubmit={onSubmit}
            />
          )}
    </div>
  );
}

export default PaymentFormFields;
