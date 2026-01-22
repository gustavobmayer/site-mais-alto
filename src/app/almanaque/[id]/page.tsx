import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '../../../data/database'; // Importando os dados reais

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetalheMovimento(props: PageProps) {
  const params = await props.params;
  const id = params.id;
  const item = db[id];

  if (!item) {
    notFound();
  }

  // Função auxiliar para renderizar blocos de conteúdo HTML
  const Section = ({ title, htmlContent, icon }: { title: string, htmlContent: string, icon: string }) => (
    <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
      <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
        <span>{icon}</span> {title}
      </h3>
      <div 
        className="text-gray-700 leading-relaxed prose prose-cyan max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans pb-20">
      
      {/* Hero Header */}
      <div className="bg-gray-900 text-white pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
            <Link href="/almanaque" className="text-gray-400 hover:text-cyan-400 text-sm font-bold uppercase tracking-widest mb-6 inline-block">
                ← Voltar ao Almanaque
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag: string) => (
                    <span key={tag} className="bg-cyan-900 text-cyan-300 border border-cyan-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                        {tag}
                    </span>
                ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                {item.names.pt}
            </h1>
            <p className="text-xl text-gray-300 italic font-light border-l-4 border-cyan-500 pl-4 max-w-2xl">
                "{item.intro.pt}"
            </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-10">
        
        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 gap-6">
            
            {/* Descrição Visual e Mental */}
            <Section title="Descrição & Lógica" icon="🧠" htmlContent={item.desc.pt} />

            {/* Variações */}
            {item.variacoes && (
                <Section title="Variações Técnicas" icon="🔀" htmlContent={item.variacoes.pt} />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Biomecânica */}
                <Section title="Biomecânica" icon="⚙️" htmlContent={item.bio.pt} />
                
                {/* Anatomia */}
                <Section title="Anatomia" icon="🦴" htmlContent={item.anat.pt} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Fisiologia */}
                 <Section title="Fisiologia" icon="⚡" htmlContent={item.fisio.pt} />

                 {/* Cuidados */}
                 <div className="mb-8 p-6 bg-red-50 rounded-xl border border-red-100">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-red-800 mb-4 border-b border-red-200 pb-2">
                        <span>❤️</span> Cuidados & Alertas
                    </h3>
                    <div 
                        className="text-red-900 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.care.pt }} 
                    />
                 </div>
            </div>

            {/* Área de Monetização (Produtos Relacionados) */}
            {item.products && (
                <div className="mt-8 p-8 bg-gray-900 rounded-2xl text-center shadow-2xl">
                    <h4 className="text-white font-bold text-lg mb-2">Equipamento Recomendado</h4>
                    <p className="text-gray-400 mb-6 text-sm">Para dominar o {item.names.pt}, recomendamos:</p>
                    <a 
                        href={item.products.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-cyan-500 text-gray-900 font-extrabold px-8 py-3 rounded-full hover:bg-cyan-400 transition transform hover:scale-105"
                    >
                        🛒 {item.products.text.pt}
                    </a>
                </div>
            )}

        </div>

        <div className="mt-16 text-center border-t border-gray-100 pt-10">
            <Link href="/almanaque" className="text-gray-500 hover:text-gray-900 underline">
                Ver outros movimentos
            </Link>
        </div>

      </div>
    </div>
  );
}