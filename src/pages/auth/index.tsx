import Login from './components/Login';
import Signup from './components/Signup';

type AuthProps = {
  as: 'login' | 'signup';
};

export default function Auth({ as }: AuthProps) {
  return (
    <div>
      Auth <br />
      {
        as === 'login' ? <Login /> : <Signup />
      }
    </div>
  );
}
