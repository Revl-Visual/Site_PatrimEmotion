"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [methodeOpen, setMethodeOpen] = useState(false);
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
            ? "max-w-4xl mx-auto bg-white py-3 md:py-3 px-6 md:px-8 shadow-lg shadow-neutral-900/10"
            : "py-4 md:py-5 container"
        }`}
      >
        <div className="flex items-center">
          {/* Logo à gauche */}
          <Link href="/" className="flex items-center z-10 hover:opacity-80 transition-opacity outline-none focus:outline-none focus-visible:outline-none">
            <Image
              src="/Logo_PNG.png"
              alt="PatrimEmotion"
              width={300}
              height={100}
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"}`}
            />
          </Link>
          
          {/* Navigation centrée */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <Link href="/" className="text-[#003662] hover:text-[#002a4a] font-semibold transition-colors text-base outline-none focus:outline-none focus-visible:outline-none">
              Accueil
            </Link>
            {/* La méthode dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setMethodeOpen(true)}
              onMouseLeave={() => setMethodeOpen(false)}
            >
              <button
                className="text-[#003662] hover:text-[#002a4a] font-semibold flex items-center gap-1 transition-colors text-base outline-none focus:outline-none focus-visible:outline-none"
              >
                La méthode
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {methodeOpen && (
                <div
                  className="absolute left-0 pt-2 top-full w-56"
                >
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <Link href="/methode" className="block px-4 py-2 text-[#003662] hover:text-[#002a4a] hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                    Le concept
                  </Link>
                  <Link href="/certification-licences" className="block px-4 py-2 text-[#003662] hover:text-[#002a4a] hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                    Certification et Licences
                  </Link>
                  <Link href="/cadre-ethique-scientifique" className="block px-4 py-2 text-[#003662] hover:text-[#002a4a] hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                    Cadre Éthique et Scientifique
                  </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button 
                className="text-[#003662] hover:text-[#002a4a] font-semibold flex items-center gap-1 transition-colors text-base outline-none focus:outline-none focus-visible:outline-none"
              >
                Solutions
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="absolute left-0 pt-2 top-full w-48">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <Link href="/solutions/particuliers" className="block px-4 py-2 text-[#003662] hover:text-[#002a4a] hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                    Particuliers
                  </Link>
                  <Link href="/solutions/professionnels" className="block px-4 py-2 text-[#003662] hover:text-[#002a4a] hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                    Professionnels
                  </Link>
                  <Link href="/solutions/institutionnels" className="block px-4 py-2 text-[#003662] hover:text-[#002a4a] hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                    Institutionnels
                  </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/tarifs" className="text-[#003662] hover:text-[#002a4a] font-semibold transition-colors text-base outline-none focus:outline-none focus-visible:outline-none">
              Tarifs
            </Link>
          </div>
          
          {/* CTA Button à droite */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-[#f4ca3a] text-[#003662] px-6 py-2.5 rounded-lg transition-all font-semibold text-base hover:bg-[#f5d055] shadow-sm outline-none focus:outline-none focus-visible:outline-none"
            >
              Demander une démo
            </Link>
          </div>

          {/* Mobile menu button (visible uniquement sur mobile) */}
          <button 
            className="md:hidden text-[#003662] outline-none focus:outline-none focus-visible:outline-none"
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
              <Link href="/" className="text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold">
                Accueil
              </Link>
              <div>
                <button
                  className="text-[#003662] hover:text-[#002a4a] flex items-center gap-2 w-full text-base font-semibold"
                  onClick={() => setMethodeOpen(!methodeOpen)}
                >
                  La méthode
                  <svg className={`w-4 h-4 transition-transform ${methodeOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {methodeOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link href="/methode" className="block text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold">
                      Le concept
                    </Link>
                    <Link href="/certification-licences" className="block text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold">
                      Certification et Licences
                    </Link>
                    <Link href="/cadre-ethique-scientifique" className="block text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold">
                      Cadre Éthique et Scientifique
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button 
                  className="text-[#003662] hover:text-[#002a4a] flex items-center gap-2 w-full text-base font-semibold"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                >
                  Solutions
                  <svg className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {solutionsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link href="/solutions/particuliers" className="block text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold">
                      Particuliers
                    </Link>
                    <Link href="/solutions/professionnels" className="block text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold">
                      Professionnels
                    </Link>
                    <Link href="/solutions/institutionnels" className="block text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold">
                      Institutionnels
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/tarifs" className="text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold">
                Tarifs
              </Link>
              <Link href="/contact" className="text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold">
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-[#f4ca3a] text-[#003662] px-6 py-3 rounded-lg hover:bg-[#f5d055] transition-colors font-semibold text-center text-base shadow-sm"
              >
                Demander une démo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
