import { useState, useRef, useEffect, useCallback } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const pillStyle = useRef({ left: 0, width: 0, top: 0, height: 0 });
  const linkRefs = useRef([]);

  const navLinks = [
    { path: 'beranda', label: 'Beranda', active: true },
    { path: 'layanan', label: 'Layanan' },
    { path: 'harga', label: 'Harga' },
    { path: 'portofolio', label: 'Portofolio' },
    { path: 'tentang', label: 'Tentang' },
    { path: 'faq', label: 'FAQ' },
    { path: 'kontak', label: 'Kontak' },
  ];

  const activeIndex = navLinks.findIndex((l) => l.active);

  const updatePill = useCallback((index) => {
    if (index < 0) return;
    const el = linkRefs.current[index];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const navRect = el.parentElement?.getBoundingClientRect();
    if (!navRect) return;
    pillStyle.current = {
      left: rect.left - navRect.left,
      width: rect.width,
      top: rect.top - navRect.top,
      height: rect.height,
    };
  }, []);

  useEffect(() => {
    updatePill(hoverIndex);
  }, [hoverIndex, updatePill]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all duration-200">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-space-sm">
          <a
            className="flex items-center tracking-tight text-on-surface font-headline-sm text-headline-sm font-bold"
            data-path="beranda"
            href="#"
          >
            Laman<br />
            <span className="text-primary-container">Pro</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-surface-container-low/40 backdrop-blur-md rounded-xl px-1 py-0.5 border border-outline-variant/30 shadow-sm relative">
          {/* Semi-transparent pill behind active/hovered item */}
          <div
            className="absolute inset-0 bg-surface-container/60 backdrop-blur-sm rounded-lg transition-all duration-300 ease-out pointer-events-none"
            style={{
              left: pillStyle.current.left,
              width: pillStyle.current.width,
              top: pillStyle.current.top,
              height: pillStyle.current.height,
            }}
          />
          {navLinks.map((link, index) => (
            <a
              key={link.path}
              ref={(el) => (linkRefs.current[index] = el)}
              aria-current={link.active ? 'page' : undefined}
              className={`relative z-10 transition-colors duration-200 py-1 px-3 rounded-lg font-label-lg text-label-lg ${
                link.active || hoverIndex === index
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              data-path={link.path}
              href="#"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(activeIndex)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + Profile */}
        <div className="hidden xl:flex items-center gap-space-sm">
          <a
            className="group inline-flex items-center gap-space-xs bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg px-space-md py-space-sm rounded-lg shadow-[0_4px_12px_rgba(29,78,216,0.25)] transition-all duration-200 transform hover:-translate-y-0.5"
            data-path="konsultasi-gratis"
            href="https://wa.me/628123456789"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="">Konsultasi Gratis</span>
            <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm ml-1">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container-low/50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Buka menu"
          aria-expanded={mobileOpen}
        >
          <span className="material-symbols-outlined text-[24px]">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="xl:hidden fixed inset-0 z-[60] bg-white backdrop-blur-sm overflow-y-auto"
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute top-0 right-0 p-4">
            <button
              className="p-2 rounded-lg text-on-surface hover:bg-surface-container-low/50 transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Tutup menu"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
          <nav className="mt-20 px-margin-mobile space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                className={`block px-4 py-3 rounded-lg text-lg font-label-lg transition-colors ${
                  link.active
                    ? 'bg-surface-container text-primary font-bold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/80'
                }`}
                data-path={link.path}
                href="#"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-margin-mobile pb-10 pt-6 space-y-3">
            <a
              className="group inline-flex items-center justify-center gap-space-xs bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg px-4 py-3 rounded-xl shadow-[0_4px_12px_rgba(29,78,216,0.25)] transition-all duration-200 w-full"
              data-path="konsultasi-gratis"
              href="https://wa.me/628123456789"
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => setMobileOpen(false)}
            >
              <span className="">Konsultasi Gratis</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
            <div className="flex items-center gap-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
