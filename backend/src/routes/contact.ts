import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }
  try {
    const contact = await prisma.contactMessage.create({
      data: { name, email, message }
    });
    return res.status(201).json({ success: true, contact });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to save message.' });
  }
});

export default router;
