# Claritiy AI Consultancy

Expert AI Consultancy and Products for Modern Enterprise.

## Deployment to Vercel

1. **Export to GitHub**: Go to the **Settings** menu in AI Studio Build and select **GitHub** to push this code to your repository: `https://github.com/devr01499-ui/test1`.
2. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com) and import your GitHub repository.
   - Vercel should automatically detect the Vite project.
   - **Environment Variables**: Make sure to set any required environment variables in the Vercel dashboard (e.g., `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `GEMINI_API_KEY`).
3. **Deploy**: Click **Deploy**.

## Local Development

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.
