export default function Hero() {
  return (
    <section className="relative w-full overflow-x-hidden overflow-hidden bg-gradient-to-b from-surface-container-low/60 via-surface to-background pb-space-xl pt-space-lg">
      <div className="pointer-events-none hidden lg:block absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-primary-container/10 blur-3xl"></div>
      <div className="pointer-events-none hidden lg:block absolute top-48 left-10 h-80 w-80 rounded-full bg-secondary-container/20 blur-3xl"></div>
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs w-fit bg-secondary-container/40 text-on-secondary-container px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-sm text-label-sm tracking-wide uppercase">
                Solusi Pembuatan Website Terpercaya &amp; Siap Pakai
              </span>
            </div>
            <h1 className="font-display text-headline-lg lg:text-display text-on-surface font-extrabold tracking-tight leading-tight">
              Website profesional untuk bisnis yang ingin berkembang
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Kami membantu perusahaan, UMKM, dan profesional memiliki website yang menarik, mudah
              digunakan, dan sesuai dengan kebutuhan bisnis. Mulai dari website profil perusahaan,
              toko online, hingga portofolio pribadi—semuanya dirancang agar calon pelanggan lebih
              mudah mengenal layanan Anda dan menghubungi bisnis Anda.
            </p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a
                className="group inline-flex items-center gap-space-xs bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg px-space-lg py-3 rounded-xl shadow-md shadow-primary-container/20 transition-all duration-200 transform hover:-translate-y-0.5"
                href="https://wa.me/6288991593993"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span className="">Konsultasi Gratis</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
              <a
                className="inline-flex items-center gap-space-xs bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-lg text-label-lg px-space-lg py-3 rounded-xl shadow-sm transition-all duration-200"
                href="#jenis-layanan"
              >
                <span className="material-symbols-outlined text-[20px] text-primary-container">
                  visibility
                </span>
                <span className="">Lihat Portofolio</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-space-lg lg:mt-0 overflow-x-hidden">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative rounded-2xl bg-inverse-surface p-3 shadow-2xl">
                <div className="flex items-center justify-between pb-2 px-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-error"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
                    <div className="w-3 h-3 rounded-full bg-primary-fixed-dim"></div>
                  </div>
                  <div className="bg-surface-variant/20 rounded-md px-3 py-0.5 text-center flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-surface-container-low">
                      lock
                    </span>
                    <span className="font-label-sm text-[11px] text-surface-container-low">
                      lamanpro.id/preview
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] text-outline-variant">
                    devices
                  </span>
                </div>
                <div className="relative rounded-xl overflow-hidden bg-surface shadow-inner">
                  <img
                    className="w-full h-72 object-cover object-top"
                    data-alt="High resolution interface mockup of a modern corporate website with crisp typography, deep royal blue accents, data charts, and clean responsive layout created by Cakrawala Web studio"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuV8bU1tXOEIhLR5ygIpMwP2YvTXSVY1Qwe4r_8ltcv8jkb2en9CHL5tGif3xDHMSnHUjuMlS2uMQpOrpQKP-pwOgAKBTBLOLs3CYVl4tUnpm21uU4wp2Brr1pP2zB2wB0OSeR3qaABtkktETIen-qh6GYvkqR-AUkxz6uSwILU5Duk-04J0cqZwX0UFH-mdAOZ07KJZCw4JhzVj0sFs8Dc6zLGrfV31NXeHSx8266PoF6trz9-AfPAg"
                    alt="Website mockup"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between text-on-primary">
                      <div>
                        <p className="font-label-md text-label-md font-semibold">
                          Arsitektur Web Terintegrasi
                        </p>
                        <p className="font-body-sm text-[12px] text-surface-variant">
                          Optimal di Desktop, Tablet, &amp; Ponsel
                        </p>
                      </div>
                      <span className="bg-primary-container px-2.5 py-1 rounded-full font-label-sm text-label-sm">
                        Live Preview
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-4 w-28 bg-surface-container-lowest p-1.5 rounded-xl shadow-xl sm:block">
                  <div className="rounded-lg overflow-hidden relative">
                    <img
                      className="w-full h-32 object-cover"
                      data-alt="Vertical mobile website preview showing flawless smartphone optimization and fluid navigation on clean corporate background"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH64htxR2hR2SQsm97ZZ4Zu4YJ7vqzIUXxJoDUGjxYVzL8B-b5bIHO6y9VkoTH3afpCXjB4QLOe_lOCLYCUbx1WCEW5F2rFO5emYTg0T8jo41Y_IYiL1SXoqdXUK4Rgmd35CEorjLljgGTJ26O8tUxyWFcEDyAebVVQM2jkoqA9G_indKHk8mgyxkoy2wnZrVuSmxralhdRKGAJKq-F3FUzZ5d6sw4gC_50-lfofD8oJHsUetcPHC-Kg"
                      alt="Mobile preview"
                    />
                    <div className="absolute top-1 right-1 bg-secondary text-on-secondary px-1 py-0.5 rounded text-[9px] font-bold">
                      100% Mobile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
