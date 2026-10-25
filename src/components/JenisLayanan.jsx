const cards = [
  {
    icon: 'corporate_fare',
    iconBg: 'bg-surface-container',
    iconColor: 'text-primary-container',
    badge: 'Kredibilitas B2B',
    badgeBg: 'bg-surface-container-low text-primary',
    title: 'Website profil perusahaan',
    desc: 'Company profile profesional yang membangun reputasi bisnis kokoh, terpercaya di mata klien B2B, mitra strategis, serta investor nasional dan global.',
    features: 'Fitur: Portofolio, Tata Kelola, Kontak Legal',
    arrowColor: 'text-primary-container',
    hasImg: false,
  },
  {
    icon: 'inventory_2',
    iconBg: 'bg-secondary-container/40',
    iconColor: 'text-secondary',
    badge: 'UMKM Juara',
    badgeBg: 'bg-secondary-container/30 text-on-secondary-container',
    title: 'Website UMKM &amp; katalog produk',
    desc: 'Katalog produk online ringkas dan estetik dengan integrasi order instan langsung terhubung ke WhatsApp bisnis dan kanal pembayaran cepat.',
    features: 'Fitur: Galeri Produk, Tombol Chat, Filter Harga',
    arrowColor: 'text-secondary',
    hasImg: false,
  },
  {
    icon: 'shopping_bag',
    iconBg: 'bg-surface-container',
    iconColor: 'text-primary',
    badge: 'Full E-Commerce',
    badgeBg: 'bg-surface-container text-primary',
    title: 'Toko online',
    desc: 'E-commerce lengkap dengan alur checkout seamless, keranjang belanja intuitif, serta integrasi ongkos kirim real-time dan payment gateway otomatis.',
    features: 'Fitur: Payment QRIS/VA, Lacak Resi, Diskon Kupon',
    arrowColor: 'text-primary',
    hasImg: false,
  },
  {
    icon: 'ads_click',
    iconBg: 'bg-secondary-container/40',
    iconColor: 'text-secondary',
    badge: 'High Conversion',
    badgeBg: 'bg-secondary-container/30 text-on-secondary-container',
    title: 'Landing page untuk promosi',
    desc: 'Halaman konversi tinggi yang dirancang khusus untuk menyokong kampanye iklan digital (Meta Ads, Google Ads, TikTok Ads) dengan lead generation super cepat.',
    features: 'Fitur: A/B Ready, Form Cepat',
    arrowColor: 'text-secondary',
    hasImg: false,
  },
  {
    icon: 'badge',
    iconBg: 'bg-surface-container',
    iconColor: 'text-primary-container',
    badge: 'Personal Authority',
    badgeBg: 'bg-surface-container text-primary',
    title: 'Website portofolio dan personal brand',
    desc: 'Showcase karya dengan kurasi visual tinggi dan profil keahlian untuk konsultan, kreator konten, arsitek, fotografer, pengacara, serta profesional mandiri.',
    features: 'Fitur: Galeri Interaktif, Testimonial Klien, Integrasi CV / Resume',
    arrowColor: 'text-primary-container',
    hasImg: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB66YlMPAc5ekfMoLwzU1L6YDkANgT0u7wLeGCaSRuTAhIVvnxtGOLUTFQvEwd_PzolClZeXb71YvomCSLGLNJpdb3-vpANT3KlZmfbt-s6mcVVmCvl5NErrzxwhlkBB97kDt4QXP4JinMILzKl1ghgDMPWBu1mpVA68XRMl5Xle_Cs55M6UBcs-Lt75GY_1cYgb4FB3eaHYfsmlizUFAbnPzzwj9lGlmjQqf4U-47VHXrseCWTCphNdg',
    colSpan: 'lg:col-span-2',
  },
];

export default function JenisLayanan() {
  return (
    <section className="w-full py-space-xl bg-surface" id="jenis-layanan">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-primary-container font-label-md text-label-md font-semibold tracking-wider uppercase mb-1">
              <span className="material-symbols-outlined text-[18px]">category</span>
              <span className="">Kategori Produk &amp; Solusi</span>
            </div>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-bold text-on-surface whitespace-nowrap">
              Website yang bisa kami bantu buat:
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Setiap varian situs dirancang khusus sesuai tujuan konversi, citra brand, serta karakter
            unik calon pelanggan bisnis Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`group flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 ${card.colSpan || ''}`}
            >
              {card.hasImg ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
                    <div className="md:col-span-7">
                      <div className="flex items-center gap-space-sm mb-space-md">
                        <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor}`}>
                          <span className="material-symbols-outlined text-[26px]">{card.icon}</span>
                        </div>
                        <span className={`${card.badgeBg} font-label-sm text-label-sm px-2.5 py-1 rounded-full`}>
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                        {card.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {card.desc}
                      </p>
                    </div>
                    <div className="md:col-span-5 rounded-xl overflow-hidden shadow-sm">
                      <img className="w-full h-36 object-cover" data-alt={card.title} src={card.img} alt={card.title} />
                    </div>
                  </div>
                  <div className="pt-space-md mt-space-md bg-surface-container-low/40 -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {card.features}
                    </span>
                    <span
                      className={`material-symbols-outlined ${card.arrowColor} group-hover:translate-x-1 transition-transform`}
                    >
                      arrow_right_alt
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor}`}>
                        <span className="material-symbols-outlined text-[26px]">{card.icon}</span>
                      </div>
                      <span className={`${card.badgeBg} font-label-sm text-label-sm px-2.5 py-1 rounded-full`}>
                        {card.badge}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                      {card.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md bg-surface-container-low/40 -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {card.features}
                    </span>
                    <span
                      className={`material-symbols-outlined ${card.arrowColor} group-hover:translate-x-1 transition-transform`}
                    >
                      arrow_right_alt
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
