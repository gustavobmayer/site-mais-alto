'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { db } from '../../data/database';

export default function Almanaque() {
  const [busca, setBusca] = useState('');
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  const movimentos = Object.entries(db).map(([id, dados]) => ({ id, ...dados }));
  const filtros = ['Todos', 'Mãos', 'Pés', 'Corpo', 'Boulder', 'Força'];

  const movimentosFiltrados = movimentos.filter((mov) => {
    const termoBusca = busca.toLowerCase();
    const titulo = mov.names.pt.toLowerCase();
    const tags = mov.tags.map((t: string) => t.toLowerCase());
    return titulo.includes(termoBusca) && (filtroAtivo === 'Todos' || tags.includes(filtroAtivo.toLowerCase()));
  });

  return (
    <div className="min-h-screen pb-20 pt-10">
      
      {/* Header Compacto e Moderno */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          ALMANAQUE <span className="text-[#00cdcd]">TÉCNICO</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Domine a técnica. {movimentos.length} movimentos catalogados com biomecânica detalhada.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Barra de Busca Estilizada */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Buscar movimento (ex: Crimp...)"
              className="w-full p-4 pl-12 rounded-xl bg-[#1c2e40] border border-white/10 focus:border-[#00cdcd] focus:ring-1 focus:ring-[#00cdcd] outline-none text-white transition placeholder-gray-500"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <span className="absolute left-4 top-4 text-gray-500">🔍</span>
          </div>

          {/* Filtros em Pílulas */}
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {filtros.map((tag) => (
              <button
                key={tag}
                onClick={() => setFiltroAtivo(tag)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition whitespace-nowrap ${
                  filtroAtivo === tag 
                    ? 'bg-[#00cdcd] text-[#142332]' 
                    : 'bg-[#1c2e40] text-gray-400 hover:bg-[#253b50] hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Dark Moderno */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movimentosFiltrados.map((item) => (
            <Link key={item.id} href={`/almanaque/${item.id}`} className="group block h-full">
              <div className="bg-[#1c2e40] rounded-2xl p-6 border border-white/5 hover:border-[#00cdcd] transition duration-300 h-full flex flex-col relative overflow-hidden">
                {/* Efeito Hover Glow */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#00cdcd] opacity-0 group-hover:opacity-10 blur-2xl transition rounded-full -mr-10 -mt-10"></div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.slice(0, 2).map((tag: string) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-[#00cdcd] bg-[#00cdcd]/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-[#00cdcd] transition">
                    {item.names.pt}
                  </h2>
                </div>

                <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed mb-6 flex-grow">
                  {item.intro.pt}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                   <span className="text-xs font-bold text-gray-500 group-hover:text-white transition">Ver detalhes</span>
                   <span className="text-[#00cdcd] transform group-hover:translate-x-1 transition">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}