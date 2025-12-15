
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: 'radix-icons:dashboard' },
    { name: 'Create Blog', path: '/admin/blog/create', icon: 'radix-icons:pencil-2' },
    // Add more items here like 'Settings', 'Users' etc in future
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-[#061d19] text-white min-h-screen sticky top-0 h-screen overflow-y-auto border-r border-gray-800 shadow-xl z-50">
      <div className="h-16 flex items-center px-6 border-b border-gray-800/50">
         <Link href="/" className="flex items-center gap-2 group">
             {/* Logo Placeholder */}
             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
                S
             </div>
             <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">SparkVerse</span>
         </Link>
      </div>

      <div className="flex-1 py-6 px-3 space-y-1">
         <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Platform</p>
         {navItems.map((item) => (
             <Link 
                key={item.path} 
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                   (item.path === '/admin' ? pathname === '/admin' : isActive(item.path))
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
             >
                <Icon icon={item.icon} className="w-5 h-5" />
                <span>{item.name}</span>
             </Link>
         ))}
      </div>

      <div className="p-4 border-t border-gray-800/50">
        <form action="/auth/signout" method="post">
            <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all">
                <Icon icon="radix-icons:exit" className="w-5 h-5" />
                <span>Sign Out</span>
            </button>
        </form>
      </div>
    </aside>
  );
}
