import React, { useContext, useEffect, useState } from 'react'
import { User, useAuth0 } from '@auth0/auth0-react'


export interface IUserContext {
  loginWithRedirect: () => void,
  logout: () => void,
  myUser: User | null
}

const UserContext = React.createContext<IUserContext>({
  loginWithRedirect: () => {},
  logout: () => {},
  myUser: null
})

export const UserProvider = ({ children }: any) => {
  const { loginWithRedirect, logout, user } = useAuth0()

  const [myUser, setMyUser] = useState(null)

  useEffect(() => {
    setMyUser(user as any)
  }, [user])

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
