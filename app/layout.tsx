import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mais Alto Escalada | Londrina",
  description: "A nova referência em escalada indoor e alta performance no sul do Brasil. Garanta seu Plano Fundador.",
  keywords: ["escalada indoor", "boulder", "Londrina", "Mais Alto Escalada", "treinamento"],
  // 👇 Aqui nós garantimos que todos os navegadores e celulares leiam o seu ícone
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased bg-[#142332] text-[#ebebeb] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}