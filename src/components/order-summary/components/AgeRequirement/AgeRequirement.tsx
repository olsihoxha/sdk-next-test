import { IdentificationOutline } from '@liquidcommerceteam/preact-heroicons';
import { useEffect, useState } from 'preact/compat';
import Joi from 'joi';
import { useStyles } from '../../../common/context/ThemeContext/ThemeContext';
import { birthDate, setBirthDate } from '@/signals';

export interface AgeRequirementProps {
  defaultBirthDate: string;
  onChange: (value: string) => void;
}

const formatBirthDate = (birthDate: string) => {
  let formattedDate = '';

  const input = `${birthDate}`.replace(/\D/g, '').substring(0, 8);
  const month = input.substring(0, 2);
  const day = input.substring(2, 4);
  const year = input.substring(4, 8);

  if (input.length > 4) {
    formattedDate = `${month}/${day}/${year}`;
  } else if (input.length > 2) {
    formattedDate = `${month}/${day}`;
  } else if (input.length > 0) {
    formattedDate = `${month}`;
  } else {
    formattedDate = null;
  }

  return formattedDate;
};

function convertToSdk(input: string) {
  const parts = input.split('/');
  return `${parts[2]}-${parts[0]}-${parts[1]}`;
}

function convertFromSdk(input: string) {
  const parts = input.split('-');
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

function AgeRequirement({ defaultBirthDate = '', onChange }: AgeRequirementProps) {
  const styles = useStyles();
  const [ageRequired, setAgeRequired] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (defaultBirthDate) {
      setBirthDate(convertFromSdk(defaultBirthDate));
      setAgeRequired(true);
    }
  }, [defaultBirthDate]);

  const internalOnChange = (value: string, errors?: Joi.ValidationError) => {
    setBirthDate(value);

    if (!errors && onChange) {
      onChange(convertToSdk(value));
    }
  };

  const validateBirthDate = (input: string) => {
    const { error } = Joi.string()
      .required()
      .pattern(
        /^02\/(?:[01]\d|2\d)\/(?:19|20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:19|20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:19|20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:19|20)\d{2}$/,
      )
      .messages({ 'string.pattern.base': 'Please enter a valid date of birth' })
      .label('Date of birth')
      .custom((value, helper) => {
        if (new Date().getFullYear() - new Date(value).getFullYear() < 21) {
          return helper.message({ custom: 'Must be at least 21 years of age' });
        }
        return true;
      })
      .validate(input, { errors: { wrap: { label: false } } });
    if (!error) {
      setErrorMessage('');
    } else {
      setErrorMessage(error.details[0].message);
    }

    return error;
  };

  return (
    <div
      className="p-4 flex flex-row gap-4 rounded-2xl"
      style={{ backgroundColor: styles.colors.bg.secondary }}
    >
      <div className="text-4xl">
        <IdentificationOutline />
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-xs">
          {`If a person over 21 is not available to receive this order, it will be returned for a $20 restocking fee.`}
          <br />
          {`Valid Government ID required.`}
        </div>
        <div>
          <label className="text-sm flex flex-row gap-2 items-start">
            <input
              type="checkbox"
              name="ageRequired"
              checked={ageRequired}
              className="mt-1 scale-110"
              onChange={(event) => {
                setAgeRequired(event.currentTarget.checked);
                if (!event.currentTarget.checked) {
                  setBirthDate(null);
                  setErrorMessage('');
                }
              }}
            />
            {`I certify that I am at least 21 years of age`}
          </label>
        </div>
        {ageRequired && (
          <div className="flex">
            <div className="flex flex-col gap-2 self-start text-xs w-full">
              <label className="font-bold flex flex-row gap-1">
                <span>Date of Birth</span>
                <span className="text-red-500">*</span>
              </label>
              <div
                className={`border border-${
                  errorMessage ? 'red' : 'gray'
                }-300 rounded-[10px] py-3 px-4 bg-white`}
              >
                <input
                  placeholder="MM/DD/YYYY"
                  className="text-sm w-full focus:outline-none"
                  type="text"
                  value={birthDate.value ?? ''}
                  onFocus={(event) => validateBirthDate(event.currentTarget.value)}
                  onInput={(event) => {
                    const newValue = formatBirthDate(event.currentTarget.value);
                    if (newValue !== event.currentTarget.value) {
                      event.currentTarget.value = newValue;
                    }
                    const errors = validateBirthDate(newValue);
                    internalOnChange(newValue, errors);
                  }}
                />
              </div>
              {errorMessage && <div class="text-red-500">{errorMessage}</div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AgeRequirement;
