function Header({ navigation, activeSection, menuOpen, setMenuOpen, menuIcon }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/45 bg-white/30 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/22">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#top" className="font-display text-2xl tracking-tight text-ink">JeDev.</a>
        <nav className="hidden items-center gap-3 text-sm font-semibold text-ink/70 md:flex">
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-4 py-2 transition ${activeSection === id ? 'bg-ink text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)]' : 'bg-white/28 text-ink/72 backdrop-blur hover:bg-white/42 hover:text-ink'}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,23,42,0.18)] transition hover:bg-ink/90 md:inline-flex">Let&apos;s connect</a>
        <button type="button" className="inline-flex rounded-full border border-white/50 bg-white/55 p-3 text-ink shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur md:hidden" onClick={() => setMenuOpen((current) => !current)} aria-label="Toggle menu">
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
