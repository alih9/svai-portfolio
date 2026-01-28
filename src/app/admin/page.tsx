
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function AdminDashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  // Fetch KPI data
  const [
    { count: blogCount },
    { count: inquiryCount },
    { count: subscriberCount }
  ] = await Promise.all([
    supabase.from('blogs').select('*', { count: 'exact', head: true }),
    supabase.from('contact_requests').select('*', { count: 'exact', head: true }),
    supabase.from('product_alert_subscribers').select('*', { count: 'exact', head: true })
  ]);

  const stats = [
    { name: 'Total Blogs', value: blogCount || 0, icon: 'radix-icons:pencil-2', color: 'bg-blue-500', link: '/admin/blog' },
    { name: 'Total Inquiries', value: inquiryCount || 0, icon: 'radix-icons:chat-bubble', color: 'bg-green-500', link: '/admin/inquiries' },
    { name: 'Subscribers', value: subscriberCount || 0, icon: 'radix-icons:envelope-closed', color: 'bg-purple-500', link: '/admin/subscribers' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            Overview
        </h1>
        <div className="text-sm text-gray-500 font-medium">
            Stats updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {stats.map((stat) => (
          <Link 
            key={stat.name} 
            href={stat.link}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-6">
              <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center text-white shadow-lg shadow-${stat.color.split('-')[1]}-200/50`}>
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                <span>View Details</span>
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                  <Link href="/admin/blog/create" className="p-4 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition-all text-center font-medium border border-gray-100">
                      Write Blog
                  </Link>
                  <Link href="/admin/blog" className="p-4 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition-all text-center font-medium border border-gray-100">
                      Manage Blogs
                  </Link>
              </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <p className="text-gray-500 text-center italic">
                  "Focus on progress, not perfection."
              </p>
          </div>
      </div>
    </div>
  );
}
