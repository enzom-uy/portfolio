import getTwitterData from 'services/getTwitterData'
import useSWR from 'swr'

export const apiUrl = process.env.NEXT_PUBLIC_API_LINK

const useTwitter = () => {
  const { data: twitter, error } = useSWR(`${apiUrl}/twitter`, getTwitterData, {
    revalidateIfStale: false,
    focusThrottleInterval: 960000,
    refreshInterval: 960000,
    errorRetryCount: 1,
    shouldRetryOnError: false
  })

  return {
    twitter,
    error,
    isLoading: !twitter && !error
  }
}

export default useTwitter
