import { createContext, useContext, useEffect, useState } from 'react'

export interface IAuthContext {
  session: string | null
  setSession: (session: string | null) => void
}

export const AuthContext = createContext<IAuthContext>({ session: null, setSession: () => {} });

export function AuthProvider({ children, session: serverSession }: { children: React.ReactNode; session: string | null }) {
  const [session, setSession] = useState<string | null>(serverSession);

  useEffect(() => {
    setSession(serverSession)
  }, [serverSession])
  return <AuthContext.Provider value={{ session, setSession }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
