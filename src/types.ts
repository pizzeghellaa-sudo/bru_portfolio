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
      EN: "Brand identity and visual communication projects for hospitality, cultural and commercial clients. Ongoing professional development through advanced training and certifications.",
      IT: "Progetti di identità di brand e comunicazione visiva per clienti nei settori hospitality, culturale e commerciale. Aggiornamento professionale continuo attraverso formazione avanzata e certificazioni."
    }
  },
  {
    period: "2017 — 2024",
    role: "Lead Designer",
    company: "Europlan S.p.A",
    description: {
      EN: "Design and production of brand and communication materials for the Group’s hotels and residences, including brochures, campaigns, packaging, signage and trade show displays.\n\nManagement of the full production process, from concept to print, alongside the creation of digital assets and collaboration with the IT team on internal platforms.",
      IT: "Progettazione e produzione di materiali di brand e comunicazione per hotel e residenze del Gruppo, inclusi brochure, campagne, packaging, segnaletica e allestimenti fieristici.\n\nGestione dell’intero processo produttivo, dal concept alla stampa, insieme alla creazione di asset digitali e alla collaborazione con il team IT sulle piattaforme interne."
    }
  },
  {
    period: "2014 — 2016",
    role: "Graphic team leader",
    company: "Wishdays S.r.l.",
    description: {
      EN: "Coordination of the in-house design team and management of seasonal workloads. Design of POP materials, packaging and retail displays, with external agency coordination for brand and packaging restyling projects. Development of brand guidelines for multiple brands and implementation of automated layout workflows (XML), including management of design and photo archives.",
      IT: "Coordinamento del team di design interno e gestione dei carichi di lavoro stagionali. Progettazione di materiali POP, packaging ed espositori retail, con coordinamento di agenzie esterne per progetti di restyling del brand e del packaging. Sviluppo di linee guida di brand per diversi marchi e implementazione di flussi di impaginazione automatizzati (XML), inclusa la gestione degli archivi di design e fotografici."
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
      EN: "Management of large retail clients including PAM Group and Panorama, overseeing the design and layout of promotional materials, flyers, POP displays and in-store signage. Coordination between clients, agencies and suppliers, alongside the development of advertising and retail communication materials for Bata Footwear.",
      IT: "Gestione di grandi clienti della GDO, tra cui Gruppo PAM e Panorama, supervisionando la progettazione e l’impaginazione di materiali promozionali, volantini, espositori POP e segnaletica in-store. Coordinamento tra clienti, agenzie e fornitori, insieme allo sviluppo di materiali pubblicitari e di comunicazione retail per Bata Footwear."
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
      EN: "Co-founded a creative agency specialized in branding and printed communication. Developed visual identities, editorial design and packaging for a range of businesses, combining strategic thinking with high-quality print production.",
      IT: "Co-fondatrice di un’agenzia creativa specializzata in branding e comunicazione stampata. Sviluppo di identità visive, progetti editoriali e packaging per diverse aziende, combinando pensiero strategico e produzione di stampa di alta qualità."
    }
  }
];

export const PROJECTS: Project[] = [
 {
    id: "europlan",
    title: "Europlan",
    category: "BRANDING / PRINT",
    tags: ["PRINT"],
    image: projectThumb("europlan"),
	  gallery: projectGallery("europlan"),
    description: {
      EN: "For over ten years I worked in the design department of Europlan, a leading hospitality group on Lake Garda serving an international market. I developed graphic and editorial communication materials for multiple properties, including promotional campaigns, trade-fair assets, and printed collateral.\n\nMy role covered graphic design, editorial layout, photo post-production, and retouching, as well as the design of visual communication systems and wayfinding across hospitality, wellness, events, and business contexts.",
      IT: "Per oltre dieci anni ho lavorato nel reparto grafico di Europlan, realtà turistica di riferimento sul Lago di Garda con un pubblico internazionale. Ho sviluppato materiali di comunicazione grafica ed editoriale per diverse strutture del gruppo, tra cui campagne promozionali, materiali per fiere e supporti stampati.\n\nIl mio ruolo comprendeva graphic design, impaginazione editoriale, post-produzione fotografica e fotoritocco, oltre alla progettazione di sistemi di comunicazione visiva e wayfinding applicati ai contesti di ospitalità, wellness, eventi e business."
    }
  },  {
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
    id: "ilmarmo",
    title: "Il Marmo Brochure",
    category: "BRANDING",
    tags: ["BRANDING"],
    image: projectThumb("ilmarmo"),
    gallery: projectGallery("ilmarmo"),
    description: {
      EN: "Il Marmo ....",
      IT: "Il Marmo ...."
    }
  },  
  {
    id: "nettuno",
    title: "Hotel Nettuno Paintings",
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
    title: "Personal Website",
    category: "UI / UX / PRODUCT",
    tags: ["WEB"],
    image: projectThumb("portfolio"),
    gallery: projectGallery("portfolio"),
    description: {
      EN: "Personal portfolio website\n\n1.Ideation — defined project goals, audience and positioning.\n\n2. Information Architecture — structured pages, navigation and content hierarchy.\n\n3. Wireframing — explored layout structures and user flows.\n\n4. Visual Design — developed typography, visual system and UI components using Stitch AI through iterative prompt-based design sessions.\n\n5. Development & Launch — built the website with AI-assisted coding using Gemini 3 Flash (Vite, React), iterating features before version control on GitHub and automated deployment via Vercel.",
      IT: "Sito web portfolio personale\n\n1. Ideazione — definizione degli obiettivi del progetto, del pubblico di riferimento e del posizionamento.\n\n2. Architettura dell’informazione — strutturazione delle pagine, della navigazione e della gerarchia dei contenuti.\n\n3. Wireframing — esplorazione delle strutture di layout e dei flussi utente.\n\n4. Visual Design — sviluppo della tipografia, del sistema visivo e dei componenti UI utilizzando Stitch AI attraverso sessioni iterative di progettazione basate su prompt.\n\n5. Sviluppo e lancio — realizzazione del sito con coding assistito dall’IA tramite Gemini 3 Flash (Vite, React), iterazione delle funzionalità prima del versionamento su GitHub e deploy automatico tramite Vercel."
    }
  }  

];

