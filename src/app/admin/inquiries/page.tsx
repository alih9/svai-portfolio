
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

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

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-gray-700">Name</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Email</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Role/Country</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Message</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Date</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {inquiries?.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">{item.full_name}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{item.email}</td>
                            <td className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">{item.role || 'N/A'}</div>
                                <div className="text-xs text-gray-500">{item.country || 'N/A'}</div>
                            </td>
                            <td className="px-6 py-4 text-gray-500 max-w-md truncate" title={item.message}>{item.message}</td>
                            <td className="px-6 py-4 text-gray-500 text-sm">{new Date(item.created_at).toLocaleDateString()}</td>
                        </tr>
                    ))}
                    {inquiries?.length === 0 && (
                        <tr>
                            <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                No inquiries found yet.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
