# DigiGlee Cleaning - Ready for Deployment

## 🚀 Quick Deploy Instructions

### Your app is ready! Here's how to deploy it in 5 minutes:

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click "+" → "New repository"
3. Name: `digiglee-cleaning-intake`
4. Make it Public ✅
5. Click "Create repository"

### Step 2: Upload Files
Upload these files to your GitHub repository:

**Required Files:**
- `server.js` ✅
- `package.json` ✅
- `public/index.html` ✅
- `leads.json` ✅
- `.env.example` ✅
- `README.md` ✅
- `DEPLOYMENT.md` ✅
- `.gitignore` ✅

### Step 3: Deploy to Render
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. "New +" → "Web Service"
4. Connect your repository
5. Settings:
   ```
   Build Command: npm install
   Start Command: npm start
   ```
6. Add Environment Variables:
   ```
   EMAIL_USER = your.email@gmail.com
   EMAIL_PASS = your-gmail-app-password
   ```

### Step 4: Get Your Live URL
Your app will be live at: `https://digiglee-cleaning.onrender.com`

## 🎯 Files Ready for Upload:
All your files are in this folder and ready to drag-drop to GitHub!
