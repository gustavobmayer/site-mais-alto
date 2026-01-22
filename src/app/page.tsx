import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mais Alto Escalada | Londrina",
  description: "Centro de escalada e treinamento em Londrina. Do iniciante à performance.",
};

export default function Home() {
  return (
    <div className="bg-mais-deep text-mais-text overflow-hidden">
      {/* --- HERO (Premium / Mobile-first) --- */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        {/* Fundo: imagem + overlays para contraste */}
        <div className="absolute inset-0">
          <img
            src="/img/hero-bg.jpg"
            alt="Ginásio Mais Alto Escalada"
            className="h-full w-full object-cover opacity-60"
          />
          {/* Escurece bem no mobile para leitura */}
          <div className="absolute inset-0 bg-gradient-to-b from-mais-deep/95 via-mais-deep/60 to-mais-deep/95" />
          {/* Direcional (desktop) */}
          <div className="absolute inset-0 bg-gradient-to-r from-mais-deep/90 via-mais-deep/40 to-transparent" />
          {/* Glow sutil ciano */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-mais-cyan/10 blur-3xl" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            {/* Coluna texto */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-mais-deep/40 backdrop-blur px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-mais-cyan" />
                <span className="text-[11px] tracking-[0.30em] uppercase text-mais-text/80">
                  Londrina • Paraná
                </span>
              </div>

              <h1 className="mt-6 font-display font-bold uppercase text-white leading-[0.85] tracking-tight text-[44px] sm:text-[56px] md:text-[72px]">
                Supere
                <br />
                <span className="text-mais-cyan">Seus Limites</span>
              </h1>

              <p className="mt-6 max-w-xl text-mais-text/80 text-base sm:text-lg leading-relaxed border-l-2 border-mais-cyan/70 pl-5">
                Um centro de escalada e treinamento com metodologia clara: da iniciação à performance,
                com segurança, comunidade e evolução constante.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/planos"
                  className="w-full sm:w-auto text-center bg-mais-cyan text-mais-deep font-display font-bold uppercase tracking-widest text-lg px-8 py-4 hover:bg-white transition shadow-[0_0_30px_rgba(0,205,205,0.25)]"
                >
                  Começar Agora
                </Link>

                <Link
                  href="/aulas"
                  className="w-full sm:w-auto text-center border border-white/20 text-white font-display font-bold uppercase tracking-widest text-lg px-8 py-4 hover:border-mais-cyan hover:text-mais-cyan transition"
                >
                  Conhecer Aulas
                </Link>
              </div>

              {/* Micro-provas */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-mais-text/75">
                <div className="border border-white/10 bg-mais-deep/35 backdrop-blur px-4 py-3">
                  <div className="text-mais-cyan font-bold uppercase tracking-widest text-[11px]">
                    Iniciante
                  </div>
                  <div className="mt-1">Instrutor no chão na primeira visita.</div>
                </div>

                <div className="border border-white/10 bg-mais-deep/35 backdrop-blur px-4 py-3">
                  <div className="text-mais-cyan font-bold uppercase tracking-widest text-[11px]">
                    Equipamento
                  </div>
                  <div className="mt-1">Aluguel de sapatilha e cadeirinha.</div>
                </div>

                <div className="border border-white/10 bg-mais-deep/35 backdrop-blur px-4 py-3">
                  <div className="text-mais-cyan font-bold uppercase tracking-widest text-[11px]">
                    Acesso
                  </div>
                  <div className="mt-1">Boulder + Vias no mesmo espaço.</div>
                </div>
              </div>
            </div>

            {/* Coluna direita (desktop): atalhos */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="grid grid-cols-1 gap-4">
                <Link
                  href="/planos"
                  className="group border border-white/10 bg-mais-card/70 backdrop-blur p-6 hover:border-mais-cyan/50 transition"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-3xl uppercase text-white">Planos</h3>
                    <span className="text-mais-cyan text-xl group-hover:translate-x-1 transition">→</span>
                  </div>
                  <p className="mt-2 text-mais-muted text-sm leading-relaxed">
                    Opções claras: diária, mensal e recorrente.
                  </p>
                </Link>

                <Link
                  href="/aulas"
                  className="group border border-white/10 bg-mais-card/70 backdrop-blur p-6 hover:border-mais-cyan/50 transition"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-3xl uppercase text-white">Metodologia</h3>
                    <span className="text-mais-cyan text-xl group-hover:translate-x-1 transition">→</span>
                  </div>
                  <p className="mt-2 text-mais-muted text-sm leading-relaxed">
                    Do infantil ao competitivo com progressão por níveis.
                  </p>
                </Link>

                <Link
                  href="/almanaque"
                  className="group border border-white/10 bg-mais-card/70 backdrop-blur p-6 hover:border-mais-cyan/50 transition"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-3xl uppercase text-white">Almanaque</h3>
                    <span className="text-mais-cyan text-xl group-hover:translate-x-1 transition">→</span>
                  </div>
                  <p className="mt-2 text-mais-muted text-sm leading-relaxed">
                    Técnica, movimentos e biomecânica para evoluir mais rápido.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="mt-10 flex justify-center">
            <div className="flex flex-col items-center gap-2 opacity-70">
              <span className="text-[10px] uppercase tracking-[0.35em] text-mais-text/60">
                Explore
              </span>
              <div className="w-px h-12 bg-gradient-to-b from-mais-cyan/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO: METODOLOGIA (simples e consistente) --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
            <div>
              <h2 className="font-display text-5xl md:text-6xl uppercase text-white leading-[0.9]">
                Nossa <span className="text-mais-cyan">Metodologia</span>
              </h2>
              <p className="text-mais-muted mt-3 max-w-2xl">
                Um caminho estruturado para evolução técnica, física e mental.
              </p>
            </div>
            <Link
              href="/aulas"
              className="text-mais-cyan uppercase tracking-[0.25em] text-xs font-bold border-b border-mais-cyan pb-1 hover:text-white hover:border-white transition"
            >
              Ver níveis →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-white/10 bg-mais-card p-8 hover:border-mais-cyan/40 transition">
              <div className="text-white/10 font-display text-6xl leading-none">01</div>
              <h3 className="mt-3 font-display text-3xl uppercase text-white">Base</h3>
              <p className="mt-3 text-mais-muted text-sm leading-relaxed">
                Coordenação, segurança e fundamentos para progredir com consistência.
              </p>
              <div className="mt-6 h-[2px] w-10 bg-mais-cyan" />
            </div>

            <div className="border border-white/10 bg-mais-card p-8 hover:border-mais-cyan/40 transition">
              <div className="text-white/10 font-display text-6xl leading-none">04</div>
              <h3 className="mt-3 font-display text-3xl uppercase text-white">Performance</h3>
              <p className="mt-3 text-mais-muted text-sm leading-relaxed">
                Técnica, leitura, preparo físico e tática para evolução acelerada.
              </p>
              <div className="mt-6 h-[2px] w-10 bg-mais-cyan" />
            </div>

            <div className="border border-white/10 bg-mais-card p-8 hover:border-mais-cyan/40 transition">
              <div className="text-white/10 font-display text-6xl leading-none">07</div>
              <h3 className="mt-3 font-display text-3xl uppercase text-white">Alto nível</h3>
              <p className="mt-3 text-mais-muted text-sm leading-relaxed">
                Treinamento periodizado para atletas e metas competitivas.
              </p>
              <div className="mt-6 h-[2px] w-10 bg-mais-cyan" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
