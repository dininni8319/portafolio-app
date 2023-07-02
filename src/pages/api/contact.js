const mail = require('@sendgrid/mail') 

mail.setApiKey(process.env.NEXT_PUBLIC_API_KEY);

export default async function handler(req, res) {
  
  const message = `
    Name: ${req.body.name}\r\n
    Email: ${req.body.email}\r\n
    Phone: ${req.body.phone}\r\n
    Message:  ${req.body.message}\r\n
  `;

  const data = {
    to: 's.dininni@yahoo.com',
    from: 'salvatoredininni1@gmail.com',
    subject: `New message from ${req.body.name}`,
    text: req.body.message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);

  res.status(200).json({ status: 'OK' });
}
