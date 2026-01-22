import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Agenda e Horários | Mais Alto Escalada",
  description: "Horários de funcionamento, aulas infantis, treinos de equipe e eventos.",
};
// --------------------------

export default function AgendaPage() {
  // Dados baseados na tabela da página 5 do PDF
  const horarios = [
    {
      hora: "07:00 - 09:00",
      atividade: "Morning Session",
      desc: "Escalada Livre & Café da Manhã",
      tipo: "livre"
    },
    {
      hora: "09:00 - 12:00",
      atividade: "Uso Exclusivo / Manutenção",
      desc: "Grupos Escolares e Route Setting",
      tipo: "fechado"
    },
    {
      hora: "12:00 - 14:00",
      atividade: "Almoço Vertical",
      desc: "Escalada Livre (Horário de Pico)",
      tipo: "livre"
    },
    {
      hora: "14:00 - 18:00",
      atividade: "Tarde de Treinos",
      desc: "Aulas Infantis (Spider Kids) & Terapia",
      tipo: "aula"
    },
    {
      hora: "18:00 - 22:00",
      atividade: "Prime Time",
      desc: "Escalada Livre, Aulas Adulto & Treino de Equipe",
      tipo: "pico"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* Header */}
      <header className="bg-gray-900 text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          AGENDA SEMANAL
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Confira nossos horários de funcionamento, aulas e eventos especiais.
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-4 -mt-10">
        
        {/* Aviso de Funcionamento */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 flex items-center justify-between border-l-4 border-cyan-500">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Horário de Funcionamento</h3>
            <p className="text-gray-600">Segunda à Sexta: 07h às 22h • Sábados: 09h às 20h</p>
          </div>
          <div className="hidden md:block text-right">
            <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold uppercase">
              Aberto Agora
            </span>
          </div>
        </div>

        {/* Grade de Horários (Timeline Vertical) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Grade Diária (Seg - Sex)</h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            {horarios.map((item, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition flex flex-col md:flex-row gap-4 items-start md:items-center">
                
                {/* Coluna Hora */}
                <div className="w-full md:w-48 shrink-0">
                  <span className="text-2xl font-light text-gray-400">{item.hora.split('-')[0]}</span>
                  <span className="text-sm text-gray-400 ml-2">até {item.hora.split('-')[1]}</span>
                </div>

                {/* Coluna Detalhe */}
                <div className="grow">
                  <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    {item.atividade}
                    {item.tipo === 'pico' && <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">🔥 Pico</span>}
                    {item.tipo === 'aula' && <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">🎓 Aulas</span>}
                  </h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>

                {/* Botão de Ação (Contextual) */}
                <div className="shrink-0">
                   {item.tipo === 'livre' || item.tipo === 'pico' ? (
                     <button className="text-sm font-semibold text-cyan-600 border border-cyan-600 px-4 py-2 rounded hover:bg-cyan-50 transition">
                       Check-in
                     </button>
                   ) : (
                     <span className="text-sm text-gray-400 italic px-4 py-2">Consulte disponibilidade</span>
                   )}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Seção Eventos (Baseado no PDF Pág 4) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Próximos Eventos</h3>
                <ul className="space-y-4">
                    <li className="border-b border-gray-700 pb-2">
                        <div className="text-sm text-gray-400 mb-1">24 de Março</div>
                        <div className="font-bold">🏆 Campeonato Interno de Boulder</div>
                    </li>
                    <li className="border-b border-gray-700 pb-2">
                        <div className="text-sm text-gray-400 mb-1">Todo último Sábado</div>
                        <div className="font-bold">🎉 Festival & Pizza</div>
                    </li>
                </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-4">Agendamento de Grupos</h3>
                <p className="mb-6 opacity-90">
                    Traga sua escola ou empresa para uma vivência vertical. Condições especiais para grupos acima de 10 pessoas.
                </p>
                <button className="bg-white text-blue-800 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg">
                    Entrar em Contato
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}
