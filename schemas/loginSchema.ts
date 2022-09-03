import * as z from 'zod'

export interface AdminLoginInputs {
  username: string
  password: string
}

export const adminLoginSchema = z.object({
  username: z.string(),
  password: z.string()
})
