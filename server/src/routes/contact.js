import express from 'express';
import Contact from '../models/Contact.js';
import { sendEmail } from '../utils/email.js';
import { appendToGoogleSheet } from '../utils/googleSheets.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Submit contact form
router.post('/', async (req, res) => {
  try {
    // 1. Save to database
    const contact = await Contact.create(req.body);
    
    // 2. Append to Google Sheet
    await appendToGoogleSheet(req.body);
    
    // 3. Send email notification
    const emailText = `
      New Contact Form Submission:
      
      Name: ${contact.name}
      Email: ${contact.email}
      Subject: ${contact.subject}
      Message: ${contact.message}
      
      Submitted on: ${new Date().toLocaleString()}
    `;

    await sendEmail({
      to: 'srikumarpride@gmail.com',
      subject: `New Contact Form: ${contact.subject}`,
      text: emailText,
      html: emailText.replace(/\n/g, '<br>')
    });

    // 4. Send success response
    res.status(201).json({ 
      message: 'Message sent successfully',
      contact: contact
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(400).json({ 
      message: 'Failed to send message',
      error: error.message 
    });
  }
});

// Get all messages (protected)
router.get('/', auth, async (req, res) => {
  try {
    const messages = await Contact.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update message status (protected)
router.patch('/:id', auth, async (req, res) => {
  try {
    const [updated] = await Contact.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const message = await Contact.findByPk(req.params.id);
      res.json(message);
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router; 