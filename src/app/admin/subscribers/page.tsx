import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import SubscribersClient from './components/SubscribersClient';

export default async function SubscribersPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  const { data: subscribers, error } = await supabase
    .from('product_alert_subscribers')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching subscribers:', error);
  }

  return (
    <SubscribersClient initialSubscribers={subscribers || []} />
  );
}
