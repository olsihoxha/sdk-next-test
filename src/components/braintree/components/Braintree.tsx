import { useCallback, useEffect, useRef } from 'preact/compat';
import {
  IPaymentFormParams,
  LIQUID_PAY_CLASS_HOSTED_FIELD,
  LIQUID_PAY_CLASS_HOSTED_FIELD_INVALID,
  LIQUID_PAYMENT_FORM_FIELD_ID,
} from '@liquidcommercedev/sdk';
import { useClient } from '@/signals';

const formAttributes = {
  number: {
    empty: 'Card Number is required',
    invalid: 'Card Number is invalid',
  },
  expirationDate: {
    empty: 'Expiration Date is required',
    invalid: 'Expiration Date is invalid',
  },
  cvv: {
    empty: 'CVV is required',
    invalid: 'CVV is invalid',
  },
};

function Braintree({ setToken }) {
  const { client } = useClient();
  const paymentFormRef = useRef<HTMLDivElement>(null);
  const paymentFormResponseRef = useRef<void | Record<string, any>>(null);
  const focusedField = useRef(null);

  const handleTokenize = useCallback(
    async (event) => {
      if (Object.keys(event).every((key) => event[key].isValid)) {
        try {
          if (paymentFormResponseRef.current) {
            const token = await paymentFormResponseRef.current.getToken();
            setToken({ token, forceValidation });
          }
        } catch (error) {
          console.error('Tokenize failed', error.message);
        }
      } else {
        setToken({ token: undefined, forceValidation });
      }
    },
    [setToken],
  );

  const handleOnBlur = useCallback(
    (event) => {
      const errorContainer: HTMLElement = paymentFormRef.current.querySelector(
        `#${LIQUID_PAYMENT_FORM_FIELD_ID[focusedField.current].error}`,
      );
      if (errorContainer) {
        errorContainer.style.height = 'auto';
        errorContainer.style.opacity = '1';
        const inputContainer: HTMLElement = paymentFormRef.current.querySelector(
          `#${LIQUID_PAYMENT_FORM_FIELD_ID[focusedField.current].input}`,
        );
        inputContainer.classList.add(LIQUID_PAY_CLASS_HOSTED_FIELD_INVALID);
        if (!event[focusedField.current]?.isValid && !event[focusedField.current]?.isEmpty) {
          errorContainer.textContent = formAttributes[focusedField.current].invalid;
        } else {
          inputContainer.classList.remove(LIQUID_PAY_CLASS_HOSTED_FIELD_INVALID);
          errorContainer.textContent = '';
          errorContainer.style.height = '0';
          errorContainer.style.opacity = '0';
        }
      }
      handleTokenize(event);
    },
    [handleTokenize],
  );

  const handleOnFocus = (event) => {
    focusedField.current = Object.keys(event).find((eventField) => {
      return event[eventField].isFocused;
    });
  };

  const forceValidation = () => {
    const containers: Array<HTMLElement> = Array.from(
      paymentFormRef.current.querySelectorAll(`.${LIQUID_PAY_CLASS_HOSTED_FIELD}`),
    );
    if (
      ![...containers].some((container) =>
        container.classList.contains(LIQUID_PAY_CLASS_HOSTED_FIELD_INVALID),
      )
    ) {
      for (const hostedField in LIQUID_PAYMENT_FORM_FIELD_ID) {
        const errorContainer: HTMLElement = paymentFormRef.current.querySelector(
          `#${LIQUID_PAYMENT_FORM_FIELD_ID[hostedField].error}`,
        );
        if (errorContainer) {
          errorContainer.style.height = 'auto';
          errorContainer.style.opacity = '1';
          const inputContainer: HTMLElement = paymentFormRef.current.querySelector(
            `#${LIQUID_PAYMENT_FORM_FIELD_ID[hostedField].input}`,
          );
          inputContainer.classList.add(LIQUID_PAY_CLASS_HOSTED_FIELD_INVALID);
          errorContainer.textContent = formAttributes[hostedField].empty;
        }
      }
    }
  };

  useEffect(() => {
    if (client?.paymentForm && paymentFormRef.current?.id === 'payment-fields') {
      const buildPaymentForm = async () => {
        try {
          paymentFormResponseRef.current = await client.paymentForm({
            parentElement: paymentFormRef.current,
            type: 'braintree',
            grouped: true,
            plain: false,
            labels: true,
            fieldEvents: {
              onFocus: handleOnFocus,
              onBlur: handleOnBlur,
            },
          } as IPaymentFormParams);
        } catch (error) {
          console.error('Payment form failed', error.message);
        }
      };
      buildPaymentForm();
    }
  }, [handleOnBlur, client]);

  useEffect(() => {
    if (paymentFormRef.current?.id !== 'payment-fields') {
      setToken({
        token: undefined,
        forceValidation,
      });
    }
  }, [paymentFormRef, setToken]);

  return <div id="payment-fields" ref={paymentFormRef} />;
}

export default Braintree;
