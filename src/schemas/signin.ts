import z from "zod";

export const signinSchema = z.object({
  email: z.email({ message: "Email é obrigatório" }),
  password: z
    .string({ message: "Senha é obrigatório" })
    .min(4, "Precisa de no minimo 4 caracteres"),
});
