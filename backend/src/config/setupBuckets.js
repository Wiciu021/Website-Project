import { S3Client, CreateBucketCommand, PutBucketPolicyCommand } from "@aws-sdk/client-s3";
import { BUCKETS } from "../lib/multer.js";

const s3 = new S3Client({
    endpoint: "http://minio:9000",
    region: "us-east-1",
    credentials: {
        accessKeyId: "minioadmin",
        secretAccessKey: "minioadmin"
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
                "s3:GetObject",
                "s3:ListBucket"
            ],
            Resource: [
                `arn:aws:s3:::${bucketName}`,
                `arn:aws:s3:::${bucketName}/*`
            ]
        }
    ]
});

async function setupBucket(bucketName) {
    try {
        await s3.send(new CreateBucketCommand({ Bucket: bucketName }));

        await s3.send(new PutBucketPolicyCommand({
            Bucket: bucketName,
            Policy: JSON.stringify(createBucketPolicy(bucketName))
        }));

        console.log(`Bucket and policy setup completed for bucket: ${bucketName}`);
    } catch (error) {
        if (error.Code === 'BucketAlreadyExists' || error.Code === 'BucketAlreadyOwnedByYou') {
            console.log('Bucket already exists, setting policy...');
            try {
                await s3.send(new PutBucketPolicyCommand({
                    Bucket: bucketName,
                    Policy: JSON.stringify(createBucketPolicy(bucketName))
                }));
            } catch (policyError) {
                console.error('Error setting bucket policy:', policyError);
            }
        } else {
            console.error('Error in bucket setup:', error);
        }
    }
}

async function initializeBuckets() {
    for (const bucketName of Object.values(BUCKETS)) {
        await setupBucket(bucketName);
    }
}

initializeBuckets();