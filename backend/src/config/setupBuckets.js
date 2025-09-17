// scripts/setup-minio-bucket.js
import { S3Client, CreateBucketCommand, PutBucketPolicyCommand } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
import { DEFAULT_BUCKET } from "../lib/multer.js";

dotenv.config();

const s3 = new S3Client({
  endpoint: process.env.MINIO_ENDPOINT || "http://minio:9000",
  region: process.env.MINIO_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY || "minioadmin",
    secretAccessKey: process.env.MINIO_SECRET_KEY || "minioadmin"
  },
  forcePathStyle: true
});

const createBucketPolicy = (bucketName) => ({
  Version: "2012-10-17",
  Statement: [
    {
      Effect: "Allow",
      Principal: "*",
      Action: [
        "s3:GetObject"
      ],
      Resource: [
        `arn:aws:s3:::${bucketName}/*`
      ]
    },
    {
      Effect: "Allow",
      Principal: "*",
      Action: [
        "s3:ListBucket"
      ],
      Resource: [
        `arn:aws:s3:::${bucketName}`
      ]
    }
  ]
});

async function setupBucket(bucketName) {
  try {
    await s3.send(new CreateBucketCommand({ Bucket: bucketName }));
    console.log(`Bucket created: ${bucketName}`);
  } catch (err) {
    console.log(`CreateBucket result (might already exist):`, err.message || err.name || err);
  }

  try {
    await s3.send(new PutBucketPolicyCommand({
      Bucket: bucketName,
      Policy: JSON.stringify(createBucketPolicy(bucketName))
    }));
    console.log(`Policy set for bucket: ${bucketName}`);
  } catch (policyErr) {
    console.error('Error setting bucket policy:', policyErr);
  }
}

(async () => {
  try {
    await setupBucket(DEFAULT_BUCKET);
    console.log('Bucket setup finished.');
  } catch (e) {
    console.error('Setup failed:', e);
    process.exit(1);
  }
})();
