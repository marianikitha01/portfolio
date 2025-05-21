'use server';

import { z } from 'zod';
import { tailorProjectDescription } from '@/ai/flows/tailor-project-description';
import type { TailorProjectDescriptionInput, TailorProjectDescriptionOutput } from '@/ai/flows/tailor-project-description';

// Contact Form Schema
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

export async function submitContactForm(
  prevState: ContactFormState,
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

  // In a real application, you would send an email or save to a database here.
  // For this portfolio, we'll just log it and simulate success.
  console.log('Contact Form Submission:');
  console.log({ name, email, subject, message });

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: 'Thank you for your message! I will get back to you soon.',
    type: 'success',
  };
}


// AI Description Tailor Schema (already defined in the flow, but good for reference)
// const AiTailorFormSchema = z.object({
//   projectDescription: z.string().min(20, { message: "Project description must be at least 20 characters." }),
//   targetAudience: z.string().min(3, { message: "Target audience must be at least 3 characters." }),
// });

export type AiTailorFormState = {
  message: string;
  type: 'success' | 'error' | 'loading' | null;
  tailoredDescription?: string;
  errors?: {
    projectDescription?: string[];
    targetAudience?: string[];
    flowError?: string[];
  };
};

export async function generateTailoredDescriptionAction(
  input: TailorProjectDescriptionInput
): Promise<AiTailorFormState> {
  try {
    // Server-side validation (optional, as client-side should catch this)
    if (!input.projectDescription || input.projectDescription.length < 20) {
       return { message: 'Project description is too short.', type: 'error', errors: { projectDescription: ['Project description must be at least 20 characters.'] } };
    }
    if (!input.targetAudience || input.targetAudience.length < 3) {
      return { message: 'Target audience is too short.', type: 'error', errors: { targetAudience: ['Target audience must be at least 3 characters.'] } };
    }

    const result: TailorProjectDescriptionOutput = await tailorProjectDescription(input);
    
    if (result && result.tailoredDescription) {
      return {
        message: 'Description tailored successfully!',
        type: 'success',
        tailoredDescription: result.tailoredDescription,
      };
    } else {
      return {
        message: 'Failed to tailor description. The AI did not return a valid response.',
        type: 'error',
        errors: { flowError: ['AI did not return a description.'] },
      };
    }
  } catch (error) {
    console.error('Error tailoring description:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      message: `An error occurred: ${errorMessage}`,
      type: 'error',
      errors: { flowError: [errorMessage] },
    };
  }
}
