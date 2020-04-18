import { createContext } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ITheme {
  mode: string;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ITheme>({
  mode: 'light',
  toggleMode: () => {},
});
