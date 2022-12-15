export const useDarkMode = () => {
  const darkMode = useState<boolean>("useDarkMode", () => false);

  const setDarkMode = (isDarkMode: boolean) => {
    darkMode.value = isDarkMode;
  };

  return [darkMode, setDarkMode];
};
