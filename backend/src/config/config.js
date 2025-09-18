import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  dbUrl: process.env.DATABASE_URL,
  mailUser: process.env.MAIL_USER,
  mailPass: process.env.MAIL_PASS,
  myEmail: process.env.MY_EMAIL,
  env: process.env.NODE_ENV || 'development',
  minioEndpoint: process.env.MINIO_ENDPOINT,
  minioAccessKey: process.env.MINIO_ACCESS_KEY,
  minioSecretKey: process.env.MINIO_SECRET_KEY,
  minioRegion: process.env.MINIO_REGION,
  minioBucket: process.env.MINIO_BUCKET

}