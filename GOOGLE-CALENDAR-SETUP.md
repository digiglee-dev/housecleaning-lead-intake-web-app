# Google Calendar Integration Setup Guide

## Overview
This web application now includes Google Calendar integration to show available appointment times based on your actual calendar availability. When a user selects a date, the system will check your Google Calendar and display only the time slots that are available.

## Prerequisites
- A Google account with Google Calendar
- Access to Google Cloud Console
- Basic understanding of API configurations

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" and then "New Project"
3. Enter project name: `DigiGlee-Calendar-Integration`
4. Click "Create"

## Step 2: Enable Google Calendar API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Calendar API"
3. Click on "Google Calendar API" and then "Enable"

## Step 3: Create Credentials

### Create API Key
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API key - you'll need this for `API_KEY` in the code
4. Click "Restrict Key" to add restrictions:
   - Under "API restrictions", select "Restrict key"
   - Choose "Google Calendar API"
   - Click "Save"

### Create OAuth 2.0 Client ID
1. Still in "Credentials", click "Create Credentials" > "OAuth client ID"
2. If prompted, configure the OAuth consent screen first:
   - Choose "External" user type
   - Fill in required fields (app name, user support email, developer email)
   - Add your domain to authorized domains
   - Save and continue through the screens
3. For OAuth client ID:
   - Application type: "Web application"
   - Name: "DigiGlee Calendar Access"
   - Authorized JavaScript origins: Add your domain (e.g., `https://your-domain.com`)
   - Click "Create"
4. Copy the Client ID - you'll need this for `CLIENT_ID` in the code

## Step 4: Configure the Application

1. Open `public/index.html`
2. Find these lines near the top of the `<script>` section:
   ```javascript
   const API_KEY = 'YOUR_API_KEY';
   const CLIENT_ID = 'YOUR_CLIENT_ID';
   ```
3. Replace `YOUR_API_KEY` with your actual API key
4. Replace `YOUR_CLIENT_ID` with your actual OAuth client ID

## Step 5: Test the Integration

1. Deploy your application or run it locally
2. Open the form and select a date in the "Preferred Start Date" field
3. You should be prompted to sign in with Google (first time only)
4. After authentication, available time slots should appear below the date field

## How It Works

### Business Hours
- The system is configured for business hours: 9 AM to 6 PM
- Available Monday through Saturday (no Sunday appointments)
- Time slots are shown in 1-hour increments

### Availability Logic
- The system checks your primary Google Calendar for events
- Any time slot with an existing event is marked as unavailable
- Only free time slots are displayed as clickable options
- Users can select from available times which are automatically included in the form submission

### User Experience
- When a user selects a date, the system loads available times
- Available times are displayed as clickable buttons
- Selected time is highlighted and included in the lead submission
- If calendar integration fails, users can still submit the form with just the date

## Security Considerations

- API keys should be restricted to specific APIs and domains
- OAuth consent screen should be properly configured
- Consider using environment variables for sensitive credentials in production
- The integration only reads calendar data (read-only access)

## Troubleshooting

### "Error loading availability"
- Check that your API key is correct and unrestricted for the Calendar API
- Verify that the Google Calendar API is enabled in your Google Cloud project
- Ensure your domain is added to authorized JavaScript origins

### Authentication Issues
- Make sure the OAuth client ID is correct
- Check that your domain is properly configured in the OAuth settings
- Clear browser cache and cookies if authentication seems stuck

### No Available Times Showing
- Verify that your calendar has free time slots during business hours
- Check that the date selected is not a Sunday
- Ensure your calendar events are properly formatted with start/end times

## Fallback Behavior

If the Google Calendar integration is not set up or fails:
- The form will still work normally
- Users will see a message about manual time selection
- The date picker will continue to function
- Form submissions will work without the calendar integration

## Benefits

- **Automated Scheduling**: No more double-booking or manual calendar checking
- **Real-time Availability**: Always shows current calendar availability
- **Better User Experience**: Customers see exactly when you're available
- **Reduced Back-and-forth**: Less need for follow-up scheduling calls
- **Professional Appearance**: Modern calendar integration looks professional

This integration makes your lead intake form much more sophisticated and helps automate the appointment scheduling process while maintaining a professional appearance.
