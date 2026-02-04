import { useDarkMode } from '../contexts/DarkModeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button 
      className="px-6 py-2 rounded-full font-bold bg-secondary text-brand-bg hover:opacity-90 transition-all"
      onClick={toggleTheme} 
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};
