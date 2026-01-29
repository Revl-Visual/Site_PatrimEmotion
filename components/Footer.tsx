import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-gray-800/50 text-foreground-muted backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-foreground font-serif font-bold text-lg mb-4">PatrimEmotion®</h3>
            <p className="text-sm text-foreground-muted">
              Donner du sens à vos décisions patrimoniales
            </p>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/methode" className="hover:text-foreground transition-colors">
                  La méthode
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-foreground transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions/particuliers" className="hover:text-foreground transition-colors">
                  Particuliers
                </Link>
              </li>
              <li>
                <Link href="/solutions/professionnels" className="hover:text-foreground transition-colors">
                  Professionnels
                </Link>
              </li>
              <li>
                <Link href="/solutions/institutionnels" className="hover:text-foreground transition-colors">
                  Institutionnels
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/a-propos" className="hover:text-foreground transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-foreground transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="hover:text-foreground transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="hover:text-foreground transition-colors">
                  CGU
                </Link>
              </li>
              <li>
                <Link href="/securite" className="hover:text-foreground transition-colors">
                  Sécurité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-foreground-muted">
          <p>&copy; {new Date().getFullYear()} PatrimEmotion® - AM Courtage & Patrimoine (AMCP). Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
