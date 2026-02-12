"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@headlessui/react";
import { Bars3Icon,  XMarkIcon } from "@heroicons/react/24/outline";
import { navData } from "./navData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  // Handle in-page anchor clicks to apply a smooth scroll with an offset
  function handleAnchorClick(e) {
    try {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (target) {
          const nav = document.querySelector("nav");
          const navHeight = nav ? nav.offsetHeight : 64; // fallback
          const extraGap = 12; // px of extra margin above target
          const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - extraGap;
          window.scrollTo({ top, behavior: "smooth" });
          // update URL without jumping
          history.replaceState(null, "", href);
        }
      }
    } catch (err) {
      // fail quietly and let default behavior occur
    }
  }
  return (
    <Disclosure
      as="nav"
      className="fixed bg-[#7A5C8E] fontArial after:pointer-events-none w-full after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Logo Bourges"
                src="/images/bourges.png"
                className="h-9 w-30"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 ">
                {navData.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    onClick={handleAnchorClick}
                    className={classNames(
                      item.current
                        ? "bg-gray-950/50 text-white"
                        : "text-white hover:bg-white/5 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <a href="#accueil" onClick={handleAnchorClick} className="cursor-pointer py-1.5 font-medium text-white">
                Pôle associatif et Médico-scolaire Gisèle Halimi
              </a>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navData.map((item) => (
            <DisclosureButton
              key={item.title}
              as="a"
              href={item.href}
              onClick={handleAnchorClick}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-950/50 text-white"
                  : "text-white hover:bg-white/5 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium",
              )}
            >
              {item.title}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
