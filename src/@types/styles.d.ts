import 'styled-components';
import { aliasedTheme } from '../styles/themes/default';

type ThemeType = typeof aliasedTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
