import { useState } from 'react';
import AuthContainer from './styles';
import Field from './components/Field';
import { useNavigate } from 'react-router-dom';
import Page from '../../global/components/Page';

type AuthProps = {
  as: 'login' | 'signup';
};

export default function Auth({ as }: AuthProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const navigate = useNavigate();

  function handleLogin() {
    console.log('login action');
  }

  return (
    <Page>
      <AuthContainer>
        <h1>Bem-vindo!</h1>

        <form>
          <div className="fields">
            <Field value={username} setValue={setUsername} label="Usuário" />
            <Field value={password} setValue={setPassword} label="Senha" type="password" />
            {
              as === 'signup' && (
                <Field value={confirmPassword} setValue={setConfirmPassword} label="Confirmar senha" />
              )
            }
          </div>
          <div className="actions">
            <div>
              {
                as === 'login' && (
                  <button type="button" className="signup-button" onClick={() => navigate('/signup')}>Não possui conta?</button>
                )
              }
            </div>
            <button type="button" className="connect-button" onClick={handleLogin}>{as === 'login' ? 'Conectar' : 'Cadastrar'}</button>
          </div>
        </form>
      </AuthContainer>
    </Page>
  );
}
