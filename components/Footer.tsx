import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#003662] text-white">
      <div className="container mx-auto px-4 py-14 md:py-20">
        {/* Bloc principal : logo + contenu en grille */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Colonne marque : logo (gros) + slogan + contact */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4 bg-white p-2 rounded-lg border-2 border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4ca3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#003662]">
              <Image
                src="/Logo_PNG.png"
                alt="PatrimEmotion"
                width={320}
                height={107}
                className="h-16 sm:h-20 md:h-24 w-auto"
              />
            </Link>
            <p className="text-white/95 text-base md:text-lg leading-relaxed max-w-sm mb-6">
              Donner du sens à vos décisions patrimoniales
            </p>
            <div className="space-y-2 text-sm md:text-base text-white/90">
              <p>
                <strong className="text-[#f4ca3a] font-sans">Email</strong>
                <br />
                <a href="mailto:cabinet.amcp@gmail.com" className="hover:text-white hover:underline transition-colors">
                  cabinet.amcp@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-[#f4ca3a] font-sans">Téléphone</strong>
                <br />
                <a href="tel:+33661546344" className="hover:text-white hover:underline transition-colors">
                  06 61 54 63 44
                </a>
              </p>
            </div>
          </div>

          {/* Colonne Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#f4ca3a] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li className="pt-2 mt-2 border-t border-white/20">
                <span className="text-[#f4ca3a] font-sans font-bold text-xs uppercase tracking-wider">La méthode</span>
              </li>
              <li>
                <Link href="/methode" className="hover:text-white transition-colors">
                  Le concept
                </Link>
              </li>
              <li>
                <Link href="/certification-licences" className="hover:text-white transition-colors">
                  Certification et Licences
                </Link>
              </li>
              <li>
                <Link href="/cadre-ethique-scientifique" className="hover:text-white transition-colors">
                  Cadre Éthique et Scientifique
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-white transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne Solutions */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#f4ca3a] mb-4">
              Nos solutions
            </h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li>
                <Link href="/solutions/particuliers" className="hover:text-white transition-colors">
                  Particuliers & Dirigeants
                </Link>
              </li>
              <li>
                <Link href="/solutions/professionnels" className="hover:text-white transition-colors">
                  Professionnels CGP
                </Link>
              </li>
              <li>
                <Link href="/solutions/institutionnels" className="hover:text-white transition-colors">
                  Institutionnels & Réseaux
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne Accompagnement */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#f4ca3a] mb-4">
              Accompagnement
            </h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li>
                <Link href="/methode" className="hover:text-white transition-colors">
                  Le concept
                </Link>
              </li>
              <li>
                <Link href="/test" className="hover:text-white transition-colors">
                  Faire le test
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Prendre rendez-vous
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne CTA + Réseaux */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end">
            <p className="text-sm text-white/90 max-w-[200px] lg:text-right mb-6">
              La méthode qui remet l&apos;humain au cœur des décisions patrimoniales
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#f4ca3a] text-[#003662] hover:bg-[#f5d055] font-bold px-5 py-2.5 rounded-lg transition-colors text-sm mb-6"
            >
              Demander une démo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="font-sans text-xs text-[#f4ca3a] font-semibold uppercase tracking-wider mb-2">
              Suivez-nous
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/am-courtage-et-patrimoine"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn AM Courtage et Patrimoine"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <span className="text-xs font-bold">in</span>
              </a>
              <a
                href="https://www.facebook.com/amcourtagepatrimoine"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook AM Courtage et Patrimoine"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="https://www.youtube.com/@amcourtagepatrimoine"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube AM Courtage et Patrimoine"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/20 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-white/70 order-2 sm:order-1">
              &copy; {new Date().getFullYear()} PatrimEmotion® - AM Courtage & Patrimoine (AMCP). Tous droits réservés.
            </p>
            <nav className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/70 order-1 sm:order-2" aria-label="Mentions légales et informations">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
                Données personnelles
              </Link>
              <Link href="/cgu" className="hover:text-white transition-colors">
                CGU
              </Link>
              <Link href="/securite" className="hover:text-white transition-colors">
                Sécurité
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
