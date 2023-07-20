import { Theme } from '../styles/theme/mainTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}
