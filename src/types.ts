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
    period: "2020 — PRES",
    role: "Senior Art Director",
    company: "Pentagram",
    description: {
      EN: "Leading brand architecture for fintech unicorns. Overseeing a team of 12 designers across 3 timezones. Implementing strict typographic systems for global deployment.",
      IT: "Guida dell'architettura del marchio per unicorni fintech. Supervisione di un team di 12 designer in 3 fusi orari. Implementazione di rigorosi sistemi tipografici per il deployment globale."
    }
  },
  {
    period: "2018 — 2020",
    role: "Lead Designer",
    company: "Collins",
    description: {
      EN: "System design and typographic direction for cultural institutions. Developed the dynamic identity system for the SF Symphony.",
      IT: "Design di sistema e direzione tipografica per istituzioni culturali. Sviluppato il sistema di identità dinamica per la SF Symphony."
    }
  },
  {
    period: "2015 — 2018",
    role: "Designer",
    company: "DIA Studio",
    description: {
      EN: "Kinetic identity systems and motion graphics. Pioneered the use of variable fonts in web environments before browser support was standard.",
      IT: "Sistemi di identità cinetica e motion graphics. Pioniere nell'uso di font variabili in ambienti web prima che il supporto dei browser fosse standard."
    }
  },
  {
    period: "2014 — 2015",
    role: "Junior",
    company: "Bureau Borsche",
    description: {
      EN: "Editorial design and print production. Responsible for the layout of Zeit Magazin and various art book publications.",
      IT: "Design editoriale e produzione stampa. Responsabile del layout di Zeit Magazin e di varie pubblicazioni di libri d'arte."
    }
  },
  {
    period: "2012 — 2014",
    role: "Intern",
    company: "Experimental Jetset",
    description: {
      EN: "Research and archival assistance. Learned the fundamental principles of Dutch design and strict grid adherence.",
      IT: "Ricerca e assistenza d'archivio. Appreso i principi fondamentali del design olandese e la rigorosa aderenza alla griglia."
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "APEX FINANCE",
    category: "IDENTITY / SYSTEM",
    tags: ["FINTECH"],
    image: "https://picsum.photos/seed/apex/800/600",
    description: {
      EN: "A comprehensive brand identity system for a next-generation fintech platform. The project involved creating a modular design language that scales across mobile, web, and physical touchpoints. We focused on precision, transparency, and high-density information display, drawing inspiration from technical instruments and financial terminals.",
      IT: "Un sistema completo di identità di marca per una piattaforma fintech di nuova generazione. Il progetto ha comportato la creazione di un linguaggio di design modulare che scala su mobile, web e punti di contatto fisici. Ci siamo concentrati su precisione, trasparenza e visualizzazione di informazioni ad alta densità, traendo ispirazione da strumenti tecnici e terminali finanziari."
    },
    gallery: [
      { thumb: "https://picsum.photos/seed/apex1/800/600", full: "https://picsum.photos/seed/apex1/1920/1080" },
      { thumb: "https://picsum.photos/seed/apex2/800/600", full: "https://picsum.photos/seed/apex2/1920/1080" },
      { thumb: "https://picsum.photos/seed/apex3/800/600", full: "https://picsum.photos/seed/apex3/1920/1080" }
    ]
  },
  {
    id: "04",
    title: "NEON SYSTEMS",
    category: "UI / UX / PRODUCT",
    tags: ["INTERFACE"],
    image: "https://picsum.photos/seed/neon/800/600",
    description: {
      EN: "Design and development of a cloud-based infrastructure monitoring tool. The challenge was to make complex data scannable and actionable for DevOps engineers. We implemented a dark-mode first interface with high-contrast accents to highlight critical system alerts and performance metrics.",
      IT: "Design e sviluppo di uno strumento di monitoraggio dell'infrastruttura basato su cloud. La sfida era rendere i dati complessi scansionabili e azionabili per gli ingegneri DevOps. Abbiamo implementato un'interfaccia dark-mode first con accenti ad alto contrasto per evidenziare gli avvisi critici del sistema e le metriche di performance."
    },
    gallery: [
      { thumb: "https://picsum.photos/seed/neon1/800/600", full: "https://picsum.photos/seed/neon1/1920/1080" },
      { thumb: "https://picsum.photos/seed/neon2/800/600", full: "https://picsum.photos/seed/neon2/1920/1080" },
      { thumb: "https://picsum.photos/seed/neon3/800/600", full: "https://picsum.photos/seed/neon3/1920/1080" }
    ]
  },
  {
    id: "02",
    title: "CULTURE LAB",
    category: "EDITORIAL / PRINT",
    tags: ["CULTURE"],
    image: "https://picsum.photos/seed/culture/800/600",
    description: {
      EN: "An experimental publication exploring the intersection of technology and contemporary art. The design uses a rigid 12-column grid and oversized typography to create a sense of architectural space on the page. Each issue features custom-developed generative patterns that respond to the featured artist's work.",
      IT: "Una pubblicazione sperimentale che esplora l'intersezione tra tecnologia e arte contemporanea. Il design utilizza una rigida griglia a 12 colonne e una tipografia sovradimensionata per creare un senso di spazio architettonico sulla pagina. Ogni numero presenta pattern generativi sviluppati su misura che rispondono al lavoro dell'artista presentato."
    },
    gallery: [
      { thumb: "https://picsum.photos/seed/culture1/800/600", full: "https://picsum.photos/seed/culture1/1920/1080" },
      { thumb: "https://picsum.photos/seed/culture2/800/600", full: "https://picsum.photos/seed/culture2/1920/1080" },
      { thumb: "https://picsum.photos/seed/culture3/800/600", full: "https://picsum.photos/seed/culture3/1920/1080" }
    ]
  },
  {
    id: "05",
    title: "BRAND X",
    category: "BRANDING",
    tags: ["BRANDING"],
    image: "https://picsum.photos/seed/brandx/800/600",
    description: {
      EN: "A minimalist rebranding for a sustainable architecture firm. The identity is built around a custom monospace typeface and a palette of recycled materials. The goal was to communicate structural integrity and environmental responsibility without relying on traditional 'green' tropes.",
      IT: "Un rebranding minimalista per uno studio di architettura sostenibile. L'identità è costruita attorno a un carattere monospace personalizzato e una palette di materiali riciclati. L'obiettivo era comunicare integrità strutturale e responsabilità ambientale senza fare affidamento sui tradizionali tropi 'green'."
    },
    gallery: [
      { thumb: "https://picsum.photos/seed/brandx1/800/600", full: "https://picsum.photos/seed/brandx1/1920/1080" },
      { thumb: "https://picsum.photos/seed/brandx2/800/600", full: "https://picsum.photos/seed/brandx2/1920/1080" },
      { thumb: "https://picsum.photos/seed/brandx3/800/600", full: "https://picsum.photos/seed/brandx3/1920/1080" }
    ]
  }
];
