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

This project is configured for deployment on Render.com. See the respective `render.yaml` files in each directory for deployment settings.
