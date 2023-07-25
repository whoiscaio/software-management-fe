import { styled } from 'styled-components';

type CheckboxProps = {
  checked: boolean;
};

const CheckboxContainer = styled.div`
  height: 25px;
  width: 25px;

  display: block;
  position: relative;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: .2rem;

    cursor: pointer;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 8px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default function Checkbox({ checked }: CheckboxProps) {
  return (
    <CheckboxContainer className="container">
      <input type="checkbox" checked={checked} />
      <span className="checkmark"></span>
    </CheckboxContainer>
  );
}
