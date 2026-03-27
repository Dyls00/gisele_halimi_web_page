import Image from "next/image";
import { Itim } from "next/font/google";

const fontItim = Itim({
  subsets: ["latin"],
  weight: ["400"],
});

export default function SectionAssociationCidff() {
  return (
    <section
      className={`mt-10 bg-[#7C7C7C] ${fontItim.className} rounded-lg shadow-lg mx-4 md:mx-10`}
    >
      <div className="mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/logo-cidffnew.jpg"
            alt="cidff"
            width={350}
            height={150}
            className="rounded-lg shadow-lg w-64 md:w-80 lg:w-96 h-auto"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            CIDFF
          </h1>

          <p className="text-white leading-relaxed text-base md:text-lg mb-6">
            Le CIDFF de BOURGES exerce une mission d’intérêt général confiée par
            l’État dont l’objectif est de :
            <br />
            Favoriser l’autonomie sociale, professionnelle et personnelle des
            femmes.
            <br />
            Promouvoir l’égalité entre les femmes et les hommes.
          </p>

          <a
            href="https://cher.cidff.info"
            className="bg-gray-400 py-2 px-4 rounded-lg shadow-lg text-white hover:bg-gray-500 transition"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}
