"use client";

import Navbar from "./navbar/Nav";
import AccueilComponent from "./components/accueilComponent";
import LgbtPage from "./components/sectionAssociationLgbt";
import CidffPage from "./components/sectionAssociationCidff";
import PlanningFamilialPage from "./components/sectionAssociationPlanning";
import MedecineScolairePage from "./components/sectionAssociationMedecine";
import ContactPage from "./components/footer";

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
