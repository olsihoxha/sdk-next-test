import { useEffect, useMemo, useState } from 'preact/compat';
import Joi, { ValidationOptions } from 'joi';
import { Fragment, JSX } from 'preact';
import classNames from 'classnames';
import { useStyles } from '../../context/ThemeContext/ThemeContext';
import Button from '../../../common/ui/Button/Button';

export interface GenericFormField {
  label: string;
  name: string;
  render: (
    formData: Record<string, any>,
    handleFocus: (fieldName: string) => void,
    handleChange: (fieldName: string, value: any) => void,
    error: string,
    label: string,
    required?: boolean,
  ) => JSX.Element;
  required?: boolean;
  validation?: Joi.Schema;
}

interface GenericFormProps {
  className?: string;
  fields: GenericFormField[];
  initialData?: Record<string, any>;
  onSubmit: (formData: Record<string, any>) => void;
  setFieldValue?: (fieldName: string, value: any) => void;
  submitText?: string;
}

const validationOptions = { errors: { wrap: { label: false } } } as ValidationOptions;

function GenericForm({
  fields,
  initialData = {},
  onSubmit,
  submitText = 'Submit',
  className,
}: GenericFormProps) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const styles = useStyles();

  const validation = useMemo(() => {
    const validation = {};
    fields.forEach((field) => {
      if (field.validation) {
        validation[field.name] = field.validation;
      }
    });
    return Joi.object(validation);
  }, [fields]);

  const checkValidation = () => {
    const validationErrors = {};
    validation
      .validate(formData, { ...validationOptions, abortEarly: false, allowUnknown: true })
      .error?.details.forEach(
        (error) => {
          validationErrors[error.path[0]] = error.message;
        },
        [formData],
      );
    if (Object.keys(validationErrors).length > 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    checkValidation();
  }, [fields, initialData, validation]);

  const handleFocus = (fieldName: string) => {
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
    // Validate the field when the value changes
    const field = fields.find((field) => field.name === fieldName);
    if (field.validation) {
      const { error } = field.validation.validate(formData[field.name], validationOptions);
      setErrors((prevErrors: Record<string, string>) => {
        if (!error) {
          // Remove the fieldName key from errors if there are no errors
          delete prevErrors[fieldName];
          return prevErrors;
        }
        return { ...prevErrors, [fieldName]: error.details[0].message };
      });
      checkValidation();
    }
  };

  const handleChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate all fields before submitting
    const validationErrors = {};
    validation
      .validate(formData, { ...validationOptions, abortEarly: false, allowUnknown: true })
      .error?.details.forEach(
        (error) => {
          validationErrors[error.path[0]] = error.message;
        },
        [formData],
      );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsDisabled(false);
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classNames(className)}>
        {fields.map((field) => {
          return (
            <Fragment key={field.name}>
              {field.render(
                formData,
                (fieldName) => handleFocus(fieldName),
                (fieldName, value) => handleChange(fieldName, value),
                errors[field.name],
                field.label,
                field.required,
              )}
            </Fragment>
          );
        })}
        <Button
          disabled={Object.keys(errors).length > 0 || isDisabled}
          className="rounded-md basis-full"
          variant="solid"
          style={{ background: styles.colors.primary }}
        >
          {submitText}
        </Button>
      </div>
    </form>
  );
}

export default GenericForm;
