import { ArrowRight, Play, CheckCircle } from "lucide-react";

const trusts = [
  "No credit card required",
  "Setup in under 10 minutes",
  "Cancel anytime",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Subtle accent wash top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, #DBEAFE 0%, transparent 70%)",
        }}
      />
      {/* Subtle accent wash bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, #DBEAFE 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-8 border"
            style={{
              backgroundColor: "#DBEAFE",
              borderColor: "#BFDBFE",
              color: "#2563EB",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#2563EB" }}
            />
            AI-Powered Asset Management
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-tight tracking-tight mb-6">
            Stop Losing Track of
            <span className="block gradient-text">Your Assets</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-3xl mx-auto mb-10">
            AssetWyze gives growing businesses one intelligent platform to
            manage assets, maintenance, work orders and teams — without the
            enterprise price tag.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#waitlist"
              className="btn-primary text-base px-8 py-4"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#waitlist"
              className="btn-outline text-base px-8 py-4"
            >
              <Play className="w-4 h-4" />
              Book a Demo
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {trusts.map((t) => (
              <div
                key={t}
                className="flex items-center gap-2 text-sm"
                style={{ color: "#475569" }}
              >
                <CheckCircle
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#2563EB" }}
                />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div
            className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden"
            style={{ boxShadow: "0 25px 80px rgba(37,99,235,0.12)" }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 bg-slate-200 rounded h-5 max-w-xs" />
            </div>

            {/* Dashboard body */}
            <div className="bg-white p-6">
              {/* Stat row */}
              <div className="grid grid-cols-4 gap-4 mb-4">
                {[
                  {
                    label: "Total Assets",
                    value: "1,247",
                    color: "#2563EB",
                    bg: "#DBEAFE",
                  },
                  {
                    label: "Active Work Orders",
                    value: "38",
                    color: "#D97706",
                    bg: "#FEF3C7",
                  },
                  {
                    label: "Scheduled Maintenance",
                    value: "12",
                    color: "#059669",
                    bg: "#D1FAE5",
                  },
                  {
                    label: "Due for Service",
                    value: "7",
                    color: "#DC2626",
                    bg: "#FEE2E2",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4 border border-slate-100"
                    style={{ backgroundColor: stat.bg }}
                  >
                    <p className="text-xs text-[#475569] mb-1">{stat.label}</p>
                    <p
                      className="text-2xl font-bold"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart + list */}
              <div className="grid grid-cols-4 gap-4">
                {/* Bar chart */}
                <div className="col-span-3 rounded-xl border border-slate-100 p-4 h-40 flex items-end gap-1.5">
                  {[65, 40, 80, 55, 90, 45, 75, 60, 85, 50, 70, 95].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{
                          height: `${h}%`,
                          backgroundColor:
                            h >= 85 ? "#2563EB" : "#BFDBFE",
                        }}
                      />
                    )
                  )}
                </div>

                {/* Asset list */}
                <div className="rounded-xl border border-slate-100 p-4 h-40 space-y-2">
                  {[
                    { name: "HVAC Unit 01", dot: "#2563EB" },
                    { name: "Compressor A", dot: "#D97706" },
                    { name: "Pump Station", dot: "#DC2626" },
                  ].map((a) => (
                    <div key={a.name} className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: a.dot }}
                      />
                      <span className="text-xs text-[#475569] truncate">
                        {a.name}
                      </span>
                    </div>
                  ))}
                  <div className="h-3 rounded-full bg-slate-100 w-3/4 mt-1" />
                  <div className="h-3 rounded-full bg-slate-100 w-1/2" />
                </div>
              </div>
            </div>
          </div>

          {/* Soft shadow below card */}
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full blur-2xl opacity-30"
            style={{ backgroundColor: "#2563EB" }}
          />
        </div>
      </div>
    </section>
  );
}
