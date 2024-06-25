import { useDarkMode } from "@hooks/context/darkModeContext";

interface Props {
  title: string;
}

export function Title({ title }: Props) {
  const { darkMode } = useDarkMode();

  return (
    <p className={`tw-text-xl tw-font-semibold ${darkMode ? 'tw-text-dark-secondary' : 'tw-text-light-secondary'}`}>{title}</p>
  );
}
