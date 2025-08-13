import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// Contact
app.post("/api/contact", async (req, res) => {
  console.log("USING SMTP CONTACT ROUTE");
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message)
      return res.status(400).json({ error: "Missing fields" });

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
      return res.status(500).json({ error: "Email not configured" });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"${process.env.COMPANY_NAME || "Y-Not Build"}" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Website Contact: ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return res.json({ ok: true });
  } catch (e) {
    console.error("SMTP_ERROR:", e?.message || e);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
