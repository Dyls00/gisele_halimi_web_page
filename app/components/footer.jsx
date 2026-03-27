"use client";

import { Typography } from "@material-tailwind/react";
<<<<<<< HEAD
<<<<<<< HEAD
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

=======
import Image from "next/image";
>>>>>>> 5085910 (plusieurs tickets)
=======
import Image from "next/image";
>>>>>>> 5085910cc28b07ae3a2402773457110b2cfb75b7

const SITEMAP = [
  {
    title: "/ Section gauche",
    info: [
      { name: "CIDFF 18", link: "#cidff" },
      { name: "Planning familial du Cher", link: "#planning" },
    ],
  },
  {
    title: "/ Section droite",
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



export default function Footer() {
  return (
    <footer className={`relative w-full bg-[#7A5C8E] fontArial`}>
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, info }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {info.map(({ name, link }, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="white"
                    className="font-normal"
                  >
                    <a
                      href={link}
                      target="_blank"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {name}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-full ml-20">
            <Image
                src="/images/bourgesVN.png"
                alt="planning familial 18"
                width={130}
                height={100}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            &copy; {currentYear} Pôle associatif Gisèle Halimi. Tous droits
            réservés.
          </Typography>
<<<<<<< HEAD
          <div className="flex gap-4 mr-5">
              <Typography
                as="a"
                href="https://www.facebook.com/mairie.bourges"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <FaFacebook className="text-white" size={24} />
              </Typography>
              <Typography
                as="a"
                href="https://www.instagram.com/villedebourges/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <FaInstagram className="text-white" size={24} />
              </Typography>
              <Typography
                as="a"
                href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://x.com/VilleDeBourges&ved=2ahUKEwi4_8X1gZ2TAxXkVqQEHdF-EWUQFnoECCAQAQ&usg=AOvVaw2sJlx9VdmY0BoeET5fb2uX"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <FaTwitter className="text-white" size={24} />
              </Typography>
            </div>
=======
          <div className="flex gap-4 text-white sm:justify-center">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            ></Typography>
          </div>
>>>>>>> 5085910 (plusieurs tickets)
        </div>
      </div>
    </footer>
  );
}
