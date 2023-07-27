const express = require('express')
const router = express.Router();
const nodemailer = require('nodemailer');
const Joi = require('joi');

const { Form } = require('../models/form');

// Define the email transport configuration for Nodemailer
const transporter = nodemailer.createTransport({
  // Configure your email transport settings (e.g., SMTP details)
  service: 'gmail',
      auth: {
        user: 'makanjuolabolaji9898@gmail.com',
        pass: 'ewgnxmuisvrvstkc',
      },
});

// Define a Joi schema for form validation
const formSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(5).required(),
});

// Define your API route for form submission
router.post('/contact', async (req, res) => {
  try {
    // Validate the form data
    const { error, value } = formSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Save the form data to the database (optional)
    const form = new Form(req.body);
    await form.save();

    // Send the email
    transporter.sendMail({
      from: req.body.email,
      to: 'makanjuolabolaji9898@gmail.com',
      subject: 'New contact form submission',
      text: `Name: ${value.name}\nEmail: ${value.email}\nMessage: ${value.message}`,
    });

    res.status(201).json({
      status: true,
      message: 'Thank you for your message'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'internal server error' });
  }
});

module.exports = router
