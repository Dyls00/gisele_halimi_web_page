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
            Les Centres Médico-Scolaires (CMS) sont des structures de l'Éducation Nationale dédiées à la santé et au bien-être des enfants et adolescents scolarisés. Ils organisent les visites médicales des élèves regroupés par bassin d'éducation, couvrant ainsi plusieurs établissements du premier et second degré publics.
Au-delà des bilans de santé obligatoires, les équipes assurent le suivi médical de tous les élèves, mènent des actions d'éducation à la santé et se tiennent à disposition des familles pour toutes questions relatives à la santé. Elles jouent également un rôle essentiel de prévention, de dépistage et d'orientation vers les structures adaptées.
          </p>

          <a target="_blank" rel="noopener noreferrer" href="https://www.ac-orleans-tours.fr/sante-social-securite-dans-le-cher-121859" className="w-fit bg-[#FFFFFF] py-2 px-3 rounded-lg shadow-lg text-[#1E1E1E] hover:bg-gray-500 mb-6 align-center mx-auto cursor-pointer">
            Accéder à l'association
          </a>
        
        </div>

        <div className="flex justify-center mt-4 mb-4">
          <Image
            src="/images/logo-medecinenew.webp"
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

