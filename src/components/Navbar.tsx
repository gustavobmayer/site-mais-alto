'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#142332]/90 backdrop-blur border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/img/mais_alto_logo_rgb-01.svg"
              alt="Mais Alto Escalada"
              className="h-8 w-auto"
            />
          </Link>

          {/* BOTÃO MENU */}
          <button
            onClick={() => setOpen(true)}
            className="text-white uppercase tracking-widest text-sm"
          >
            Menu
          </button>
        </div>
      </header>

      {/* OVERLAY MENU */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#142332]">
          <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
            <img
              src="/img/mais_alto_logo_rgb-01.svg"
              alt="Mais Alto Escalada"
              className="h-8 w-auto"
            />
            <button
              onClick={() => setOpen(false)}
              className="text-white uppercase tracking-widest text-sm"
            >
              Fechar
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center h-[calc(100%-4rem)] gap-8">
            <Link
              href="/planos"
              onClick={() => setOpen(false)}
              className="text-white text-2xl uppercase tracking-widest hover:text-[#00CDCD]"
            >
              Planos e Preços
            </Link>

            <Link
              href="/aulas"
              onClick={() => setOpen(false)}
              className="text-white text-2xl uppercase tracking-widest hover:text-[#00CDCD]"
            >
              Aulas e Grupos
            </Link>

            <Link
              href="/agenda"
              onClick={() => setOpen(false)}
              className="text-white text-2xl uppercase tracking-widest hover:text-[#00CDCD]"
            >
              Agenda Semanal
            </Link>

            <Link
              href="/almanaque"
              onClick={() => setOpen(false)}
              className="text-white text-2xl uppercase tracking-widest hover:text-[#00CDCD]"
            >
              Almanaque Técnico
            </Link>

            <Link
              href="/servicos"
              onClick={() => setOpen(false)}
              className="text-white text-2xl uppercase tracking-widest hover:text-[#00CDCD]"
            >
              Loja e Serviços
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
