const steps = [
  {
    number: '01',
    numberColor: 'text-primary-container',
    icon: 'forum',
    title: 'Konsultasi',
    desc: 'Ceritakan bisnis, kebutuhan, dan tujuan website Anda.',
  },
  {
    number: '02',
    numberColor: 'text-secondary',
    icon: 'architecture',
    title: 'Perencanaan',
    desc: 'Kami menyusun struktur halaman dan konsep tampilan.',
  },
  {
    number: '03',
    numberColor: 'text-primary-container',
    icon: 'code',
    title: 'Pembuatan',
    desc: 'Website dikembangkan berdasarkan kesepakatan.',
  },
  {
    number: '04',
    numberColor: 'text-secondary',
    icon: 'rate_review',
    title: 'Review dan revisi',
    desc: 'Anda meninjau hasilnya dan menyampaikan masukan.',
  },
  {
    number: '05',
    numberColor: 'text-primary',
    icon: 'rocket_launch',
    title: 'Peluncuran',
    desc: 'Website siap dipublikasikan setelah disetujui.',
  },
];

export default function CaraKerja() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low/40">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-xl mx-auto mb-space-xl">
          <span className="font-label-md text-label-md text-primary-container uppercase tracking-wider font-semibold">
            Alur Proyek
          </span>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-on-surface mt-1">
            Cara kerja
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Proses terarah dan transparan dari konsep hingga online
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm relative">
          {steps.map((s) => (
            <div
              key={s.number}
              className="flex flex-col bg-surface-container-lowest p-space-md rounded-2xl shadow-sm relative group hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-space-sm">
                <span className={`font-display text-headline-sm font-black ${s.numberColor}`}>
                  {s.number}
                </span>
                <span className="material-symbols-outlined text-on-surface-variant text-[22px]">
                  {s.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-[16px] font-bold text-on-surface mb-1">
                {s.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
