"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AccueilComponent() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Pôle Associatif Gisèle <span class="text-[#7A5C8E]">Halimi</span>',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section id="accueil">
      <div className="bg-black">
        <div className="px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30   sm:w-288.75"
            ></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-30">
            <div className="text-center">
              <h1 className="text-5xl text-white font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl h-[120px] sm:h-[160px] flex items-center justify-center">
                <span ref={el}></span>
              </h1>
              <p className="mt-8 text-lg font-normal text-pretty text-gray-500 sm:text-xl/8">
                Situé dans les quartiers prioritaires de la Chancellerie et des
                Gibjoncs, le pôle associatif est composé du Hameau de la
                Fraternité, des locaux associatifs des Merlattes, des salles
                associatives des Pressavois.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <div className="button-borders">
            <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#5E4C74] backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#5E4C74]/50 border border-white/20">
              <a
                href="https://www.facebook.com/mairie.bourges/posts/-inauguration-du-p%C3%B4le-de-pr%C3%A9vention-associatif-et-m%C3%A9dico-scolaire-gis%C3%A8le-halimi-/1372931574870687/"
                className="text-white text-sm md:text-base break-all"
                target="_blank"
              >
                En savoir plus
              </a>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </button>
          </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
