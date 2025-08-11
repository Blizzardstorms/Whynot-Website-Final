/*
 * SitePilot Construction Management System
 * © 2025 Stafford Kleinschmidt. All rights reserved.
 *
 * File: contact.ts
 * Description: Contact form endpoint with validation + safe email send
 * Last Edited: 2025-08-11
 * Version: 1.0.0
 * License: Proprietary – Do not distribute without permission.
 */
import { Router } from 'express'
import nodemailer from 'nodemailer'

const router = Router()

router.post('/', async (req, res) => {
  try {
    console.log('USING SMTP CONTACT ROUTE')
    const { name, email, message } = req.body ?? {}
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL } = process.env
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !TO_EMAIL)
      return res.status(500).json({ error: 'Email not configured' })

    const tx = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: false,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    })

    await tx.sendMail({
      from: `"YNB Website" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `YNB Contact: ${name}`,
      text: message
    })

    return res.json({ ok: true })
  } catch (e: any) {
    console.error('SMTP_ERROR:', e?.message || e)
    return res.status(500).json({ error: 'Failed to send email' })
  }
})

export default router
