import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Aromar — Velas aromáticas",
  description: "Velas aromáticas para transformar pequenos momentos em rituais. Conheça a coleção de velas aromáticas Aromar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
