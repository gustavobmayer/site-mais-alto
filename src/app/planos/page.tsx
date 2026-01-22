import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Planos | Mais Alto Escalada",
  description: "Escolha sua modalidade.",
};

export default function PlanosPage() {
  const planos = [
    {
      nome: "DIÁRIA",
      preco: "60",
      obs: "Válido por 1 dia",
      desc: "Acesso total (Boulder + Vias). Equipamento não incluso.",
      destaque: false,
    },
    {
      nome: "MENSAL",
      preco: "280",
      obs: "Cobrança mensal",
      desc: "Ideal para quem escala 2x ou mais na semana. Sem fidelidade.",
      destaque: false,
    },
    {
      nome: "RECORRENTE",
      preco: "260",
      obs: "Débito automático",
      desc: "Melhor custo-benefício. Acesso ilimitado e descontos exclusivos.",
      destaque: true, // O destaque vai brilhar em Ciano
    },
    {
      nome: "PACOTE 10",
      preco: "500",
      obs: "Válido por 6 meses",
      desc: "Flexibilidade total. Use quando quiser ou divida com amigos.",
      destaque: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#142332] pt-32 pb-20">
      
      {/* Título Estilo Revista */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-7xl md:text-9xl font-bold text-white mb-4 tracking-tighter">
          INVESTIMENTO
        </h1>
        <p className="text-[#6e8296] text-xl font-light tracking-wide uppercase">
          Evolução • Saúde • Comunidade
        </p>
      </div>

      {/* Grid de Planos */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {planos.map((p) => (
          <div 
            key={p.nome} 
            className={`
              relative p-8 flex flex-col justify-between transition-all duration-500 group
              ${p.destaque 
                ? 'bg-[#1c2e40] border-2 border-[#00cdcd] transform md:-translate-y-4 shadow-[0_0_40px_rgba(0,205,205,0.15)]' 
                : 'bg-[#172636] border border-white/5 hover:border-[#00cdcd]/30 hover:bg-[#1c2e40]'}
            `}
          >
            {p.destaque && (
              <div className="absolute top-0 left-0 w-full bg-[#00cdcd] text-[#142332] text-center font-bold uppercase text-xs py-1 tracking-widest">
                Recomendado
              </div>
            )}

            <div>
              <h3 className={`text-4xl mb-2 ${p.destaque ? 'text-[#00cdcd]' : 'text-white'}`}>
                {p.nome}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-lg text-[#6e8296]">R$</span>
                <span className="text-6xl font-bold text-white font-[var(--font-alumni)]">
                    {p.preco}
                </span>
              </div>
              <p className="text-xs uppercase tracking-widest text-[#00cdcd] mb-6 border-b border-white/10 pb-4">
                {p.obs}
              </p>
              <p className="text-[#6e8296] text-sm leading-relaxed mb-8">
                {p.desc}
              </p>
            </div>

            <button className={`
              w-full py-4 uppercase font-bold text-lg tracking-widest transition-all
              ${p.destaque 
                ? 'bg-[#00cdcd] text-[#142332] hover:bg-white' 
                : 'border border-white/20 text-white hover:border-[#00cdcd] hover:text-[#00cdcd]'}
            `}>
              Escolher
            </button>
          </div>
        ))}
      </div>

      {/* Tabela Comparativa (Opcional, mas muito profissional) */}
      <div className="max-w-4xl mx-auto px-6 mt-24 border-t border-white/10 pt-16 text-center">
        <h3 className="text-3xl text-white mb-8">DÚVIDAS FREQUENTES</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
                <h4 className="text-[#00cdcd] text-xl mb-2">Preciso de equipamento?</h4>
                <p className="text-[#6e8296] text-sm">Não. Temos sapatilhas para alugar na recepção (R$ 20). Se tiver a sua, melhor!</p>
            </div>
            <div>
                <h4 className="text-[#00cdcd] text-xl mb-2">Iniciante pode ir direto?</h4>
                <p className="text-[#6e8296] text-sm">Sim! Temos instrutores de chão para ensinar o básico de segurança e movimentação na sua primeira vez.</p>
            </div>
        </div>
      </div>

    </div>
  );
}