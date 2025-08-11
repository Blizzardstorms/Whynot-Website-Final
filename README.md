# WhyNotBuild - Construction Company Website

A modern, responsive website for WhyNotBuild construction company built with:
- Frontend: Vite + React + TypeScript + TailwindCSS
- Backend: Express + TypeScript + Prisma
- Database: PostgreSQL

## Development Setup

### Prerequisites
- Node.js 18+
- pnpm (recommended)
- PostgreSQL

### Installation

1. Install dependencies:
   ```bash
   # Root
   pnpm install

   # Frontend
   cd frontend
   pnpm install

   # Backend
   cd ../backend
   pnpm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env` in both frontend and backend
   - Update with your database credentials

3. Run database migrations:
   ```bash
   cd backend
   pnpm prisma migrate dev
   ```

### Running Locally

1. Start the backend:
   ```bash
   cd backend
   pnpm dev
   ```

2. Start the frontend:
   ```bash
   cd frontend
   pnpm dev
   ```

## Deployment

This project can be deployed to any Node-compatible host (e.g., VPS, cPanel with Node, Docker on a VM, or a managed Node platform). Configure your CI/CD or provisioning to:

1. Install dependencies in both `backend/` and `frontend/`.
2. Build backend TypeScript to `backend/dist/` and build the frontend with Vite.
3. Start backend with `node backend/dist/server.js` and serve the frontend build via your chosen HTTP server.
4. Provide environment variables for the backend (SMTP_*, TO_EMAIL, DATABASE_URL if using Prisma, PORT).
