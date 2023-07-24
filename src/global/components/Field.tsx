import { ChangeEvent } from 'react';
import { IFormError } from '../../types/formError';
import { styled } from 'styled-components';

type FieldProps = {
  label: string,
  value: string,
  type?: string,
  setValue: (value: string) => void,
  error?: IFormError;
};

export const FieldContainer = styled.div`
  input, textarea {
    width: 100%;

    background: ${({ theme }) => theme.colors.lightMain};
    border-radius: .2rem;

    width: 100%;
    font-size: 1.2rem;

    padding: .8rem 1rem;
  }

  textarea {
    color: ${({ theme }) => theme.colors.white};
    border: 0;

    resize: vertical;
  }

  .error-message {
    color: ${({ theme }) => theme.colors.error};

    margin-top: .4rem;
  }
`;

export default function Field({ label, value, type, setValue, error }: FieldProps) {
  function handleChangeValue(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  return (
    <FieldContainer>
      {
        type === 'textarea' ? (
          <textarea value={value} rows={4} onChange={handleChangeValue} placeholder={label} />
        ) : (
          <input value={value} onChange={handleChangeValue} type={type || 'text'} placeholder={label} />
        )
      }
      {
        error && <p className="error-message">{error.message}</p>
      }
    </FieldContainer>
  );
}
