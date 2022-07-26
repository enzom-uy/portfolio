export interface Twitter {
  followings: number
  followers: number
  twitterData: {
    profile_image_url: string
    username: string
    name: string
    id: string
    description: string
  }
}
