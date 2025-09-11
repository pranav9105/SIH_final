'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { submitFeedback } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Loader2, Send, Terminal, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          <Send className="mr-2" />
          Submit Feedback
        </>
      )}
    </Button>
  );
}

export default function PatientFeedbackForm() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitFeedback, {
    data: null,
    errors: null,
  });

  useEffect(() => {
    if (state.errors?._server) {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: state.errors._server[0],
      });
    }
  }, [state, toast]);

  return (
    <div className="space-y-6">
      <Card>
        <form action={formAction}>
          <CardHeader>
            <CardTitle>Submit Your Feedback</CardTitle>
            <CardDescription>
              We'd love to hear about your experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full gap-2">
              <Label htmlFor="feedback">Your Feedback</Label>
              <Textarea
                id="feedback"
                name="feedback"
                placeholder="Tell us about your therapy session, progress, or any suggestions."
                required
                rows={5}
              />
              {state.errors?.feedback && (
                <p className="text-sm font-medium text-destructive">
                  {state.errors.feedback[0]}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      {state.data?.visualizationDescription && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ThumbsUp /> Thank You!
            </CardTitle>
            <CardDescription>
              Here's a visualization of your feedback:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{state.data.visualizationDescription}</p>
            {state.data.imageDataUri && (
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={state.data.imageDataUri}
                  alt="Feedback Visualization"
                  width={600}
                  height={400}
                  className="aspect-video w-full object-cover"
                />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {state.errors?._server && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Server Error</AlertTitle>
          <AlertDescription>{state.errors._server[0]}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
