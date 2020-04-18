import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage(
    'THEME_MODE',
    'light',
  );

  const enabled = typeof enabledState !== 'undefined' ? enabledState : 'light';

  const toggleDarkMode = () => {
    setEnabledState(enabledState === 'light' ? 'dark' : 'light');
  };

  return [enabled, toggleDarkMode];
};

export default useDarkMode;
