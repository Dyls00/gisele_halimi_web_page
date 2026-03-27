import Image from "next/image";

export default function SectionMedecine() {
  return (
    <section id = "medecine"
      className={`mt-16 bg-[#7C7C7C] rounded-xl shadow-lg mx-4 md:mx-10 py-12`}
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div className="text-center md:text-left">
          <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Médecine Scolaire
          </p>

          <p className="text-gray-100 leading-relaxed text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0">
            Les Centres Médico Scolaires organisent les visites médicales des
            élèves d'une zone géographique donnée (bassin d'éducation),
            regroupant ainsi plusieurs établissements du premier et second degré
            publics.
          </p>

          <a
            href="https://www.ac-orleans-tours.fr/sante-social-securite-dans-le-cher-121859"
            className="inline-block bg-gray-600 hover:bg-gray-700 transition px-6 py-3 rounded-xl shadow-md text-white"
          >
            En savoir plus
          </a>
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