import getTwitterFollowings from 'services/getTwitterFollowings'
import useSWR from 'swr'

export const apiUrl = process.env.NEXT_PUBLIC_API_LINK

const useTwitter = () => {
  const { data: twitter } = useSWR(`${apiUrl}/twitter`, getTwitterFollowings, {
    revalidateIfStale: false,
    focusThrottleInterval: 600000,
    refreshInterval: 600000
  })

  return {
    twitter
  }
}

export default useTwitter
