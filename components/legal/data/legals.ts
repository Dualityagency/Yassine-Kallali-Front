export interface LegalSection {
  id: number;
  title: string;
  content: string | LegalSubItem[];
}

export interface LegalSubItem {
  label: string;
  value?: string;
  desc?: string;
}

export const legalSections: LegalSection[] = [
  {
    id: 1,
    title: "Identité du Praticien",
    content: [
      { label: "Responsable", value: "Dr. Yassine KALLALI" },
      { label: "Inscription CNOMDT", value: "N°12345" },
      { label: "Siège Social", value: "Avenue du 14 Janvier, 4000 Sousse, Tunisie" },
      { label: "Contact", value: "contact@cliniquedentairesousse.com" },
    ],
  },
  {
    id: 2,
    title: "Finalité du traitement des données",
    content: [
      {
        label: "Contact",
        desc: "Réponse aux demandes d'informations formulées via nos formulaires.",
      },
      {
        label: "Devis",
        desc: "Établissement de plans de traitement et estimations financières personnalisées.",
      },
      {
        label: "Suivi Médical",
        desc: "Gestion du dossier patient et continuité des soins post-opératoires.",
      },
    ],
  },
  {
    id: 3,
    title: "Durée de conservation",
    content: [
      {
        label: "Données de contact",
        value: "3 ans",
        desc: "Conservation maximale après le dernier contact émanant de l'utilisateur.",
      },
      {
        label: "Dossier médical",
        value: "Durée légale",
        desc: "Conformément aux réglementations en vigueur pour les archives médicales.",
      },
    ],
  },
  {
    id: 4,
    title: "Sécurité des données médicales",
    content:
      "Nous apportons une attention particulière à vos données radiographiques (Panoramiques, CBCT 3D). Toutes les radios dentaires sont stockées sur des serveurs hautement sécurisés avec un chiffrement de bout en bout (AES-256). L'accès est strictement réservé à l'équipe soignante authentifiée. Hébergement certifié.",
  },
  {
    id: 5,
    title: "Sous-traitants & Cookies",
    content: [
      {
        label: "Hébergeur Cloud",
        desc: "Stockage technique du site",
      },
      {
        label: "Google Analytics",
        desc: "Mesure d'audience (anonymisée)",
      },
    ],
  },
  {
    id: 6,
    title: "Vos Droits",
    content: [
      {
        label: "Droit d'accès",
        desc: "Obtenir une copie de vos données personnelles.",
      },
      {
        label: "Droit de rectification",
        desc: "Corriger des informations inexactes ou incomplètes.",
      },
      {
        label: "Droit à l'effacement",
        desc: "Demander la suppression de vos données de contact.",
      },
      {
        label: "Portabilité",
        desc: "Transférer vos données vers un autre praticien.",
      },
    ],
  },
];