import { FormEvent, useContext, useEffect, useState } from 'react';
import AuthContainer from './styles';
import Field from './components/Field';
import { useNavigate } from 'react-router-dom';
import Page from '../../global/components/Page';
import useFormErrors from '../../hooks/useFormErrors';
import AuthService from '../../services/AuthService';
import { AuthContext } from '../../contexts/AuthContext';
import { TeamContext } from '../../contexts/TeamContext';
import decode from '../../global/utils/decode';

type AuthProps = {
  as: 'login' | 'signup';
};

export default function Auth({ as }: AuthProps) {
  const { isAuthenticated, authenticate } = useContext(AuthContext);
  const { handleSetTeams } = useContext(TeamContext);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const navigate = useNavigate();
  const { getErrors, setError, cleanErrorsByFieldname, cleanAllErrors } = useFormErrors();

  function resetState() {
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  }

  function handleNavigate(path: string) {
    cleanAllErrors();
    resetState();

    navigate(path);
  }

  function validateUsername() {
    if (!username) {
      setError('username', 'O campo usuário é obrigatório.');
      return false;
    }

    cleanErrorsByFieldname('username');
    return true;
  }

  function validatePassword() {
    if (!password) {
      setError('password', 'O campo senha é obrigatório.');
      return false;
    }

    cleanErrorsByFieldname('password');
    return true;
  }

  function validateConfirmPassword() {
    if (as === 'signup') {
      if (!confirmPassword) {
        setError('confirmPassword', 'O campo de confirmação é obrigatório.');
        return false;
      }

      if (confirmPassword !== password) {
        setError('confirmPassword', 'As senhas se diferem.');
        return false;
      }
    }

    cleanErrorsByFieldname('confirmPassword');
    return true;
  }

  function validateFields() {
    const isUserValid = validateUsername();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    return (isUserValid && isPasswordValid && isConfirmPasswordValid);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!validateFields()) return;

    handleFormAction();
  }

  async function handleFormAction() {
    if (as === 'login') {
      const response = await AuthService.login({
        username,
        password
      });

      if (response) {
        const { user } = decode(response.data.token);

        authenticate(user);
        handleSetTeams(user.teams);
      }

      return;
    }

    const response = await AuthService.signup({
      username,
      password
    });

    if (response) {
      resetState();
      navigate('/login');
    }

    return;
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

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
                  type="password"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                  label="Confirmar senha"
                  error={getErrors('confirmPassword')}
                />
              )
            }
          </div>
          <div className="actions">
            <button type="submit" className="connect-button">{as === 'login' ? 'CONECTAR' : 'CADASTRAR'}</button>
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
