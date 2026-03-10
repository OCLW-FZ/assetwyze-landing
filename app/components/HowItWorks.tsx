import { Link2, CalendarClock, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect your assets",
    description:
      "Import from spreadsheets or scan QR/barcode labels. AssetWyze maps your entire asset inventory in minutes — no IT help needed.",
    iconColor: "#2563EB",
    iconBg: "#DBEAFE",
    borderColor: "#BFDBFE",
    numColor: "#DBEAFE",
  },
  {
    number: "02",
    icon: CalendarClock,
    title: "Set up maintenance schedules",
    description:
      "Define preventive maintenance plans for each asset class. Set intervals by time, usage or condition — AssetWyze handles the reminders.",
    iconColor: "#0891B2",
    iconBg: "#CFFAFE",
    borderColor: "#A5F3FC",
    numColor: "#CFFAFE",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Let AssetWyze handle the rest",
    description:
      "AI monitors your assets, triggers work orders automatically, and surfaces insights so you can focus on running the business — not chasing paperwork.",
    iconColor: "#7C3AED",
    iconBg: "#EDE9FE",
    borderColor: "#DDD6FE",
    numColor: "#EDE9FE",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-6 border"
            style={{
              backgroundColor: "#EDE9FE",
              borderColor: "#DDD6FE",
              color: "#7C3AED",
            }}
          >
            Simple by design
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
            Up and running{" "}
            <span className="gradient-text">in three steps</span>
          </h2>
          <p className="text-[#475569] text-lg">
            No lengthy implementations. No consultants. No enterprise contracts.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5"
            style={{
              background:
                "linear-gradient(90deg, #BFDBFE 0%, #A5F3FC 50%, #DDD6FE 100%)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative group">
                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <div
                        className="w-0.5 h-8"
                        style={{ backgroundColor: step.borderColor }}
                      />
                    </div>
                  )}

                  <div
                    className="rounded-2xl p-8 border bg-white shadow-sm hover:shadow-md
                               hover:-translate-y-1 transition-all duration-300 text-center"
                    style={{ borderColor: step.borderColor }}
                  >
                    {/* Big step number — decorative */}
                    <div
                      className="text-6xl font-black mb-4 leading-none select-none"
                      style={{ color: step.numColor }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5
                                 group-hover:scale-110 transition-transform border"
                      style={{
                        backgroundColor: step.iconBg,
                        borderColor: step.borderColor,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: step.iconColor }} />
                    </div>

                    <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#475569] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
