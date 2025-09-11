
'use server';
/**
 * @fileOverview A flow for visualizing therapy progress based on patient feedback.
 *
 * - visualizeTherapy - A function that generates a visualization for therapy progress.
 * - VisualizeTherapyInput - The input type for the visualizeTherapy function.
 * - VisualizeTherapyOutput - The return type for the visualizeTherapy function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const VisualizeTherapyInputSchema = z.object({
  feedback: z.string().describe('The patient\'s feedback about their therapy progress.'),
});
export type VisualizeTherapyInput = z.infer<typeof VisualizeTherapyInputSchema>;

const VisualizeTherapyOutputSchema = z.object({
  visualizationDescription: z.string().describe('A brief (2-3 sentences) summary and analysis of the generated visualization.'),
  imageDataUri: z.string().describe("A data URI of a generated image (e.g., a bar chart or line graph) that visually represents the patient's progress based on their feedback. The image should have a professional and clean look suitable for a medical dashboard. Use colors that match the app's theme. The chart should be simple and easy to understand."),
});
export type VisualizeTherapyOutput = z.infer<typeof VisualizeTherapyOutputSchema>;

export async function visualizeTherapy(input: VisualizeTherapyInput): Promise<VisualizeTherapyOutput> {
  return visualizeTherapyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'visualizeTherapyPrompt',
  input: { schema: VisualizeTherapyInputSchema },
  output: { schema: VisualizeTherapyOutputSchema },
  prompt: `You are an AI assistant for AyurSutra, a Panchakarma therapy management software.
Your task is to analyze patient feedback and generate a progress visualization.

Patient Feedback:
"{{{feedback}}}"

Based on this feedback, generate a response that includes:
1.  A 'visualizationDescription': A short, insightful analysis of the feedback and what the visualization represents.
2.  An 'imageDataUri': Generate an image that visually represents the patient's progress. This should be a simple and clear chart (like a bar or line chart) showing key metrics mentioned or implied in the feedback (e.g., pain levels, relaxation, mobility). The chart should be professional, clean, and use a color palette that fits an earthy, natural theme (warm browns, greens, muted gold).

Example metrics to visualize:
- Pain Reduction
- Mobility Improvement
- Stress Level
- Sleep Quality
- Overall Well-being

Generate the image and respond in the required JSON format.`,
  config: {
    model: 'googleai/gemini-2.5-flash-image-preview',
    responseModalities: ['TEXT', 'IMAGE'],
  },
});

const visualizeTherapyFlow = ai.defineFlow(
  {
    name: 'visualizeTherapyFlow',
    inputSchema: VisualizeTherapyInputSchema,
    outputSchema: VisualizeTherapyOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('The model did not return any output.');
    }
    const { visualizationDescription, imageDataUri } = output;

    if (!imageDataUri) {
      throw new Error('The model did not return an image.');
    }

    return {
      visualizationDescription,
      imageDataUri,
    };
  }
);
