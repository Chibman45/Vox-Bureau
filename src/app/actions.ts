'use server';

import * as z from 'zod';
import sgMail from '@sendgrid/mail';

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
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not set.');
    return { success: false, message: 'Server configuration error.' };
  }
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'chibuzoririemenem6@gmail.com', // This is your email address
    from: 'chibuzoririemenem6@gmail.com', // This needs to be a verified sender in SendGrid
    replyTo: values.email, // Add the user's email as the reply-to address
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
    await sgMail.send(msg);
    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error: any) {
    // Log the detailed error from SendGrid
    console.error('SendGrid error:', JSON.stringify(error, null, 2));
    if (error.response && error.response.body) {
      console.error(error.response.body)
    }
    return { success: false, message: 'There was an error sending your message.' };
  }
}
