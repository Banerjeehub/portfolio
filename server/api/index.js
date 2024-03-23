const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const cors = require("cors"); // Import the cors middleware

const app = express();
const PORT = 3000;

app.use(cors({ origin: "https://portfolio-five-peach-45.vercel.app" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/api/contact", async (req, res) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: "mebanerjee2020@gmail.com",
    to: "mrbanerjeeprofessional@gmail.com",
    subject: "New Message from Contact Form",
    text: `Email: ${email}\nMessage: ${message}`,
  };
  await transporter.sendMail(mailOptions);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
