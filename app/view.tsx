import Nav from "@/app/nav/navbar";
import AccueilComponent from "@/app/components/accueilComponent";
import Footer from "@/app/components/footer";
import SectionAssociationCidff from "@/app/components/sectionAssociationCidff";
import SectionAssociationPlanning from "@/app/components/sectionAssociationPlanning";
import SectionAssociationLgbt from "@/app/components/sectionAssociationLgbt";
import SectionAssociationMedecine from "@/app/components/sectionAssociationMedecine";




export default function Page() {
    return (
        <main>
            <Nav/>
            <AccueilComponent/>
            <h1 className={`text-[#7C7C7C] text-4xl font-bold mb-6 mt-4 flex justify-center border-b-4 border-orange-500 pb-4 w-fit mx-auto fontArial`}>
                            Nos Associations
                        </h1>
                        <SectionAssociationCidff/>
                        <SectionAssociationPlanning/>
                        <SectionAssociationLgbt/>
                        <SectionAssociationMedecine/>
                        <Footer/>
        </main>
    );
}