import Image from "next/image";

export default function SectionAssociationCidff() {
  return (
    <section
      id="cidff"
      className={`mt-10 bg-[#7A5C8E] rounded-lg shadow-lg mx-4 md:mx-10`}
    >
      <div className="mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/logo-cidffnew.jpg"
            alt="cidff"
            width={350}
            height={150}
            className="rounded-lg shadow-lg w-64 md:w-80 lg:w-96 h-auto"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            CIDFF
          </p>

          <p className="text-white leading-relaxed text-base md:text-lg mb-6">
            Le Centre d'Information sur les Droits des Femmes et des Familles (CIDFF) de Bourges est une association loi 1901 exerçant une mission d'intérêt général confiée par l'État. Son objectif est double : favoriser l'autonomie sociale, professionnelle et personnelle des femmes, et promouvoir l'égalité entre les femmes et les hommes.
Basée à Bourges, l'association propose gratuitement et en toute confidentialité des consultations juridiques, un accompagnement vers l'emploi et un soutien aux victimes de violences. Elle s'inscrit dans un réseau national de près d'une centaine de CIDFF présents sur tout le territoire français.
          </p>
          <div className="button-borders">
            <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
              <a
                href="https://cher.cidff.info/"
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
