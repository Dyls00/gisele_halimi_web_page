import Image from "next/image";

export default function PoleHalimiComponent() {
  return (
    <section className="border-2 border-dark-200 rounded-lg mt-5 mx-4 md:mx-8 lg:mx-12 py-8 font-normal" id="pole-halimi">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center .overflow-wrap">
        <div className="text-center md:text-left">

          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0">
            Situé dans les quartiers prioritaires de la Chancellerie et des
            Gibjoncs, le pôle associatif est composé du Hameau de la Fraternité,
            des locaux associatifs des Merlattes, des salles associatives des
            Pressavois.
          </p>
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