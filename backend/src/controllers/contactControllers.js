import nodemailer from 'nodemailer';
import config from "../config/config.js";

export const sendEmail = async (req, res) => {
  const { name, surname, email, message } = req.body;

  console.log('Received request:', { name, surname, email, message });
  console.log('Config values:', {
    mailUser: config.mailUser,
    myEmail: config.myEmail,
    mailPass: config.mailPass ? '***' + config.mailPass.slice(-4) : 'UNDEFINED'
  });

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.mailUser,
        pass: config.mailPass
      },
      // debug: true,
      // logger: true
    });

    const mailOptions = {
      from: config.mailUser,
      replyTo: email,
      to: config.myEmail,
      subject: `New message from: ${name} ${surname}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name} ${surname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `
    };

    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully! Message ID:', info.messageId);


    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Błąd wysyłania maila" , errorDetails: err.message, errorCode: err.code });
  }
}
