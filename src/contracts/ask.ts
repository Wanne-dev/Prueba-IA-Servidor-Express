import { z } from 'zod';

export const askRequestSchema = z.object({
  question: z.string()
    .trim()
    .min(3)
    .max(1000),
}).strict();

export type AskRequest = 
  z.infer<typeof askRequestSchema>;