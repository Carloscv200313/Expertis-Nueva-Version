import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOEXPERTIS – Master Servicer & Collections",
  description: "Somos una Moderna y Sólida Organización Líder a lo largo de 7 Años. Expértis - Master Servicer & Collections, empresa lider en la adquisición y gestión de portafolios de NPL’s (Nonperforming Loans1).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
