import React, { createContext, useCallback, useEffect, useMemo, useState, useContext } from 'react';

type Theme = 'light' | 'dark';

type DarkModeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem('theme') as Theme | null;
      
      // Determine initial theme for FOUC prevention logic
      const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = stored || (isSystemDark ? 'dark' : 'light');
      
      // Update DOM immediately during initialization
      document.documentElement.setAttribute('data-theme', initialTheme);
      
      return initialTheme;
    } catch {
      return 'light';
    }
  });

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem('theme', t);
    } catch {}
  }, []);
   
  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  // // Synchronize the DOM attribute whenever state changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};

export function useDarkMode() {
  const ctx = useContext(DarkModeContext);
  if (!ctx) throw new Error('useDarkMode must be used within DarkModeProvider');
  return ctx;
}