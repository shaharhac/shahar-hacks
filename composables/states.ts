export const useMode = () => {
  const mode = useState<boolean>("lightMode", () => true);

  const setMode = (newMode: boolean) => {
    mode.value = newMode;
  };

  return [mode, setMode];
};
