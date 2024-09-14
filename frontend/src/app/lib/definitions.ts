import { z } from 'zod'
 
export const SignupFormSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'first name must be at least 3 characters long.' })
    .trim(),
  lastName: z
    .string()
    .min(3, { message: 'Last Name must be at least 3 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
})
 
export type FormState =
  | {
      errors?: {
        firstName?: string[]
        lastName?:string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined