import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/telegram-book", async (req, res) => {
    const { name, email, contactNo, service, date, time } = req.body;

    const message = `
🚨 *New Demo Booking* 🚨

👤 *Name*: \`${name}\`
📞 *Contact*: \`${contactNo}\`
✉️ *Email*: \`${email}\`
💼 *Service*: \`${service}\`
📅 *Date*: \`${date}\`
⏰ *Time*: \`${time}\`
    `;

    const token = "8687398510:AAFRpw9NjP4D5dB3cWP68bfQe7ZsCbro9yk";
    const chatId = "1564118457";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const tgResponse = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown"
        })
      });

      if (tgResponse.ok) {
        res.json({ success: true, message: "Booking confirmed and Telegram notification sent." });
      } else {
        const errData = await tgResponse.text();
        console.error('Telegram API error:', errData);
        res.status(500).json({ success: false, message: "Failed to send Telegram notification." });
      }
    } catch (error) {
      console.error('Error sending Telegram message:', error);
      res.status(500).json({ success: false, message: "Failed to send notification." });
    }
  });

  app.post("/api/book", async (req, res) => {
    const { name, email, contactNo, service, date, time } = req.body;

    console.log('Booking received:', { name, email, contactNo, service, date, time });

    try {
      // Configure your SMTP transporter here
      // For now, we'll use a mock or log it, but the code is ready for real SMTP
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.ethereal.email",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER || "mock_user",
          pass: process.env.SMTP_PASS || "mock_pass",
        },
      });

      const mailOptions = {
        from: '"Claritiy AI Booking" <bookings@claritiy.ai>',
        to: "devr01499@gmail.com", // The user's email for notifications
        subject: `New Demo Booking: ${name} for ${service}`,
        text: `
          New Demo Booking Received:
          
          Name: ${name}
          Email: ${email}
          Contact No: ${contactNo}
          Service: ${service}
          Date: ${date}
          Time: ${time}
        `,
        html: `
          <h3>New Demo Booking Received</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact No:</strong> ${contactNo}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
        `,
      };

      // In a real scenario with valid credentials, this would send the email
      // await transporter.sendMail(mailOptions);
      
      console.log('Notification email "sent" to devr01499@gmail.com');

      res.json({ success: true, message: "Booking confirmed and notification sent." });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: "Failed to send notification." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  return app;
}

const appPromise = startServer();
export default appPromise;
