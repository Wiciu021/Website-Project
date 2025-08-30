import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendEmail = async (req, res) => {
   const { email, message } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MY_EMAIL, // usawić mail w env
      subject: "New message",
      text: message
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Błąd wysyłania maila" });
  }
}
