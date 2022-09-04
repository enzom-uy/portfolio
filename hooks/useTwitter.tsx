import getTwitterData from 'services/getTwitterData'
import useSWR from 'swr'

export const apiUrl = process.env.NEXT_PUBLIC_API_URL

const useTwitter = () => {
  const { data: twitter, error } = useSWR(`${apiUrl}/twitter`, getTwitterData, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    focusThrottleInterval: 960000,
    refreshInterval: 960000,
    refreshWhenHidden: false,
    errorRetryCount: 1,
    shouldRetryOnError: false,
    dedupingInterval: 5000
  })

  const followings = twitter?.followings
  const followers = twitter?.followers

  return {
    twitter,
    followings,
    followers,
    error,
    isLoading: !twitter && !error
  }
}

export default useTwitter
