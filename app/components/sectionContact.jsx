import { infoContact } from "../utils/infosContact";


export default function SectionContact() {
    return (
        <section
            id="contact"
            className="mt-10 bg-[#7A5C8E] mx-4 md:mx-10 mb-10 pt-8 pb-8 fontArial rounded-lg shadow-lg"
        >
            <div className="flex justify-center mb-8">
                <p className="text-white text-3xl md:text-4xl font-bold">
                    Contact
                </p>
            </div>

            {infoContact.map((item) => (
                <div
                    key={item.title}
                    className="mx-auto px-6 md:px-10 mb-8"
                >
                    <div className="text-center mb-6">
                        <p className="text-white text-xl md:text-2xl font-bold mb-2">
                            {item.title}
                        </p>
                        <p className="text-white text-sm md:text-base">
                            {item.information}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-around items-center gap-4 text-center">
                        <a
                            href={item.site}
                            className="text-white text-sm md:text-base break-all"
                            target="_blank"
                        >
                            Web : {item.site}
                        </a>

                        <a
                            href={`mailto:${item.adresseMail}`}
                            className="text-white text-sm md:text-base break-all"
                        >
                            Mail : {item.adresseMail}
                        </a>

                        <p className="text-white text-sm md:text-base">
                            <a
                                href={`tel:${item.adresseMail}`}
                                className="text-white text-sm md:text-base break-all"
                            >
                                Téléphone : {item.tel}
                            </a>
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}

