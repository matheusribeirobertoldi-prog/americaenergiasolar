import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GarantiasBar from "@/components/GarantiasBar";
import Servicos from "@/components/Servicos";
import Provocacao from "@/components/Provocacao";
import Cases from "@/components/Cases";
import Calculadora from "@/components/Calculadora";
import ComoFunciona from "@/components/ComoFunciona";
import Diferenciais from "@/components/Diferenciais";
import Sobre from "@/components/Sobre";
import FAQ from "@/components/FAQ";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000D1E] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <GarantiasBar />
      <Servicos />
      <Provocacao />
      <Cases />
      <Calculadora />
      <ComoFunciona />
      <Diferenciais />
      <Sobre />
      <FAQ />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
