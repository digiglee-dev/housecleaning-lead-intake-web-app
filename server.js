const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const leadsFile = path.join(__dirname, 'leads.json');

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'yourcompanyemail@gmail.com',
    pass: process.env.EMAIL_PASS || 'yourapppassword'
  }
});

// Helper function to save leads
function saveLead(lead) {
  let leads = [];
  if (fs.existsSync(leadsFile)) {
    try {
      leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));
    } catch (error) {
      console.error('Error reading leads file:', error);
      leads = [];
    }
  }
  
  // Add timestamp and unique ID
  lead.id = Date.now().toString();
  lead.timestamp = new Date().toISOString();
  
  leads.push(lead);
  
  try {
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving lead:', error);
    return false;
  }
}

// Helper function to send confirmation email
async function sendConfirmationEmail(lead) {
  const mailOptions = {
    from: process.env.EMAIL_USER || 'yourcompanyemail@gmail.com',
    to: lead.email,
    subject: 'DigiGlee Cleaning - Service Request Received',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #4dc3ff; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h2>DigiGlee Cleaning</h2>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9; border-radius: 0 0 8px 8px;">
          <h3>Thank you for your cleaning service request!</h3>
          <p>Hi ${lead.name},</p>
          <p>We have received your cleaning request for <strong>${lead.startDate}</strong>${lead.preferredTime ? ` at <strong>${lead.preferredTime}</strong>` : ''}.</p>
          
          <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h4>Request Details:</h4>
            <p><strong>Service Type:</strong> ${lead.buildingType === 'res' ? 'Residential' : 'Commercial'}</p>
            <p><strong>Address:</strong> ${lead.address}</p>
            <p><strong>Phone:</strong> ${lead.phone}</p>
            ${lead.preferredTime ? `<p><strong>Preferred Time:</strong> ${lead.preferredTime}</p>` : ''}
            ${lead.frequency ? `<p><strong>Frequency:</strong> ${lead.frequency}</p>` : ''}
            ${lead.inspectionDate ? `<p><strong>Preferred Inspection Date:</strong> ${lead.inspectionDate}</p>` : ''}
            ${lead.source ? `<p><strong>How you found us:</strong> ${lead.source}</p>` : ''}
            
            ${lead.buildingType === 'res' ? `
              <h5>Residential Details:</h5>
              ${lead.resSqft ? `<p><strong>Square Footage:</strong> ${lead.resSqft}</p>` : ''}
              ${lead.bedrooms ? `<p><strong>Bedrooms:</strong> ${lead.bedrooms}</p>` : ''}
              ${lead.bathrooms ? `<p><strong>Bathrooms:</strong> ${lead.bathrooms}</p>` : ''}
              ${lead.applianceCount ? `<p><strong>Number of Appliances:</strong> ${lead.applianceCount}</p>` : ''}
              ${lead.applianceList ? `<p><strong>Appliances:</strong> ${lead.applianceList}</p>` : ''}
              ${lead.resCleaningType ? `<p><strong>Cleaning Type:</strong> ${Array.isArray(lead.resCleaningType) ? lead.resCleaningType.join(', ') : lead.resCleaningType}</p>` : ''}
            ` : ''}
            
            ${lead.buildingType === 'com' ? `
              <h5>Commercial Details:</h5>
              ${lead.comSqft ? `<p><strong>Square Footage:</strong> ${lead.comSqft}</p>` : ''}
              ${lead.comAreas ? `<p><strong>Areas:</strong> ${Array.isArray(lead.comAreas) ? lead.comAreas.join(', ') : lead.comAreas}</p>` : ''}
              ${lead.comAppliances ? `<p><strong>Appliances:</strong> ${Array.isArray(lead.comAppliances) ? lead.comAppliances.join(', ') : lead.comAppliances}</p>` : ''}
            ` : ''}
            
            ${lead.notes ? `<p><strong>Special Requests:</strong> ${lead.notes}</p>` : ''}
          </div>
          
          <p>Our team will contact you within 24 hours to confirm your appointment and provide a detailed quote.</p>
          <p>If you have any questions, please don't hesitate to contact us.</p>
          
          <p>Best regards,<br>
          The DigiGlee Cleaning Team</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit-form', async (req, res) => {
  try {
    const lead = req.body;
    
    // Validate required fields
    if (!lead.name || !lead.email || !lead.phone || !lead.buildingType || !lead.address || !lead.startDate) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save lead to JSON file
    const saved = saveLead(lead);
    if (!saved) {
      return res.status(500).json({ error: 'Failed to save lead' });
    }

    // Send confirmation email
    const emailSent = await sendConfirmationEmail(lead);
    
    res.json({ 
      success: true, 
      message: 'Lead submitted successfully',
      emailSent: emailSent
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all leads (for admin purposes)
app.get('/leads', (req, res) => {
  try {
    if (fs.existsSync(leadsFile)) {
      const leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));
      res.json(leads);
    } else {
      res.json([]);
    }
  } catch (error) {
    console.error('Error reading leads:', error);
    res.status(500).json({ error: 'Failed to read leads' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 DigiGlee Cleaning server running on port ${PORT}`);
  console.log(`📧 Make sure to set EMAIL_USER and EMAIL_PASS environment variables for email functionality`);
});
