
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import InquiriesClient from './components/InquiriesClient';

export default async function InquiriesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  const { data: inquiries, error } = await supabase
    .from('contact_requests')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching inquiries:', error);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            Inquiries
        </h1>
      </div>

      <InquiriesClient initialInquiries={inquiries || []} />
    </div>
  );
}
