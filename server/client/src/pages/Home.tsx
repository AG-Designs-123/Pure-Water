import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";
import { ResultsGallery } from "@/components/ResultsGallery";
import { Enquiry } from "@/components/Enquiry";
import { Payment } from "@/components/Payment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <ResultsGallery />
      <Enquiry />
      <Payment />
      <Footer />
    </main>
  );
}