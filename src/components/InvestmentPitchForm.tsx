'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createPitch } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { Textarea } from './ui/textarea';

const initialState = { message: null, pitch: null, errors: {} };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Pitch
        </>
      )}
    </Button>
  );
}

export function InvestmentPitchForm() {
  const [state, dispatch] = useActionState(createPitch, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.errors) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
    if (state.message && state.pitch) {
        toast({
            title: 'Success',
            description: state.message,
        });
    }
  }, [state, toast]);

  const investorTypes = ['Venture Capital', 'Angel Investor', 'Impact Investor', 'Corporate Partner'];
  const sustainabilityFocusOptions = ['Circular Economy', 'Carbon Footprint Reduction', 'Ethical Sourcing', 'Community Empowerment'];
  const roiExpectationsOptions = ['High Growth (5-10 years)', 'Stable Returns (3-5 years)', 'Long-term Social Impact', 'Strategic Partnership'];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Generate Investment Pitch</CardTitle>
          <CardDescription>Tailor your pitch to attract the right investors and partners. Select your criteria and let our AI craft a compelling narrative.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={dispatch} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="targetInvestorType">Target Investor Type</Label>
              <Select name="targetInvestorType">
                <SelectTrigger id="targetInvestorType">
                  <SelectValue placeholder="Select an investor type" />
                </SelectTrigger>
                <SelectContent>
                  {investorTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {state.errors?.targetInvestorType && <p className="text-sm text-destructive">{state.errors.targetInvestorType}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="sustainabilityFocus">Sustainability Focus</Label>
              <Select name="sustainabilityFocus">
                <SelectTrigger id="sustainabilityFocus">
                  <SelectValue placeholder="Select a sustainability focus" />
                </SelectTrigger>
                <SelectContent>
                  {sustainabilityFocusOptions.map(focus => (
                    <SelectItem key={focus} value={focus}>{focus}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
               {state.errors?.sustainabilityFocus && <p className="text-sm text-destructive">{state.errors.sustainabilityFocus}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="roiExpectations">ROI Expectations</Label>
              <Select name="roiExpectations">
                <SelectTrigger id="roiExpectations">
                  <SelectValue placeholder="Select ROI expectations" />
                </SelectTrigger>
                <SelectContent>
                  {roiExpectationsOptions.map(roi => (
                    <SelectItem key={roi} value={roi}>{roi}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
               {state.errors?.roiExpectations && <p className="text-sm text-destructive">{state.errors.roiExpectations}</p>}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Your Custom Pitch</CardTitle>
          <CardDescription>The AI-generated pitch will appear here.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <Textarea
            readOnly
            value={state.pitch || 'Your generated pitch will be displayed here...'}
            className="h-full resize-none text-base bg-secondary"
            placeholder="Your generated pitch will be displayed here..."
          />
        </CardContent>
      </Card>
    </div>
  );
}
