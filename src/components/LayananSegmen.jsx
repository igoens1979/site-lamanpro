const segments = [
  {
    accent: 'bg-primary-container/5',
    tagBg: 'bg-surface-container',
    tagColor: 'text-primary',
    tagIcon: 'business_center',
    tagLabel: 'Korporasi &amp; Enterprise',
    title: 'Untuk perusahaan',
    desc: 'Tampilkan profil, layanan, portofolio, dan informasi kontak perusahaan dalam satu website profesional.',
    features: [
      'Struktur halaman teratur &amp; multi-bahasa',
      'Optimasi SEO lokal &amp; global',
      'Keamanan sertifikat SSL &amp; audit performa',
    ],
    ctaLabel: 'Konsultasi Profil Korporat',
    ctaHref: 'https://wa.me/6288991593993?text=Halo%20LamanPro,%20saya%20tertarik%20pembuatan%20website%20Perusahaan',
    ctaBg: 'bg-surface-container hover:bg-primary-container',
    ctaColor: 'text-primary hover:text-on-primary',
  },
  {
    accent: 'bg-secondary-container/20',
    tagBg: 'bg-secondary-container/40',
    tagColor: 'text-on-secondary-container',
    tagIcon: 'storefront',
    tagLabel: 'Paling Populer',
    title: 'Untuk UMKM',
    desc: 'Perkenalkan produk, tampilkan katalog, dan arahkan pelanggan untuk memesan melalui WhatsApp atau fitur toko online.',
    features: [
      'Direct WhatsApp Click-to-Order',
      'Katalog produk mudah diperbarui',
      'Hemat biaya server &amp; maintenance mudah',
    ],
    ctaLabel: 'Konsultasi Paket UMKM',
    ctaHref: 'https://wa.me/6288991593993?text=Halo%20LamanPro,%20saya%20ingin%20tanya%20website%20katalog%20UMKM',
    ctaBg: 'bg-secondary-container hover:bg-secondary',
    ctaColor: 'text-on-secondary-fixed hover:text-on-secondary',
  },
  {
    accent: 'bg-primary-container/5',
    tagBg: 'bg-surface-container',
    tagColor: 'text-primary',
    tagIcon: 'person',
    tagLabel: 'Kreator &amp; Konsultan',
    title: 'Untuk profesional dan individu',
    desc: 'Tampilkan keahlian, pengalaman, karya, dan informasi kontak melalui website portofolio atau personal brand.',
    features: [
      'Desain berkarakter sesuai persona Anda',
      'Integrasi tautan media sosial &amp; formulir pesan',
      'Optimasi pencarian Google nama Anda',
    ],
    ctaLabel: 'Konsultasi Personal Brand',
    ctaHref: 'https://wa.me/6288991593993?text=Halo%20LamanPro,%20saya%20butuh%20website%20portofolio%20pribadi',
    ctaBg: 'bg-surface-container hover:bg-primary-container',
    ctaColor: 'text-primary hover:text-on-primary',
  },
];

export default function LayananSegmen() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="mb-space-lg">
          <span className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider">
            Segmen Spesifik
          </span>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-on-surface mt-1">
            Layanan untuk berbagai kebutuhan
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs whitespace-nowrap">
            Solusi terarah yang dirancang persis dengan skala dan tujuan operasional masing-masing
            jenis organisasi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {segments.map((s) => (
            <div
              key={s.title}
              className={`relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden`}
            >
              <div className={`absolute -top-12 -right-12 w-32 h-32 ${s.accent} rounded-full blur-xl pointer-events-none`}></div>
              <div>
                <div className={`inline-flex items-center gap-2 ${s.tagBg} ${s.tagColor} px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold mb-space-md`}>
                  <span className="material-symbols-outlined text-[16px]">{s.tagIcon}</span>
                  <span className="">{s.tagLabel}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-sm">
                  {s.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  {s.desc}
                </p>
                <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface mb-space-md">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">done</span>
                      <span className="">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-space-md">
                <a
                  className={`w-full inline-flex justify-center items-center gap-1.5 ${s.ctaBg} ${s.ctaColor} font-label-lg text-label-lg py-2.5 rounded-xl transition-all`}
                  href={s.ctaHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="">{s.ctaLabel}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
