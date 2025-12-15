
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

  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blogs:', error);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            Dashboard
        </h1>
        <Link 
            href="/admin/blog/create"
            className="px-6 py-2.5 bg-primary text-white rounded-full hover:bg-blue-600 shadow-md transition-all flex items-center gap-2 font-medium"
        >
            <span>+ Create New</span>
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-gray-700">Title</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Status</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Date</th>
                        <th className="px-6 py-4 font-semibold text-gray-700 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {blogs?.map((blog) => (
                        <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">{blog.title}</td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${blog.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                    {blog.published ? 'Published' : 'Draft'}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-gray-500">{new Date(blog.created_at).toLocaleDateString()}</td>
                            <td className="px-6 py-4 text-right">
                                <Link href={`/admin/blog/edit/${blog.id}`} className="text-blue-600 hover:text-blue-800 mr-4 font-medium">Edit</Link>
                                {/* Delete logic would go here, maybe a client component for the row to handle delete */}
                            </td>
                        </tr>
                    ))}
                    {blogs?.length === 0 && (
                        <tr>
                            <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                No blogs found. Create your first one!
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
