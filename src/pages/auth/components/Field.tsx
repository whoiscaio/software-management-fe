import { ChangeEvent } from 'react';
import { FieldContainer } from '../styles';

type FieldProps = {
  label: string,
  value: string,
  type?: string,
  setValue: (value: string) => void;
};

export default function Field({ label, value, type, setValue }: FieldProps) {
  function handleChangeValue(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <FieldContainer>
      <p>{label}</p>
      <input value={value} onChange={handleChangeValue} type={type || 'text'} />
    </FieldContainer>
  );
}
