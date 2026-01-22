import Link from 'next/link';

export default function ServicosPage() {
  const servicos = [
    {
      emoji: "🧗‍♂️",
      titulo: "Loja de Equipamentos",
      desc: "Sapatilhas, magnésio, cadeirinhas e roupas técnicas. Tudo o que você precisa para escalar com segurança e estilo.",
      tags: ["Venda", "Aluguel"]
    },
    {
      emoji: "☕",
      titulo: "Cantina & Café",
      desc: "O ponto de encontro pós-treino. Cafés especiais, açaí, sanduíches naturais e suplementação.",
      tags: ["Social", "Nutrição"]
    },
    {
      emoji: "🩹",
      titulo: "Fisioterapia Especializada",
      desc: "Profissionais focados em prevenção e reabilitação de lesões de escalada (ombro, polias e dedos).",
      tags: ["Saúde", "Recovery"]
    },
    {
      emoji: "🥗",
      titulo: "Nutricionista Esportiva",
      desc: "Planos alimentares focados em performance, ganho de força e redução de peso para escalada.",
      tags: ["Performance"]
    },
    {
      emoji: "🧠",
      titulo: "Psicologia do Esporte",
      desc: "Trabalho mental para superação de medo de queda, foco e ansiedade competitiva.",
      tags: ["Mental"]
    },
    {
      emoji: "🌄",
      titulo: "Turismo de Aventura",
      desc: "Saídas guiadas para a rocha. Leve o que aprendeu no ginásio para a natureza com segurança.",
      tags: ["Outdoor"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* Header */}
      <header className="bg-gray-900 text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          SERVIÇOS & COMODIDADES
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Muito mais que um ginásio. Um ecossistema completo para o seu bem-estar e evolução.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-6 -mt-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-8 border border-gray-100 flex flex-col items-start">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                {item.emoji}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.titulo}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>

              <div className="flex gap-2 mt-auto">
                {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-wider bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Profissionais */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Você é um profissional da área?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Estamos sempre em busca de parceiros (Personal Trainers, Fisioterapeutas e Médicos) para atender nossa comunidade.
            </p>
            <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-md">
                Seja um Parceiro
            </button>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-gray-500 hover:text-gray-900 font-medium underline">
            ← Voltar para Home
          </Link>
        </div>

      </div>
    </div>
  );
}