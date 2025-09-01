import dotenv from 'dotenv';
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

//if (!process.env.JWT_SECRET) {                        zaradzić temu 
//  throw new Error("JWT_SECRET is not defined in .env");
//}

export default {
  port: process.env.PORT || 8000, //usunąć || jak bedziesz miał skonfigurowany .env
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  //mailUser: process.env.MAIL_USER,
  //mailPass: process.env.MAIL_PASS,
  env: process.env.NODE_ENV || 'development'
}
