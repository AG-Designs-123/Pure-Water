import { Link } from "wouter";
import { ArrowRight, CheckCircle2, MapPin, Phone, Star } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export type LocalPageKey =
  | "window-cleaning-blandford-forum"
  | "window-cleaning-wimborne"
  | "window-cleaning-spetisbury"
  | "window-cleaning-charlton-marshall"
  | "gutter-cleaning-blandford-forum"
  | "solar-panel-cleaning-dorset"
  | "conservatory-cleaning-dorset";

type LocalPage = {
  slug: LocalPageKey;
  service: string;
  place: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  image: string;
  nearby: string[];
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
};

const phone = "07551 017095";
const email = "pure.water@hotmail.co.uk";
const siteUrl = "https://www.purewaterinfo.co.uk";

export const localPages: Record<LocalPageKey, LocalPage> = {
  "window-cleaning-blandford-forum": {
    slug: "window-cleaning-blandford-forum",
    service: "Window Cleaning",
    place: "Blandford Forum",
    title: "Window Cleaning in Blandford Forum",
    metaTitle: "Window Cleaning Blandford Forum | Pure Water Window Cleaning",
    metaDescription:
      "Professional pure water window cleaning in Blandford Forum and nearby Dorset villages. Fully insured, free quotes, frames and sills included.",
    heroIntro:
      "Reliable pure water window cleaning for homes and businesses across Blandford Forum, including frames, sills and glass for a clear, streak-free finish.",
    image: "/images/window-cleaning.png",
    nearby: ["Bryanston", "Pimperne", "Stourpaine", "Milton Abbas", "Charlton Marshall"],
    benefits: [
      "Reach-and-wash pure water system for upper windows from the ground",
      "Frames, sills and doors included as part of the clean",
      "Regular and one-off cleans available for local properties",
      "Friendly local service with free no-obligation quotations",
    ],
    process: [
      "Tell us your property type, postcode and any access details.",
      "We provide a clear quote and agree a suitable cleaning schedule.",
      "Your windows, frames and sills are cleaned with purified water for a streak-free result.",
    ],
    faqs: [
      {
        question: "Do you clean windows in Blandford Forum regularly?",
        answer:
          "Yes. Pure Water Window Cleaning covers Blandford Forum and nearby Dorset villages for regular and one-off window cleaning.",
      },
      {
        question: "Are frames and sills included?",
        answer: "Yes, frames and sills are included as standard with our pure water window cleaning service.",
      },
      {
        question: "Can you quote from a photo?",
        answer:
          "Often, yes. Send your address, property details and photos if helpful, and we can usually give a clear guide price before visiting.",
      },
    ],
  },
  "window-cleaning-wimborne": {
    slug: "window-cleaning-wimborne",
    service: "Window Cleaning",
    place: "Wimborne",
    title: "Window Cleaning in Wimborne",
    metaTitle: "Window Cleaning Wimborne | Pure Water Window Cleaning",
    metaDescription:
      "Pure water window cleaning in Wimborne and nearby villages. Fully insured local service, free quotes and streak-free results.",
    heroIntro:
      "Professional pure water window cleaning for Wimborne homes and businesses, with careful attention to glass, frames and sills.",
    image: "/images/window-cleaning.png",
    nearby: ["Colehill", "Merley", "Canford Magna", "Sturminster Marshall", "Pamphill"],
    benefits: [
      "Pure water system designed for spotless glass without harsh chemicals",
      "Safe ground-based cleaning for many hard-to-reach upper windows",
      "Residential and commercial window cleaning available",
      "Free, straightforward quotes before work begins",
    ],
    process: [
      "Send your Wimborne postcode and basic property details.",
      "We confirm the quote, access requirements and best cleaning frequency.",
      "We clean the glass, frames and sills, then leave everything to dry naturally streak-free.",
    ],
    faqs: [
      {
        question: "Do you cover Wimborne?",
        answer: "Yes. We cover Wimborne, nearby villages and surrounding Dorset areas for pure water window cleaning.",
      },
      {
        question: "Do you clean commercial windows?",
        answer:
          "Yes, we can quote for suitable commercial properties as well as homes. Send details and we will advise.",
      },
      {
        question: "How often should windows be cleaned?",
        answer:
          "Many customers choose a regular clean every few weeks, but one-off and occasional cleans can also be quoted depending on your needs.",
      },
    ],
  },
  "window-cleaning-spetisbury": {
    slug: "window-cleaning-spetisbury",
    service: "Window Cleaning",
    place: "Spetisbury",
    title: "Window Cleaning in Spetisbury",
    metaTitle: "Window Cleaning Spetisbury | Pure Water Window Cleaning",
    metaDescription:
      "Local pure water window cleaning in Spetisbury, Charlton Marshall and nearby villages. Fully insured with free no-obligation quotes.",
    heroIntro:
      "A local, reliable window cleaning service for Spetisbury properties, using purified water to clean glass, frames and sills properly.",
    image: "/images/window-cleaning.png",
    nearby: ["Charlton Marshall", "Sturminster Marshall", "Blandford Forum", "Shapwick", "Tarrant Keyneston"],
    benefits: [
      "Local route coverage through Spetisbury and neighbouring villages",
      "Frames and sills cleaned as part of the service",
      "Suitable for regular maintenance or one-off cleans",
      "No harsh chemicals used on standard window cleans",
    ],
    process: [
      "Request a quote with your postcode and property details.",
      "We confirm access, pricing and whether a regular clean would suit you.",
      "We clean safely and carefully using purified water from the ground where possible.",
    ],
    faqs: [
      {
        question: "Do you visit Spetisbury?",
        answer: "Yes. Spetisbury is one of the local villages covered by Pure Water Window Cleaning.",
      },
      {
        question: "Can you clean windows above conservatories or extensions?",
        answer:
          "In many cases, yes. Our pole system helps reach awkward upper windows, but we will confirm what is safe when quoting.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "Not always. If access is arranged and payment is agreed, many regular cleans can be completed without you needing to be home.",
      },
    ],
  },
  "window-cleaning-charlton-marshall": {
    slug: "window-cleaning-charlton-marshall",
    service: "Window Cleaning",
    place: "Charlton Marshall",
    title: "Window Cleaning in Charlton Marshall",
    metaTitle: "Window Cleaning Charlton Marshall | Pure Water Window Cleaning",
    metaDescription:
      "Pure water window cleaning in Charlton Marshall and nearby Dorset villages. Frames and sills included, free quotes available.",
    heroIntro:
      "Careful pure water window cleaning for Charlton Marshall homes, keeping glass, frames and sills clean with a professional local service.",
    image: "/images/window-cleaning.png",
    nearby: ["Spetisbury", "Blandford Forum", "Sturminster Marshall", "Winterborne Kingston", "Shapwick"],
    benefits: [
      "Regular local window cleaning route coverage",
      "Pure water clean for a streak-free finish as the glass dries",
      "Respectful service around your home and garden",
      "Free quotes with clear pricing before you book",
    ],
    process: [
      "Send your details through the quote form or call us directly.",
      "We assess the property, access and cleaning requirements.",
      "We complete the clean and can arrange a repeat schedule if wanted.",
    ],
    faqs: [
      {
        question: "Do you clean windows in Charlton Marshall?",
        answer: "Yes. We cover Charlton Marshall and nearby villages around Blandford Forum.",
      },
      {
        question: "Is pure water cleaning safe for frames?",
        answer:
          "Yes. Purified water is commonly used for exterior window cleaning and is suitable for glass, frames and sills on standard properties.",
      },
      {
        question: "Can I request a one-off clean?",
        answer: "Yes. Regular cleans are available, but one-off window cleaning can also be quoted.",
      },
    ],
  },
  "gutter-cleaning-blandford-forum": {
    slug: "gutter-cleaning-blandford-forum",
    service: "Gutter Clearing",
    place: "Blandford Forum",
    title: "Gutter Cleaning in Blandford Forum",
    metaTitle: "Gutter Cleaning Blandford Forum | Pure Water Window Cleaning",
    metaDescription:
      "Gutter clearing in Blandford Forum and nearby Dorset villages. Remove moss, leaves and debris before blocked gutters cause problems.",
    heroIntro:
      "Thorough gutter clearing for Blandford Forum homes and businesses, helping prevent overflows, damp problems and water damage.",
    image: "/images/gutter-cleaning.png",
    nearby: ["Bryanston", "Pimperne", "Charlton Marshall", "Spetisbury", "Stourpaine"],
    benefits: [
      "Clears moss, leaves and debris from gutters",
      "Helps reduce risk of overflowing water and damp issues",
      "High-reach equipment for many common domestic gutter jobs",
      "Can be combined with fascia, soffit or window cleaning where suitable",
    ],
    process: [
      "Tell us the property type, number of storeys and any known blockage areas.",
      "We confirm access, safety and pricing before the work starts.",
      "We clear the gutters and advise if we notice obvious issues that need attention.",
    ],
    faqs: [
      {
        question: "How often should gutters be cleared?",
        answer:
          "Many properties benefit from gutter clearing once or twice a year, especially near trees or where moss builds up on the roof.",
      },
      {
        question: "Do you clear gutters in Blandford Forum?",
        answer: "Yes. We offer gutter clearing in Blandford Forum and surrounding Dorset villages.",
      },
      {
        question: "Can blocked gutters cause damage?",
        answer:
          "Yes. Blocked gutters can overflow and contribute to damp, staining, rotten timber and water damage if left unresolved.",
      },
    ],
  },
  "solar-panel-cleaning-dorset": {
    slug: "solar-panel-cleaning-dorset",
    service: "Solar Panel Cleaning",
    place: "Dorset",
    title: "Solar Panel Cleaning in Dorset",
    metaTitle: "Solar Panel Cleaning Dorset | Pure Water Window Cleaning",
    metaDescription:
      "Gentle pure water solar panel cleaning across parts of Dorset. Remove dirt, dust and bird mess with a safe non-abrasive clean.",
    heroIntro:
      "Professional solar panel cleaning across our Dorset service area, using a gentle pure water process to remove dirt, dust and bird mess.",
    image: "/images/solar-cleaning.png",
    nearby: ["Blandford Forum", "Spetisbury", "Charlton Marshall", "Wimborne", "surrounding villages"],
    benefits: [
      "Gentle, non-abrasive pure water cleaning",
      "Removes dirt, dust, pollen and bird droppings from panels",
      "Suitable for many residential solar panel installations",
      "Can be quoted alongside window or gutter cleaning where appropriate",
    ],
    process: [
      "Send details of the panel location, height and access.",
      "We confirm whether the job is suitable and provide a quote.",
      "Panels are cleaned carefully with purified water and appropriate equipment.",
    ],
    faqs: [
      {
        question: "Why clean solar panels?",
        answer:
          "Dirt, dust, pollen and bird droppings can reduce the amount of light reaching the panels. Cleaning helps keep them working efficiently.",
      },
      {
        question: "Do you use chemicals on solar panels?",
        answer: "No. Our standard solar panel cleaning uses a gentle pure water process without harsh chemicals.",
      },
      {
        question: "Which Dorset areas do you cover?",
        answer:
          "We cover Blandford Forum, Spetisbury, Charlton Marshall, Wimborne and surrounding villages, subject to access and suitability.",
      },
    ],
  },
  "conservatory-cleaning-dorset": {
    slug: "conservatory-cleaning-dorset",
    service: "Conservatory Cleaning",
    place: "Dorset",
    title: "Conservatory Cleaning in Dorset",
    metaTitle: "Conservatory Cleaning Dorset | Pure Water Window Cleaning",
    metaDescription:
      "Conservatory roof, frame and glass cleaning across Blandford Forum, Wimborne and nearby Dorset villages. Free quotes available.",
    heroIntro:
      "Exterior conservatory cleaning across our Dorset service area, helping restore roofs, frames and glass affected by algae, moss and grime.",
    image: "/images/conservatory-cleaning.png",
    nearby: ["Blandford Forum", "Spetisbury", "Charlton Marshall", "Wimborne", "nearby villages"],
    benefits: [
      "Exterior conservatory roof, glass and frame cleaning",
      "Helps remove algae, moss and weather staining",
      "Can brighten the appearance of older conservatories",
      "Optional add-on with window cleaning where suitable",
    ],
    process: [
      "Tell us the conservatory size, style and access details.",
      "We assess what can be safely cleaned and provide a clear quote.",
      "The exterior roof, frames and glass are cleaned carefully to restore brightness.",
    ],
    faqs: [
      {
        question: "Do you clean conservatory roofs?",
        answer: "Yes. We can quote for exterior conservatory roof, frame and glass cleaning where access is safe and suitable.",
      },
      {
        question: "Can conservatory cleaning be combined with window cleaning?",
        answer: "Yes, many customers combine conservatory cleaning with a window clean for a more complete exterior refresh.",
      },
      {
        question: "Which areas do you cover?",
        answer:
          "We cover Blandford Forum, Spetisbury, Charlton Marshall, Wimborne and surrounding Dorset villages.",
      },
    ],
  },
};

