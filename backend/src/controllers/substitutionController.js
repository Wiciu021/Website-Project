import prisma from "../lib/prisma.js";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3, DEFAULT_BUCKET } from "../lib/multer.js";

export const getSubstitutions = async (req, res) => {
  try {
    const latestSubstitution = await prisma.substitution.findFirst({
      orderBy: {
        id : 'desc'
      }
    });

    if (!latestSubstitution) {
      return res.status(404).json({ error: "No substitutions found" });
    }

    const command = new GetObjectCommand({
      Bucket: DEFAULT_BUCKET,
      Key: latestSubstitution.file
    });

    const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });

    res.json({ 
      ...latestSubstitution, 
      directURL: presignedUrl  
    });
  } catch (error) {
    console.error("Error fetching substitutions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
