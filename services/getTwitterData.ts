import axios from 'axios'
import { Twitter } from 'interfaces/twitter'

export const getTwitterData = async (url: string) => {
  const axiosResponse = await axios.get<Twitter>(url).then((res) => res.data)
  console.log('Haciendo la petición')
  return axiosResponse
}

export default getTwitterData
