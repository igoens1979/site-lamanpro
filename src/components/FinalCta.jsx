export default function FinalCta() {
  return (
    <section className="w-full py-space-xl bg-surface overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-inverse-surface text-on-primary p-space-lg md:p-space-xl shadow-2xl">
          <div className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full bg-primary-container/40 blur-2xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-lg">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-surface-container-lowest/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-on-primary font-label-sm text-label-sm mb-space-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-ping"></span>
                <span className="font-semibold tracking-wide">Online Hari Ini — Siap Diskusi</span>
              </div>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg font-extrabold tracking-tight text-on-primary">
                Siap membangun website untuk bisnis Anda?
              </h2>
              <p className="font-body-lg text-body-lg text-surface-container mt-space-xs max-w-xl">
                Ceritakan kebutuhan Anda. Kami akan membantu menentukan jenis website yang paling
                sesuai.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm shrink-0">
              <a
                className="group inline-flex items-center justify-center gap-space-sm bg-[#22c55e] hover:bg-[#16a34a] text-white font-label-lg text-label-lg px-space-lg py-4 rounded-xl shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                href="https://wa.me/6288991593993?text=Halo%20LamanPro,%20saya%20ingin%20konsultasi%20pembuatan%20website"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[24px]">chat</span>
                <span className="font-bold tracking-wide">[Hubungi Kami via WhatsApp]</span>
                <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
