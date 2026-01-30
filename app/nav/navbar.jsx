"use client";
import Image from "next/image";
import {
  Navbar as MTNavbar,
  MobileNav as MTMobileNav,
  Typography as MTTypography,
  Button as MTButton,
  IconButton as MTIconButton,
  Card as MTCard,
} from "@material-tailwind/react";
import React from "react";

const Navbar = MTNavbar;
const MobileNav = MTMobileNav;
const Typography = MTTypography;
const Button = MTButton;
const IconButton = MTIconButton;
const Card = MTCard;

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          CIDFF 18
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Planning Familial 18
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Centre LGBTQI+
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Médecine Scolaire
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[#7C7C7C]">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="mr-0.5  flex items-center">
          <img
            src="/images/bourges.png"
            alt="Logo Bourges"
            className="h-14 w-auto mb-5"
          />
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Pôle associatif Gisèle Halimi
          </Typography>
        </div>

        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <span>Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
