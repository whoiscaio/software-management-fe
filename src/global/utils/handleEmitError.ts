import { toast } from 'react-toastify';

export default function handleEmitError(text?: string) {
  const alternativeErrorMessage = 'Algum erro aconteceu, tente novamente mais tarde.';

  toast.error(text || alternativeErrorMessage);
}
