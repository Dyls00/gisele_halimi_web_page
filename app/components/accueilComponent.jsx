import Image from "next/image"
import { Itim } from "next/font/google"

const fontItim = Itim({
  subsets: ["latin"],
  weight: ["400"],
})

export default function AccueilComponent() {
  return (
    <section className={`flex items-center bg-white ${fontItim.className}`}>
      <div className="mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center">

        <div>
          <h1 className="text-gray-700 text-4xl font-bold mb-6">
            LE PÔLE ASSOCIATIF <br />
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

          <button className="bg-gray-400 py-3 px-5 rounded-lg shadow-lg text-white hover:bg-gray-500">
            En savoir plus
          </button>
        </div>

        
        <div className="flex justify-center mt-10">
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

