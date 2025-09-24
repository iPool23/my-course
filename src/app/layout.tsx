import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Componentes | iPool23",
  description: "Generado por Pool Anthony Deza Millones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
