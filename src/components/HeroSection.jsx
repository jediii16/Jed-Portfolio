import { FaArrowRight, FaEnvelope } from 'react-icons/fa6';

function HeroSection({ stats, portrait, mailtoHref, availabilityIcon: AvailabilityIcon }) {
  return (
    <section className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-coral/20 bg-white/80 px-4 py-2 text-sm font-medium text-ink/70 accent-ring mr-3">
          <span className="h-2.5 w-2.5 rounded-full bg-coral" />
          Frontend Web Developer
        </div>
        <div className="inline-flex items-center gap-3 rounded-full border border-coral/20 bg-white/80 px-4 py-2 text-sm font-medium text-ink/70 accent-ring">
          <span className="h-2.5 w-2.5 rounded-full bg-teal" />
          QA Analyst
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
        <div className="absolute -left-6 top-8 h-24 w-24 rounded-4xl bg-coral/15 blur-2xl" />
        <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-teal/15 blur-3xl" />
        <div className="glass-panel float-slow relative mx-auto max-w-xl overflow-hidden p-3">
          <div className="absolute inset-x-8 top-8 z-10 flex items-center justify-between rounded-full bg-white/85 px-4 py-3 text-sm font-medium text-ink/70">
            <span className="inline-flex items-center gap-2"><AvailabilityIcon className="text-coral" />Available for collaborations</span>
            <span className="rounded-full bg-teal/10 px-3 py-1 text-teal">UI-focused</span>
          </div>
          <img src={portrait} alt="Jed Tenorio portrait" className="h-120 w-full rounded-[1.6rem] object-cover object-center sm:h-38rem" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
