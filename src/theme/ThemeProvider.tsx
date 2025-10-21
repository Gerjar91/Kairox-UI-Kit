import React, { createContext, useContext, ReactNode } from 'react';
import theme from './index';

export type Theme = typeof theme;

const ThemeContext = createContext<Theme | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  customTheme?: Partial<Theme>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  customTheme 
}) => {
  const mergedTheme = customTheme 
    ? { ...theme, ...customTheme } 
    : theme;

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  
  return context;
};

export default ThemeProvider;

