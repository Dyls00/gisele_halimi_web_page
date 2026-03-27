"use client";

import Navbar from "@/app/navbar/nav";
import AccueilComponent from "@/app/components/accueilComponent";
import LgbtPage from "@/app/components/sectionAssociationLgbt";
import CidffPage from "@/app/components/sectionAssociationCidff";
import PlanningFamilialPage from "@/app/components/sectionAssociationPlanning";
import MedecineScolairePage from "@/app/components/sectionAssociationMedecine";
import SectionContact from "@/app/components/sectionContact";
import Footer from "@/app/components/footer";

export default function App() {
  return (
    <main>
        <Navbar />
        <AccueilComponent />
        <h2 className="text-3xl font-bold mb-6 mt-4 flex justify-center border-b-4 pb-4 w-fit mx-auto">
          NOS ASSOCIATIONS
        </h2>
        <CidffPage />
        <PlanningFamilialPage />
        <LgbtPage />
        <h3 className="text-3xl font-bold mb-6 mt-4 flex justify-center border-b-4 pb-4 w-fit mx-auto">
          LES AUTRES SERVICES
        </h3>
        <MedecineScolairePage />
        <SectionContact />
        <Footer />
    </main>
  );
}
