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
import { submitQuestion } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Loader2, Sparkles, Terminal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          <Sparkles className="mr-2" />
          Ask AI Expert
        </>
      )}
    </Button>
  );
}

export default function AskAiExpert() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitQuestion, {
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
            <CardTitle>Ask an AI Expert</CardTitle>
            <CardDescription>
              Have a question about Panchakarma? Ask our AI assistant.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full gap-2">
              <Label htmlFor="question">Your Question</Label>
              <Textarea
                id="question"
                name="question"
                placeholder="e.g., What are the benefits of Shirodhara?"
                required
              />
              {state.errors?.question && (
                <p className="text-sm font-medium text-destructive">
                  {state.errors.question[0]}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      
      {state.data?.answer && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles /> AI Response
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{state.data.answer}</p>
          </CardContent>
        </Card>
      )}
      
      {state.errors?._server && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Server Error</AlertTitle>
          <AlertDescription>
            {state.errors._server[0]}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
