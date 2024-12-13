
import { z } from "zod";

export const formSignInSchema = z.object({
  document: z.string({ required_error: 'O documento é obrigatório.' }),
  password: z
    .string({ required_error: 'Senha é obrigatório.' })
    .min(8, 'Senha deve ter no mínimo 8 caracteres.'),
});

export type FormSignInSchemaProps = z.infer<
  typeof formSignInSchema
>;
