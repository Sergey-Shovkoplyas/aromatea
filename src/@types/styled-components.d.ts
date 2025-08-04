import 'styled-components';
import { CustomTheme } from '../assets/styles/theme.ts';

// Extend styled-components' DefaultTheme with your custom theme
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends CustomTheme {}
}


 
