import Image from "next/image"
import { Itim } from "next/font/google"

const fontItim = Itim({
  subsets: ["latin"],
  weight: ["400"],
})

export default function SectionAssociationCidff() {
  return (
    <section className={`mt-10 flex items-center bg-[#7C7C7C] ${fontItim.className} rounded-lg shadow-lg ml-10 mr-10`}>
      <div className="mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center ">

        <div className="flex justify-center ">
          <Image
            src="/images/logo-cidffnew.jpg"
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
            Le CIDFF de BOURGES exerce une mission d’intérêt général confiée par l’État dont l’objectif est de :
            Favoriser l’autonomie sociale, professionnelle et personnelle des femmes
            Promouvoir l’égalité entre les femmes et les hommes.
          </p>

          <a href="https://cher.cidff.info" className="w-fit bg-gray-400 py-1 px-2 rounded-lg shadow-lg text-white hover:bg-gray-500 mb-6 align-center mx-auto cursor-pointer">
            En savoir plus
          </a>
        
        </div>
      </div>
    </section>
  )
}

