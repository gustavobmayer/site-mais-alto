import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Configuração da Fonte Alumni Sans
const alumni = localFont({
  src: [
    { path: './fonts/AlumniSans-Light.ttf', weight: '300', style: 'normal' },
    { path: './fonts/AlumniSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/AlumniSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/AlumniSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/AlumniSans-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-alumni', // Variável CSS importante
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mais Alto Escalada",
  description: "Centro de Treinamento e Escalada Esportiva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${alumni.variable}`}>
      <body className="bg-[#142332] text-[#ebebeb] font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}