'use server';

import { createClient } from '@/utils/supabase/server';

export async function joinWaitlist(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get('email') as string;

  if (!email) {
    return { error: 'Email is required' };
  }

  const { error } = await supabase.from('product_alert_subscribers').insert([
    { email }
  ]);

  if (error) {
    if (error.code === '23505') {
      return { error: 'This email is already on the waitlist.' };
    }
    console.error('Error joining waitlist:', error);
    return { error: 'Failed to join waitlist. Please try again.' };
  }

  return { success: true };
}
