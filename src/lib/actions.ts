// This version is static-export friendly
import { z } from 'zod';

// Contact Form Schema (client-side use only or via third-party form service)
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  type: 'success' | 'error' | null;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

// Dummy handler function (NOT a server action)
// You can use this for testing locally or convert it into a client-only form handler
export async function simulateContactFormSubmission(
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      type: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  console.log('Contact Form Submission:', { name, email, subject, message });

  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: 'Thank you for your message! I will get back to you soon.',
    type: 'success',
  };
}

// -- Removed generateTailoredDescriptionAction due to static export limitations --
