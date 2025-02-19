import React, { useContext, useState, useEffect } from "react"
import firebase, { auth } from './Firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    isSignedIn: false,
    pending: true,
    user: null,
  })
  const [selected, setSelected] = useState('Pending')
  const [isRegister, setIsRegister] = useState(false)
  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(user =>
      {
        setAuthState({ user, pending: false, isSignedIn: !!user })
        user.displayName && setIsRegister(true)
      }
    )
    return unregisterAuthObserver
  }, [])
    



  const value = {
    auth,
    ...authState,
    selected,
    setSelected,
    isRegister,
    setIsRegister
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}