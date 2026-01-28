
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path || (path !== '/admin' && pathname.startsWith(`${path}/`));
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: 'radix-icons:dashboard' },
    { name: 'Blogs', path: '/admin/blog', icon: 'radix-icons:pencil-2' },
    { name: 'Inquiries', path: '/admin/inquiries', icon: 'radix-icons:chat-bubble' },
    { name: 'Subscribers', path: '/admin/subscribers', icon: 'radix-icons:envelope-closed' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-[60] bg-[#061d19] text-white p-2 rounded-lg shadow-lg"
      >
        <Icon icon={isOpen ? 'radix-icons:cross-2' : 'radix-icons:hamburger-menu'} className="w-6 h-6" />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
            className="md:hidden fixed inset-0 bg-black/50 z-[55] backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed md:sticky top-0 left-0 h-screen w-64 bg-[#061d19] text-white flex flex-col 
        border-r border-gray-800 shadow-xl z-[58] transition-transform duration-300 md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-16 flex items-center px-6 border-b border-gray-800/50">
           <Link href="/" className="flex items-center gap-2 group">
               <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
                  S
               </div>
               <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">SparkVerse</span>
           </Link>
        </div>

        <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
           <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Platform</p>
           {navItems.map((item) => (
               <Link 
                  key={item.path} 
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                     isActive(item.path)
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
              <button type="submit" className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all cursor-pointer">
                  <Icon icon="radix-icons:exit" className="w-5 h-5" />
                  <span>Sign Out</span>
              </button>
          </form>
        </div>
      </aside>
    </>
  );
}
