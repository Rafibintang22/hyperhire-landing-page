'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from './dataMenu';
import { Button } from '../atoms';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute z-50 w-full mx-auto px-6 md:px-20 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="logo" width={120} height={40} />
        </div>

        <div className="hidden lg:flex items-center gap-6 text-white">
          {menuItems.map((item, idx) => (
            <div key={idx} className="relative inline-block group">
              <Link href={item.href || '#'} className="px-3 py-2 hover:text-gray-200 transition">
                {item.title}
              </Link>

              {item.children && item.children.length > 0 && (
                <div className="absolute left-0 top-full mt-2 w-max bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <ul className="flex flex-col p-2">
                    {item.children.map((child, i) => (
                      <li key={i} className="py-1 px-2 hover:text-[#00C696]">
                        <Link href={child.href || '#'}>{child.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button className="font-bold">문의하기</Button>
        </div>

        <button className="lg:hidden text-white text-3xl" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-6 mt-4 bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col py-4 text-black">
            {menuItems.map((item, idx) => (
              <li key={idx} className="py-3 border-b border-gray-100">
                <div className="flex flex-col">
                  <Link href={item.href || '#'} className="font-medium text-lg" onClick={() => setOpen(false)}>
                    {item.title}
                  </Link>

                  {item.children && (
                    <ul className="pl-3 mt-2 space-y-2 text-gray-600">
                      {item.children.map((child, i) => (
                        <li key={i}>
                          <Link href={child.href || '#'} onClick={() => setOpen(false)}>
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="px-6 pb-4">
            <Button className="w-full font-bold bg-[#4a77ff]! text-white!">문의하기</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
