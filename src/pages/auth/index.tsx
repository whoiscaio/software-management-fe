import { FormEvent, useState } from 'react';
import AuthContainer from './styles';
import Field from './components/Field';
import { useNavigate } from 'react-router-dom';
import Page from '../../global/components/Page';
import useFormErrors from '../../hooks/useFormErrors';

type AuthProps = {
  as: 'login' | 'signup';
};

export default function Auth({ as }: AuthProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const navigate = useNavigate();
  const { getErrors, setError, cleanAllErrors } = useFormErrors();

  function handleNavigate(path: string) {
    cleanAllErrors();

    navigate(path);
  }

  function validateFields(): boolean {
    let isThereAnError = false;

    if (!username) {
      setError('username', 'O campo usuário é obrigatório.');
      isThereAnError = true;
    }

    if (!password) {
      setError('password', 'O campo senha é obrigatório.');
      isThereAnError = true;
    }

    if (as === 'signup') {
      if (!confirmPassword) {
        setError('confirmPassword', 'O campo de confirmação é obrigatório.');
        isThereAnError = true;
      }

      if (confirmPassword !== password) {
        setError('confirmPassword', 'As senhas inseridas são diferentes.');
        isThereAnError = true;
      }
    }

    if (isThereAnError) {
      return false;
    }

    return true;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!validateFields()) return;

    handleLogin();
  }

  function handleLogin() {
    console.log('login action');
  }

  return (
    <Page verticalAlign='center'>
      <AuthContainer>
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <Field value={username} setValue={setUsername} label="Usuário" error={getErrors('username')} />
            <Field type="password" value={password} setValue={setPassword} label="Senha" error={getErrors('password')} />
            {
              as === 'signup' && (
                <Field
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                  label="Confirmar senha"
                  error={getErrors('confirmPassword')}
                />
              )
            }
          </div>
          <div className="actions">
            <button type="submit" className="connect-button" onClick={handleLogin}>{as === 'login' ? 'CONECTAR' : 'CADASTRAR'}</button>
            <div className="signup-button-wrapper">
              {
                as === 'login' ? (
                  <>
                    <p>Não é registrado?</p>
                    <button type="button" className="signup-button" onClick={() => handleNavigate('/signup')}>Crie uma conta</button>
                  </>
                ) : (
                  <>
                    <p>Já é registrado?</p>
                    <button type="button" className="signup-button" onClick={() => handleNavigate('/login')}>Conectar-se</button>
                  </>
                )
              }
            </div>
          </div>
        </form>
      </AuthContainer>
    </Page>
  );
}
