'use server';
/**
 * @fileOverview A flow for answering user questions about Panchakarma.
 *
 * - askPanchakarmaExpert - A function that provides an AI-powered answer to a question.
 * - AskPanchakarmaExpertInput - The input type for the askPanchakarmaExpert function.
 * - AskPanchakarmaExpertOutput - The return type for the askPanchakarmaExpert function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const AskPanchakarmaExpertInputSchema = z.object({
  question: z.string().describe("The user's question about Panchakarma."),
});
export type AskPanchakarmaExpertInput = z.infer<
  typeof AskPanchakarmaExpertInputSchema
>;

const AskPanchakarmaExpertOutputSchema = z.object({
  answer: z
    .string()
    .describe('A helpful and informative answer to the user\'s question.'),
});
export type AskPanchakarmaExpertOutput = z.infer<
  typeof AskPanchakarmaExpertOutputSchema
>;

export async function askPanchakarmaExpert(
  input: AskPanchakarmaExpertInput
): Promise<AskPanchakarmaExpertOutput> {
  return askPanchakarmaExpertFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askPanchakarmaExpertPrompt',
  input: { schema: AskPanchakarmaExpertInputSchema },
  output: { schema: AskPanchakarmaExpertOutputSchema },
  prompt: `You are an AI assistant for AyurSutra, specializing in Panchakarma therapy.
Your role is to provide clear, helpful, and safe information about Panchakarma.
Answer the following question from a user.

Disclaimer: Always remind the user to consult with a qualified Ayurvedic doctor before making any health decisions.

User Question:
"{{{question}}}"

Provide a detailed and informative answer.`,
});

const askPanchakarmaExpertFlow = ai.defineFlow(
  {
    name: 'askPanchakarmaExpertFlow',
    inputSchema: AskPanchakarmaExpertInputSchema,
    outputSchema: AskPanchakarmaExpertOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('The model did not return any output.');
    }
    return output;
  }
);
