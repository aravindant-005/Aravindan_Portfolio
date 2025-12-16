// server/server.cjs
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
// require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'aravindant005@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'odkv bdcf dxmo lnmu', // Gmail App Password
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: 'aravindant005@gmail.com',
      subject: `New message from ${name}: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send email', error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
