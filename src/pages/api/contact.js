// import sendgrid from "@sendgrid/mail"; 

// sendgrid.setApiKey(process.env.NEXT_PUBLIC_API_KEY);
import nodemailer from 'nodemailer';
export default async function handler(req, res) {
  
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_HOST,
    port: process.env.NEXT_PORT,
    auth: {
      user: process.env.NEXT_USER,
      pass: process.env.NEXT_PASSWORD
    }
  });

  const message = `
  Name: ${req.body.name}\r\n
    Subject: ${req.body.subject}\r\n
    Email: ${req.body.email}\r\n
    Phone: ${req.body.phone}\r\n
    Service:  ${req.body.service}\r\n
    Message:  ${req.body.message}\r\n
  `;

  try {
    await transporter.sendMail({
      to: 's.dininni@yahoo.com',
      from: 'salvatoredininni1@gmail.com',
      subject: `New message from ${req.body.subject}`,
      html: message.replace(/\r\n/g, '<br />'),
    });
  
  } catch (error) {
    console.error('Error sending email:');
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ message: 'OK' });
}
