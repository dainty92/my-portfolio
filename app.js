require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(bodyParser.json());

// Enable CORS for the relevant route
app.use('/send-email', cors({
  origin: 'https://esthercoders.netlify.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Verify the connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

  // Compose the email message
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('An error occurred while sending the email.');
    } else {
      console.log('Email sent:', info.response);
      res.send('Thank you for contacting us!');
    }
  });
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
