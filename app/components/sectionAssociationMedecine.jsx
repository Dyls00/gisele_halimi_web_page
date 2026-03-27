import Image from "next/image";

export default function SectionMedecine() {
  return (
    <section
      id="medecine"
      className={`mt-16 bg-[#7A5C8E] rounded-xl shadow-lg mx-4 md:mx-10 py-12`}
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
            Médecine Scolaire
          </p>

          <p className="text-gray-100 leading-relaxed text-base font-normal mb-8 max-w-xl mx-auto md:mx-0">
            Les Centres Médico-Scolaires (CMS) sont des structures de
            l'Éducation Nationale dédiées à la santé et au bien-être des enfants
            et adolescents scolarisés. Ils organisent les visites médicales des
            élèves regroupés par bassin d'éducation, couvrant ainsi plusieurs
            établissements du premier et second degré publics. Au-delà des
            bilans de santé obligatoires, les équipes assurent le suivi médical
            de tous les élèves, mènent des actions d'éducation à la santé et se
            tiennent à disposition des familles pour toutes questions relatives
            à la santé. Elles jouent également un rôle essentiel de prévention,
            de dépistage et d'orientation vers les structures adaptées.
          </p>

          <div className="button_p1">
            <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
              <a
                href="https://www.ac-orleans-tours.fr/sante-social-securite-dans-le-cher-121859"
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
            src="/images/logo-medecinenew.png"
            alt="Médecine Scolaire"
            width={350}
            height={150}
            className="rounded-xl shadow-lg w-64 md:w-80 lg:w-96 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
