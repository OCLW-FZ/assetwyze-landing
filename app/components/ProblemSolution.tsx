import { FileSpreadsheet, AlertTriangle, EyeOff, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Spreadsheets don't scale",
    description:
      "Asset data scattered across files, no single source of truth. Every update risks version conflicts, lost data, and costly mistakes.",
    iconColor: "#D97706",
    iconBg: "#FEF3C7",
    borderColor: "#FDE68A",
  },
  {
    icon: AlertTriangle,
    title: "Maintenance chaos",
    description:
      "Missed services, unexpected breakdowns, reactive not proactive. Equipment fails at the worst possible time, costing thousands in emergency repairs.",
    iconColor: "#DC2626",
    iconBg: "#FEE2E2",
    borderColor: "#FECACA",
  },
  {
    icon: EyeOff,
    title: "No visibility",
    description:
      "Can't see what you own, where it is, or what it costs. Management flies blind while assets depreciate untracked and unmanaged.",
    iconColor: "#7C3AED",
    iconBg: "#EDE9FE",
    borderColor: "#DDD6FE",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-6 border"
            style={{
              backgroundColor: "#FEE2E2",
              borderColor: "#FECACA",
              color: "#DC2626",
            }}
          >
            Sound familiar?
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
            The old way is{" "}
            <span className="gradient-text">costing you</span>
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed">
            Growing businesses outgrow spreadsheets fast — but enterprise CMMS software is
            overkill and overpriced. You&apos;re stuck in the middle.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl p-8 border bg-white shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: p.borderColor }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: p.iconBg }}
                >
                  <Icon className="w-6 h-6" style={{ color: p.iconColor }} />
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                  {p.title}
                </h3>
                <p className="text-[#475569] leading-relaxed text-sm">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Solution bridge */}
        <div
          className="relative rounded-2xl p-8 md:p-12 text-center border"
          style={{
            backgroundColor: "#DBEAFE",
            borderColor: "#BFDBFE",
          }}
        >
          {/* Upward arrow pill */}
          <div
            className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full p-2 shadow"
            style={{ backgroundColor: "#2563EB" }}
          >
            <ArrowRight className="w-5 h-5 text-white rotate-90" />
          </div>

          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#2563EB" }}
          >
            The AssetWyze way
          </p>
          <h3 className="text-3xl font-bold text-[#0F172A] mb-4">
            One platform. Complete visibility. Zero chaos.
          </h3>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">
            AssetWyze replaces spreadsheets, sticky notes and reactive maintenance with a
            single intelligent system — built for teams of 10 to 50, priced to match.
          </p>
          <a
            href="#waitlist"
            className="btn-primary mt-8 text-base px-8 py-4"
          >
            Get started free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
