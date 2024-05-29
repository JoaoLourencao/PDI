import { useState } from 'react'

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState<any>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item: string = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      const valueToStore: any = value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
