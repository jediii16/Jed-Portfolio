function SkillsSection({ cardClass, skillTicker, skillGroups }) {
  return (
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
  );
}

export default SkillsSection;
