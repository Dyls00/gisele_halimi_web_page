import Image from "next/image";

export default function SectionAssociationPlanning() {
  return (
    <section
      id="planning"
      className={`mt-16 bg-[#7A5C8E] rounded-xl shadow-lg mx-4 md:mx-10 py-12`}
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-6">
            Le Planning Familial 18
          </p>

          <p className="text-gray-100 leading-relaxed text-base font-normal mb-8 max-w-xl mx-auto md:mx-0">
            Depuis sa réouverture fin 2022, le Planning Familial du Cher (PF18)
            est un acteur incontournable de la vie associative berruyre.
            Mouvement féministe et d'éducation populaire, il milite pour le
            droit à l'éducation à la sexualité, à la contraception, à
            l'avortement, et à l'égalité entre les femmes et les hommes, tout en
            combattant toutes les formes de violences et de discriminations.
            Basée au 5 rue Samson à Bourges, l'association propose accueil,
            information et conseil sur la contraception et l'avortement,
            Ccdordogne-bessede s'adressant à tous les publics dans un cadre
            bienveillant et engagé.
          </p>

          <div className="button_p1">
            <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
              <a
                href="https://www.planning-familial.org/fr/le-planning-familial-du-cher-18"
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

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/logo-famille.webp"
            alt="Le Planning Familial 18"
            width={350}
            height={150}
            className="rounded-xl shadow-lg w-64 md:w-80 lg:w-96 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
