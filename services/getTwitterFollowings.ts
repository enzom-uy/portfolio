import axios from 'axios'

export const getTwitterFollowings = async (url: string) => {
  const axiosResponse = await axios({
    method: 'get',
    url: url
  }).then((res) => res.data)
  return axiosResponse
}

export default getTwitterFollowings
