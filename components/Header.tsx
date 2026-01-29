"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color] duration-300 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 ${
        isScrolled ? "pt-4 md:pt-6 pb-4 md:pb-6" : ""
      }`}
    >
      <nav
        className={`mx-auto px-6 md:px-8 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "max-w-4xl mx-auto bg-white py-3 md:py-3 px-6 md:px-8"
            : "py-4 md:py-5 container"
        }`}
      >
        <div className="flex items-center">
          {/* Logo à gauche */}
          <Link href="/" className="flex items-center z-10 hover:opacity-80 transition-opacity outline-none focus:outline-none focus-visible:outline-none">
            <Image
              src="/Logo_PNG.png"
              alt="PatrimEmotion"
              width={240}
              height={80}
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"}`}
            />
          </Link>
          
          {/* Navigation centrée */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <Link href="/" className="text-neutral-700 hover:text-neutral-900 font-semibold transition-colors text-base outline-none focus:outline-none focus-visible:outline-none">
              Accueil
            </Link>
            <Link href="/methode" className="text-neutral-700 hover:text-neutral-900 font-semibold transition-colors text-base outline-none focus:outline-none focus-visible:outline-none">
              La méthode
            </Link>
            
            {/* Solutions dropdown */}
            <div className="relative group">
              <button 
                className="text-neutral-700 hover:text-neutral-900 font-semibold flex items-center gap-1 transition-colors text-base outline-none focus:outline-none focus-visible:outline-none"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                Solutions
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link href="/solutions/particuliers" className="block px-4 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                    Particuliers
                  </Link>
                  <Link href="/solutions/professionnels" className="block px-4 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                    Professionnels
                  </Link>
                  <Link href="/solutions/institutionnels" className="block px-4 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                    Institutionnels
                  </Link>
                </div>
              )}
            </div>

            <Link href="/tarifs" className="text-neutral-700 hover:text-neutral-900 font-semibold transition-colors text-base outline-none focus:outline-none focus-visible:outline-none">
              Tarifs
            </Link>
          </div>
          
          {/* CTA Button à droite */}
          <div className="hidden md:block">
            <Link
              href="/test"
              className="bg-neutral-900 text-white px-6 py-2.5 rounded-lg transition-all font-semibold text-base hover:bg-neutral-800 shadow-sm outline-none focus:outline-none focus-visible:outline-none"
            >
              Faire le test
            </Link>
          </div>

          {/* Mobile menu button (visible uniquement sur mobile) */}
          <button 
            className="md:hidden text-neutral-900 outline-none focus:outline-none focus-visible:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="text-neutral-700 hover:text-neutral-900 transition-colors text-base font-semibold">
                Accueil
              </Link>
              <Link href="/methode" className="text-neutral-700 hover:text-neutral-900 transition-colors text-base font-semibold">
                La méthode
              </Link>
              <div>
                <button 
                  className="text-neutral-700 hover:text-neutral-900 flex items-center gap-2 w-full text-base font-semibold"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                >
                  Solutions
                  <svg className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {solutionsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link href="/solutions/particuliers" className="block text-neutral-700 hover:text-neutral-900 transition-colors text-base font-semibold">
                      Particuliers
                    </Link>
                    <Link href="/solutions/professionnels" className="block text-neutral-700 hover:text-neutral-900 transition-colors text-base font-semibold">
                      Professionnels
                    </Link>
                    <Link href="/solutions/institutionnels" className="block text-neutral-700 hover:text-neutral-900 transition-colors text-base font-semibold">
                      Institutionnels
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/tarifs" className="text-neutral-700 hover:text-neutral-900 transition-colors text-base font-semibold">
                Tarifs
              </Link>
              <Link href="/contact" className="text-neutral-700 hover:text-neutral-900 transition-colors text-base font-semibold">
                Contact
              </Link>
              <Link
                href="/test"
                className="bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors font-semibold text-center text-base shadow-sm"
              >
                Faire le test
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
