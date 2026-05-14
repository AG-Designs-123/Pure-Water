const results = [
  {
    title: "Window Cleaning Results",
    image: "/images/before-after-window-cleaning.jpg",
    alt: "Before and after example showing a visibly cleaner window after professional cleaning",
    label: "Before & After Example",
    text: "A clear visual example of the difference professional window cleaning can make.",
    credit: "Public domain image via Wikimedia Commons.",
  },
  {
    title: "Solar Panel Cleaning",
    image: "/images/solar-panel-cleaning-public-domain.jpg",
    alt: "Solar panels being professionally cleaned",
    label: "Cleaning in Progress",
    text: "Keeping panels clean helps reduce dirt build-up and supports better performance.",
    credit: "Public domain image via Wikimedia Commons.",
  },
];

export function ResultsGallery() {
  return (
    <section className="py-28 bg-white" aria-labelledby="results-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-[#c9a96e] text-sm font-brand tracking-[0.3em] uppercase mb-4">See the Difference</p>
          <h2 id="results-heading" className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Cleaner glass, brighter results
          </h2>
          <div className="w-16 h-[1px] bg-[#c9a96e] mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Example before-and-after style imagery showing the kind of visual improvement customers can expect from professional exterior cleaning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {results.map((item) => (
            <article key={item.title} className="group bg-[#f8f7f5] border border-border/50 overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0c1222]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-5 top-5 bg-[#c9a96e] text-[#0c1222] px-4 py-2 text-xs font-brand uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{item.text}</p>
                <p className="text-xs text-muted-foreground/70">{item.credit}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
