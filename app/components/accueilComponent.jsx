import Image from "next/image"



export default function AccueilComponent() {
  return (
    <section id="accueil" className={`flex items-center height-100 bg-[#FFF6E8] fontArial`}>
      <div className="mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center">

        <div>
          <h1 className="text-gray-700 text-4xl font-bold mb-6">
            LE PÔLE ASSOCIATIF ET <br />
            CENTRE MÉDICO-SCOLAIRE <br />
            <span>
              Gisèle Halimi
            </span>
          </h1>

          <p className="text-gray-700 leading-relaxed mb-9 text-lg">
            Situé dans les quartiers prioritaires de la Chancellerie et des
            Gibjoncs, le pôle associatif est composé du Hameau de la
            Fraternité, des locaux associatifs des Merlattes, des salles
            associatives des Pressavois.
          </p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.ville-bourges.fr/site/egalite-femmes-hommes" className="bg-gray-400 py-3 px-5 rounded-lg shadow-lg text-white hover:bg-gray-500 cursor-pointer">
            En savoir plus
          </a>
        </div>

        
        <div className="flex justify-center">
          <Image
            src="/images/Inauguration-pole-associatif-et-centre-medico-scolaire-Gisele-Halimi-8.jpeg"
            alt="Inauguration du pôle associatif"
            width={650}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}



