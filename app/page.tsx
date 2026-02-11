import Nav from "@/app/nav/navbar";
import AccueilComponent from "@/app/components/accueilComponent";
import Footer from "@/app/components/footer";


export default function Page() {
    return (
        <main>
            <Nav/>
            <AccueilComponent/>
            <Footer/>
        </main>
    );
}