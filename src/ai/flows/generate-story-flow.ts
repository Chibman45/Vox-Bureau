'use server';
/**
 * @fileOverview A flow to generate a client success story.
 *
 * - generateStory - A function that generates a success story.
 * - GenerateStoryInput - The input type for the generateStory function.
 * - GenerateStoryOutput - The return type for the generateStory function.
 */

import { ai } from '@/ai/genkit';
import { GenerateStoryInput, GenerateStoryInputSchema, GenerateStoryOutput, GenerateStoryOutputSchema } from '../schemas';


const storyPrompt = ai.definePrompt({
    name: 'storyPrompt',
    input: { schema: GenerateStoryInputSchema },
    output: { schema: GenerateStoryOutputSchema },
    prompt: `You are Vox Bureau, an expert communication and institutional representation firm.
    
    A potential client named {{{name}}} has asked for a success story.
    
    Write a brief, compelling success story about a fictional government agency or public institution that had a challenge that Vox Bureau solved.
    
    The story should be about 2-3 paragraphs long. It should mention the client by the name provided ({{{name}}}).
    
    Make the story sound professional, credible, and impressive.
    
    Start the story by addressing the user by name, for example: "Here is a story for you, {{{name}}}".
    
    The challenges can be related to things like:
    - Poor public perception
    - Ineffective stakeholder communication
    - Disjointed internal messaging during a crisis
    - A failed public tender or grant application
    
    The solution provided by Vox Bureau should be one of our core services:
    - Professional Speeches & Presentations
    - Proxy Representation & Meeting Attendance
    - Client & Stakeholder Relationship Management
    - Proposal Writing & Compliance Communication
    
    The outcome should be positive, highlighting metrics if possible (e.g., "public trust increased by 20%", "secured a $5M grant").
    
    Do not use markdown in the output. Just return the plain text of the story.`,
});

const generateStoryFlow = ai.defineFlow(
  {
    name: 'generateStoryFlow',
    inputSchema: GenerateStoryInputSchema,
    outputSchema: GenerateStoryOutputSchema,
  },
  async (input) => {
    const { output } = await storyPrompt(input);
    return output!;
  }
);

export async function generateStory(input: GenerateStoryInput): Promise<GenerateStoryOutput> {
    return generateStoryFlow(input);
}
