import { RequestHandler } from "express";
import { signupSchema } from "../schemas/signup";
import z from "zod";
import { createUser, findUserByEmail, findUserBySlug } from "../services/user";

import slug from "slug";
import { hash } from "bcrypt-ts";

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
  let genSlug = true;
  let userSlug = slug(safeData.data.name);
  while (genSlug) {
    const hasSlug = await findUserBySlug(userSlug);
    if (hasSlug) {
      let slugSuffix = Math.floor(Math.random() * 999999).toString();
      userSlug = slug(safeData.data.name + slugSuffix);
    } else {
      genSlug = false;
    }
  }

  // gera o hash da senha
  const hashPassword = await hash(safeData.data.password, 10);


  // cria o usuario
  const newUser = await createUser({
    slug: userSlug, 
    name: safeData.data.name,
    email: safeData.data.email,
    password: hashPassword,
  })

  // cria o token
  // retorna o resultado

  res.json({});
};
