import multer from 'multer';
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';

dotenv.config();

const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10 MB limit
});

const s3 = new S3Client({
  endpoint: "http://minio:9000",
  region: "us-east-1",
  credentials: {
    accessKeyId: "minioadmin",
    secretAccessKey: "minioadmin"
  },
  forcePathStyle: true
  // tls: false 
});

const BUCKETS = {
  POSTS: 'posts',
  TEACHERS: 'teachers',
  GALLERY: 'gallery',
  DOCS: 'docs'
};

async function uploadToMinio(file, bucketName) {
  try {
    if (!file) {
      throw new Error('No file provided');
    }

    const bucket = BUCKETS[bucketName];
    if (!bucket) {
      throw new Error(`Invalid bucket name: ${bucketName}`);
    }

    const key = `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`;
    
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype
    });

    await s3.send(command);
    console.log(`Upload successful to ${bucket}, key:`, key);
    
    return key;

  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

export default upload;
export { uploadToMinio, BUCKETS };
