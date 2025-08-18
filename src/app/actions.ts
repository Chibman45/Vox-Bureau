'use server';

import * as z from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export async function sendContactMessage(values: z.infer<typeof formSchema>) {
  const { GMAIL_EMAIL, GMAIL_APP_PASSWORD } = process.env;

  if (!GMAIL_EMAIL || !GMAIL_APP_PASSWORD) {
    console.error('Gmail credentials are not set in environment variables.');
    return { success: false, message: 'Server configuration error.' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_EMAIL,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${values.name}" <${GMAIL_EMAIL}>`, // Sender name and address
    to: GMAIL_EMAIL, // Your receiving email address
    replyTo: values.email, // User's email address
    subject: `New Contact Form Submission from ${values.name}`,
    html: `
      <h2>New Inquiry from VoxPortfolio Website</h2>
      <p><strong>Name:</strong> ${values.name}</p>
      <p><strong>Email:</strong> ${values.email}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${values.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error: any) {
    console.error('Nodemailer error:', JSON.stringify(error, null, 2));
    return { success: false, message: 'There was an error sending your message.' };
  }
}
