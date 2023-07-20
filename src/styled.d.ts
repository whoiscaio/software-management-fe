import { Theme } from './global/styles/theme/mainTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}
