import Calculadora from "@/components/Calculadora";
import ComoFunciona from "@/components/ComoFunciona";
import Contato from "@/components/Contato";
import Diferenciais from "@/components/Diferenciais";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Garantias from "@/components/Garantias";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projetos from "@/components/Projetos";
import Provocacao from "@/components/Provocacao";
import Servicos from "@/components/Servicos";
import Sobre from "@/components/Sobre";
import WhatsAppFlutuante from "@/components/WhatsAppFlutuante";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Garantias />
        <Servicos />
        <Provocacao />
        <Projetos />
        <Calculadora />
        <ComoFunciona />
        <Diferenciais />
        <Sobre />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
