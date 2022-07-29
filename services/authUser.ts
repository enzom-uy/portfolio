import axios from 'axios'

interface AuthResponse {
  authToken: string
  username: string
  status: string
}

export const authUser = async (username: string, password: string) => {
  const axiosResponse: AuthResponse = await axios({
    method: 'post',
    url: 'http://localhost:3001/api/admin/login',
    data: {
      username: username,
      password: password
    }
  }).then((res) => res.data)
  const authData = {
    authToken: axiosResponse.authToken,
    name: axiosResponse.username,
    status: axiosResponse.status
  }
  return authData
}
