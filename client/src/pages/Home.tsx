import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Enquiry } from "@/components/Enquiry";
import { Payment } from "@/components/Payment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Enquiry />
      <Payment />
      <Footer />
    </main>
  );
}