import Image from "next/image"




export default function SectionAssociationPlanning() {
  return (
    <section id="planning" className={`mt-10 flex items-center bg-[#7A5C8E] fontArial rounded-lg shadow-lg ml-10 mr-10`}>
      <div className="mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center ">

        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl font-bold mb-6 mt-4 flex justify-center ">
            Le Planning Familial 18
          </h1>

          <p className="text-white leading-relaxed mb-9 text-lg">
            Depuis sa réouverture fin 2022, le Planning Familial du Cher (PF18) est un acteur incontournable de la vie associative berruyre. Mouvement féministe et d'éducation populaire, il milite pour le droit à l'éducation à la sexualité, à la contraception, à l'avortement, et à l'égalité entre les femmes et les hommes, tout en combattant toutes les formes de violences et de discriminations.
Basée au 5 rue Samson à Bourges, l'association propose accueil, information et conseil sur la contraception et l'avortement, Ccdordogne-bessede s'adressant à tous les publics dans un cadre bienveillant et engagé.
          </p>

          <a target="_blank" rel="noopener noreferrer" href="https://www.planning-familial.org/fr/le-planning-familial-du-cher-18" className="w-fit bg-[#FFFFFF] py-2 px-3 rounded-lg shadow-lg text-[#1E1E1E] hover:bg-gray-500 mb-6 align-center mx-auto cursor-pointer">
            Accéder à l'association
          </a>
        
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/logo-famille.webp"
            alt="planning familial 18"
            width={350}
            height={150}
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}

