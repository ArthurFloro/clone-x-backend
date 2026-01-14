import { RequestHandler } from "express";
import { signupSchema } from "../schemas/signup";
import z from "zod";
import { findUserByEmail } from "../services/user";
import { error } from "node:console";

export const signup: RequestHandler = async (req, res) => {
  const safeData = signupSchema.safeParse(req.body);
  if (!safeData.success) {
    return res.json({ error: z.treeifyError(safeData.error) });
  }

  // verificar email
  const hasEmail = await findUserByEmail(safeData.data.email);
  if (hasEmail) {
    return res.json({ error: "Email já cadastrado" });
  }

  // verifica o slug
  // gera o hash da senha
  // cria o usuario
  // cria o token
  // retorna o resultado

  res.json({});
};
