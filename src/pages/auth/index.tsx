import { ChangeEvent, useState } from 'react';
import AuthContainer from './styles';
import Field from './components/Field';

type AuthProps = {
  as: 'login' | 'signup';
};

export default function Auth({ as }: AuthProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <AuthContainer>
      <h1>Bem-vindo!</h1>

      <form>
        <Field value={username} setValue={setUsername} label="Usuário" />
        <Field value={password} setValue={setPassword} label="Senha" type="password" />
        {
          as === 'signup' && (
            <Field value={confirmPassword} setValue={setConfirmPassword} label="Confirmar senha" />
          )
        }
      </form>
    </AuthContainer>
  );
}
