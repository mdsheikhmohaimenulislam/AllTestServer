import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

const createToken = (
  Payload: JwtPayload,
  secret: string,
  expiresIn: string,
) => {
  const token = jwt.sign(Payload, secret, { expiresIn } as SignOptions);

  return token;
};

export const jwtUtils = {
  createToken,
};
