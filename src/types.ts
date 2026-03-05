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
	
  },
  {
    id: "caesius",
    title: "Hotel Caesius Brand Book",
    category: "BRANDING",
    tags: ["BRANDING"],
    image: projectThumb("caesius"),
	  gallery: projectGallery("caesius"),
    description: {
      EN: "Design and development of a cloud-based infrastructure monitoring tool. The challenge was to make complex data scannable and actionable for DevOps engineers. We implemented a dark-mode first interface with high-contrast accents to highlight critical system alerts and performance metrics.",
      IT: "Design e sviluppo di uno strumento di monitoraggio dell'infrastruttura basato su cloud. La sfida era rendere i dati complessi scansionabili e azionabili per gli ingegneri DevOps. Abbiamo implementato un'interfaccia dark-mode first con accenti ad alto contrasto per evidenziare gli avvisi critici del sistema e le metriche di performance."
    }
  },
  {
    id: "culture",
    title: "CULTURE LAB",
    category: "EDITORIAL / PRINT",
    tags: ["CULTURE"],
    image: projectThumb("culture"),
    gallery: projectGallery("culture"),
    description: {
      EN: "An experimental publication exploring the intersection of technology and contemporary art. The design uses a rigid 12-column grid and oversized typography to create a sense of architectural space on the page. Each issue features custom-developed generative patterns that respond to the featured artist's work.",
      IT: "Una pubblicazione sperimentale che esplora l'intersezione tra tecnologia e arte contemporanea. Il design utilizza una rigida griglia a 12 colonne e una tipografia sovradimensionata per creare un senso di spazio architettonico sulla pagina. Ogni numero presenta pattern generativi sviluppati su misura che rispondono al lavoro dell'artista presentato."
    }

  },
  {
    id: "brandx",
    title: "BRAND X",
    category: "BRANDING",
    tags: ["BRANDING"],
    image: projectThumb("brandx"),
    gallery: projectGallery("brandx"),
    description: {
      EN: "A minimalist rebranding for a sustainable architecture firm. The identity is built around a custom monospace typeface and a palette of recycled materials. The goal was to communicate structural integrity and environmental responsibility without relying on traditional 'green' tropes.",
      IT: "Un rebranding minimalista per uno studio di architettura sostenibile. L'identità è costruita attorno a un carattere monospace personalizzato e una palette di materiali riciclati. L'obiettivo era comunicare integrità strutturale e responsabilità ambientale senza fare affidamento sui tradizionali tropi 'green'."
    }
   }
];

