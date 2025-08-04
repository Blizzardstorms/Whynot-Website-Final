import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }
  try {
    const signup = await prisma.emailSignup.create({
      data: { email }
    });
    return res.status(201).json({ success: true, signup });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to save email.' });
  }
});

export default router;
