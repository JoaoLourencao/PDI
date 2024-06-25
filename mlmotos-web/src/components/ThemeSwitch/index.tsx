import { useDarkMode } from "@hooks/context/darkModeContext";
import { Switch } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)

  const { darkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={styles.customSwitcher}>
      <Switch
        checked={!darkMode}
        onClick={toggleDarkMode}
        className={darkMode ? 'active' : 'inactive'}
      />
    </div>
  )
}

export default ThemeSwitcher
