import * as z from 'zod'

export const required_error = 'Campo obligatorio.'

export interface NewPostInputs {
  title: string
  thumbnail: string
  content: string
}

export const newPostSchema = z.object({
  title: z.string({ required_error }),
  thumbnail: z
    .string({ required_error })
    .regex(new RegExp('https://i.imgur.com/[a-zA-Z]+')),
  content: z.string({ required_error })
})
