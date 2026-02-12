import Image from "next/image"
import { Itim } from "next/font/google"


export default function SectionAssociationPlanning() {
  return (
    <section id="planning" className={`mt-10 flex items-center bg-[#7C7C7C] rounded-lg shadow-lg ml-10 mr-10`}>
      <div className="mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center ">

        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl font-bold mb-6 mt-4 flex justify-center ">
            Le Planning Familial 18
          </h1>

          <p className="text-white leading-relaxed mb-9 text-lg">
            Mouvement féministe et d'éducation populaire, le Planning familial milite pour le droit à l'éducation à la sexualité, à la contraception, 
            à l'avortement, à l'égalité des droits entre les femmes et les hommes et combat toutes formes de violences et de discriminations.


          </p>

          <a href="https://www.planning-familial.org/fr/le-planning-familial-du-cher-18" className="w-fit bg-gray-400 py-1 px-2 rounded-lg shadow-lg text-white hover:bg-gray-500 mb-6 align-center mx-auto cursor-pointer">
            En savoir plus
          </a>
        
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/logo-famille.jpg"
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

