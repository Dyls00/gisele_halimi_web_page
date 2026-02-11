"use client";
import { Itim } from "next/font/google";
import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "/ PAGES",
    links: ["CIDFF 18", "Planning familial du Cher"],
  },
  {
    title: "/ PAGES",
    links: ["Médecine scolaire", "LGBTQIA +"],
  },
  {
    title: "/ LÉGAL ",
    links: ["BloMentions légalesg", "Conditions générales"],
  },
  {
    title: "/ INFORMATIONS SUR LE POLE ASSOCIATIF",
    links: [
      "Mairie de Bourges",
      "Site Internet :	www.ville-bourges.fr",
      "Téléphone : 02 48 57 80 00",
      "Adresse email :	mairie@ville-bourges.fr",
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
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">
              Pôle associatif Gisèle Halimi.
            </a>
            Tous droits réservés.
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
