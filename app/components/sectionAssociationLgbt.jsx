import Image from "next/image";

export default function SectionLgbt() {
  return (
    <section
      id="lgbtqia"
      className={`mt-10 bg-[#7A5C8E] rounded-lg shadow-lg mx-4 md:mx-10`}
    >
      <div className="mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/logo-lgbtnew.webp"
            alt="LGBT"
            width={350}
            height={150}
            className="rounded-lg shadow-lg w-64 md:w-80 lg:w-96 h-auto"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Centre LGBTQIA+ Berry
          </p>

          <p className="text-white leading-relaxed text-base md:text-lg mb-6">
            Fondé durant l'été 2021, le Centre LGBTQIA+ Berry est une
            association à but non lucratif basée à Bourges. Sa mission est de
            lutter contre toutes les formes d'exclusion, de discrimination, de
            sexisme et d'injustice fondées sur l'identité de genre, l'expression
            de genre ou l'orientation sexuelle. L'association défend et promeut
            l'égalité des droits des personnes lesbiennes, gays, bisexuelles,
            transgenres, intersexes, queers et asexuelles, et crée un lieu
            d'accueil et d'écoute pour toutes les personnes LGBTQIA+ ou en
            questionnement. Des permanences sont assurées chaque mercredi de
            18h30 à 20h30, au 2 Square d'Alice à Bourges.
          </p>
          <div className="button-borders">
            <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
              <a
                href="https://centrelgbtqiaberry.fr"
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
    </section>
  );
}
