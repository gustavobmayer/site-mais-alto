import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Almanaque Técnico | Mais Alto Escalada",
  description: "Enciclopédia completa de movimentos. Domine a técnica, biomecânica e fisiologia da escalada.",
};

export default function AlmanaqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}