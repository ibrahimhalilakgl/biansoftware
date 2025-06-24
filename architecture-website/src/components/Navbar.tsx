'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center h-16 w-auto">
            <Image src="/bianlogonew.png" alt="BİAN Software Logo" width={180} height={48} priority className="h-12 w-auto object-contain" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Ana Sayfa
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Hizmetler
            </Link>
            <Link href="#hakkimizda" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Hakkımızda
            </Link>
            <Link href="#iletisim" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              İletişim
            </Link>
            <a
              href="mailto:info@biansoftware.com"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              İletişime Geç
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Ana Sayfa
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Hizmetler
              </Link>
              <Link href="#hakkimizda" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Hakkımızda
              </Link>
              <Link href="#iletisim" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                İletişim
              </Link>
              <a
                href="mailto:info@biansoftware.com"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium text-center"
              >
                İletişime Geç
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 