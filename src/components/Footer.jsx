export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface mt-space-xl shadow-[0_-1px_6px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">
                <span className="text-primary-container">
                  <font color="#0b1c30">Laman</font>Pro
                </span>
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Studio rekayasa perangkat lunak web kelas korporat. Membangun platform web performa
              tinggi, sistem cloud terintegrasi, dan arsitektur digital terukur.
            </p>
            <div className="pt-space-xs">
              <a
                className="inline-flex items-center gap-space-xs bg-secondary-container hover:bg-secondary text-on-secondary-fixed hover:text-on-secondary font-label-lg text-label-lg px-space-md py-space-sm rounded-lg shadow-sm transition-all duration-200"
                href="https://wa.me/6288991593993"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span className="">WhatsApp Konsultasi</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Layanan Unggulan
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Custom Web Application
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Enterprise CMS Architecture
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Modern E-Commerce Engine
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                API &amp; Cloud Integration
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Web Performance &amp; SEO Audit
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Tautan Singkat
            </h3>
            <nav className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <a className="hover:text-primary transition-colors" data-path="beranda" href="#">
                Beranda
              </a>
              <a className="hover:text-primary transition-colors" data-path="tentang" href="#">
                Tentang Studio
              </a>
              <a className="hover:text-primary transition-colors" data-path="portofolio" href="#">
                Portofolio
              </a>
              <a className="hover:text-primary transition-colors" data-path="harga" href="#">
                Paket &amp; Harga
              </a>
              <a className="hover:text-primary transition-colors" data-path="faq" href="#">
                Pertanyaan (FAQ)
              </a>
            </nav>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Kantor &amp; Kontak
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Perum Khayra Residence C-19<br />
              Jl. Hasanudin 14/04 Jeru Tumpang, Kabupaten Malang&nbsp; 65156
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
              Senin - Jumat: 09:00 - 18:00 WIB<br />
              Email: halo@lamanpro.id
            </p>
          </div>
        </div>
        <div className="mt-space-xl pt-space-md bg-surface-container/50 rounded-xl px-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
          <p className="">© 2026 LamanPro. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-on-surface transition-colors" data-path="kebijakan-privasi" href="#">
              Kebijakan Privasi
            </a>
            <a className="hover:text-on-surface transition-colors" data-path="syarat-dan-ketentuan" href="#">
              Syarat Layanan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
