import jwtDecode from 'jwt-decode';
import { IAccount } from '../../types/accountTypes';

export default function decode(token: string): { user: IAccount; } {
  return jwtDecode(token);
}
