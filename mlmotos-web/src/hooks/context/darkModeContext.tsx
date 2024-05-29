import { createContext, useState, useContext, useEffect } from "react"

const DarkModeContext = createContext({ darkMode: false, toggleDarkMode: () => {} })

export const useDarkMode = () => {
  return useContext(DarkModeContext)
}

export const DarkModeProvider = ({children}) => {
  
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isClient = typeof window !== "undefined"
  
    const initialDarkMode = isClient ? JSON.parse(localStorage.getItem('darkMode')) || false : false

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
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}
