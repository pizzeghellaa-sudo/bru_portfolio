// @ts-nocheck
import { Analytics } from "@vercel/analytics/next"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCE, PROJECTS } from './types';
import { TRANSLATIONS, Language } from './translations';
import { 
  ArrowDown, 
  Menu, 
  Grid, 
  Brush, 
  View, 
  Play, 
  Book, 
  Terminal,
  ExternalLink,
  Globe
} from 'lucide-react';
import bruPng from "./assets/bru.png";

type Section = 'INDEX' | 'TIMELINE' | 'CAPABILITIES' | 'WORK' | 'CONTACTS';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('INDEX');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const [language, setLanguage] = useState<Language>('EN');
  const [currentTime, setCurrentTime] = useState(new Date());

  const t = TRANSLATIONS[language];

  const activeProject = PROJECTS.find(p => p.id === selectedProjectId);
  const modalImages = activeProject?.gallery.map(img => img.full) || [];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', {
    hour12: false,
    timeZoneName: 'short'
  });
};
  const navItems: Section[] = ['INDEX', 'TIMELINE', 'CAPABILITIES', 'WORK', 'CONTACTS'];

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    setSelectedProjectId(null);
  };

  return (
    <div className="relative flex h-screen w-full flex-row overflow-hidden bg-background-light">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 swiss-grid-lines pointer-events-none opacity-50" />

      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col justify-between w-[320px] h-full border-r border-ink/10 bg-background-light z-20 relative">
        <div className="p-8 flex flex-col gap-12">
          <div>
            <h1 className="text-xl font-medium tracking-[0.1em] leading-none text-ink uppercase font-montserrat">
              BRU BULGARELLI<br />
              <span className="text-xs font-mono text-slate-400 tracking-widest mt-1 block">PORTFOLIO 2026</span>
            </h1>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleSectionChange(item)}
                className={`group flex items-center gap-4 py-2 text-lg font-medium transition-colors ${
                  activeSection === item ? 'text-ink font-bold' : 'text-slate-500 hover:text-ink'
                }`}
              >
                <span className={`w-2 h-2 bg-primary transition-transform duration-300 ${
                  activeSection === item ? 'scale-100' : 'scale-0 group-hover:scale-100'
                }`} />
                {t.nav[item]}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-8 flex flex-col gap-4">
          <div className="flex gap-4 border-t border-ink/10 pt-8">
            {(['EN', 'IT'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`font-mono text-xs tracking-widest transition-colors ${
                  language === lang ? 'text-primary font-bold' : 'text-slate-400 hover:text-ink'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">
            VALEGGIO SUL MINCIO, IT <br />
            {formatTime(currentTime)}
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto no-scrollbar relative z-10">
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center p-6 border-b border-ink/10 bg-background-light sticky top-0 z-30">
          <h1 className="text-lg font-medium tracking-[0.1em] uppercase font-montserrat">BRU BULGARELLI</h1>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLanguage(language === 'EN' ? 'IT' : 'EN')}
              className="font-mono text-xs font-bold text-primary border border-primary px-2 py-1"
            >
              {language}
            </button>
            <Menu className="w-6 h-6" />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProjectId ? `project-${selectedProjectId}` : activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-full flex flex-col p-6 md:p-12 lg:p-20 max-w-[1400px]"
          >
            {selectedProjectId ? (
              <ProjectDetail 
                projectId={selectedProjectId} 
                onBack={() => setSelectedProjectId(null)} 
                onImageClick={(index) => setZoomIndex(index)}
                language={language}
              />
            ) : (
              <>
                {activeSection === 'INDEX' && (
                  <IndexSection 
                    onNavigate={handleSectionChange} 
                    language={language} 
                    onLanguageChange={setLanguage} 
                  />
                )}
                {activeSection === 'TIMELINE' && <TimelineSection language={language} />}
                {activeSection === 'CAPABILITIES' && <CapabilitiesSection language={language} />}
                {activeSection === 'WORK' && <WorkSection onSelectProject={setSelectedProjectId} language={language} />}
                {activeSection === 'CONTACTS' && <SignalSection language={language} />}
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {zoomIndex !== null && activeProject && (
            <ImageModal 
              images={modalImages}
              currentIndex={zoomIndex}
              onClose={() => setZoomIndex(null)} 
              onNext={() => setZoomIndex((zoomIndex + 1) % modalImages.length)}
              onPrev={() => setZoomIndex((zoomIndex - 1 + modalImages.length) % modalImages.length)}
              language={language}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function IndexSection({ onNavigate, language, onLanguageChange }: { onNavigate: (s: Section) => void, language: Language, onLanguageChange: (l: Language) => void }) {
  const t = TRANSLATIONS[language].index;
  return (
    <div className="flex-1 flex flex-col justify-center relative">
      <div className="relative z-10">
        {/* Language Selector (Mobile & Desktop) */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" />
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">LOCALE</span>
          </div>
          <div className="flex gap-4">
            {(['EN', 'IT'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`font-mono text-xs tracking-widest transition-all relative pb-1 ${
                  language === lang ? 'text-ink font-bold' : 'text-slate-400 hover:text-ink'
                }`}
              >
                {lang === 'EN' ? 'ENGLISH' : 'ITALIANO'}
                {language === lang && (
                  <motion.div 
                    layoutId="lang-underline" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <h2 
          className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase mb-12 whitespace-pre-line"
          style={{ color: 'rgb(179, 178, 178)' }}
        >
          {t.title}
        </h2>

        <div className="max-w-xl">
          <div className="w-12 h-0.5 bg-primary mb-8" />
          <p className="text-xl md:text-2xl font-medium leading-tight text-ink mb-12">
            {t.description}
          </p>
          
          <div className="flex items-center gap-8">
            <button 
              onClick={() => onNavigate('WORK')}
              className="bg-ink text-white px-8 py-4 font-mono text-sm tracking-widest hover:bg-primary transition-colors"
            >
              {t.cta}
            </button>

          </div>
        </div>
      </div>

      {/* Decorative Grid Circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-ink/5 rounded-full hidden lg:flex items-center justify-center">
        <div className="w-full h-full grid grid-cols-4 grid-rows-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-ink/5" />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineSection({ language }: { language: Language }) {
  const t = TRANSLATIONS[language].timeline;
  return (
    <div className="flex flex-col gap-24">
      <header>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-ink uppercase"
            style={{ color: 'rgb(179, 178, 178)' }}>
            {t.title}
        </h2>

        <div className="w-24 h-1 bg-primary mt-8" />
        <p className="mt-4 font-mono text-primary text-sm tracking-widest uppercase">{t.subtitle}</p>        
      </header>

      <div className="flex flex-col border-t border-ink/10">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-12 py-12 border-b border-ink/10 group hover:bg-ink/[0.02] transition-colors">
            <div className="col-span-1 md:col-span-3 font-mono text-sm text-slate-400 mb-4 md:mb-0">
              {exp.period}
            </div>
            <div className="col-span-1 md:col-span-4">
              <h3 className="text-2xl font-bold tracking-tight text-ink">
                {exp.role} / <span className="text-slate-500">{exp.company}</span>
              </h3>
            </div>
            <div className="col-span-1 md:col-span-5 mt-4 md:mt-0">
              <p className="text-lg text-slate-600 leading-relaxed relative pl-6">
                <span className="absolute left-0 top-0 text-primary font-mono text-xs">[+]</span>
                {exp.description[language]}
              </p>
            </div>
          </div>
        ))}
      </div>
     </div>
  );
}

function CapabilitiesSection({ language }: { language: Language }) {
  const t = TRANSLATIONS[language].capabilities;
  return (
    <div className="flex flex-col gap-24">
      <header className="relative">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-ink uppercase"
                    style={{ color: 'rgb(179, 178, 178)' }}>
            {t.title}
        </h2>

        <div className="w-24 h-1 bg-primary mt-8" />
        <p className="mt-4 font-mono text-primary text-sm tracking-widest uppercase">{t.subtitle}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-ink/10 relative">
        <div className="col-span-1 md:col-span-6 p-8 pl-0 border-r border-ink/10">
          <h3 className="font-mono text-xs text-slate-400 mb-12 uppercase tracking-widest">{t.categories.discipline}</h3>
          <ul className="flex flex-col gap-4">
            {t.disciplines.map((item) => (
              <li key={item} className="text-3xl md:text-4xl font-bold tracking-tighter text-ink cursor-default">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 md:col-span-6 p-8">
          <h3 className="font-mono text-xs text-slate-400 mb-12 uppercase tracking-widest">{t.categories.tooling}</h3>
          <ul className="flex flex-col gap-6 font-mono text-sm">
            {t.tooling.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary mt-1">/</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-24 p-8 bg-paper border border-ink/5">
            <p className="font-mono text-sm leading-relaxed text-ink uppercase tracking-widest">
              <span className="text-primary mr-2">[*]</span>
              {t.quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkSection({ onSelectProject, language }: { onSelectProject: (id: string) => void, language: Language }) {
  const [filter, setFilter] = useState('ALL');
  const t = TRANSLATIONS[language].work;
  const filters = ['ALL', 'IDENTITY', 'DIGITAL', 'PRINT'] as const;

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'ALL') return true;
    const cat = project.category.toUpperCase();
    if (filter === 'IDENTITY') return cat.includes('IDENTITY') || cat.includes('BRANDING');
    if (filter === 'DIGITAL') return cat.includes('UI') || cat.includes('UX') || cat.includes('PRODUCT') || cat.includes('WEBSITE');
    if (filter === 'PRINT') return cat.includes('PRINT') || cat.includes('EDITORIAL');
    return false;
  });

  return (
    <div className="flex flex-col gap-24">
      <header className="flex flex-col md:flex-row justify-between items-baseline gap-8">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-ink uppercase"
                    style={{ color: 'rgb(179, 178, 178)' }}>
            {t.title}

            <div className="w-24 h-1 bg-primary mt-8" />
              <p className="mt-4 font-mono text-primary text-sm tracking-widest uppercase">{t.subtitle}</p>                         
        </h2>

        <nav className="flex gap-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-xs tracking-widest transition-colors relative pb-1 ${
                filter === f ? 'text-ink' : 'text-slate-400 hover:text-ink'
              }`}
            >
              {t.filters[f]}
              {filter === f && <motion.div layoutId="filter-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
            </button>
          ))}
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10 min-h-[600px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div 
              layout
              key={project.id} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => onSelectProject(project.id)}
              className="bg-background-light p-8 flex flex-col gap-6 group cursor-pointer"
            >
              <div className="flex justify-between font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                <span>{project.id} — {project.tags[0]}</span>
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-paper relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors" />
              </div>
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-widest">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ProjectDetail({ projectId, onBack, onImageClick, language }: { projectId: string, onBack: () => void, onImageClick: (index: number) => void, language: Language }) {
  const project = PROJECTS.find(p => p.id === projectId);
  const t = TRANSLATIONS[language].work;
  if (!project) return null;

  return (
    <div className="flex flex-col gap-24">
      <header className="flex flex-col gap-8">
        <button 
          onClick={onBack}
          className="font-mono text-xs text-slate-400 hover:text-ink transition-colors uppercase tracking-widest flex items-center gap-2"
        >
          <span className="text-primary">←</span> {t.back}
        </button>
        
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-8">
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-ink uppercase"
            style={{ color: 'rgb(179, 178, 178)' }}>{project.title}</h2>
          <div className="font-mono text-xs text-slate-400 uppercase tracking-widest">
            {project.id} — {project.category}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="col-span-1 md:col-span-4">
          <div className="w-12 h-0.5 bg-primary mb-8" />
          <p className="text-xl font-medium leading-tight text-ink whitespace-pre-line">
            {project.description[language]}
          </p>
          
          <div className="mt-12 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 border border-ink/10 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-8 flex flex-col gap-12">
          {project.gallery.map((img, i) => (
            <div 
              key={i} 
              className="aspect-video overflow-hidden bg-paper cursor-zoom-in group"
              onClick={() => onImageClick(i)}
            >
              <img 
                src={img.thumb} 
                alt={`${project.title} gallery ${i}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageModal({ 
  images, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev, 
  language 
}: { 
  images: string[], 
  currentIndex: number, 
  onClose: () => void, 
  onNext: () => void, 
  onPrev: () => void, 
  language: Language 
}) {
  const t = TRANSLATIONS[language].common;
  const src = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 md:p-12"
      onClick={onClose}
    >
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <div className="w-3 h-3 bg-primary" />
        <span className="font-mono text-xs text-white tracking-widest uppercase">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      <button 
        className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-50"
        onClick={onClose}
      >
        <span className="font-mono text-xs tracking-widest uppercase">{t.close}</span>
      </button>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 w-24 flex items-center justify-center z-50">
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="p-4 text-white/40 hover:text-primary transition-colors group"
        >
          <span className="font-mono text-4xl group-hover:-translate-x-2 transition-transform block">←</span>
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 w-24 flex items-center justify-center z-50">
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="p-4 text-white/40 hover:text-primary transition-colors group"
        >
          <span className="font-mono text-4xl group-hover:translate-x-2 transition-transform block">→</span>
        </button>
      </div>

      <motion.div
        key={src}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative max-w-[calc(100%-12rem)] max-h-full flex items-center justify-center z-30"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={src} 
          alt="Full screen view" 
          className="max-w-full max-h-[75vh] object-contain shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Thumbnails indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {images.map((_, i) => (
          <div 
            key={i}
            className={`h-1 transition-all duration-300 ${i === currentIndex ? 'w-8 bg-primary' : 'w-4 bg-white/20'}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SignalSection({ language }: { language: Language }) {
  const t = TRANSLATIONS[language].signal;
  const links = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/bruna-bulgarelli-8a9b7819/', category: 'NETWORK' },
    { label: 'Behance', url: 'https://www.behance.net/brubulgarelli', category: 'VISUALS' },
    { label: 'Read.cv', url: 'https://drive.google.com/file/d/1Ew3OMTzji4Hem9kgC9Dyda33ssuK89Wh/view?usp=sharing', category: 'CURRICULUM' },
  ];

  return (
    <div className="flex-1 flex flex-col justify-center relative">
      <div className="mb-24 flex flex-col md:flex-row items-start md:items-end gap-12">
        <div className="w-48 h-48 overflow-hidden ink/10 flex-shrink-0">
          <img 
            src={bruPng}
            alt="Bruna Bulgarelli" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-3xl font-medium tracking-[0.1em] leading-none text-ink uppercase font-montserrat">
            BRU BULGARELLI
          </h2>
          <div className="mt-8 font-mono text-xs text-slate-800 tracking-widest space-y-1">
            <p>{t.address}</p>
            <p>{t.phone}</p>
            <p><a href={`mailto:${t.email}`} className="hover:text-primary transition-colors">
              {t.email}
            </a></p>
          </div>
          <div className="mt-8 font-mono text-xs text-slate-400 uppercase tracking-widest space-y-1">
            <p>{t.availability}</p>
            <p>{t.responseTime}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-ink/10 pt-12">
        {links.map((link) => (
          <div key={link.label} className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
              {t.categories[link.category as keyof typeof t.categories] || link.category}
            </span>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-ink hover:text-primary transition-colors flex items-center gap-2">
              {link.label}
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
        ))}
      </div>

      <footer className="mt-auto pt-24 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-ink/10 mt-24 py-8">
        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest whitespace-pre-line">
          {t.footer}
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-ink uppercase tracking-widest">
          <div className="w-3 h-3 bg-primary" />
          {t.builtWith}
        </div>
      </footer>
    </div>
  );
}
