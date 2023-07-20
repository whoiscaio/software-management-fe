import { useState } from 'react';
import { IFormError } from '../types/formError';

export default function useFormErrors() {
  const [errors, setErrors] = useState<IFormError[]>([]);

  function setError(field: string, message: string) {
    if (errors.find((error) => error.field === field && error.message === message)) return;

    cleanErrors(field);

    setErrors((prevState) => [
      ...prevState,
      {
        field,
        message,
      }
    ]);
  }

  function cleanAllErrors() {
    setErrors([]);
  }

  function cleanErrors(field: string) {
    setErrors((prevState) => prevState.filter((error) => error.field !== field));
  }

  function getErrors(field: string) {
    return errors.find((error) => error.field === field);
  }

  return {
    setError,
    getErrors,
    cleanAllErrors
  };
}
