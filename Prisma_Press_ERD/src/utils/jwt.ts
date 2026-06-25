import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

const createToken = (
  Payload: JwtPayload,
  secret: string,
  expiresIn: string,
) => {
  const token = jwt.sign(Payload, secret, { expiresIn } as SignOptions);

  return token;
};

const verifyToken = (token: string, secret: string) => {
  try {

    const verifiedToken = jwt.verify(token, secret);
    return verifiedToken;
    
  } catch (error) {
    console.log("Token verification failed: ", error);
    throw new Error("Invalid token");
  }
};

export const jwtUtils = {
  createToken,
  verifyToken,
};
