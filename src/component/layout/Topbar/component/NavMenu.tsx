'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import { usePathname } from 'next/navigation';
import { navMenuData } from '@/component/layout/Topbar/data/navData';

const NavMenu = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const isDropdownOpen = (idx: number) => hoveredIndex === idx || clickedIndex === idx;

  const handleClick = (idx: number) => {
    setClickedIndex(clickedIndex === idx ? null : idx);
  };

  return (
    <nav id="navbar" aria-label="Main Navigation" className="lg:flex hidden justify-center relative z-50">
      <ul className="flex items-center gap-5 list-none m-0 p-0">
        {navMenuData.map((item, idx) => {
          let isActive = false;

          if (item.href && pathname === item.href) {
            isActive = true;
          } else if (item.type === 'link' && item.children) {
            isActive = item.children.some(child => pathname.startsWith(child.href));
          } else if (item.type === 'image' && item.children) {
            isActive = item.children.some(child => pathname.startsWith(child.href));
          } else if (item.type === 'mega' && item.columns) {
            isActive = item.columns.some((col: any) =>
              col.links.some((link: any) => pathname.startsWith(link.href))
            );
          }

          if (item.href) {
            return (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="flex items-center text-dark text-base py-1.25 font-medium"
                >
                  <span className={isActive ? 'underline' : ''}>{item.title}</span>
                </Link>
              </li>
            );
          }

          return (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                type="button"
                onClick={() => handleClick(idx)}
                className="cursor-pointer text-dark flex items-center py-2.5 font-medium gap-1"
              >
                <span className={isActive ? 'underline' : ''}>{item.title}</span>
                <IconifyIconClient icon="tabler:chevron-down" className="w-4 h-4 text-dark" />
              </button>

              {isDropdownOpen(idx) && (
                <div role="menu" className="absolute left-0 top-full mt-2 w-max bg-white border border-neutral-200 rounded-2xl shadow-lg z-50 overflow-hidden">
                  {item.type === 'link' && item.children && (
                    <div className="p-5 min-w-60">
                      {item.children.map((link: any, i: number) => (
                        <Link
                          key={i}
                          href={link.href}
                          className="block text-base py-1.5"
                          onClick={() => setClickedIndex(null)}
                        >
                          <span
                            className={`inline-block font-medium text-dark ${
                              pathname.startsWith(link.href) ? 'underline' : ''
                            } hover:underline`}
                          >
                            {link.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.type === 'image' && item.children && (
                    <div className="grid grid-cols-2 gap-5 p-5 w-[560px]">
                      <div>
                        {item.image && (
                          <Image src={item.image} alt="Element" className="rounded-2xl w-full" width={280} height={200} />
                        )}
                      </div>
                      <div className="flex flex-col justify-center gap-2.5 py-5">
                        {item.children.map((link: any, i: number) => (
                          <Link
                            key={i}
                            href={link.href}
                            className="flex items-center gap-2 p-4 rounded-2xl hover:bg-gray-100"
                            onClick={() => setClickedIndex(null)}
                          >
                            {link.icon && <IconifyIconClient icon={link.icon} className="w-6 h-6 text-black" />}
                            <div>
                              <div
                                className={`text-black font-medium ${
                                  pathname.startsWith(link.href) ? 'underline' : ''
                                } hover:underline`}
                              >
                                {link.label}
                              </div>
                              <p className="text-sm text-dark">{link.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.type === 'mega' && item.columns && (
                    <div className="grid grid-cols-3 gap-10 p-5 w-[560px]">
                      {item.columns.map((col: any, cIdx: number) => (
                        <div key={cIdx}>
                          {col.links.map((link: any, lIdx: number) => (
                            <Link
                              key={lIdx}
                              href={link.href}
                              className={`block font-medium text-dark text-base py-1.5 ${
                                pathname.startsWith(link.href) ? 'underline' : ''
                              } hover:underline`}
                              onClick={() => setClickedIndex(null)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
