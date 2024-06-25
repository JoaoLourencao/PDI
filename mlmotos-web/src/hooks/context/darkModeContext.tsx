import { createContext, useContext, useEffect, useState } from "react"

const DarkModeContext = createContext({ darkMode: true, toggleDarkMode: () => { } })

export const useDarkMode = () => {
  return useContext(DarkModeContext)
}

export const DarkModeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const isClient = typeof window !== "undefined"

    const initialDarkMode = isClient ? JSON.parse(localStorage.getItem('darkMode')) || true : true

    setDarkMode(initialDarkMode)

  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode

      localStorage.setItem("darkMode", JSON.stringify(newMode))

      return newMode
    })
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
