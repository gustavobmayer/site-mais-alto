import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Escola de Escalada | Mais Alto",
  description: "Metodologia exclusiva de ensino.",
};

export default function AulasPage() {
  const niveis = [
    { nome: "Spider Kids", nivel: "Nível 01", idade: "4-8 Anos", desc: "Ludicidade e coordenação motora.", img: "/img/nivel-1.png" },
    { nome: "Super Frogs", nivel: "Nível 02", idade: "6-12 Anos", desc: "Técnica e resolução de problemas.", img: "/img/nivel-2.png" },
    { nome: "Wild Lemures", nivel: "Nível 03", idade: "9-13 Anos", desc: "Autonomia e pré-adolescência.", img: "/img/nivel-3.png" },
    { nome: "Rocking Raccoons", nivel: "Nível 04", idade: "9-16 Anos", desc: "Introdução à competição.", img: "/img/nivel-4.png" },
    { nome: "Iguanas", nivel: "Nível 06", idade: "14-23 Anos", desc: "Performance avançada.", img: "/img/nivel-6.png" },
    { nome: "Rock Dragons", nivel: "Nível 07", idade: "18-25 Anos", desc: "Elite e alto rendimento.", img: "/img/nivel-7.png" },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-deep">
      
      {/* Header Limpo */}
      <div className="container mx-auto px-6 mb-20">
        <h1 className="text-6xl md:text-8xl text-white mb-6">
          NOSSAS <span className="text-brand-cyan">AULAS</span>
        </h1>
        <div className="w-24 h-1 bg-brand-cyan mb-6"></div>
        <p className="max-w-2xl text-brand-muted text-lg font-light">
          A metodologia Mais Alto respeita o tempo de cada aluno, focando na segurança e na evolução técnica constante.
        </p>
      </div>

      {/* Grid Elegante (Sem cores papagaiadas) */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {niveis.map((item) => (
          <div key={item.nome} className="group relative bg-brand-card border border-white/5 hover:border-brand-cyan/50 transition-all duration-500 overflow-hidden">
            
            {/* Imagem (Preto e Branco fica elegante, colorido ao passar o mouse) */}
            <div className="h-64 overflow-hidden relative">
               <div className="absolute inset-0 bg-brand-deep/20 z-10 group-hover:bg-transparent transition-all duration-500"></div>
               <img 
                 src={item.img} 
                 alt={item.nome} 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
               />
               {/* Badge do Nível */}
               <div className="absolute top-0 right-0 bg-brand-cyan text-brand-deep font-display font-bold px-4 py-2 text-xl z-20">
                 {item.nivel}
               </div>
            </div>

            <div className="p-8">
              <h3 className="text-4xl text-white mb-2">{item.nome}</h3>
              <p className="text-brand-cyan font-bold tracking-widest text-xs uppercase mb-4 border-b border-white/10 pb-4 inline-block">
                {item.idade}
              </p>
              <p className="text-brand-muted mb-6 leading-relaxed">
                {item.desc}
              </p>
              
              <button className="text-white text-sm uppercase tracking-widest font-bold group-hover:text-brand-cyan transition-colors flex items-center gap-2">
                Ver Turmas <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}