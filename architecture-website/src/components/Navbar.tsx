'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center h-16 w-auto">
            <Image src="/BianLogo.png" alt="Bian Mimarlık Logo" width={180} height={48} priority className="h-12 w-auto object-contain" />
          </a>
        </div>
      </div>
    </nav>
  );
} 