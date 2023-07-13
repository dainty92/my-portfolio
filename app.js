const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Enable CORS for all routes
app.use(cors());

// POST route for the contact form
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'estheradexdainty@gmail.com',
        pass: 'rnopzwewixwwgocr',
        },
    });

  // Compose the email message
  const mailOptions = {
    from: email,
    to: 'estheradexdainty@gmail.com',
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

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
