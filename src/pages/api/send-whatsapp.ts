import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { to, message } = req.body;

  if (!to || !message) {
    return res.status(400).json({ error: "Missing 'to' or 'message'" });
  }

  try {
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID!,
      process.env.TWILIO_AUTH_TOKEN!
    );

    const result = await client.messages.create({
      from: "whatsapp:+14155238886", // Twilio Sandbox Number
      to: `whatsapp:${to}`,          // user’s WhatsApp number
      body: message,
    });

    return res.status(200).json({ success: true, sid: result.sid });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
