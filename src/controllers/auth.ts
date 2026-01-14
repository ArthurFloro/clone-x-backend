import { RequestHandler } from "express";
import { signupSchema } from "../schemas/signup";
import z from "zod";

export const signup: RequestHandler = async (req, res) => {
  // validar os dados recebidos
  const safeData = signupSchema.safeParse(req.body);
  if (!safeData.success) {
    return res.json({ error: z.treeifyError(safeData.error) });
  }
  // verificar email
  // verifica o slug
  // gera o hash da senha
  // cria o usuario
  // cria o token
  // retorna o resultado

  res.json({});
};
