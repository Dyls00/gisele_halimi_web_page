import Image from "next/image";

export default function PoleHalimiComponent() {
  return (
    <section
      className="bg-[#7A5C8E] rounded-xl mt-5 mx-4 md:mx-8 lg:mx-12 py-8 font-normal"
      id="pole-halimi"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center .overflow-wrap">
        <div className="text-center md:text-left">
          <p className="leading-relaxed ">
            Un moment fort, chargé de sens, qui rend hommage à une figure
            engagée pour les droits et la justice. Ce lieu devient désormais un
            espace de partage, d’entraide et d’initiatives au service des
            citoyens et du tissu associatif local, au cœur de Bourges, en
            mémoire de Gisèle Halimi.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/Inauguration-pole-associatif-et-centre-medico-scolaire-Gisele-Halimi-8.jpeg"
            alt="Inauguration du pôle associatif"
            width={650}
            height={450}
            className="rounded-xl shadow-lg md:max-w-lg lg:max-w-xl h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
