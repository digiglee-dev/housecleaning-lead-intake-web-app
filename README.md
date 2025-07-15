# DigiGlee Cleaning Lead Intake Web App

A modern web application for DigiGlee Cleaning company to capture and manage cleaning service leads with automated email confirmations.

## 🚀 Quick Deploy

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/YOUR_USERNAME/digiglee-cleaning-intake)

**Live Demo:** Your app will be at `https://digiglee-cleaning.onrender.com` after deployment

## Features

- **Lead Intake Form** - Comprehensive form with conditional logic for residential and commercial cleaning services
- **Email Confirmations** - Automated email notifications sent to customers upon form submission
- **Calendar Integration** - Date picker for scheduling appointments with future date validation
- **Data Storage** - JSON-based storage system for lead management
- **Responsive Design** - Mobile-friendly interface with modern DigiGlee branding
- **Form Validation** - Client-side and server-side validation for data integrity

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Email**: Nodemailer with Gmail integration
- **Storage**: JSON file-based storage
- **Dependencies**: Express, Nodemailer, CORS, Body-parser, Dotenv

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Gmail account with app password for email functionality

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Update with your email credentials:
   ```
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

3. **Start the Application**
   ```bash
   # Development mode with auto-restart
   npm run dev

   # Production mode
   npm start
   ```

4. **Access the Application**
   - Open your browser to `http://localhost:5000`
   - Fill out the lead intake form
   - Check your email for confirmation

## Project Structure

```
├── public/
│   └── index.html          # Main HTML form with styling and JavaScript
├── .github/
│   └── copilot-instructions.md
├── server.js               # Express server with API endpoints
├── leads.json              # JSON storage for submitted leads
├── package.json            # Project dependencies and scripts
├── .env.example            # Environment variables template
└── README.md              # This file
```

## API Endpoints

- `GET /` - Serves the main form page
- `POST /submit-form` - Handles form submission and email sending
- `GET /leads` - Returns all submitted leads (admin use)

## Form Fields

### Contact Information
- Full Name (required)
- Email Address (required)
- Phone Number (required)

### Service Type
- Building Type: Residential or Commercial (required)

### Conditional Fields
**Residential:**
- Number of Bedrooms
- Number of Bathrooms
- Home Size

**Commercial:**
- Square Footage
- Number of Offices
- Business Type

### Service Details
- Service Type (one-time, weekly, bi-weekly, monthly, deep clean, move-in/out)
- Preferred Service Date (required)
- Time Preference
- Special Instructions
- Pet Information

## Email Configuration

The app uses Gmail SMTP for sending emails. To set up:

1. Enable 2-factor authentication on your Gmail account
2. Generate an app password in your Google Account settings
3. Use the app password in the `.env` file

## Deployment Options

### Free Deployment Platforms
- **Render** - Easy deployment with automatic builds
- **Railway** - Simple setup with database options
- **Vercel** - Serverless deployment (requires database for storage)
- **Heroku** - Traditional hosting platform

### Deployment Steps (Render Example)
1. Push code to GitHub repository
2. Connect repository to Render
3. Set environment variables in Render dashboard
4. Deploy automatically

## Database Migration

To upgrade from JSON storage to a database:

1. **SQLite** (Local)
   ```bash
   npm install sqlite3
   ```

2. **PostgreSQL** (Production)
   ```bash
   npm install pg
   ```

3. **MongoDB** (Cloud)
   ```bash
   npm install mongodb
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact the DigiGlee team.
