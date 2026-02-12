"use client";
import { Itim } from "next/font/google";
import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "/ PAGES",
    info: [
      { name: "CIDFF 18", link: "#cidff" },
      { name: "Planning familial du Cher", link: "#planning" },
    ],
  },
  {
    title: "/ PAGES",
    info: [
      { name: "Médecine scolaire", link: "#médecine" },
      { name: "LGBTQIA +", link: "#lgbtqia" },
    ],
  },
  {
    title: "/ LÉGAL ",
    info: [
      { name: "Mentions légales", link: "/documents/mentions_legales.pdf" },
      { name: "Conditions générales", link: "/documents/CGU.pdf" },
    ],
  },
];

const currentYear = new Date().getFullYear();

const fontItim = Itim({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer() {
  return (
    <footer className={`relative w-full ${fontItim.className}`}>
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, info }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {info.map(({ name, link }, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a
                      href={link}
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {name}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-bold uppercase opacity-50"
            >
              / INFORMATIONS SUR LE POLE ASSOCIATIF
            </Typography>
            <ul className="space-y-1">
              <Typography as="li" color="blue-gray" className="font-normal">
                Mairie de Bourges
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                Site Internet : www.ville-bourges.fr
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                Téléphone : 02 48 57 80 00
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                Adresse email : mairie@ville-bourges.fr
              </Typography>
            </ul>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} Pôle associatif Gisèle Halimi. Tous droits
            réservés.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img
                src="/images/bourges.png"
                alt="Logo Bourges"
                className="h-14 w-auto mb-5"
              />
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            ></Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
