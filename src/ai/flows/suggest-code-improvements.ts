'use server';

/**
 * @fileOverview Provides a Genkit flow to suggest minor code improvements for a given project.
 *
 * - suggestCodeImprovements - A function that takes project code and description, and returns suggested improvements.
 * - SuggestCodeImprovementsInput - The input type for the suggestCodeImprovements function.
 * - SuggestCodeImprovementsOutput - The return type for the suggestCodeImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestCodeImprovementsInputSchema = z.object({
  code: z.string().describe('The source code of the project.'),
  description: z.string().describe('A description of the project and its purpose.'),
  githubUrl: z.string().optional().describe('The URL of the GitHub repository for the project, if available.'),
});
export type SuggestCodeImprovementsInput = z.infer<typeof SuggestCodeImprovementsInputSchema>;

const SuggestCodeImprovementsOutputSchema = z.object({
  improvements: z.string().describe('A list of suggested code improvements.'),
});
export type SuggestCodeImprovementsOutput = z.infer<typeof SuggestCodeImprovementsOutputSchema>;

export async function suggestCodeImprovements(input: SuggestCodeImprovementsInput): Promise<SuggestCodeImprovementsOutput> {
  return suggestCodeImprovementsFlow(input);
}

const suggestCodeImprovementsPrompt = ai.definePrompt({
  name: 'suggestCodeImprovementsPrompt',
  input: {schema: SuggestCodeImprovementsInputSchema},
  output: {schema: SuggestCodeImprovementsOutputSchema},
  prompt: `You are a senior software engineer reviewing code for potential improvements.

  Based on the provided code and description, suggest specific, actionable improvements to enhance readability, maintainability, performance, and security.
  If a GitHub URL is provided, consider the project's context within the repository.

  Description: {{{description}}}
  Code: \`\`\`{{{code}}}\`\`\`
  GitHub URL: {{{githubUrl}}}

  Focus on minor edits that can be easily implemented.
  Provide the improvements as a detailed list.
  `,
});

const suggestCodeImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestCodeImprovementsFlow',
    inputSchema: SuggestCodeImprovementsInputSchema,
    outputSchema: SuggestCodeImprovementsOutputSchema,
  },
  async input => {
    const {output} = await suggestCodeImprovementsPrompt(input);
    return output!;
  }
);
