import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, contactNo } = req.body || {};

  const message = `
💬 <b>New Chatbot User Signed In</b> 💬

👤 <b>Name:</b> <code>${name || 'N/A'}</code>
📞 <b>Contact:</b> <code>${contactNo || 'N/A'}</code>
✉️ <b>Email:</b> <code>${email || 'N/A'}</code>
🕐 <b>Time:</b> <code>${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</code>
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
        parse_mode: "HTML"
      })
    });

    if (tgResponse.ok) {
      return res.status(200).json({ success: true, message: "Chat sign-in recorded." });
    } else {
      const errData = await tgResponse.text();
      console.error('Telegram API error:', errData);
      return res.status(500).json({ success: false, message: "Failed to send Telegram notification." });
    }
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return res.status(500).json({ success: false, message: "Failed to send notification." });
  }
}
