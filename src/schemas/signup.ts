import z from "zod";

export const signupSchema = z.object({
  name: z
    .string({ message: "Nome é obrigatório" })
    .min(2, "Precisa de no minimo 2 caracteres"),
  email: z.email({ message: "Email é obrigatório" }),
  password: z
    .string({ message: "Senha é obrigatório" })
    .min(4, "Precisa de no minimo 4 caracteres"),
});
