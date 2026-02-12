"use client";

import Navbar from "@/app/navbar/Nav";
import AccueilComponent from "@/app/components/accueilComponent";
import LgbtPage from "@/app/components/sectionAssociationLgbt";
import CidffPage from "@/app/components/sectionAssociationCidff";
import PlanningFamilialPage from "@/app/components/sectionAssociationPlanning";
import MedecineScolairePage from "@/app/components/sectionAssociationMedecine";
import ContactPage from "@/app/components/footer";

export default function App() {
  return (
    <main>
        <Navbar />
        <AccueilComponent />
        <h1 className="text-[#7C7C7C] text-4xl font-bold mb-6 mt-4 flex justify-center border-b-4 border-orange-500 pb-4 w-fit mx-auto">
          Nos Associations
        </h1>
        <CidffPage />
        <PlanningFamilialPage />
        <LgbtPage />
        <MedecineScolairePage />
        <ContactPage />
    </main>
  );
}
