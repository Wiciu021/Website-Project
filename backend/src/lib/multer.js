import multer from 'multer';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';

dotenv.config();

const storage = multer.memoryStorage();
const upload = multer({ storage });

const s3 = new S3Client({
  endpoint: process.env.MINIO_ENDPOINT,
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY,
    secretAccessKey: process.env.MINIO_SECRET_KEY,
  },
  forcePathStyle: true,
  tls: false
});

const BUCKETS = {
  POSTS: process.env.MINIO_POSTS_BUCKET,
  TEACHERS: process.env.MINIO_TEACHERS_BUCKET,
  GALLERY: process.env.MINIO_GALLERY_BUCKET,
  DOCS: process.env.MINIO_DOCS_BUCKET
};

async function uploadToMinio(file, bucketName) {
  try {
    if (!file) {
      throw new Error('Failed to upload file');
    }
    
    if (!BUCKETS[bucketName]) {
      throw new Error('Invalid bucket specified');
    }

    const key = `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`;
    
    const command = new PutObjectCommand({
      //Bucket: BUCKETS[bucketName],
      Bucket: 'posts',
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: 'public-read'
    });

    await s3.send(command);
    
    return key;
  } catch (error) {
    console.error('Error uploading to MinIO:', error);
    throw new Error(`Upload failed: ${error.message}`);
  }
}

export default upload;
export { uploadToMinio, BUCKETS };
