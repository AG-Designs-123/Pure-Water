import { Link } from "wouter";

interface LegalPageProps {
  type: "privacy" | "terms" | "cookies" | "refunds";
}

const pages = {
  privacy: {
    title: "Privacy Policy",
    intro: "This page explains how Pure Water Window Cleaning handles enquiry and payment information submitted through this website.",
    sections: [
      ["Information we collect", "When you request a quote, we collect the details you provide, such as your name, email address, phone number, postcode, selected service and property details."],
      ["How we use your information", "We use your details to respond to your enquiry, provide quotations, arrange services, manage customer communication and maintain business records."],
      ["Enquiry emails", "Quote requests are sent to pure.water@hotmail.co.uk and may also be stored securely in the website database for follow-up."],
      ["Payments", "Online payments are processed securely by SumUp. Pure Water Window Cleaning does not store your card details."],
      ["Sharing information", "We do not sell your personal information. Information is only shared where needed to operate the website, process payments, comply with law or deliver our service."],
      ["Contact", "For privacy questions or to request removal of your enquiry details, contact pure.water@hotmail.co.uk or call 07551 017095."],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro: "These terms set out the general basis on which Pure Water Window Cleaning provides quotations, exterior cleaning services and online payment facilities.",
    sections: [
      ["Quotations", "Quotations are provided based on the information supplied and may be adjusted if property access, condition, size or requirements differ from the original enquiry."],
      ["Access and safety", "Customers should ensure safe and reasonable access to the areas to be cleaned. Work may be rearranged where weather, access or safety conditions make service unsuitable."],
      ["Service scope", "Services may include window cleaning, gutter clearing, solar panel cleaning, fascia and soffit cleaning, and conservatory valets as agreed in the quotation."],
      ["Payment", "Payment is due as agreed on the invoice or quotation. Online payments are processed securely by SumUp."],
      ["Cancellations", "If you need to rearrange a booking, please contact us as soon as possible on 07551 017095."],
      ["Contact", "Questions about these terms can be sent to pure.water@hotmail.co.uk."],
    ],
  },
  cookies: {
    title: "Cookie Policy",
    intro: "This website may use essential cookies or similar technologies to operate forms, security, payments and basic website functionality.",
    sections: [
      ["Essential cookies", "Essential cookies may be used to make the website work correctly, support forms, maintain security and enable payment redirects."],
      ["Third-party services", "SumUp may use cookies or similar technologies when you use secure checkout. Please refer to SumUp's policies for details about payment processing."],
      ["Managing cookies", "You can control or block cookies through your browser settings. Blocking essential cookies may affect website functionality."],
      ["Contact", "For cookie questions, contact pure.water@hotmail.co.uk."],
    ],
  },
  refunds: {
    title: "Refund & Cancellation Policy",
    intro: "This page explains the general approach to cancellations, payment issues and refunds for Pure Water Window Cleaning services.",
    sections: [
      ["Cancellations", "If you need to cancel or rearrange a booking, please contact us as soon as possible by phone or email."],
      ["Refunds", "Refunds are reviewed on a case-by-case basis depending on the service, timing, payment status and circumstances."],
      ["Payment issues", "If you believe you have paid the wrong invoice, entered the wrong amount or have a payment query, contact us promptly on 07551 017095 or pure.water@hotmail.co.uk."],
      ["SumUp payments", "Card payments are processed securely by SumUp. Refunds, where agreed, may be returned through the original payment method."],
    ],
  },
};

export default function LegalPage({ type }: LegalPageProps) {
  const page = pages[type];

  return (
    <main className="min-h-screen bg-[#f8f7f5] text-foreground">
      <section className="bg-[#0c1222] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-[#c9a96e] text-sm font-brand tracking-wider uppercase hover:text-white transition-colors">
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-8 mb-6">{page.title}</h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">{page.intro}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-border/50 p-8 md:p-12">
          <p className="text-sm text-muted-foreground mb-10">Last updated: {new Date().getFullYear()}</p>
          <div className="space-y-10">
            {page.sections.map(([heading, body]) => (
              <section key={heading}>
                <h2 className="text-2xl font-display font-bold mb-3">{heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
