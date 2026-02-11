import Image from "next/image"
import { Itim } from "next/font/google"

const fontItim = Itim({
  subsets: ["latin"],
  weight: ["400"],
})

export default function SectionAssociationLgbt() {
  return (
    <section className={`mt-10 flex items-center bg-[#7C7C7C] ${fontItim.className} rounded-lg shadow-lg ml-10 mr-10`}>
      <div className="mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center ">

        <div className="flex justify-center mt-4 mb-4">
          <Image
            src="/images/logo-lgbtnew.png"
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
            Le centre LGBTQIA+ du Berry est une association qui a pour mission de :
            Lutter contre toutes les formes d’exclusion, de discrimination, de sexisme et d’injustice fondées ou supposées sur l’identité de genre,
            l’expression de genre, l’orientation sexuelle des personnes au niveau local.
          </p>

          <a href="https://centrelgbtqiaberry.fr" className="w-fit bg-gray-400 py-1 px-2 rounded-lg shadow-lg text-white hover:bg-gray-500 mb-6 align-center mx-auto cursor-pointer">
            En savoir plus
          </a>
        
        </div>
      </div>
    </section>
  )
}

