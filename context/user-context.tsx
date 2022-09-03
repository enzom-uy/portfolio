import { createContext, ReactNode, useState } from 'react'

interface IUserContext {
  username: string | undefined
  isAdmin: boolean
  getUsername?: (username: string) => void
}

const initialState = {
  username: '',
  isAdmin: false
}

export const UserContext = createContext<IUserContext>(initialState)
const { Provider } = UserContext

const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [username, setUsername] = useState<string | undefined>()
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  const getUsername = (username: string) => {
    setUsername(username)
    setIsAdmin(true)
  }

  const contextValue = {
    username,
    getUsername,
    isAdmin
  }
  return <Provider value={contextValue}>{children}</Provider>
}

export default UserContextProvider
