
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "A valid email is required." }),
  whatsappNo: z.string().min(10, { message: "A valid WhatsApp number is required." }),
  requiredQuantity: z.string().min(1, { message: "Quantity is required." }),
  orderQueryDetails: z.string().min(10, { message: "Order details are required." }),
  captcha: z.string(),
  num1: z.string(),
  num2: z.string(),
}).refine(data => parseInt(data.captcha, 10) === (parseInt(data.num1, 10) + parseInt(data.num2, 10)), {
  message: "Incorrect captcha answer.",
  path: ["captcha"],
});

type State = {
  success: boolean;
  message?: string;
};

export async function submitCorporateOrderForm(formData: FormData): Promise<State> {
  if (!process.env.RESEND_API_KEY) {
    console.error('Resend API key is not configured.');
    return { success: false, message: 'The email service is not configured. Please contact the site administrator.' };
  }
  
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = formSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    const firstError = validatedFields.error.errors[0];
    return {
      success: false,
      message: `${firstError.path.join('.')}: ${firstError.message}`,
    };
  }
  
  const { name, email, whatsappNo, requiredQuantity, orderQueryDetails } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Koel Group Corporate Order <onboarding@resend.dev>',
      to: ['koelgroup@outlook.com'],
      subject: `New Corporate/Bulk Order Inquiry`,
      html: `
        <h2>New Corporate/Bulk Order Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp No:</strong> ${whatsappNo}</p>
        <p><strong>Required Quantity:</strong> ${requiredQuantity}</p>
        <p><strong>Order Query Details:</strong></p>
        <p>${orderQueryDetails}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, message: 'Failed to send email. Please try again later.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
