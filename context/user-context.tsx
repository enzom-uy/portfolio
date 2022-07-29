import { createContext } from 'react'
import { Credentials, initialState } from 'reducers/user-reducer'

interface IUserContext {
  username: string | null
  login: (credentials: Credentials) => void
  logout: () => void
}

export const UserContext = createContext<IUserContext>(initialState)
