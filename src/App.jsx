import { Navbar, Hero, JenisLayanan, NilaiKeunggulan, LayananSegmen, CaraKerja, FinalCta, Footer } from './components/index';

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <Hero />
          <JenisLayanan />
          <NilaiKeunggulan />
          <LayananSegmen />
          <CaraKerja />
          <FinalCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
