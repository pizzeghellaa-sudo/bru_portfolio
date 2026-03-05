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
    period: "2024 — PRES",
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
  }
];

export const PROJECTS: Project[] = [
  {
    id: "apex",
    title: "APEX FINANCE",
    category: "IDENTITY / SYSTEM",
    tags: ["FINTECH"],
    image: projectThumb("apex"),
    gallery: projectGallery("apex"),
    description: {
      EN: "A comprehensive brand identity system for a next-generation fintech platform. The project involved creating a modular design language that scales across mobile, web, and physical touchpoints. We focused on precision, transparency, and high-density information display, drawing inspiration from technical instruments and financial terminals.",
      IT: "Un sistema completo di identità di marca per una piattaforma fintech di nuova generazione. Il progetto ha comportato la creazione di un linguaggio di design modulare che scala su mobile, web e punti di contatto fisici. Ci siamo concentrati su precisione, trasparenza e visualizzazione di informazioni ad alta densità, traendo ispirazione da strumenti tecnici e terminali finanziari."
    }
	
  },
  {
    id: "neon",
    title: "NEON SYSTEMS",
    category: "UI / UX / PRODUCT",
    tags: ["INTERFACE"],
    image: projectThumb("neon"),
	gallery: projectGallery("neon"),
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

