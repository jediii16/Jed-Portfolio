function BackToTopButton({ onClick, icon: Icon }) {
  return (
    <button type="button" onClick={onClick} className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-ink/90" aria-label="Back to top">
      <Icon />
      Top
    </button>
  );
}

export default BackToTopButton;
