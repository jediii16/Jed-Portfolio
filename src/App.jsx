import { useEffect, useMemo, useState } from 'react';
import {
  FaArrowUp,
  FaBars,
  FaCheck,
  FaCode,
  FaCopy,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLaptopCode,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTiktok,
  FaWandMagicSparkles,
  FaXTwitter,
  FaXmark,
} from 'react-icons/fa6';
import {
  SiCss,
  SiFigma,
  SiFramer,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import AboutSection from './components/AboutSection';
import BackToTopButton from './components/BackToTopButton';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectModal from './components/ProjectModal';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import portrait from './images/shoot_177.png';

const navigation = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
];

const stats = [
  ['3rd Year', 'Computer Science student'],
  ['6+', 'Projects built'],
  ['SITEAO', 'Logistics Head leadership role'],
];

const focusAreas = [
  'Learning backend development with Node.js and Express',
  'Practicing cleaner component structure and reusability',
  'Building projects that feel polished and useful',
  'Balancing technical growth with org leadership work',
];

const strengths = [
  'Responsive UI building',
  'Clean visual layouts',
  'Academic project execution',
  'Team-oriented collaboration',
];

const skillGroups = [
  ['Frontend', [
    ['React.js', SiReact, 'text-sky-500'],
    ['JavaScript', SiJavascript, 'text-yellow-400'],
    ['HTML5', SiHtml5, 'text-orange-500'],
    ['CSS3', SiCss, 'text-blue-500'],
    ['TailwindCSS', SiTailwindcss, 'text-cyan-400'],
    ['Framer Motion', SiFramer, 'text-fuchsia-500'],
  ]],
  ['Backend', [
    ['Node.js', SiNodedotjs, 'text-green-600'],
    ['PHP', SiPhp, 'text-indigo-500'],
    ['C++', TbBrandCpp, 'text-blue-700'],
  ]],
  ['Database', [
    ['MySQL', SiMysql, 'text-blue-600'],
    ['MongoDB', SiMongodb, 'text-green-600'],
  ]],
  ['Tools', [
    ['Git', SiGit, 'text-orange-500'],
    ['GitHub', SiGithub, 'text-slate-900'],
    ['Vite', SiVite, 'text-violet-500'],
    ['Figma', SiFigma, 'text-pink-500'],
  ]],
  ['Cloud', [['Vercel', SiVercel, 'text-slate-900']]],
];

const skillTicker = skillGroups.flatMap(([group, items]) =>
  items.map(([label, Icon, tone]) => ({ group, label, Icon, tone })),
);

const projects = [
  {
    title: 'AdZU GPABud',
    category: 'Web',
    images: [
      '/placeholders/gpa1.png',
      '/placeholders/gpa2.png',
      '/placeholders/gpa3.png',
    ],
    description: 'A web-based GPA calculator tailored for Ateneo de Zamboanga University students to simplify grade computation and academic planning.',
    details: 'Developed an interactive GPA calculator using React.js and Tailwind CSS that allows students to input courses, units, and grades to compute their GPA in real time. Implemented dynamic form handling, multiple semester support, and automatic GPA updates based on user input. Designed a clean and responsive interface to improve usability and help students efficiently track their academic performance.',
    stack: ['React', 'Tailwind', 'JavaScript'],
    highlight: 'Provides real-time GPA computation with multi-semester tracking, improving convenience and accuracy compared to manual calculations.',
    view: 'https://adzu-gpabud.vercel.app',
    github: 'https://github.com/jediii16/AdZU-GPABud',
  },
  {
    title: 'Wordle Clone',
    category: 'Web',
    images: [
      '/placeholders/wordle1.png',
      '/placeholders/wordle2.png',
      '/placeholders/wordle3.png',
    ],
    description: 'An interactive Wordle-inspired word guessing game built with a modern and responsive user interface.',
    details: 'Developed a Wordle clone using React.js and Tailwind CSS, featuring dynamic state management and real-time user input handling. Implemented core game logic including letter validation, tile flipping animations, keyboard feedback, and win/lose conditions. Integrated local storage to persist game progress across sessions and enhance user experience.',
    stack: ['React', 'Tailwind', 'JavaScript'],
    highlight: 'A Wordle-inspired game that combines fun interactivity with clean design and solid React fundamentals.',
    view: 'https://jed-wordle.vercel.app',
    github: 'https://github.com/jediii16/wordle-clone',
  },
  {
    title: 'Mitch Pastries',
    category: 'Web',
    images: [
      '/placeholders/mitch1.png',
      '/placeholders/mitch2.png',
      '/placeholders/mitch3.png',
    ],
    description: 'A modern dessert business website showcasing Mitch Pastries products, brand identity, and customer offerings.',
    details: 'Developed a responsive and visually appealing website for Mitch Pastries to highlight their dessert menu, promote their brand, and provide customers with an easy way to explore products. The site includes structured sections for featured items, product categories, and contact/order information, focusing on clean UI and smooth user experience.',
    stack: ['HTML', 'PHP', 'MySQL', 'JS'],
    highlight: 'Built a database-driven system that allows easy updating of products and improves scalability.',
    download: 'https://github.com/jediii16/Mitch-Pastries/archive/main.zip',
    github: 'https://github.com/jediii16/Mitch-Pastries',
  },
];

