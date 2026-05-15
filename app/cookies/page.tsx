import LegalPageLayout from "@/components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique des cookies | PatrimEmotion®",
  description: "Politique de gestion des cookies du site PatrimEmotion®.",
};

export default function CookiesPage() {
  return (
    <LegalPageLayout version="Version 17/04/2026" title="Politique des cookies">
      <p>
        Cette page vous informe sur l&apos;utilisation des cookies et technologies similaires
        lors de votre navigation sur le site PatrimEmotion.
      </p>

      <div>
        <h2 className="pe-heading-section text-[#003662] mb-4">Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte depose sur votre terminal (ordinateur, mobile,
          tablette) lors de la consultation d&apos;un site internet. Il permet notamment de
          memoriser des informations de navigation pendant une duree donnee.
        </p>
      </div>

      <div>
        <h2 className="pe-heading-section text-[#003662] mb-4">Types de cookies utilises</h2>
        <p>Le site peut utiliser les categories de cookies suivantes :</p>
        <ul className="mt-4 space-y-3">
          <li>
            <strong>Cookies strictement necessaires</strong> : indispensables au fonctionnement
            technique du site (navigation, securite, acces aux fonctionnalites essentielles).
          </li>
          <li>
            <strong>Cookies de mesure d&apos;audience</strong> : utilises pour comprendre
            l&apos;utilisation du site et ameliorer les contenus et performances.
          </li>
          <li>
            <strong>Cookies de personnalisation</strong> : permettent d&apos;adapter
            l&apos;experience utilisateur (ex. preferences d&apos;affichage).
          </li>
        </ul>
      </div>

      <div>
        <h2 className="pe-heading-section text-[#003662] mb-4">Base legale et consentement</h2>
        <p>
          Les cookies strictement necessaires sont deposes sans consentement prealable.
          Les autres cookies (audience, personnalisation, etc.) sont soumis a votre
          consentement prealable lorsque la reglementation l&apos;exige.
        </p>
      </div>

      <div>
        <h2 className="pe-heading-section text-[#003662] mb-4">Duree de conservation</h2>
        <p>
          Les cookies sont conserves pour une duree limitee, proportionnee a leur finalite
          et conformement aux exigences legales en vigueur.
        </p>
      </div>

      <div>
        <h2 className="pe-heading-section text-[#003662] mb-4">Gerer vos preferences cookies</h2>
        <p>
          Vous pouvez a tout moment accepter, refuser ou retirer votre consentement
          pour les cookies non essentiels via le module de gestion des cookies du site,
          lorsqu&apos;il est disponible.
        </p>
        <p>
          Vous pouvez egalement configurer votre navigateur pour bloquer ou supprimer
          les cookies deja deposes.
        </p>
      </div>

      <div>
        <h2 className="pe-heading-section text-[#003662] mb-4">Parametrage du navigateur</h2>
        <p>
          La plupart des navigateurs permettent de gerer les cookies depuis les reglages
          de confidentialite (suppression, blocage, exceptions). Le refus de certains
          cookies peut toutefois degrader le fonctionnement de certaines fonctionnalites.
        </p>
      </div>

      <div>
        <h2 className="pe-heading-section text-[#003662] mb-4">Contact</h2>
        <p>
          Pour toute question relative a cette politique cookies ou au traitement de vos
          donnees personnelles, vous pouvez contacter : aurelie.monteil@am-courtage-et-patrimoine.fr
        </p>
      </div>
    </LegalPageLayout>
  );
}
