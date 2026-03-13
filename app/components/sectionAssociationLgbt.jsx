import Image from "next/image"

export default function SectionAssociationLgbt() {
  return (
    <section id="lgbtqia" className={`mt-10 flex items-center bg-[#7A5C8E] rounded-lg shadow-lg ml-10 mr-10 fontArial`}>
      <div className="mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center ">

        <div className="flex justify-center mt-4 mb-4">
          <Image
            src="/images/logo-lgbtnew.webp"
            alt="Centre LGBTQIA+ Berry"
            width={350}
            height={150}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl font-bold mb-6 mt-4 flex justify-center ">
            Centre LGBTQIA+ Berry
          </h1>

          <p className="text-white leading-relaxed mb-9 text-lg">
            Fondé durant l'été 2021, le Centre LGBTQIA+ Berry est une association à but non lucratif basée à Bourges. Sa mission est de lutter contre toutes les formes d'exclusion, de discrimination, de sexisme et d'injustice fondées sur l'identité de genre, l'expression de genre ou l'orientation sexuelle.
L'association défend et promeut l'égalité des droits des personnes lesbiennes, gays, bisexuelles, transgenres, intersexes, queers et asexuelles, et crée un lieu d'accueil et d'écoute pour toutes les personnes LGBTQIA+ ou en questionnement. Des permanences sont assurées chaque mercredi de 18h30 à 20h30, au 2 Square d'Alice à Bourges. 
          </p>

          <a target="_blank" rel="noopener noreferrer" href="https://centrelgbtqiaberry.fr" className="w-fit bg-[#FFFFFF] py-2 px-3 rounded-lg shadow-lg text-[#1E1E1E] hover:bg-gray-500 mb-6 align-center mx-auto cursor-pointer">
            Accéder à l'association
          </a>
        
        </div>
      </div>
    </section>
  )
}

