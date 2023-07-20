import { ChangeEvent } from 'react';
import { FieldContainer } from '../styles';
import { IFormError } from '../../../types/formError';

type FieldProps = {
  label: string,
  value: string,
  type?: string,
  setValue: (value: string) => void,
  error?: IFormError;
};

export default function Field({ label, value, type, setValue, error }: FieldProps) {
  function handleChangeValue(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <FieldContainer>
      <input value={value} onChange={handleChangeValue} type={type || 'text'} placeholder={label} />
      {
        error && <p className="error-message">{error.message}</p>
      }
    </FieldContainer>
  );
}
