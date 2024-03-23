const express = require("express");
const bodyParser = require("body-parser");
const { SMTPClient } = require("emailjs");

require("dotenv").config();

const cors = require("cors"); // Import the cors middleware

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "https://portfolio-five-peach-45.vercel.app",
    optionsSuccessStatus: 200,
  })
); // Enable CORS with optionsSuccessStatus

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/api/contact", async (req, res) => {
  const { email, message } = req.body;

  const client = new SMTPClient({
    port: 587,
    tls: true,
    host: process.env.SMTP_HOST,
    user: process.env.EMAIL,
    password: process.env.PASS,
  });

  const mailOptions = {
    from: "mebanerjee2020@gmail.com",
    to: "mrbanerjeeprofessional@gmail.com",
    subject: "New Message from Contact Form",
    text: `Email: ${email}\nMessage: ${message}`,
  };

  try {
    await client.sendAsync(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  } finally {
    client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
