import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter the valid email address"),
  password: z.string().min(6, "Password must contain at least 6 character"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
