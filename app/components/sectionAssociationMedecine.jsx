import Image from "next/image"




export default function SectionAssociationPlanning() {
  return (
    <section id="medecine" className={`mt-10 flex items-center bg-[#7A5C8E]  rounded-lg shadow-lg ml-10 mr-10 mb-10 fontArial`}>
      <div className="mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center ">

        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl font-bold mb-6 mt-4 flex justify-center ">
            Médecine Scolaire
          </h1>

          <p className="text-white leading-relaxed mb-9 text-lg">
            Les Centres Médico Scolaires organisent les visites médicales des élèves d'une zone géographique donnée (bassin d'éducation) 
            regroupant ainsi plusieurs établissements du premier et second degré publics.
          </p>

          <a href="https://www.ac-orleans-tours.fr/sante-social-securite-dans-le-cher-121859" className="w-fit bg-gray-400 py-1 px-2 rounded-lg shadow-lg text-white hover:bg-gray-500 mb-6 align-center mx-auto cursor-pointer">
            En savoir plus
          </a>
        
        </div>

        <div className="flex justify-center mt-4 mb-4">
          <Image
            src="/images/logo-medecinenew.png"
            alt="Médecine Scolaire"
            width={350}
            height={150}
            className="rounded-lg shadow-lg"
          />
        </div>
        
      </div>
    </section>
  )
}

