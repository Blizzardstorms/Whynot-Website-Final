# Deploy

## Backend (Render)
- Root directory: `backend`
- Build command: `pnpm install`
- Start command: `node server.js`
- Env vars (must be set):
  SMTP_HOST=...
  SMTP_PORT=587
  SMTP_USER=...
  SMTP_PASS=...
  TO_EMAIL=stafford@ynotbuild.co.za
  NODE_ENV=production
- Verify:
  - Health: `GET /api/health` → {"status":"ok"}
  - Submit contact form → 200 {"ok":true}
  - Logs include: "USING SMTP CONTACT ROUTE"

## Frontend (Afrihost cPanel)
- From /frontend:
  pnpm install
  pnpm build
- Upload **contents** of `/frontend/dist/` to `public_html/`.
- Ensure `VITE_API_BASE` in `.env.production` is `https://ynotbuild-backend.onrender.com`.

## Local dev
- Terminal 1: `node backend/server.js`
- Terminal 2: `cd frontend && pnpm dev`
- Open http://localhost:5173
