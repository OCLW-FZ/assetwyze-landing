export default function SocialProof() {
  const logos = [
    { name: "Meridian Industrial", abbr: "MI" },
    { name: "CoreFacilities Group", abbr: "CF" },
    { name: "Apex Manufacturing", abbr: "AM" },
    { name: "NorthStar Ops", abbr: "NS" },
  ];

  return (
    <section className="py-14 border-y border-slate-200" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: "#475569" }}
        >
          Trusted by facilities and operations teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-slate-200 bg-white shadow-sm
                         opacity-70 hover:opacity-100 transition-opacity"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: "#2563EB" }}
              >
                {logo.abbr}
              </div>
              <span className="text-sm font-medium text-[#0F172A] whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
