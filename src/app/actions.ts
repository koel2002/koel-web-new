"use server";

import { generateInvestmentPitch, type GenerateInvestmentPitchInput } from '@/ai/flows/generate-investment-pitch';
import { z } from 'zod';

const PitchSchema = z.object({
  targetInvestorType: z.string().min(1, 'Please select an investor type.'),
  sustainabilityFocus: z.string().min(1, 'Please select a sustainability focus.'),
  roiExpectations: z.string().min(1, 'Please select ROI expectations.'),
});

type State = {
  message?: string | null;
  pitch?: string | null;
  errors?: {
    targetInvestorType?: string[];
    sustainabilityFocus?: string[];
    roiExpectations?: string[];
  };
};

export async function createPitch(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = PitchSchema.safeParse({
    targetInvestorType: formData.get('targetInvestorType'),
    sustainabilityFocus: formData.get('sustainabilityFocus'),
    roiExpectations: formData.get('roiExpectations'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to generate pitch.',
    };
  }

  const input: GenerateInvestmentPitchInput = validatedFields.data;

  try {
    const result = await generateInvestmentPitch(input);
    return {
      message: 'Pitch generated successfully.',
      pitch: result.pitch,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred while generating the pitch.',
    };
  }
}
