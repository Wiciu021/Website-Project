import multer from 'multer';
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import config from '../config/config.js';

const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10 MB limit
});

const s3 = new S3Client({
  endpoint: config.minioEndpoint,
  region: config.minioRegion,
  credentials: {
    accessKeyId: config.minioAccessKey,
    secretAccessKey: config.minioSecretKey
  },
  forcePathStyle: true
});

const DEFAULT_BUCKET = config.minioBucket;

const FOLDERS = {
  POSTS: 'posts',
  TEACHERS: 'teachers',
  GALLERY: 'gallery',
  DOCS: 'docs',
  SUBSTITUTIONS: 'substitutions'
};

async function uploadToMinio(file, folderKey) {
  try {
    if (!file) {
      throw new Error('No file provided');
    }

    const folder = FOLDERS[folderKey] || (Object.values(FOLDERS).includes(folderKey) ? folderKey : null);

    if (!folder) {
      throw new Error(`Invalid folder key: ${folderKey}`);
    }

    const sanitizedFileName = file.originalname.replace(/\s+/g, '-');
    const key = `${folder}/${Date.now()}-${sanitizedFileName}`;

    const command = new PutObjectCommand({
      Bucket: DEFAULT_BUCKET,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype
    });

    await s3.send(command);
    console.log(`Upload successful to ${DEFAULT_BUCKET}/${key}`);
    
    return key;

  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

export default upload;
export { uploadToMinio, FOLDERS, DEFAULT_BUCKET, s3 };
