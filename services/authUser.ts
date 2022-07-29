import axios from 'axios'

export interface AuthResponse {
  authToken: string
  username: string
  status: string
  error: string
}

export const authUser = async (username: string, password: string) => {
  try {
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
      username: axiosResponse.username,
      status: axiosResponse.status,
      error: axiosResponse.error
    }
    return authData
  } catch (error) {
    const responseError = error.response.data.error
    return responseError
  }
}
