function ProjectsSection({
  filteredProjects,
  filterOptions,
  projectFilter,
  setProjectFilter,
  setActiveProjectIndex,
  cardSlideTick,
}) {
  return (
    <section id="projects" className="section-shell py-12 sm:py-16">
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal">Projects</p>
          <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Take a look!</h2>
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
            <div className="overflow-hidden rounded-3xl">
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
  );
}

export default ProjectsSection;
