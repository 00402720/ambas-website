import type { Metadata } from "next";
import { Lato, League_Spartan } from "next/font/google";
import "@/app/globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-league",
});

export const metadata: Metadata = {
  title: "AMBAS",
  description: "AMBAS Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${lato.variable} ${leagueSpartan.variable} bg-[#1E1E1E]`}>
        {children}
      </body>
    </html>
  );
}