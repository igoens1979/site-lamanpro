const pillars = [
  {
    icon: 'verified',
    iconBg: 'bg-surface-container',
    iconColor: 'text-primary-container',
    title: 'Tampil profesional',
    desc: 'Bangun kesan pertama yang meyakinkan saat calon pelanggan mencari bisnis Anda secara online.',
    badge: 'Standar Korporat',
  },
  {
    icon: 'stay_current_portrait',
    iconBg: 'bg-secondary-container/40',
    iconColor: 'text-secondary',
    title: 'Mudah diakses dari ponsel',
    desc: 'Website dirancang agar nyaman dibuka melalui ponsel, tablet, maupun komputer.',
    badge: 'Fluid Responsive',
  },
  {
    icon: 'travel_explore',
    iconBg: 'bg-surface-container',
    iconColor: 'text-primary',
    title: 'Informasi lebih mudah ditemukan',
    desc: 'Susunan halaman yang jelas membantu pengunjung menemukan layanan, produk, dan kontak Anda.',
    badge: 'Navigasi Ergonomis',
  },
  {
    icon: 'trending_up',
    iconBg: 'bg-surface-container-high',
    iconColor: 'text-primary-container',
    title: 'Siap dikembangkan',
    desc: 'Website dapat disesuaikan dengan kebutuhan bisnis yang berkembang.',
    badge: 'Skalabilitas Moduler',
  },
];

export default function NilaiKeunggulan() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low/50">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-md text-label-md text-primary-container uppercase tracking-wider font-semibold">
            Keunggulan Kualitas
          </span>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-on-surface mt-1">
            Website yang dibuat sesuai kebutuhan Anda
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Setiap bisnis punya kebutuhan berbeda. Karena itu, kami memulai dengan memahami tujuan,
            target pelanggan, dan layanan Anda—lalu menyusun website yang tepat untuk mendukungnya.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center ${p.iconColor} mb-space-md`}>
                <span className="material-symbols-outlined text-[28px]">{p.icon}</span>
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                {p.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{p.desc}</p>
              <div className="mt-auto pt-space-md flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                <span className="">{p.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
