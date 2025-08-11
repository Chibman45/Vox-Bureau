'use server';

import * as z from 'zod';

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
  // Here is where you would integrate your email sending service (e.g., Resend, SendGrid)
  // For now, we'll just log the data to the console.
  console.log('New contact form submission:');
  console.log('Name:', values.name);
  console.log('Email:', values.email);
  console.log('Message:', values.message);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // You would typically return a success or error object from your email service
  return { success: true, message: 'Your message has been sent successfully!' };
}
