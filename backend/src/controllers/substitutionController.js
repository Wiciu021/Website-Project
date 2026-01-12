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

    /*const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
    const u = new URL(presignedUrl);
    const normalized = `${req.protocol}://${req.get("host")}${u.pathname}${u.search}`;

    res.json({ 
      ...latestSubstitution, 
      directURL: normalized  
    });
    */

    res.json(latestSubstitution)
  } catch (error) {
    console.error("Error fetching substitutions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCurrentSubstitution = async (req, res) => {
  try {
    const latest = await prisma.substitution.findFirst({ 
      orderBy: { 
        id: 'desc' 
      }});
    if (!latest?.file) return res.status(404).send('Brak pliku zastępstw'); //set also to undefined

    const cmd = new GetObjectCommand({
      Bucket: DEFAULT_BUCKET, 
      Key: latest.file 
    });
    const presigned = await getSignedUrl(s3, cmd, { 
      expiresIn: 3600
    });
    const u = new URL(presigned);
    const normalized = `${req.protocol}://${req.get('host')}${u.pathname}${u.search}`;

    res.set('Cache-Control', 'no-store');

    return res.redirect(normalized);
  } catch (error) {

    console.error('getCurrentSubstitution error:', error);
    return res.status(500).send('Błąd serwera');
  }
};