const socials = [
  ['Facebook', 'https://www.facebook.com/jededison.tenorio.7', FaFacebook],
  ['X', 'https://x.com/iSnipyy', FaXTwitter],
  ['Instagram', 'https://instagram.com/jeditnrio', FaInstagram],
  ['GitHub', 'https://github.com/jediii16', FaGithub],
  ['TikTok', 'https://tiktok.com/@isnipyy', FaTiktok],
  ['LinkedIn', 'https://linkedin.com/in/jed-tenorio-9b9163387', FaLinkedin],
];

const contactItems = [
  ['email', 'jedittenorio@gmail.com', 'mailto:jedittenorio@gmail.com', FaEnvelope, 'coral'],
  ['phone', '+63 975 933 0520', 'tel:+639759330520', FaPhone, 'teal'],
];

const cardClass = 'glass-panel p-8 sm:p-10';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [cardSlideTick, setCardSlideTick] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [copiedField, setCopiedField] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const filterOptions = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    [],
  );
  const filteredProjects = useMemo(
    () => (projectFilter === 'All' ? projects : projects.filter((project) => project.category === projectFilter)),
    [projectFilter],
  );
  const activeProject =
    activeProjectIndex === null ? null : filteredProjects[activeProjectIndex] ?? null;
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Hi Jed,\n\n${form.message || 'I would like to connect with you.'}\n\nFrom: ${form.name || ''}\nEmail: ${form.email || ''}`,
    );
    return `mailto:jedittenorio@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  useEffect(() => {
    const ids = navigation.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-25% 0px -50% 0px', threshold: [0.2, 0.45, 0.7] },
    );
    ids.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? Math.min((top / height) * 100, 100) : 0);
      setShowBackToTop(top > 500);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  useEffect(() => {
    setActiveSlide(0);
  }, [activeProjectIndex, projectFilter]);

  useEffect(() => {
    if (!activeProject || activeProject.images.length <= 1) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % activeProject.images.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [activeProject]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCardSlideTick((current) => current + 1);
    }, 2400);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProjectIndex(null);
        setMenuOpen(false);
      }
      if (!activeProject) return;
      if (event.key === 'ArrowRight') {
        setActiveSlide((current) => (current + 1) % activeProject.images.length);
      }
      if (event.key === 'ArrowLeft') {
        setActiveSlide((current) => (current - 1 + activeProject.images.length) % activeProject.images.length);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeProject]);

  useEffect(() => {
    if (!copiedField) return undefined;
    const timer = window.setTimeout(() => setCopiedField(''), 1800);
    return () => window.clearTimeout(timer);
  }, [copiedField]);

  const handleCopy = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
    } catch {
      setCopiedField('');
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-linear-to-r from-coral via-gold to-teal"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-128 bg-linear-to-b from-coral/15 via-transparent to-transparent" />
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute left-0 top-112 -z-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />

      <Header
        navigation={navigation}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuIcon={menuOpen ? <FaXmark /> : <FaBars />}
      />

      <main id="top">
        <HeroSection
          stats={stats}
          portrait={portrait}
          mailtoHref={mailtoHref}
          availabilityIcon={FaLaptopCode}
        />
        <AboutSection
          cardClass={cardClass}
          focusAreas={focusAreas}
          strengths={strengths}
          snapshotIcon={FaCode}
          strengthsIcon={FaWandMagicSparkles}
        />
        <SkillsSection
          cardClass={cardClass}
          skillTicker={skillTicker}
          skillGroups={skillGroups}
        />
        <ProjectsSection
          filteredProjects={filteredProjects}
          filterOptions={filterOptions}
          projectFilter={projectFilter}
          setProjectFilter={setProjectFilter}
          setActiveProjectIndex={setActiveProjectIndex}
          cardSlideTick={cardSlideTick}
        />
        <ContactSection
          cardClass={cardClass}
          contactItems={contactItems}
          copiedField={copiedField}
          handleCopy={handleCopy}
          socials={socials}
          locationIcon={FaLocationDot}
          copyIcon={FaCopy}
          checkIcon={FaCheck}
          form={form}
          setForm={setForm}
          mailtoHref={mailtoHref}
        />
      </main>

      <Footer />

      {showBackToTop && <BackToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} icon={FaArrowUp} />}

      {activeProject && (
        <ProjectModal
          activeProject={activeProject}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          onClose={() => setActiveProjectIndex(null)}
        />
      )}
    </div>
  );
}

export default App;
