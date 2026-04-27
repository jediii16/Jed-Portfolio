import { FaArrowRight } from 'react-icons/fa6';

function ContactSection({
  cardClass,
  contactItems,
  copiedField,
  handleCopy,
  socials,
  locationIcon: LocationIcon,
  copyIcon: CopyIcon,
  checkIcon: CheckIcon,
  form,
  setForm,
  mailtoHref,
}) {
  return (
    <section id="contact" className="section-shell py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className={cardClass}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-coral">Contact</p>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Let&apos;s talk about ideas, projects, or opportunities.</h2>
          <div className="mt-8 space-y-4">
            {contactItems.map(([key, value, href, Icon, tone]) => (
              <div key={key} className="flex items-center justify-between gap-4 rounded-3xl border border-ink/8 bg-white/80 px-5 py-4 text-sm text-ink/75">
                <div className="flex items-center gap-4">
                  <span className={`rounded-2xl p-3 ${tone === 'coral' ? 'bg-coral/10 text-coral' : 'bg-teal/10 text-teal'}`}><Icon /></span>
                  <a href={href} className="hover:text-ink">{value}</a>
                </div>
                <button type="button" onClick={() => handleCopy(key, key === 'email' ? value : '+639759330520')} className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-ink/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/65 transition hover:bg-ink hover:text-white">
                  {copiedField === key ? <CheckIcon /> : <CopyIcon />}
                  {copiedField === key ? 'Copied' : 'Copy'}
                </button>
              </div>
            ))}
            <div className="flex items-center gap-4 rounded-3xl border border-ink/8 bg-white/80 px-5 py-4 text-sm text-ink/75">
              <span className="rounded-2xl bg-gold/30 p-3 text-ink"><LocationIcon /></span>
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
  );
}

export default ContactSection;
