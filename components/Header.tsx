"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AMCP_CONTACT_URL } from "@/lib/amcp";
import { LOGO_SRC } from "@/lib/branding";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/contact";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [methodeOpen, setMethodeOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // L'ombre apparaît quand on a scrollé au-delà des bandeaux infos + logo
      // Hauteur approximative : ~180px (bandeau infos ~40px + bandeau logo ~140px)
      setIsScrolled(window.scrollY > 180);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Bandeau 1 : Infos contact (téléphone + email) */}
      <div className="bg-[#003662] text-white py-2 md:py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:flex-wrap sm:gap-4 md:gap-8 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a href="tel:+33661546344" className="flex items-center gap-2 hover:text-[#9FB620] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>06 61 54 63 44</span>
              </a>
              <a href={CONTACT_MAILTO} className="flex max-w-[min(100%,18rem)] items-center gap-2 hover:text-[#f4ca3a] transition-colors sm:max-w-none">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-all sm:break-normal">{CONTACT_EMAIL}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bandeau 2 : Logo + baseline */}
      <div className="bg-white py-4 md:py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-2 md:gap-3">
            <Link href="/" className="hover:opacity-80 transition-opacity outline-none focus:outline-none focus-visible:outline-none">
              <Image
                src={LOGO_SRC}
                alt="PatrimEmotion"
                width={300}
                height={100}
                className="h-20 sm:h-24 md:h-32 w-auto"
              />
            </Link>
            <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wide text-center text-balance px-1">
              <span className="text-[#9FB620]">Votre Personnalité.</span>{" "}
              <span className="text-[#003662]">Vos Émotions.</span>{" "}
              <span className="text-[#f4ca3a]">Votre Patrimoine.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bandeau 3 : Navigation (sticky) */}
      <header
        className={`sticky top-0 z-[100] w-full bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg shadow-neutral-900/10" : ""
        }`}
      >
        <nav className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between md:justify-center">
            {/* Bloc desktop unique centré : navigation + CTA */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-[#003662] hover:text-[#002a4a] font-semibold transition-colors text-base outline-none focus:outline-none focus-visible:outline-none">
                Accueil
              </Link>
              {/* La méthode — group-hover (le parent n’agrandit pas sa boîte avec les enfants absolute ; onMouseLeave fermait le menu trop tôt) */}
              <div className="relative group">
                <button
                  type="button"
                  className="text-[#003662] hover:text-[#002a4a] font-semibold flex items-center gap-1 transition-colors text-base outline-none focus:outline-none focus-visible:outline-none"
                >
                  La méthode
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full z-[110] hidden w-56 pt-2 group-hover:block group-focus-within:block">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                    <Link href="/methode" className="block px-4 py-2 text-[#003662] hover:text-[#002a4a] hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                      Le concept
                    </Link>
                    <Link href="/licences" className="block px-4 py-2 text-[#003662] hover:text-[#002a4a] hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                      Licences
                    </Link>
                    <Link href="/certifications" className="block px-4 py-2 text-[#003662] hover:text-[#002a4a] hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                      Certifications
                    </Link>
                    <Link href="/cadre-ethique-scientifique" className="block px-4 py-2 text-[#003662] hover:text-[#002a4a] hover:bg-neutral-50 transition-colors text-base font-semibold outline-none focus:outline-none focus-visible:outline-none">
                      Cadre Éthique et Scientifique
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button
                  type="button"
                  className="text-[#003662] hover:text-[#002a4a] font-semibold flex items-center gap-1 transition-colors text-base outline-none focus:outline-none focus-visible:outline-none"
                >
                  Solutions
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full z-[110] hidden w-48 pt-2 group-hover:block group-focus-within:block">
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
              </div>

              <Link href="/tarifs" className="text-[#003662] hover:text-[#002a4a] font-semibold transition-colors text-base outline-none focus:outline-none focus-visible:outline-none">
                Tarifs
              </Link>

              <a
                href={AMCP_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-12 bg-[#f4ca3a] text-[#003662] px-6 py-2.5 rounded-lg transition-all font-semibold text-base hover:bg-[#f5d055] shadow-sm outline-none focus:outline-none focus-visible:outline-none"
              >
                Prendre contact
              </a>
            </div>

            {/* Mobile menu button (visible uniquement sur mobile) */}
            <button
              type="button"
              className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-[#003662] outline-none focus:outline-none focus-visible:outline-none"
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
                    type="button"
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
                      <Link href="/licences" className="block text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold">
                        Licences
                      </Link>
                      <Link href="/certifications" className="block text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold">
                        Certifications
                      </Link>
                      <Link href="/cadre-ethique-scientifique" className="block text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold">
                        Cadre Éthique et Scientifique
                      </Link>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    type="button"
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
                <a
                  href={AMCP_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#003662] hover:text-[#002a4a] transition-colors text-base font-semibold"
                >
                  Contact
                </a>
                <a
                  href={AMCP_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f4ca3a] text-[#003662] px-6 py-3 rounded-lg hover:bg-[#f5d055] transition-colors font-semibold text-center text-base shadow-sm"
                >
                  Prendre contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
