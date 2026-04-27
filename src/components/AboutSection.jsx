function AboutSection({
  cardClass,
  focusAreas,
  strengths,
  snapshotIcon: SnapshotIcon,
  strengthsIcon: StrengthsIcon,
}) {
  return (
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
            <div className="rounded-3xl bg-gold/25 p-4 text-2xl text-ink"><SnapshotIcon /></div>
          </div>
          <div className="mt-8 grid gap-4">
            {focusAreas.map((item) => (
              <div key={item} className="rounded-3xl border border-ink/8 bg-white/80 px-5 py-4 text-sm font-medium text-ink/72">{item}</div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-ink/8 bg-ink px-6 py-5 text-white">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/70"><StrengthsIcon className="text-gold" />Strengths</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {strengths.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
