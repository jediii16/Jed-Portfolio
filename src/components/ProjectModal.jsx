import {
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaGithub,
  FaXmark,
} from 'react-icons/fa6';

function ProjectModal({ activeProject, activeSlide, setActiveSlide, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="glass-panel relative max-h-[90vh] w-full max-w-5xl overflow-auto p-4 sm:p-6">
        <button type="button" className="cursor-pointer absolute right-5 top-5 z-10 inline-flex rounded-full border border-ink/10 bg-white/90 p-3 text-ink/70 transition hover:text-ink" onClick={onClose} aria-label="Close project modal">
          <FaXmark />
        </button>
        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img src={activeProject.images[activeSlide]} alt={`${activeProject.title} screenshot ${activeSlide + 1}`} className="h-80 w-full object-cover sm:h-96" />
              <button type="button" onClick={() => setActiveSlide((current) => (current - 1 + activeProject.images.length) % activeProject.images.length)} className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-ink shadow-sm">
                <FaChevronLeft />
              </button>
              <button type="button" onClick={() => setActiveSlide((current) => (current + 1) % activeProject.images.length)} className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-ink shadow-sm">
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
            <div className="flex items-start justify-between gap-4 pr-16 sm:pr-20">
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
              {activeProject.view ? (
                <a href={activeProject.view} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"><FaArrowUpRightFromSquare />View live website</a>
              ) : (
                <a href={activeProject.download} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"><FaDownload />Download code</a>
              )}
              <a href={activeProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-coral/40 hover:text-coral"><FaGithub />View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
