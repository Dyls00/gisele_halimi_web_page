import Image from "next/image"




export default function SectionAssociationCidff() {
  return (
    <section id="cidff" className={`mt-10 flex items-center bg-[#7A5C8E] fontArial rounded-lg shadow-lg ml-10 mr-10`}>
      <div className="mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center ">

        <div className="flex justify-center ">
          <Image
            src="/images/logo-cidff.webp"
            alt="cidff"
            width={350}
            height={150}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl font-bold mb-6 mt-4 flex justify-center ">
            CIDFF 
          </h1>

          <p className="text-white leading-relaxed mb-9 text-lg">
            Le Centre d'Information sur les Droits des Femmes et des Familles (CIDFF) de Bourges est une association loi 1901 exerçant une mission d'intérêt général confiée par l'État. Son objectif est double : favoriser l'autonomie sociale, professionnelle et personnelle des femmes, et promouvoir l'égalité entre les femmes et les hommes.
Basée à Bourges, l'association propose gratuitement et en toute confidentialité des consultations juridiques, un accompagnement vers l'emploi et un soutien aux victimes de violences. Elle s'inscrit dans un réseau national de près d'une centaine de CIDFF présents sur tout le territoire français.
          </p>

          <a target="_blank" rel="noopener noreferrer" href="https://cher.cidff.info" className="w-fit bg-[#FFFFFF] py-2 px-3 rounded-lg shadow-lg text-[#1E1E1E] hover:bg-gray-500 mb-6 align-center mx-auto cursor-pointer">
            Accéder à l'association
          </a>
        
        </div>
      </div>
    </section>
  )
}

