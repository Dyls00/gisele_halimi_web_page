import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pôle associatif et centre médico-scolaire Gisèle Halimi",
  description:
    "Le Pôle associatif et centre médico-scolaire Gisèle Halimi est un espace dédié à l’accompagnement social, éducatif et sanitaire. Il regroupe un centre médico-scolaire ainsi que plusieurs structures engagées, dont une association LGBTQIA+, le Planning Familial du Cher (18) et le CIDFF. Ce lieu favorise l’écoute, la prévention, l’orientation et le soutien des publics, en proposant un accompagnement global autour de la santé, de l’égalité, des droits et du bien-être, dans un cadre inclusif et accessible à tous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
