import { projectThumb, projectGallery } from "./lib/projectAssets";

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: {
    EN: string;
    IT: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string; // Low-res thumbnail for the archive grid
  description: {
    EN: string;
    IT: string;
  };
  gallery: {
    thumb: string; // Low-res for the gallery list
    full: string;  // High-res for the zoom modal
  }[];
}


export const EXPERIENCE: Experience[] = [
  {
    period: "2025 — PRES",
    role: "Freelance",
    company: "Self employed",
    description: {
      EN: "Working on client projects while completing multiple training and certification programs, continuously expanding technical and professional skills.",
      IT: "Collaborazione su progetti per clienti, parallelamente al completamento di diversi programmi di formazione e certificazione, con continuo sviluppo delle competenze tecniche e professionali.."
    }
  },
  {
    period: "2017 — 2024",
    role: "Lead Designer",
    company: "Europlan S.p.A",
    description: {
      EN: "Design and production of graphic and communication materials for the Group’s hotels and residences (brochures, advertising, POP materials, packaging, signage, trade show displays), including the development and implementation of brand identity and logos. Full management of the production process and print suppliers, creation of digital content (web layouts, banners, newsletters, social media assets), and collaboration with the IT department on internal portals, DAM systems, and ticketing platforms.",
      IT: "Progettazione e realizzazione di materiali grafici e di comunicazione per hotel e residence del Gruppo (brochure, ADV, POP, packaging, segnaletica, allestimenti fieristici), con sviluppo e declinazione di brand identity e loghi. Gestione completa del processo produttivo e dei fornitori di stampa, creazione di contenuti digitali (layout web, banner, newsletter, social) e collaborazione con l’area IT per portali interni, DAM e sistemi di ticketing.."
    }
  },
  {
    period: "2014 — 2016",
    role: "Graphic team leader",
    company: "Wishdays S.r.l.",
    description: {
      EN: "Coordination of a graphic design team and management of seasonal workloads. Development of POP materials, packaging, gift cards, vouchers, and retail displays, along with the coordination of external agencies for brand and packaging redesign projects. Creation of brand guidelines for multiple Group brands, implementation of automated layout workflows (XML), and management of project and photographic archives.",
      IT: "Coordinamento di un team grafico e gestione dei carichi di lavoro stagionali. Progettazione di materiali POP, packaging, gift card, voucher e allestimenti retail, con coordinamento di agenzie esterne per progetti di restyling di brand e packaging. Sviluppo e redazione di brand guideline per diversi marchi leader. Implementazione di flussi di impaginazione automatizzata (XML) e gestione degli archivi lavori e fotografici."
    }
  },
  {
    period: "2012 — 2013",
    role: "Graphic Designer",
    company: "Total Quality Food S.r.l.",
    description: {
      EN: "Graphic and regulatory support for food labeling in compliance with EU Regulation 1169, including the design of compliant layouts for packaging and informational materials. Development of commercial materials and graphic support for trade shows, conferences, and events.",
      IT: "Supporto grafico e normativo per l’etichettatura alimentare in conformità al Regolamento UE 1169, con progettazione di layout per packaging e materiali informativi. Realizzazione di materiali commerciali e supporto grafico per fiere, convegni ed eventi."
    }
  },
  {
    period: "2005 — 2010",
    role: "Account Gruppo Pam & Graphic Designer",
    company: "Verba DDB S.r.l",
    description: {
      EN: "Management of large-scale retail clients (PAM Group, Panorama), including the design and layout of flyers, promotional brochures, POP materials, internal and external signage. Coordination between clients, agencies, and suppliers, and development of graphic projects for Bata Footwear (advertising materials, window displays, magazines).",
      IT: "Gestione clienti della GDO (Gruppo PAM, Panorama) con progettazione e impaginazione di volantini, brochure promozionali, materiali POP e segnaletica interna ed esterna. Coordinamento tra cliente, agenzia e fornitori e sviluppo di progetti grafici per Bata Calzature (materiali ADV, vetrine, magazine)."
    }
  },
  {
    period: "2003 — 2005",
    role: "Professional and Freelance Collaboration",
    company: "Self employed",
    description: {
      EN: "Editorial design, multilingual layout, technical manuals, promotional materials, and static website design. Collaborations with publishing houses, communication agencies, software companies, and professional training institutes.",
      IT: "Grafica editoriale, impaginazioni multilingua, manualistica tecnica, materiali promozionali e realizzazione di siti web statici. Collaborazioni con case editrici, agenzie di comunicazione, software house e istituti professionali."
    }
  },
  {
    period: "1995 — 2002",
    role: "Founder and Co-owner",
    company: "Pressart S.r.l.",
    description: {
      EN: "A creative agency specialized in branding and printed communication. The studio helped businesses shape strong visual identities through logo design, editorial layouts, packaging, and high-quality print materials. By combining strategic thinking with refined graphic design, Pressart transformed ideas into tangible brand experiences that communicated clarity, character, and lasting impact.",
      IT: "Un’agenzia creativa specializzata in branding e comunicazione stampata. Lo studio aiutava le aziende a costruire identità visive solide attraverso la progettazione di loghi, layout editoriali, packaging e materiali di stampa di alta qualità. Combinando pensiero strategico e graphic design raffinato, Pressart trasformava le idee in esperienze di marca tangibili, capaci di comunicare chiarezza, carattere e un impatto duraturo."
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: "caesius",
    title: "Hotel Caesius Brand Book",
    category: "BRANDING",
    tags: ["BRANDING"],
    image: projectThumb("caesius"),
	  gallery: projectGallery("caesius"),
    description: {
      EN: "Hotel Caesius is a luxury hospitality brand located on Lake Garda. The project involved the creation of a visual identity system and brand guidelines for print and digital applications.\n\nThe identity was implemented across all hotel touchpoints including printed materials, digital platforms and internal brand documentation.",
      IT: "L’Hotel Caesius è un brand di ospitalità di lusso situato sul Lago di Garda. Il progetto ha previsto la creazione di un sistema di identità visiva e delle linee guida del brand per applicazioni su stampa e digitale.\n\nL’identità è stata implementata in tutti i touchpoint dell’hotel, inclusi materiali stampati, piattaforme digitali e documentazione interna del brand."
    }
  },
  {
    id: "emozione3",
    title: "Emozione3 Brand Book",
    category: "BRANDING",
    tags: ["BRANDING"],
    image: projectThumb("emozione3"),
    gallery: projectGallery("emozione3"),
    description: {
      EN: "Project developed for Wish Days S.r.l. (Verona) as part of the rebranding of Emozione3, an Italian gift box company.\nThe brand book defines the new visual identity system, including logo usage, tone of voice, and brand applications, strengthening the brand during a key phase of its evolution.\n\nThe guidelines support consistent communication across printed materials and digital platforms.",
      IT: "Progetto sviluppato per Wish Days S.r.l. (Verona) nell’ambito del rebranding di Emozione3, azienda italiana di cofanetti regalo.\nIl brand book definisce il nuovo sistema di identità visiva, includendo l’uso del logo, il tone of voice e le applicazioni del brand, rafforzando il marchio durante una fase chiave della sua evoluzione.\n\nLe linee guida supportano una comunicazione coerente su materiali stampati e piattaforme digitali."
    }
  },
  {
    id: "nettuno",
    title: "Hotel Nettuno paintings",
    category: "PAINTINSG / PRINT",
    tags: ["PRINT"],
    image: projectThumb("nettuno"),
    gallery: projectGallery("nettuno"),
    description: {
      EN: "The work consists of a series of cardboard artworks inspired by the landscape of Lake Garda, reinterpreted through a stylized and minimal vector graphic language.\n\nThe system includes three formats, square, horizontal and vertical, designed to integrate with the hotel spaces and create visual continuity with the surrounding territory.\n\nProduced on cardboard with a transparent raised varnish, the pieces combine lightness, sustainability and attention to detail.",
      IT: "Il lavoro consiste in una serie di opere su cartone ispirate al paesaggio del Lago di Garda, reinterpretato attraverso un linguaggio grafico vettoriale stilizzato e minimale.\n\nIl sistema include tre formati, quadrato, orizzontale e verticale, progettati per integrarsi con gli spazi dell’hotel e creare una continuità visiva con il territorio circostante.\n\nProdotte su cartone con vernice trasparente a rilievo, le opere combinano leggerezza, sostenibilità e attenzione al dettaglio."
    }
  },
 {
    id: "website",
    title: "Personal site",
    category: "UI / UX / PRODUCT",
    tags: ["WEB"],
    image: projectThumb("portfolio"),
    gallery: projectGallery("portfolio"),
    description: {
      EN: "Personal website creation:\n\n1. Ideation — defined the purpose, audience, and goals.\n\n2. Structure — mapped the pages and navigation (site architecture).\n\n3. Wireframe — sketch page layouts and user flows.\n\n4. Design — created visual style, typography, and UI components using Sticth AI. Interactive session starting from a prompt and improving all the visual elements.\n\n5. Build & Launch — developed the site using AI and Gemini 3 Flash (Vite, React.js). Repeated cycles to  add functionalities then committed to GitHub and finally automated the deployment using Vercel.",
      IT: "Creazione sito web personale:\n\n1. Ideazione — definizione di scopo, pubblico e obiettivi.\n\n2. Struttura — mappatura delle pagine e della navigazione (architettura del sito).\n\n3. Wireframe — schizzi dei layout delle pagine e dei flussi utente.\n\n4. Design — creazione dello stile visivo, della tipografia e dei componenti UI utilizzando Stitch AI. Sessione interattiva partita da un prompt e miglioramento progressivo di tutti gli elementi visivi.\n\n5. Sviluppo e lancio — sviluppo del sito utilizzando AI e Gemini 3 Flash (Vite, React.js). Cicli iterativi per aggiungere funzionalità, commit su GitHub e infine deploy automatizzato tramite Vercel."
    }
  }  

];

