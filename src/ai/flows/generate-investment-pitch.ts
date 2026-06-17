'use server';

/**
 * @fileOverview Investment pitch generation flow.
 *
 * - generateInvestmentPitch - Generates a customized investment pitch for Koel Group.
 * - GenerateInvestmentPitchInput - Input type for the generateInvestmentPitch function.
 * - GenerateInvestmentPitchOutput - Return type for the generateInvestmentPitch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInvestmentPitchInputSchema = z.object({
  targetInvestorType: z
    .string()
    .describe('The type of investor the pitch is tailored for.'),
  sustainabilityFocus: z
    .string()
    .describe('The emphasis on sustainability in the pitch.'),
  roiExpectations: z.string().describe('The expected return on investment.'),
});
export type GenerateInvestmentPitchInput = z.infer<
  typeof GenerateInvestmentPitchInputSchema
>;

const GenerateInvestmentPitchOutputSchema = z.object({
  pitch: z.string().describe('The generated investment pitch.'),
});
export type GenerateInvestmentPitchOutput = z.infer<
  typeof GenerateInvestmentPitchOutputSchema
>;

export async function generateInvestmentPitch(
  input: GenerateInvestmentPitchInput
): Promise<GenerateInvestmentPitchOutput> {
  return generateInvestmentPitchFlow(input);
}

const investmentPitchPrompt = ai.definePrompt({
  name: 'investmentPitchPrompt',
  input: {schema: GenerateInvestmentPitchInputSchema},
  output: {schema: GenerateInvestmentPitchOutputSchema},
  prompt: `You are an expert investment relations manager crafting a compelling investment pitch for Koel Group, a pioneer in the sustainable textile and garment industry.

  Based on the following criteria, generate a customized investment pitch highlighting Koel Group's strengths and sustainability initiatives:

  Target Investor Type: {{{targetInvestorType}}}
  Sustainability Focus: {{{sustainabilityFocus}}}
  ROI Expectations: {{{roiExpectations}}}

  Focus on Koel Group's innovative approach to transforming textile waste into global wealth, its commitment to a circular textile economy in Bangladesh, and its potential for sustainable returns. Emphasize Jayqo Textile & Accessories Ltd's role in pioneering a smart, sustainable recycled fabric cluster and its alignment with global sustainability mandates.
  Include key strengths of Koel Group: Joint Fabric Collection, Certification, Partnerships, Digital Traceability. 
  Highlight impact and benifits of MSME sector. 
  Prominently promote Jayqo Textile & Accessories Ltd in pioneering a circular textile economy in Bangladesh. 
  `,
});

const generateInvestmentPitchFlow = ai.defineFlow(
  {
    name: 'generateInvestmentPitchFlow',
    inputSchema: GenerateInvestmentPitchInputSchema,
    outputSchema: GenerateInvestmentPitchOutputSchema,
  },
  async input => {
    const {output} = await investmentPitchPrompt(input);
    return output!;
  }
);
