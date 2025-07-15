# Deployment Guide for DigiGlee Cleaning Web App

## Quick Deploy Options (Free)

### Option 1: Render (Recommended)
Render is ideal for Node.js apps with automatic deploys from Git.

1. **Prepare for Deployment**
   - Push your code to GitHub
   - Make sure `.env` is in `.gitignore` (already included)

2. **Deploy on Render**
   - Sign up at [render.com](https://render.com)
   - Connect your GitHub repository
   - Create a new "Web Service"
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables in Render dashboard:
     - `EMAIL_USER`: your-email@gmail.com
     - `EMAIL_PASS`: your-app-password

3. **Your app will be live** at `https://your-app-name.onrender.com`

### Option 2: Railway

1. **Deploy to Railway**
   - Sign up at [railway.app](https://railway.app)
   - Connect GitHub repository
   - Add environment variables
   - Deploy automatically

### Option 3: Vercel (Serverless)
Note: Requires converting to serverless functions for API routes.

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## Email Setup (Gmail)

1. **Enable 2-Factor Authentication**
   - Go to your Google Account settings
   - Enable 2FA

2. **Generate App Password**
   - Google Account → Security → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASS`

3. **Environment Variables**
   ```
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   PORT=3000
   ```

## Local Development

1. **Clone and Setup**
   ```bash
   git clone <your-repo>
   cd digi-glee-cleaning
   npm install
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your email credentials
   ```

3. **Run Locally**
   ```bash
   npm run dev    # Development with auto-restart
   npm start      # Production mode
   ```

## Database Upgrade (Optional)

### SQLite (Simple File Database)
```bash
npm install sqlite3
```

### PostgreSQL (Production Ready)
```bash
npm install pg
```

### MongoDB Atlas (Cloud Database)
```bash
npm install mongodb
```

## SSL Certificate
Free SSL is automatically provided by:
- Render
- Railway  
- Vercel
- Netlify

## Custom Domain
1. Buy domain from registrar
2. Point DNS to your hosting platform
3. Configure custom domain in hosting dashboard

## Monitoring & Analytics
- Add Google Analytics to track form submissions
- Use hosting platform's built-in monitoring
- Set up uptime monitoring (UptimeRobot)

## Backup Strategy
- Database: Regular exports
- Code: Git repository
- Environment: Document all settings

## Support
For technical support or questions about deployment, contact the development team.
