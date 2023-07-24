import { Overlay, DialogContainer, Box } from './styles';

type DialogProps = {
  close: () => void,
  confirm: () => void,
  title: string,
  description: string,
  confirmButtonText: string;
};

export default function Dialog({ close, confirm, title, description, confirmButtonText }: DialogProps) {
  return (
    <Overlay>
      <Box>
        <DialogContainer>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="actions">
            <button
              type="button"
              onClick={close}
              className="cancel-button button-pattern-measures"
            >Cancelar</button>
            <button
              type="button"
              onClick={confirm}
              className="confirm-button button-pattern-measures"
            >{confirmButtonText}</button>
          </div>
        </DialogContainer>
      </Box>
    </Overlay>
  );
}
