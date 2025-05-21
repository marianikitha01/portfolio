'use server';
/**
 * @fileOverview A flow to tailor project descriptions based on target audience.
 *
 * - tailorProjectDescription - A function that tailors the project description to a specific audience.
 * - TailorProjectDescriptionInput - The input type for the tailorProjectDescription function.
 * - TailorProjectDescriptionOutput - The return type for the tailorProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailorProjectDescriptionInputSchema = z.object({
  projectDescription: z.string().describe('The original project description.'),
  targetAudience: z.string().describe('The target audience for the project description.'),
});
export type TailorProjectDescriptionInput = z.infer<typeof TailorProjectDescriptionInputSchema>;

const TailorProjectDescriptionOutputSchema = z.object({
  tailoredDescription: z.string().describe('The tailored project description for the specified target audience.'),
});
export type TailorProjectDescriptionOutput = z.infer<typeof TailorProjectDescriptionOutputSchema>;

export async function tailorProjectDescription(input: TailorProjectDescriptionInput): Promise<TailorProjectDescriptionOutput> {
  return tailorProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tailorProjectDescriptionPrompt',
  input: {schema: TailorProjectDescriptionInputSchema},
  output: {schema: TailorProjectDescriptionOutputSchema},
  prompt: `You are an expert at tailoring project descriptions to specific audiences.

  Given the original project description and the target audience, rewrite the project description to appeal to the target audience.

  Original Project Description: {{{projectDescription}}}
  Target Audience: {{{targetAudience}}}

  Tailored Project Description:
  `,
});

const tailorProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'tailorProjectDescriptionFlow',
    inputSchema: TailorProjectDescriptionInputSchema,
    outputSchema: TailorProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
