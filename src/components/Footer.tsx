import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Marca e Sobre */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-gray-900">M</div>
                <span className="text-xl font-extrabold tracking-tight">MAIS <span className="text-cyan-500">ALTO</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A enciclopédia viva do escalador. Domine a técnica, supere seus limites e faça parte da nossa comunidade.
            </p>
            <div className="flex gap-4">
                {/* Social Icons (Placeholders) */}
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 cursor-pointer transition">📷</div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 cursor-pointer transition">🎥</div>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Explorar</h3>
            <ul className="space-y-4 text-sm text-gray-300">
                <li><Link href="/planos" className="hover:text-cyan-400 transition">Planos e Preços</Link></li>
                <li><Link href="/aulas" className="hover:text-cyan-400 transition">Aulas e Grupos</Link></li>
                <li><Link href="/agenda" className="hover:text-cyan-400 transition">Agenda Semanal</Link></li>
                <li><Link href="/almanaque" className="hover:text-cyan-400 transition">Almanaque Técnico</Link></li>
                <li><Link href="/servicos" className="hover:text-cyan-400 transition">Loja e Serviços</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Endereços (Baseado no PDF Pág 3) */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Localização</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-cyan-400 mb-1">Entrada Aterro</h4>
                    <p className="text-xs text-gray-500 mb-2">Acesso Principal / Estacionamento</p>
                    <p className="text-sm text-gray-300">
                        Rua Joaquim Barroso, 1310<br/>
                        Aterro Igapó
                    </p>
                </div>

                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-cyan-400 mb-1">Entrada Darwin</h4>
                    <p className="text-xs text-gray-500 mb-2">Acesso Treinamento / Pedestres</p>
                    <p className="text-sm text-gray-300">
                        Rua Robert Charles Darwin, 258<br/>
                        Londrina - PR
                    </p>
                </div>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2026 Mais Alto Escalada. Todos os direitos reservados.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white">Termos de Uso</a>
                <a href="#" className="hover:text-white">Política de Privacidade</a>
            </div>
        </div>
      </div>
    </footer>
  );
}