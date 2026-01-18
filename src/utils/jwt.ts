import jwt from "jsonwebtoken";

export const createJWT = (slug: string) => {
  return jwt.sign({ slug }, process.env.JWT_SECRET as string); // TERCEIRO PARAMETRO É PARA DEFINIR O TEMPO QUE ELE FICARA ATIVO
};
