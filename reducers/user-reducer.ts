import { useReducer } from 'react'
import { setCookie, removeCookies } from 'cookies-next'

export interface Credentials {
  authToken: string
  username: string
}

export const initialState = {
  username: null,

  login: () => {},
  logout: () => {}
}

export const userReducer = (
  state: any,
  action: {
    payload?: Credentials
    type: 'LOGIN' | 'LOGOUT'
  }
) => {
  switch (action.type) {
    case 'LOGIN':
      const hour = 3600
      const user = action.payload
      setCookie(
        'user',
        { user: `${user?.username}`, token: user?.authToken },
        { maxAge: hour }
      )
      return { ...state, username: user?.username }

    case 'LOGOUT':
      removeCookies('user')
      return { ...state, username: null }

    default:
      return state
  }
}

export const useUserReducer = () => {
  const [userData, dispatch] = useReducer(userReducer, initialState)

  const { username } = userData
  return {
    username: username,
    login: (credentials: Credentials) =>
      dispatch({ type: 'LOGIN', payload: credentials }),
    logout: () => dispatch({ type: 'LOGOUT' })
  }
}
