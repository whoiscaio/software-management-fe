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
    <Page verticalAlign='center'>
      <AuthContainer>
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
            <button type="button" className="connect-button" onClick={handleLogin}>{as === 'login' ? 'CONECTAR' : 'CADASTRAR'}</button>
            <div className="signup-button-wrapper">
              {
                as === 'login' ? (
                  <>
                    <p>Não é registrado?</p>
                    <button type="button" className="signup-button" onClick={() => navigate('/signup')}>Crie uma conta</button>
                  </>
                ) : (
                  <>
                    <p>Já é registrado?</p>
                    <button type="button" className="signup-button" onClick={() => navigate('/login')}>Conectar-se</button>
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
