import { Router } from 'express';
import sgMail from '@sendgrid/mail';

const router = Router();
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }
  try {
    await sgMail.send({
      to: 'stafford@ynotbuild.co.za',
      from: 'noreply@ynotbuild.co.za', // Must match verified sender
      subject: `New Contact Form from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('SendGrid error:', err.response?.body || err.message);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

export default router;