const relatedPages: LocalPageKey[] = [
  "window-cleaning-blandford-forum",
  "window-cleaning-wimborne",
  "window-cleaning-spetisbury",
  "window-cleaning-charlton-marshall",
  "gutter-cleaning-blandford-forum",
  "solar-panel-cleaning-dorset",
  "conservatory-cleaning-dorset",
];

function upsertMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertCanonical(url: string) {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = url;
}

export function LocalServicePage({ pageKey }: { pageKey: LocalPageKey }) {
  const page = localPages[pageKey];
  const pageUrl = `${siteUrl}/${page.slug}`;
  const isRegionalPage = page.place === "Dorset";
  const nearbyAreaText = page.nearby.join(", ");

  useEffect(() => {
    document.title = page.metaTitle;
    upsertMeta("description", page.metaDescription);
    upsertCanonical(pageUrl);
  }, [page.metaDescription, page.metaTitle, pageUrl]);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: "Pure Water Window Cleaning",
        url: siteUrl,
        telephone: phone,
        email,
        image: `${siteUrl}/images/window-cleaning.png`,
        areaServed: ["Blandford Forum", "Spetisbury", "Charlton Marshall", "Wimborne", "Dorset"],
        priceRange: "££",
      },
      {
        "@type": "Service",
        name: `${page.service} in ${page.place}`,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: [page.place, ...page.nearby],
        serviceType: page.service,
        url: pageUrl,
        description: page.metaDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f8f7f5]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />

      <section className="relative bg-[#0c1222] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={page.image} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1222] via-[#0c1222]/90 to-[#0c1222]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <Link href="/" className="text-[#c9a96e] text-sm font-brand tracking-wider uppercase hover:text-white transition-colors">
              ← Back to home
            </Link>
            <p className="text-[#c9a96e] text-sm font-brand tracking-[0.3em] uppercase mt-10 mb-4">Local Service Area</p>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">{page.title}</h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-2xl mb-8">{page.heroIntro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 rounded-none bg-[#c9a96e] text-[#0c1222] hover:bg-[#d4b87d] tracking-wider uppercase font-brand">
                <a href="/#enquiry">
                  Request a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-none bg-transparent border-white/25 text-white hover:bg-white/5 hover:text-white tracking-wider uppercase font-brand">
                <a href={`tel:${phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 w-4 h-4" />
                  Call {phone}
                </a>
              </Button>
            </div>
          </div>

          <Card className="rounded-none border-white/10 bg-white/10 backdrop-blur-sm text-white shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-6">Why local customers choose us</h2>
              <ul className="space-y-4">
                {page.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-white/75">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a96e] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <div>
            <p className="text-[#c9a96e] text-sm font-brand tracking-[0.3em] uppercase mb-4">About This Service</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Professional {page.service.toLowerCase()} for {page.place}</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Pure Water Window Cleaning provides {page.service.toLowerCase()} {isRegionalPage ? "across our Dorset service area" : `for customers in ${page.place} and nearby areas`}. We focus on reliable communication, careful work and clear quotes before you book.
              </p>
              <p>
                {isRegionalPage
                  ? `If you are searching for a local ${page.service.toLowerCase()} service in Dorset, use the quote form or call us with your property details. We will confirm whether the job is suitable, explain the likely process and give you a straightforward price.`
                  : `If you are searching for a local ${page.service.toLowerCase()} service near ${page.place}, use the quote form or call us with your property details. We will confirm whether the job is suitable, explain the likely process and give you a straightforward price.`}
              </p>
              <p>
                We also cover {isRegionalPage ? `areas including ${nearbyAreaText}` : `nearby areas including ${nearbyAreaText}`}, subject to route availability and access.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {page.process.map((step, index) => (
              <Card key={step} className="rounded-none border-border/50 shadow-none">
                <CardContent className="p-6">
                  <div className="text-[#c9a96e] font-brand text-sm tracking-widest uppercase mb-4">Step {index + 1}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-[#c9a96e] text-sm font-brand tracking-[0.3em] uppercase mb-4">Areas Covered</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {isRegionalPage ? "Covering key Dorset towns and villages" : `Covering ${page.place} and nearby Dorset villages`}
            </h2>
            <div className="flex flex-wrap gap-3">
              {[page.place, ...page.nearby].map((area) => (
                <span key={area} className="inline-flex items-center gap-2 bg-white border border-border/50 px-4 py-2 text-sm text-foreground/75">
                  <MapPin className="w-4 h-4 text-[#c9a96e]" />
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[#c9a96e] text-sm font-brand tracking-[0.3em] uppercase mb-4">FAQs</p>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <Card key={faq.question} className="rounded-none border-border/50 shadow-none bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 flex items-start gap-2">
                      <Star className="w-4 h-4 text-[#c9a96e] mt-1 shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0c1222] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a96e] text-sm font-brand tracking-[0.3em] uppercase mb-4">Get a Quote</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Need {page.service.toLowerCase()} in {page.place}?</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Send your details through the quote form or call {phone}. We will only use your details to respond to your enquiry.
          </p>
          <Button asChild size="lg" className="h-14 px-8 rounded-none bg-[#c9a96e] text-[#0c1222] hover:bg-[#d4b87d] tracking-wider uppercase font-brand">
            <a href="/#enquiry">Request a Free Quote</a>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-8">Other local services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedPages
              .filter((slug) => slug !== page.slug)
              .slice(0, 6)
              .map((slug) => {
                const related = localPages[slug];
                return (
                  <Link key={slug} href={`/${slug}`} className="block border border-border/50 p-5 hover:border-[#c9a96e] transition-colors">
                    <span className="text-sm text-[#c9a96e] font-brand tracking-wider uppercase">{related.place}</span>
                    <h3 className="font-display text-xl font-bold mt-2">{related.title}</h3>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
