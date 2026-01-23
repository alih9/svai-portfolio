'use server';

import { createClient } from '@/utils/supabase/server';

export async function submitContactForm(formData: FormData) {
  const supabase = await createClient();

  const fullName = formData.get('name') as string;
  const email = formData.get('email') as string;
  const role = formData.get('role') as string;
  const country = formData.get('country') as string;
  const message = formData.get('message') as string;

  if (!fullName || !email || !message) {
    return { error: 'Missing required fields' };
  }

  const { error } = await supabase.from('contact_requests').insert([
    {
      full_name: fullName,
      email: email,
      role: role,
      country: country,
      message: message,
    },
  ]);

  if (error) {
    console.error('Error submitting contact form:', error);
    return { error: 'Failed to submit form. Please try again.' };
  }

  return { success: true };
}
