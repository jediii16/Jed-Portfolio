function Header({ navigation, activeSection, menuOpen, setMenuOpen, menuIcon }) {
  return (
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
          {menuIcon}
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
  );
}

export default Header;
