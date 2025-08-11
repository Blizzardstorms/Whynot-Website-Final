# YNB – SMTP Deploy Checklist (Render)
1) Render → Backend → Settings → Environment:
   - SMTP_HOST=your.smtp.host
   - SMTP_PORT=587
   - SMTP_USER=postmaster@ynotbuild.co.za
   - SMTP_PASS=********
   - TO_EMAIL=stafford@ynotbuild.co.za
   - NODE_ENV=production
   - (Optional) DATABASE_URL=postgres://…  # only if newsletter/Prisma is used
2) Render → Backend → Settings → Build & Deploy:
   - Build: `pnpm install --frozen-lockfile && pnpm build`
   - Start: `node dist/server.js`
3) Manual Deploy → **Clear build cache** → Deploy latest commit.
4) Verify logs show: `USING SMTP CONTACT ROUTE`
5) Test:
   - Health:  `curl -i https://<your-backend>.onrender.com/api/health`
   - Contact: `curl -i https://<your-backend>.onrender.com/api/contact \
      -H "Content-Type: application/json" \
      -d '{"name":"Test","email":"me@example.com","message":"Ping"}'`
   Expect `200` with `{"ok":true}`.
6) If error:
   - `Invalid login` → check SMTP_USER/PASS.
   - `ENOTFOUND` → fix SMTP_HOST.
   - `Must issue STARTTLS first` → keep PORT=587 (STARTTLS). If provider forces 465, update code: `secure:true, port:465`.
