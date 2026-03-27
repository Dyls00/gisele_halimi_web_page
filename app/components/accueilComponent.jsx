import Image from "next/image";

export default function AccueilComponent() {
  return (
    <section className={`py-16 bg-white `}>
      <div className="container mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center .overflow-wrap">
        <div className="text-center md:text-left">
          <h1 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            LE PÔLE ASSOCIATIF ET
            CENTRE MÉDICO-SCOLAIRE 
          </h1>

          <p className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Gisèle Halimi
          </p>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0">
            Situé dans les quartiers prioritaires de la Chancellerie et des
            Gibjoncs, le pôle associatif est composé du Hameau de la Fraternité,
            des locaux associatifs des Merlattes, des salles associatives des
            Pressavois.
          </p>

          <button className="bg-gray-600 hover:bg-gray-700 transition px-6 py-3 rounded-xl shadow-md text-white">
            En savoir plus
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/Inauguration-pole-associatif-et-centre-medico-scolaire-Gisele-Halimi-8.jpeg"
            alt="Inauguration du pôle associatif"
            width={650}
            height={450}
            className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}