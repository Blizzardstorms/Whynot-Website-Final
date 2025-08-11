# YNB – SMTP Deploy Checklist (Generic Host)

Use this checklist for VPS, cPanel with Node, Docker on a VM, or any Node-compatible hosting.

1) Backend environment variables
   - SMTP_HOST=your.smtp.host
   - SMTP_PORT=587
   - SMTP_USER=postmaster@ynotbuild.co.za
   - SMTP_PASS=********
   - TO_EMAIL=stafford@ynotbuild.co.za
   - NODE_ENV=production
   - (Optional) DATABASE_URL=postgres://…  # only if newsletter/Prisma is used

2) Build & start commands
   - From repo root:
     - `pnpm install --frozen-lockfile`
     - `cd backend && pnpm build`
     - `cd ../frontend && pnpm build`
   - Start backend process:
     - `node backend/dist/server.js`
   - Serve frontend build from `frontend/dist` via your web server or CDN.

3) Process manager (recommended)
   - Use systemd, PM2, Docker, or your platform’s process manager to keep the backend running and restart on failure.

4) Reverse proxy / firewall
   - Point your public domain to the host.
   - Reverse proxy (e.g., Nginx/Caddy) forwards `/api/*` to the backend port (PORT env).
   - Serve static frontend from `frontend/dist`.

5) Verify
   - Check logs for: `USING SMTP CONTACT ROUTE` on first POST.
   - Health:
     - `curl -i https://<your-backend-domain>/api/health`
   - Contact:
     - `curl -i https://<your-backend-domain>/api/contact \
        -H "Content-Type: application/json" \
        -d '{"name":"Test","email":"me@example.com","message":"Ping"}'`
     - Expect `200` with `{ "ok": true }`.

6) Troubleshooting
   - `Invalid login` → check SMTP_USER/PASS.
   - `ENOTFOUND` → fix SMTP_HOST or DNS.
   - `Must issue STARTTLS first` → keep PORT=587 (STARTTLS). If provider requires SMTPS, set `secure:true` and `port:465` in the transporter.
