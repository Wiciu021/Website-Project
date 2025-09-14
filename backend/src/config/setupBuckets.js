import { S3Client, CreateBucketCommand, PutBucketPolicyCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
    endpoint: "http://minio:9000",
    region: "us-east-1",
    credentials: {
        accessKeyId: "minioadmin",
        secretAccessKey: "minioadmin"
    },
    forcePathStyle: true
});

const bucketPolicy = {
    Version: "2012-10-17",
    Statement: [
        {
            Effect: "Allow",
            Principal: "*",
            Action: ["s3:GetObject"],
            Resource: ["arn:aws:s3:::posts/*"]
        }
    ]
};

async function setupBuckets() {
    try {
        // Create bucket
        await s3.send(new CreateBucketCommand({ 
            Bucket: "posts"
        }));

        // Set bucket policy
        await s3.send(new PutBucketPolicyCommand({
            Bucket: "posts",
            Policy: JSON.stringify(bucketPolicy)
        }));

        console.log('Bucket and policy setup completed');
    } catch (error) {
        if (error.Code === 'BucketAlreadyExists' || error.Code === 'BucketAlreadyOwnedByYou') {
            console.log('Bucket already exists, setting policy...');
            try {
                await s3.send(new PutBucketPolicyCommand({
                    Bucket: "posts",
                    Policy: JSON.stringify(bucketPolicy)
                }));
            } catch (policyError) {
                console.error('Error setting bucket policy:', policyError);
            }
        } else {
            console.error('Error in bucket setup:', error);
        }
    }
}

setupBuckets();