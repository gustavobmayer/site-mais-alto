import Link from 'next/link';

// ==========================================
// 🗂️ DICIONÁRIO FLEXÍVEL DE IMAGENS E LINKS
// ==========================================
const ASSETS = {
  logo: "/logo.png",
  
  heroBg: "/Frente%202026-3_2.jpg",
  
  sobreParede: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1000&auto=format&fit=crop",
  sobreEscalador: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1000&auto=format&fit=crop",
  
  linkTecnofit: "https://app.tecnofit.com.br/ng/customer-register/MjA1MzU3",
  linkInstagram: "https://www.instagram.com/maisaltoescalada/",
  linkMaps: "https://maps.google.com/maps?q=Mais+Alto+Escalada,+R.+Prof.+Joaquim+de+Matos+Barreto,+1310+-+Aterro+do+Igap%C3%B3,+Londrina&t=&z=16&ie=UTF8&iwloc=&output=embed",
  
  linkWhatsApp: "https://wa.me/5543999999999?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20pr%C3%A9-venda%20da%20Mais%20Alto%20Escalada!"
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#142332] text-[#ebebeb] font-sans selection:bg-[#00cdcd] selection:text-[#142332] relative">
      
      {/* EFEITO DINÂMICO DE CÂMERA (KEN BURNS) PARA A FACHADA */}
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.08) translate(-1%, 1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .animate-ken-burns {
          animation: kenBurns 25s ease-in-out infinite;
        }
      `}</style>

      {/* BOTOES FLUTUANTES (WHATSAPP E INSTAGRAM) */}
      <div className="fixed bottom-6 right-4 md:right-8 z-[9999] flex flex-col gap-4">
        
        {/* Instagram Flutuante */}
        <a 
          href={ASSETS.linkInstagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-110"
          aria-label="Acessar Instagram"
        >
          <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        </a>

        {/* WhatsApp Flutuante */}
        <a 
          href={ASSETS.linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white bg-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110 relative"
          aria-label="Falar no WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"></span>
          <svg className="w-8 h-8 md:w-9 md:h-9 ml-0.5 mt-0.5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 0C5.385 0 .003 5.38.003 12.023c0 2.12.553 4.195 1.603 6.015L.031 23.993l6.09-1.597a11.968 11.968 0 005.91 1.564h.005c6.643 0 12.025-5.383 12.025-12.028C24.061 5.384 18.677 0 12.031 0zm-1.127 19.344a10.024 10.024 0 01-5.111-1.39l-.367-.218-3.799.996 1.015-3.705-.239-.38a10.007 10.007 0 01-1.534-5.343c0-5.534 4.506-10.038 10.04-10.038 2.68 0 5.201 1.045 7.095 2.94 1.895 1.894 2.938 4.414 2.938 7.091 0 5.532-4.505 10.038-10.038 10.038v-.001zm5.16-7.054c-.283-.142-1.673-.826-1.932-.92-.259-.095-.448-.142-.638.142-.19.284-.73.92-.895 1.109-.165.189-.33.213-.614.071-.283-.142-1.194-.44-2.274-1.433-.839-.773-1.405-1.727-1.57-2.011-.165-.284-.018-.438.124-.58.128-.128.283-.332.425-.497.142-.165.189-.284.283-.473.095-.19.048-.356-.024-.497-.071-.142-.638-1.54-.874-2.109-.229-.554-.462-.479-.638-.488-.165-.008-.355-.01-.544-.01-.19 0-.496.071-.756.356-.26.284-.992.97-.992 2.365 0 1.396 1.016 2.744 1.157 2.933.142.19 2.001 3.053 4.848 4.282.678.293 1.206.467 1.618.598.679.215 1.298.184 1.785.111.547-.08 1.673-.684 1.91-1.345.237-.661.237-1.226.165-1.345-.071-.12-.26-.19-.544-.332z"/>
          </svg>
        </a>
      </div>

      {/* 1. Navbar Glassmorphism */}
      <header className="fixed w-full top-0 z-50 bg-[#142332]/90 backdrop-blur-xl border-b border-[#6e8296]/20 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-32 flex items-center justify-between">
          
          {/* Otimização de Imagem: Escala removida, largura ajustada nativamente para melhor resolução */}
          <Link href="/" className="block w-[200px] md:w-[400px] relative group flex items-center" aria-label="Página Inicial Mais Alto">
            <img 
              src={ASSETS.logo} 
              alt="Mais Alto Escalada" 
              className="w-full h-auto object-contain object-left brightness-0 invert opacity-90 transition-all duration-300 group-hover:opacity-100" 
            />
          </Link>
          
          <div className="flex items-center gap-4 md:gap-6">
            <a 
              href={ASSETS.linkInstagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-3 text-[#6e8296] hover:text-[#00cdcd] transition-all duration-300 group"
              aria-label="Instagram Mais Alto Escalada"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-2xl tracking-wide hidden sm:block">@maisaltoescalada</span>
            </a>

            <a 
              href={ASSETS.linkTecnofit}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center bg-transparent border-2 border-[#00cdcd] text-[#00cdcd] hover:bg-[#00cdcd] hover:text-[#142332] px-10 py-3 rounded-full font-bold transition-all duration-300 text-2xl tracking-wide"
            >
              Área do Aluno
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION CENTRALIZADA */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-[#142332] overflow-hidden pt-20 text-center">
        
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={ASSETS.heroBg} 
            alt="Fachada Mais Alto Escalada" 
            className="w-full h-full object-cover object-center animate-ken-burns opacity-70"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#142332]/90 via-[#142332]/50 md:via-transparent to-[#142332] z-[1]"></div>
        <div className="absolute inset-0 bg-[#142332]/50 md:bg-[#142332]/30 z-[1] backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center mt-12 md:mt-24">
          
          <div className="inline-flex items-center justify-center gap-3 px-6 py-2 md:px-8 md:py-3 rounded-full bg-[#1c2e40]/90 backdrop-blur-md text-[#00cdcd] text-sm md:text-xl font-semibold tracking-widest uppercase mb-8 md:mb-12 border border-[#00cdcd]/30 shadow-lg mx-auto">
            <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#00cdcd] animate-ping"></span>
            Inauguração em Breve
          </div>
          
          <h1 className="font-alumni text-[14vw] sm:text-[54px] md:text-[78px] lg:text-[82px] font-bold text-[#ebebeb] tracking-tight mb-[25vh] md:mb-16 leading-[0.85] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] mx-auto w-full px-4">
            GINÁSIO DE ESCALADA<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cdcd] to-[#ebebeb]">INDOOR</span>
          </h1>
          
          <a 
            href={ASSETS.linkTecnofit}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#00cdcd] hover:bg-[#ebebeb] text-[#142332] font-extrabold text-3xl md:text-5xl lg:text-6xl py-6 px-8 md:py-10 md:px-24 rounded-full transition-all duration-300 transform hover:-translate-y-2 shadow-[0_0_40px_rgba(0,205,205,0.6)] hover:shadow-[0_0_60px_rgba(235,235,235,0.8)] mx-auto w-[90%] sm:w-auto text-center"
          >
            Garantir Plano Fundador
          </a>
        </div>
      </section>

      {/* 3. A Ciência do Movimento */}
      <section className="py-24 md:py-40 bg-[#142332] relative border-t border-[#6e8296]/10 text-center z-10">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <h2 className="font-alumni text-[50px] sm:text-[62px] md:text-[100px] lg:text-[133px] font-bold text-[#ebebeb] mb-6 md:mb-10 leading-none">
            EVOLUÇÃO EM<br/>CADA <span className="text-[#00cdcd]">MOVIMENTO</span>
          </h2>
          <div className="w-24 md:w-40 h-1.5 md:h-2 bg-[#00cdcd] mb-10 md:mb-14 rounded-full"></div>
          
          <p className="text-[#ebebeb] text-[30px] sm:text-[36px] md:text-[54px] lg:text-[72px] font-normal leading-tight mb-8 md:mb-10 max-w-6xl">
            A Mais Alto Escalada nasce com um propósito claro:<br className="hidden md:block"/>
            <span className="block mt-2">Proporcionar Experiência Acessível, com Segurança, Qualidade e Diversão.</span>
          </p>
          
          <p className="text-[#6e8296] text-[27px] sm:text-[30px] md:text-[45px] lg:text-[54px] font-light leading-relaxed mb-16 md:mb-24 max-w-6xl">
            Para o iniciante dando os primeiros passos ao atleta ajustando a técnica, com equipamentos de padrão internacional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-7xl">
            <div className="w-full h-[300px] md:h-[600px] relative group overflow-hidden rounded-3xl border border-[#6e8296]/20 bg-[#1c2e40]">
              <div className="absolute inset-0 bg-[#00cdcd] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img 
                src={ASSETS.sobreParede}
                alt="Agarras e Texturas" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
            
            <div className="w-full h-[300px] md:h-[600px] relative group overflow-hidden rounded-3xl hidden md:block border border-[#6e8296]/20 bg-[#1c2e40]">
              <div className="absolute inset-0 bg-[#00cdcd] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img 
                src={ASSETS.sobreEscalador}
                alt="Escalador Indoor" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Localização */}
      <section className="py-24 md:py-40 bg-[#1c2e40] relative border-t border-[#6e8296]/10 text-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <h2 className="font-alumni text-[50px] sm:text-[62px] md:text-[100px] lg:text-[133px] font-bold text-[#ebebeb] mb-6 md:mb-10 leading-none">
            ONDE <span className="text-[#00cdcd]">ESTAMOS</span>
          </h2>
          <div className="w-24 md:w-40 h-1.5 md:h-2 bg-[#00cdcd] mb-10 md:mb-14 rounded-full"></div>
          
          <p className="text-[#ebebeb] text-xl sm:text-2xl md:text-4xl font-normal leading-relaxed mb-10 md:mb-16 w-full max-w-5xl px-4">
            R. Prof. Joaquim de Matos Barreto, 1310<br/>
            <span className="text-[#6e8296] font-light mt-2 md:mt-4 block text-lg md:text-3xl">Aterro do Igapó • Londrina - PR • 86060-010</span>
          </p>

          <div className="w-full h-[400px] md:h-[600px] bg-[#142332] rounded-3xl border border-[#6e8296]/30 overflow-hidden relative shadow-2xl z-20">
            <iframe 
              src={ASSETS.linkMaps}
              width="100%" 
              height="100%" 
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] grayscale-[20%] opacity-90 transition-opacity duration-300 hover:opacity-100" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 6. CTA Final */}
      <section className="py-32 md:py-48 bg-gradient-to-b from-[#142332] to-[#1c2e40] relative overflow-hidden text-center border-t border-[#00cdcd]/10 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-[#00cdcd]/10 blur-[100px] md:blur-[200px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
          
          <h2 className="font-alumni text-[9vw] sm:text-[50px] md:text-[45px] lg:text-[39px] font-bold text-[#ebebeb] mb-8 md:mb-12 leading-none">
            PRONTO PARA A ASCENSÃO?
          </h2>
          
          <p className="text-[#ebebeb] text-xl sm:text-2xl md:text-4xl font-light mb-12 md:mb-20 max-w-4xl leading-relaxed">
            As vagas para Membros Fundadores são estritamente limitadas. Garanta seu acesso ao nosso sistema antes da inauguração.
          </p>
          <a 
            href={ASSETS.linkTecnofit}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#00cdcd] text-[#142332] font-extrabold text-2xl md:text-4xl lg:text-5xl py-6 px-10 md:py-10 md:px-24 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#ebebeb] shadow-[0_0_40px_rgba(0,205,205,0.4)] md:shadow-[0_0_60px_rgba(0,205,205,0.5)] w-[90%] sm:w-auto text-center"
          >
            Acessar Pré-Venda
          </a>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-[#1c2e40] text-[#6e8296] py-16 md:py-24 border-t border-[#6e8296]/10 text-center flex flex-col items-center pb-24 md:pb-40 z-10 relative">
        
        {/* Otimização de Imagem: Escala removida para resolver problema de resolução. Box ajustada nativamente. */}
        <Link href="/" className="block w-[250px] md:w-[450px] relative mb-10 md:mb-14 group" aria-label="Página Inicial Mais Alto">
          <img 
            src={ASSETS.logo}
            alt="Mais Alto Escalada" 
            className="w-full h-auto object-contain object-center brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-500" 
          />
        </Link>
        
        <p className="font-light text-lg md:text-2xl tracking-widest uppercase mb-8 md:mb-12">Londrina • PR</p>
        
        <div className="text-sm md:text-lg font-light opacity-70">
          &copy; {new Date().getFullYear()} Mais Alto Escalada. Todos os direitos reservados.
        </div>
      </footer>
      
    </main>
  );
}