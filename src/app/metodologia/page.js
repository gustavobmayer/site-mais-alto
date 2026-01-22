import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-maisalto-dark text-maisalto-white font-sans">
      
      {/* --- NAVEGAÇÃO (NAVBAR) --- */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-6 py-4 md:px-12 md:py-6 bg-maisalto-dark/90 backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-bold tracking-tighter">
          MAIS<span className="text-maisalto-cyan">ALTO</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-300">
          <a href="#" className="hover:text-maisalto-cyan transition-colors">O GINÁSIO</a>
          <a href="/metodologia" className="hover:text-maisalto-cyan transition-colors">METODOLOGIA</a>
          <a href="#" className="hover:text-maisalto-cyan transition-colors">APP ALMANAQUE</a>
        </div>

        <button className="hidden md:block bg-maisalto-cyan text-maisalto-dark px-6 py-2 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,205,205,0.4)]">
          PRIMEIRA VISITA
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col justify-center items-center px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-maisalto-dark/30 via-maisalto-dark/50 to-maisalto-dark z-10 pointer-events-none"></div>
        
        <div className="z-20 max-w-5xl space-y-8 animate-fade-in-up">
          <h2 className="text-maisalto-cyan font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-2">
            LONDRINA • PARANÁ
          </h2>
          <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tight text-white">
            A EVOLUÇÃO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">É A ÚNICA VIA.</span>
          </h1>
          <p className="text-maisalto-gray text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Um ecossistema de performance, comunidade e metodologia. Do iniciante ao atleta de elite.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <button className="bg-maisalto-cyan text-maisalto-dark px-10 py-4 rounded font-extrabold text-lg hover:bg-white transition-all w-full md:w-auto shadow-[0_0_20px_rgba(0,205,205,0.3)]">
              QUERO ESCALAR
            </button>
            <a href="/metodologia" className="border border-white/20 text-white px-10 py-4 rounded font-bold text-lg hover:border-maisalto-cyan hover:text-maisalto-cyan transition-all w-full md:w-auto block">
              CONHECER OS NÍVEIS
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}