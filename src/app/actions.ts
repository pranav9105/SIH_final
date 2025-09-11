
'use server';

import { z } from 'zod';
import { visualizeTherapy } from '@/ai/flows/visualize-therapy-flow';
import { askPanchakarmaExpert } from '@/ai/flows/ask-panchakarma-expert-flow';

const feedbackSchema = z.object({
  feedback: z.string().min(10, { message: 'Feedback must be at least 10 characters long.' }),
});

export async function submitFeedback(
  prevState: {
    data: any;
    errors: any;
  },
  formData: FormData
) {
  const validatedFields = feedbackSchema.safeParse({
    feedback: formData.get('feedback'),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await visualizeTherapy({
      feedback: validatedFields.data.feedback,
    });
    return { data: result, errors: null };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      errors: { _server: ['An unexpected error occurred. Please try again.'] },
    };
  }
}

const questionSchema = z.object({
  question: z.string().min(5, { message: 'Question must be at least 5 characters long.' }),
});

export async function submitQuestion(
  prevState: {
    data: any;
    errors: any;
  },
  formData: FormData
) {
  const validatedFields = questionSchema.safeParse({
    question: formData.get('question'),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await askPanchakarmaExpert({
      question: validatedFields.data.question,
    });
    return { data: result, errors: null };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      errors: { _server: ['An unexpected error occurred. Please try again.'] },
    };
  }
}
