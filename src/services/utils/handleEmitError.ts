import { toast } from 'react-toastify';

export default function handleEmitError(text?: string) {
  const alternativeErrorMessage = 'Algum erro aconteceu durante a conexão, tente novamente.';

  toast.error(text || alternativeErrorMessage);
}
