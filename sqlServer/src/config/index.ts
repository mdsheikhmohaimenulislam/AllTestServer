import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

const config = {
  // connection_string: process.env.CONNECTIONSTRING,
  port: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  refresh_secret: process.env.JWT_REFRESH_SECRET,
  expiresInAccessToken: process.env.EXPIRES_IN_ACCESS_TOKEN,
  refreshInToken: process.env.EXPIRES_IN_REFRESH_TOKEN,
};

export default config;
