<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# DigiGlee Cleaning Lead Intake Web App

This is a Node.js Express web application for DigiGlee Cleaning company that includes:

## Key Features
- Lead intake form with conditional logic (residential vs commercial)
- Email confirmation system using Nodemailer
- Calendar date picker for appointment scheduling
- JSON-based data storage for leads
- Modern, responsive UI with company branding
- Form validation and error handling

## Tech Stack
- Backend: Node.js + Express
- Frontend: HTML, CSS, JavaScript (vanilla)
- Email: Nodemailer with Gmail integration
- Storage: JSON file-based storage (easily replaceable with database)

## Code Guidelines
- Follow modern JavaScript ES6+ syntax
- Use async/await for asynchronous operations
- Implement proper error handling and validation
- Maintain responsive design principles
- Use semantic HTML and accessible form elements
- Follow REST API conventions for endpoints

## Company Branding
- Primary colors: #4dc3ff (light blue) and #2ab7ca (teal)
- Background: Light blue gradient (#e6f7f7 to #b3e5fc)
- Font: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Modern card-based layout with subtle shadows

## Development Notes
- The app uses environment variables for email configuration
- Form includes conditional fields based on building type
- Email templates are HTML formatted with inline styles
- Date picker prevents past date selection
- Phone number formatting is applied automatically
