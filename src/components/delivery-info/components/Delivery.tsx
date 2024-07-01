import Joi from 'joi';
import GenericForm, { GenericFormField } from '../../common/component/GenericForm';
import GenericFormInput from '../../common/component/GenericFormInput';
import DeliveryInfo from './DeliveryInfo';
import { checkout, deliveryInformation } from '@/signals/checkout.signals';
import InfoTooltip from '@/assets/icons/InfoTooltip';

interface DeliveryProps {
  onSubmit: (formData: any) => void;
  showCollapse: boolean;
  setShowCollapse: (value: boolean) => void;
}

const formatPhoneNumber = (phoneNumber: string) => {
  let formattedPhoneNumber = '';

  const input = `${phoneNumber}`.replace(/\D/g, '').substring(0, 10);
  const areaCode = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) {
    formattedPhoneNumber = `(${areaCode}) ${middle}-${last}`;
  } else if (input.length > 3) {
    formattedPhoneNumber = `(${areaCode}) ${middle}`;
  } else if (input.length > 0) {
    formattedPhoneNumber = `(${areaCode}`;
  }

  return formattedPhoneNumber;
};

const fields = [
  {
    name: 'email',
    label: 'Email',
    validation: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label('Email')
      .messages({
        'string.email': 'Please enter a valid Email Address',
        'any.required': 'Email Address is required',
      }),
    render: (formData, handleFocus, handleChange, error, label) => (
      <GenericFormInput
        id="email"
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
    name: 'canEmail',
    label: "I'd like to receive occasional emails with updates and special offers",
    validation: Joi.boolean().optional().label('Subscribe'),
    render: (formData, handleFocus, handleChange, error, label) => (
      <div className="basis-full">
        <label className="flex flex-row gap-2 items-start">
          <input
            type="checkbox"
            name="canEmail"
            checked={formData.canEmail || false}
            className="mt-1 scale-110"
            onChange={(event) => handleChange('canEmail', event.currentTarget.checked)}
          />
          <span className="text-sm">{label}</span>
        </label>
      </div>
    ),
  },
  {
    name: 'firstName',
    label: 'First Name',
    validation: Joi.string().required().label('First Name'),
    render: (formData, handleFocus, handleChange, error, label) => (
      <GenericFormInput
        id="firstName"
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
    validation: Joi.string().required().label('Last Name'),
    render: (formData, handleFocus, handleChange, error, label) => (
      <GenericFormInput
        id="lastName"
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
        icon={<InfoTooltip />}
        disabled
        required
      />
    ),
  },
  {
    name: 'two',
    label: 'Address 2 (Apt, Suite, etc)',
    validation: Joi.string().allow('').optional().label('Address 2'),
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
        disabled
        required
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
        disabled
        required
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
        disabled
        required
      />
    ),
  },
  {
    name: 'phone',
    label: 'Phone',
    validation: Joi.string()
      .required()
      .pattern(
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
      )
      .messages({
        'string.pattern.base': 'Please enter a valid phone number',
        'any.required': 'Phone Number is required',
      })
      .label('Phone'),
    render: (formData, handleFocus, handleChange, error, label) => (
      <GenericFormInput
        id="phone"
        className="basis-full"
        formData={formData}
        handleFocus={handleFocus}
        handleChange={(fieldName, value) => handleChange(fieldName, formatPhoneNumber(value))}
        error={error}
        label={label}
        required
      />
    ),
  },
] as GenericFormField[];

function Delivery({ showCollapse, setShowCollapse, onSubmit }: DeliveryProps) {
  if (!checkout.value) {
    return null;
  }

  return (
    <div className="py-4 px-6 flex flex-col gap-4 rounded-2xl bg-secondary">
      <div className="font-bold flex flex-row justify-between items-center">
        <div className="text-lg">Delivery Information</div>
        {showCollapse && (
          <div
            className="text-sm text-blue-500 cursor-pointer"
            onClick={() => setShowCollapse(false)}
          >
            Edit
          </div>
        )}
      </div>
      <div>
        {showCollapse ? (
          <DeliveryInfo showTitle={false} shippingDetails={deliveryInformation.value} />
        ) : (
          <GenericForm
            className="flex flex-wrap gap-y-4 items-center"
            fields={fields}
            initialData={deliveryInformation.value}
            submitText="Save & Continue"
            onSubmit={onSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default Delivery;
