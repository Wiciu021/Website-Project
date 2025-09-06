import dotenv from 'dotenv';

dotenv.config();

//if (!process.env.JWT_SECRET) {                        zaradzić temu 
//  throw new Error("JWT_SECRET is not defined in .env");
//}

export default {
  port: process.env.PORT,
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  mailUser: process.env.MAIL_USER,
  mailPass: process.env.MAIL_PASS,
  myEmail: process.env.MY_EMAIL,
  env: process.env.NODE_ENV || 'development'
}
