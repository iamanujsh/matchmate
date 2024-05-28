import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email("Please enter the valid email address"),
  password: z.string().min(6, "Password must contain at least 6 character"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
