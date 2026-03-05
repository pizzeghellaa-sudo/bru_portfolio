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
      EN: "Project created for Europlan SpA – Affi (VR).\nThe brand book defines and organizes the visual identity of Hotel Caesius Thermae & SPA Resort, a mid-high level hotel on Lake Garda and a reference point for hospitality, wellness, and business.\nFrom the brand essence — elegance, refinement and well-being — a coherent visual style is developed, starting from the main logo to the versions for the SPA, Congress Center and thermal line.\nEach element has clear rules to ensure consistency and recognition across all touchpoints.",
      IT: "Progetto realizzato per conto di Europlan SpA – Affi (VR).\nIl brand book definisce e organizza l’identità visiva di Hotel Caesius Thermae & SPA Resort, struttura di fascia medio-alta sul Lago di Garda e punto di riferimento per ospitalità, benessere e business.\nDall’essenza del brand — eleganza, raffinatezza e benessere — prende forma un linguaggio visivo coerente che si sviluppa dal logo istituzionale fino alle declinazioni dedicate a SPA, Congress Center e linea termale.\nOgni elemento è stato regolamentato per assicurare coerenza e riconoscibilità su tutti i touchpoint."
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
      EN: "Project developed for Wish Days S.r.l. (Verona).\nThis brand book was created for the rebranding of Emozione3, an Italian gift box company.\nThe goal was to strengthen the brand and increase its value during an important moment of its journey.\nThe new visual identity defines clear rules for the logo, tone of voice, and brand applications, expressing the core idea of Emozione3: a gift that contains happiness, made to turn a weekend into a special experience.\nThis project was a meaningful collaboration for me and an important step in my professional growth.",
      IT: "Progetto realizzato per Wish Days S.r.l. (Verona)\nIl brand book nasce in occasione del rebranding di Emozione3, storico player italiano nel settore dei cofanetti regalo.\n L’obiettivo strategico era rafforzare il posizionamento e aumentare il valore percepito del brand in una fase cruciale della sua evoluzione.\n Il nuovo sistema di identità definisce linee guida chiare e coerenti per logo, tono di voce e applicazioni, valorizzando l’essenza di Emozione3: un regalo che contiene felicità, pensato per trasformare un weekend in un ricordo.\nÈ stato un progetto intenso e stimolante, sviluppato all’interno di un team competente e determinato, che ha rappresentato per me un’importante occasione di crescita professionale e umana."
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
      EN: "Project developed for Europlan SpA, Affi, in collaboration with Architect Luca Pomponio, Bardolino.\nFor Hotel Nettuno, I designed and created a series of cardboard artworks inspired by the view of Lake Garda.\nThe illustrations are made in a simple and clean vector style.\nThe project includes three formats — square, horizontal, and vertical — created to fit different spaces inside the hotel and to create visual harmony.\nTo respect the environment, the artworks were made in cardboard and finished with a transparent protective varnish. The result is light, sustainable, and elegant. This project turns decoration into a visual story, connecting the hotel with the lake and its atmosphere.",
      IT: "Progetto realizzato per conto di Europlan SpA, Affi, in collaborazione con l’Architetto Luca Pomponio, Bardolino.\nPer l’Hotel Nettuno ho progettato e realizzato una serie di quadri cartonati ispirati alla vista del Lago di Garda, reinterpretata attraverso una grafica vettoriale stilizzata ed essenziale.\nIl sistema si sviluppa in tre formati — quadrato, orizzontale e verticale — pensati per adattarsi armoniosamente agli spazi della struttura, creando continuità visiva e un dialogo diretto con il territorio.\nIn coerenza con un approccio attento all’ambiente, le opere sono state realizzate in cartone e rifinite con vernice trasparente spessorata, unendo leggerezza, sostenibilità e cura del dettaglio.Un progetto che trasforma l’elemento decorativo in racconto visivo, valorizzando identità, luogo e atmosfera."
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
  }
];

