import { useEffect, useMemo, useState } from 'react';
import {
  FaArrowRight,
  FaArrowUp,
  FaBars,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaCopy,
  FaDownload,
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
  FaXmark,
  FaXTwitter,
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
    download: '#',
    github: '#',
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
    download: '#',
    github: 'https://github.com/jediii16/SAandVolCalc',
  },
  {
    title: 'Mitch Pastries',
    category: 'Web',
    images: [
      '/placeholders/mitch1.png',
      '/placeholders/mitch2.png',
      '/placeholders/mitch3.png',
    ],
    description: 'A modern dessert business website showcasing Mitch Pastries’ products, brand identity, and customer offerings.',
    details: 'Developed a responsive and visually appealing website for Mitch Pastries to highlight their dessert menu, promote their brand, and provide customers with an easy way to explore products. The site includes structured sections for featured items, product categories, and contact/order information, focusing on clean UI and smooth user experience.',
    stack: ['HTML', 'PHP', 'MySQL', 'JS'],
    highlight: 'Built a database-driven system that allows easy updating of products and improves scalability.',
    download: '#',
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

  const filterOptions = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], []);
  const filteredProjects = useMemo(
    () => (projectFilter === 'All' ? projects : projects.filter((project) => project.category === projectFilter)),
    [projectFilter],
  );
  const activeProject = activeProjectIndex === null ? null : filteredProjects[activeProjectIndex] ?? null;
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
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
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
      <div className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-coral via-gold to-teal" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-gradient-to-b from-coral/15 via-transparent to-transparent" />
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute left-0 top-[28rem] -z-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />

      <header className="sticky top-0 z-40 border-b border-white/60 bg-sand/80 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <a href="#top" className="font-display text-2xl tracking-tight text-ink">JeDev.</a>
          <nav className="hidden items-center gap-3 text-sm font-semibold text-ink/70 md:flex">
            {navigation.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`rounded-full px-4 py-2 transition ${activeSection === id ? 'bg-ink text-white' : 'bg-white/60 text-ink/70 hover:bg-white hover:text-ink'}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink/90 md:inline-flex">Let&apos;s connect</a>
          <button type="button" className="inline-flex rounded-full border border-ink/10 bg-white/80 p-3 text-ink md:hidden" onClick={() => setMenuOpen((current) => !current)} aria-label="Toggle menu">
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
        {menuOpen && (
          <div className="section-shell pb-5 md:hidden">
            <div className="glass-panel flex flex-col gap-3 p-4 text-sm font-semibold">
              {navigation.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className={`rounded-2xl px-4 py-3 transition ${activeSection === id ? 'bg-ink text-white' : 'text-ink/75 hover:bg-ink/5 hover:text-ink'}`}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-coral/20 bg-white/80 px-4 py-2 text-sm font-medium text-ink/70 accent-ring">
              <span className="h-2.5 w-2.5 rounded-full bg-coral" />
              Frontend Web Developer
            </div>
            <div className="space-y-5">
              <p className="font-display text-sm uppercase tracking-[0.35em] text-teal">Hello, World!</p>
              <h1 className="max-w-3xl font-display text-5xl leading-none text-ink sm:text-6xl lg:text-7xl">I&apos;m Jed.</h1>
              <p className="max-w-2xl text-lg leading-8 text-ink/70">
                A Frontend Web Developer with a passion for crafting clean, user-friendly websites. Let&apos;s build your ideas into reality!
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink/90">View projects <FaArrowRight /></a>
              <a href={mailtoHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white/80 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-coral/40 hover:text-coral">Email Jed <FaEnvelope /></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="glass-panel p-5">
                  <p className="text-2xl font-bold text-ink">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-[2rem] bg-coral/15 blur-2xl" />
            <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-teal/15 blur-3xl" />
            <div className="glass-panel float-slow relative mx-auto max-w-xl overflow-hidden p-3">
              <div className="absolute inset-x-8 top-8 z-10 flex items-center justify-between rounded-full bg-white/85 px-4 py-3 text-sm font-medium text-ink/70">
                <span className="inline-flex items-center gap-2"><FaLaptopCode className="text-coral" />Available for collaborations</span>
                <span className="rounded-full bg-teal/10 px-3 py-1 text-teal">UI-focused</span>
              </div>
              <img src={portrait} alt="Jed Tenorio portrait" className="h-[30rem] w-full rounded-[1.6rem] object-cover object-center sm:h-[38rem]" />
            </div>
          </div>
        </section>

        <section id="about" className="section-shell py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className={cardClass}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-coral">About me</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl text-ink sm:text-5xl">Growing as a developer through design, leadership, and hands-on building.</h2>
              <div className="mt-8 space-y-5 text-base leading-8 text-ink/72">
                <p>I&apos;m a 3rd-year Computer Science student from Ateneo de Zamboanga University with a strong interest in clean, functional, and user-friendly websites.</p>
                <p>I currently serve as the Logistics Head for SITEAO, which has helped me sharpen both my organization and collaboration skills.</p>
                <p>I&apos;m actively learning backend development with Node.js and Express alongside modern UI patterns, and I value teamwork, continuous learning, and projects that make ideas feel real.</p>
              </div>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal">Snapshot</p>
                  <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">What I&apos;m focused on now</h2>
                </div>
                <div className="rounded-3xl bg-gold/25 p-4 text-2xl text-ink"><FaCode /></div>
              </div>
              <div className="mt-8 grid gap-4">
                {focusAreas.map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-ink/8 bg-white/80 px-5 py-4 text-sm font-medium text-ink/72">{item}</div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.75rem] border border-ink/8 bg-ink px-6 py-5 text-white">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/70"><FaWandMagicSparkles className="text-gold" />Strengths</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {strengths.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell py-12 sm:py-16">
          <div className={cardClass}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal">Skills</p>
                <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Tools and technologies I&apos;m building with.</h2>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-ink/8 bg-white/85 py-5">
              <div className="skill-marquee flex min-w-max gap-4 px-4">
                {[...skillTicker, ...skillTicker].map(({ group, label, Icon, tone }, index) => (
                  <div key={`${label}-${index}`} className="inline-flex items-center gap-3 rounded-full border border-ink/8 bg-sand px-4 py-3 text-sm font-semibold text-ink shadow-sm">
                    <Icon className={`text-xl ${tone}`} />
                    <span>{label}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-ink/40">{group}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {skillGroups.map(([group, items]) => (
                <div key={group} className="rounded-[1.75rem] border border-ink/8 bg-white/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">{group}</p>
                  <div className="mt-4 space-y-3">
                    {items.map(([label, Icon, tone]) => (
                      <div key={label} className="flex items-center gap-3 text-sm font-medium text-ink/75">
                        <Icon className={`text-lg ${tone}`} />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell py-12 sm:py-16">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal">Projects</p>
              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Take a look.</h2>
            </div>
            <div className="glass-panel flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">{filteredProjects.length.toString().padStart(2, '0')} selected projects</p>
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <button key={option} type="button" onClick={() => { setProjectFilter(option); setActiveProjectIndex(null); }} className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${projectFilter === option ? 'bg-ink text-white' : 'bg-ink/5 text-ink/60 hover:bg-ink/10 hover:text-ink'}`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <article key={project.title} className="glass-panel group flex h-full cursor-pointer flex-col overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_rgba(15,23,42,0.16)]" onClick={() => setActiveProjectIndex(index)}>
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src={project.images[(cardSlideTick + index) % project.images.length]}
                    alt={project.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-ink">{project.title}</h3>
                    <span className="rounded-full bg-coral/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-coral">{project.category}</span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-7 text-ink/68">{project.description}</p>
                  <p className="mt-4 rounded-[1.25rem] bg-ink/5 px-4 py-3 text-sm text-ink/72">{project.highlight}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className={cardClass}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-coral">Contact</p>
              <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Let&apos;s talk about ideas, projects, or opportunities.</h2>
              <div className="mt-8 space-y-4">
                {[
                  ['email', 'jedittenorio@gmail.com', 'mailto:jedittenorio@gmail.com', FaEnvelope, 'coral'],
                  ['phone', '+63 975 933 0520', 'tel:+639759330520', FaPhone, 'teal'],
                ].map(([key, value, href, Icon, tone]) => (
                  <div key={key} className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-ink/8 bg-white/80 px-5 py-4 text-sm text-ink/75">
                    <div className="flex items-center gap-4">
                      <span className={`rounded-2xl p-3 ${tone === 'coral' ? 'bg-coral/10 text-coral' : 'bg-teal/10 text-teal'}`}><Icon /></span>
                      <a href={href} className="hover:text-ink">{value}</a>
                    </div>
                    <button type="button" onClick={() => handleCopy(key, key === 'email' ? value : '+639759330520')} className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/65 transition hover:bg-ink hover:text-white">
                      {copiedField === key ? <FaCheck /> : <FaCopy />}
                      {copiedField === key ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                ))}
                <div className="flex items-center gap-4 rounded-[1.5rem] border border-ink/8 bg-white/80 px-5 py-4 text-sm text-ink/75">
                  <span className="rounded-2xl bg-gold/30 p-3 text-ink"><FaLocationDot /></span>
                  Zamboanga City, Philippines
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {socials.map(([label, href, Icon]) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/8 bg-white/85 px-4 py-3 text-sm font-semibold text-ink/75 transition hover:-translate-y-0.5 hover:border-ink/20 hover:text-ink">
                    <Icon />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className={cardClass}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal">Quick message</p>
              <h3 className="mt-3 font-display text-3xl text-ink">Draft a clean intro email</h3>
              <div className="mt-6 space-y-5">
                {[
                  ['name', 'Name', 'text', 'Your name'],
                  ['email', 'Email', 'email', 'your@email.com'],
                ].map(([name, label, type, placeholder]) => (
                  <div key={name}>
                    <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ink/70">{label}</label>
                    <input id={name} name={name} type={type} value={form[name]} onChange={(event) => setForm((current) => ({ ...current, [name]: event.target.value }))} placeholder={placeholder} className="w-full rounded-[1.25rem] border border-ink/10 bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-coral/40 focus:ring-4 focus:ring-coral/10" />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink/70">Message</label>
                  <textarea id="message" name="message" rows="6" value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} placeholder="Tell me a bit about what you'd like to discuss." className="w-full rounded-[1.25rem] border border-ink/10 bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-coral/40 focus:ring-4 focus:ring-coral/10" />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={mailtoHref} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-ink/90">Draft email message <FaArrowRight /></a>
                  <button type="button" onClick={() => setForm({ name: '', email: '', message: '' })} className="inline-flex items-center justify-center rounded-full border border-ink/10 bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:border-coral/40 hover:text-coral">Clear form</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-shell py-10">
        <div className="glass-panel flex flex-col gap-5 px-6 py-6 text-sm text-ink/68 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="font-display text-2xl text-ink">JeDev.</p>
            <p className="mt-2">Designed and built with React + Tailwind CSS.</p>
          </div>
          <p>&copy; 2026 Jed Tenorio. All rights reserved.</p>
        </div>
      </footer>

      {showBackToTop && (
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-ink/90" aria-label="Back to top">
          <FaArrowUp />
          Top
        </button>
      )}

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm" onClick={(event) => { if (event.target === event.currentTarget) setActiveProjectIndex(null); }}>
          <div className="glass-panel relative max-h-[90vh] w-full max-w-5xl overflow-auto p-4 sm:p-6">
            <button type="button" className="absolute right-5 top-5 z-10 inline-flex rounded-full border border-ink/10 bg-white/90 p-3 text-ink/70 transition hover:text-ink" onClick={() => setActiveProjectIndex(null)} aria-label="Close project modal">
              <FaXmark />
            </button>
            <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="relative overflow-hidden rounded-[1.75rem]">
                  <img src={activeProject.images[activeSlide]} alt={`${activeProject.title} screenshot ${activeSlide + 1}`} className="h-[20rem] w-full object-cover sm:h-[24rem]" />
                  <button type="button" onClick={() => setActiveSlide((current) => (current - 1 + activeProject.images.length) % activeProject.images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-ink shadow-sm">
                    <FaChevronLeft />
                  </button>
                  <button type="button" onClick={() => setActiveSlide((current) => (current + 1) % activeProject.images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-ink shadow-sm">
                    <FaChevronRight />
                  </button>
                </div>
                <div className="mt-4 flex justify-center gap-2">
                  {activeProject.images.map((image, index) => (
                    <button key={image} type="button" onClick={() => setActiveSlide(index)} className={`h-2.5 rounded-full transition ${activeSlide === index ? 'w-8 bg-ink' : 'w-2.5 bg-ink/20'}`} aria-label={`View slide ${index + 1}`} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal">Project detail</p>
                    <h3 className="mt-3 font-display text-4xl text-ink">{activeProject.title}</h3>
                  </div>
                  <span className="rounded-full bg-coral/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-coral">{activeProject.category}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-ink/68">{activeProject.details}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {activeProject.stack.map((item) => (
                    <span key={item} className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">{item}</span>
                  ))}
                </div>
                <p className="mt-5 rounded-[1.25rem] bg-ink/5 px-4 py-3 text-sm text-ink/72">{activeProject.highlight}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={activeProject.download} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"><FaDownload />Download code</a>
                  <a href={activeProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-coral/40 hover:text-coral"><FaGithub />View on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
