import { SignupFormSchema, FormState } from '@/app/lib/definitions'
import { server } from '../../../server'
import axios from 'axios'

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  
  // Call the provider or db to create a user
  const response = await axios.post(`${server}/signup`, validatedFields.data); // Corrected API endpoint
  return response.data;
  console.log(response.data);
}
