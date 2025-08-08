'use server';

import { z } from 'zod';

export const GenerateStoryInputSchema = z.object({
  name: z.string().describe('The name of the client.'),
});
export type GenerateStoryInput = z.infer<typeof GenerateStoryInputSchema>;

export const GenerateStoryOutputSchema = z.object({
  story: z.string().describe('The generated success story.'),
});
export type GenerateStoryOutput = z.infer<typeof GenerateStoryOutputSchema>;
