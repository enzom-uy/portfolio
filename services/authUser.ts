import axios from 'axios'

export interface AuthResponse {
  authToken: string
  username: string
  status: string
  error: string
}

export const authUser = async (username: string, password: string) => {
  const axiosResponse: AuthResponse = await axios({
    method: 'post',
    url: 'http://localhost:8080/api/admin/login',
    data: {
      username: username,
      password: password
    }
  }).then((res) => res.data)
  const error = axiosResponse.error

  const authData = {
    authToken: axiosResponse.authToken,
    username: axiosResponse.username,
    status: axiosResponse.status
  }
  return { authData, error }
}
