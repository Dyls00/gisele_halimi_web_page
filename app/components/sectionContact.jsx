import { infoContact } from "../utils/infosContact";

export default function SectionContact() {
  return (
    <section
      id="contact"
      className="mt-10 bg-[#7A5C8E] mx-4 md:mx-10 mb-10 pt-8 pb-8 fontArial rounded-lg shadow-lg"
    >
      <div className="flex justify-center mb-8">
        <p className="text-white text-3xl md:text-4xl font-bold">Contact</p>
      </div>
     <div></div>
      {infoContact.map((item) => (
        <div key={item.title} className="mx-auto md:w-255 px-6 md:px-10 mb-8">
          <div className="text-center mb-10">
            <p className="text-white text-xl md:text-2xl font-bold mb-2">
              {item.title}
            </p>
            <p className="text-white text-sm font-normal">
              {item.information}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-around items-center gap-4 text-center">
            <div className="button-borders">
              <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
              <a
                  href={`mailto:${item.adresseMail}`}
                  className="text-white text-sm md:text-base break-all"
                  target="_blank"
                >
                  Web
                </a>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </button>
            </div>
            <div className="button-borders">
              <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
              <a
                  href={`mailto:${item.adresseMail}`}
                  className="text-white text-sm md:text-base break-all"
                  target="_blank"
                >
                  Mail
                </a>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </button>
            </div>

            <div className="button-borders">
              <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
              <a
                  href={`mailto:${item.adresseMail}`}
                  className="text-white text-sm md:text-base break-all"
                  target="_blank"
                >
                  Téléphone
                </a>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
