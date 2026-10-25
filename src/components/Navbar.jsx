import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { path: 'beranda', label: 'Beranda', active: true },
    { path: 'layanan', label: 'Layanan' },
    { path: 'harga', label: 'Harga' },
    { path: 'portofolio', label: 'Portofolio' },
    { path: 'tentang', label: 'Tentang' },
    { path: 'faq', label: 'FAQ' },
    { path: 'kontak', label: 'Kontak' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all duration-200">
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
        <nav
          className={`hidden xl:flex items-center gap-space-md ${mobileOpen ? 'bg-surface-container text-primary font-bold rounded-lg px-3 py-1.5' : ''}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.path}
              aria-current={link.active ? 'page' : undefined}
              className={`transition-colors py-1 px-2 ${
                link.active
                  ? 'bg-surface-container text-primary font-bold rounded-lg'
                  : 'font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface'
              }`}
              data-path={link.path}
              href="#"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-space-sm">
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
      </div>
    </header>
  );
}
