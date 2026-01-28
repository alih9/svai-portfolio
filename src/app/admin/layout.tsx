
import { createClient } from '@/utils/supabase/server';

// Since we cannot use hooks like usePathname in a server component layout smoothly without client wrapper,
// we will create a client component for the Sidebar Content or just keep it simple.
// For active states, Client Component is best.
import AdminSidebar from './components/AdminSidebar';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gray-50 font-body text-body-color flex">
       {user && <AdminSidebar />}
       
       <main className={`flex-1 transition-all duration-300 ${user ? '' : 'w-full'}`}>
         {/* Top Header for Admin (Mobile Toggle could go here) */}
         {user && (
            <header className="bg-white border-b border-gray-200 h-16 flex items-center pl-16 pr-4 md:px-8 justify-between sticky top-0 z-40">
                <h2 className="font-heading font-bold text-base md:text-lg text-dark truncate">Welcome back</h2>
                <div className="flex items-center gap-2 md:gap-4 ml-2">
                     <span className="text-xs md:text-sm text-gray-500 hidden sm:inline-block truncate max-w-[100px] lg:max-w-none">{user.email}</span>
                     <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold shrink-0">
                        {user.email?.[0].toUpperCase()}
                     </div>
                </div>
            </header>
         )}

         <div className="p-6 md:p-10 max-w-7xl mx-auto">
            {children}
         </div>
       </main>
    </div>
  );
}
