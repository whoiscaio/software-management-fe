
import { FormEvent, useEffect, useRef, useState } from 'react';
import useFormErrors from '../../../hooks/useFormErrors';
import { Box, FormModalContainer, Overlay } from './styles';
import Field from '../Field';
import { ISimpleTeam } from '../../types/teamTypes';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FormModalProps = {
  title: string,
  action: (text1: string, text2?: string, text3?: string) => Promise<void>,
  close: () => void,
  confirmButtonText: string,
  text1?: string,
  text2?: string,
  options?: ISimpleTeam[],
  defaultOption?: ISimpleTeam;
};

export default function FormModal({ title, action, close, confirmButtonText, text1, text2, options, defaultOption }: FormModalProps) {
  const [name, setName] = useState<string>(text1 || '');
  const [description, setDescription] = useState<string>(text2 || '');
  const [selectedOption, setSelectedOption] = useState<ISimpleTeam>(defaultOption || options?.[0] || {} as ISimpleTeam);
  const [isSelectMenuOpen, setIsSelectMenuOpen] = useState<boolean>(false);

  const selectTrigger = useRef<HTMLDivElement>(null);

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

    await action(name, description, selectedOption.id);

    close();
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (selectTrigger.current && isSelectMenuOpen && !selectTrigger.current.contains(e.target as Node)) {
        setIsSelectMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    () => document.removeEventListener('click', handleClickOutside);
  }, [isSelectMenuOpen, selectTrigger]);

  return (
    <Overlay>
      <Box $bg="main">
        <FormModalContainer onSubmit={handleSubmit}>
          <header>
            <h2>{title}</h2>
          </header>
          <div className="fields">
            <Field label="Nome" value={name} setValue={setName} error={getErrors('name')} />
            <Field label="Descrição" value={description} setValue={setDescription} type="textarea" />
            {
              options && options.length > 0 && selectedOption && selectedOption?.name && (
                <div className={`custom-select ${isSelectMenuOpen ? 'open' : ''}`}>
                  <div
                    ref={selectTrigger}
                    className="select-trigger"
                    onClick={() => setIsSelectMenuOpen((prevState) => !prevState)}
                  >
                    <p>{selectedOption.name}</p>
                    {isSelectMenuOpen ? <ChevronUp /> : <ChevronDown />}
                    {
                      isSelectMenuOpen && (
                        <div className="select-options">
                          {
                            options.map((option) => (
                              <div className="option" key={option.id} onClick={() => setSelectedOption(option)}>
                                <p>{option.name}</p>
                              </div>
                            ))
                          }
                        </div>
                      )
                    }
                  </div>
                </div>
              )
            }
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
