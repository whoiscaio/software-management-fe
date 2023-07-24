import { Box, FormModalContainer, Overlay } from './styles';
import Field from '../Field';
import { FormEvent, useState } from 'react';
import useFormErrors from '../../../hooks/useFormErrors';

type FormModalProps = {
  title: string,
  action: (text1: string, text2?: string) => Promise<void>,
  close: () => void,
  confirmButtonText: string,
};

export default function FormModal({ title, action, close, confirmButtonText }: FormModalProps) {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const { getErrors, setError, cleanErrorsByFieldname } = useFormErrors();

  function validateName() {
    if (!name) {
      setError('name', 'O campo nome é obrigatório.');
      return false;
    }

    cleanErrorsByFieldname('name');
    return true;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!validateName()) return;

    await action(name, description);

    close();
  }

  return (
    <Overlay>
      <Box bg="main">
        <FormModalContainer onSubmit={handleSubmit}>
          <header>
            <h2>{title}</h2>
          </header>
          <div className="fields">
            <Field label="Nome" value={name} setValue={setName} error={getErrors('name')} />
            <Field label="Descrição" value={description} setValue={setDescription} type="textarea" />
          </div>
          <div className="actions">
            <button type="button" onClick={close} className="cancel-button button-pattern-measures">Cancelar</button>
            <button type="submit" className="contrast-button confirm-button button-pattern-measures">{confirmButtonText}</button>
          </div>
        </FormModalContainer>
      </Box>
    </Overlay>
  );
}
