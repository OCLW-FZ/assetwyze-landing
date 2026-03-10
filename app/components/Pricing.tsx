import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams getting off spreadsheets.",
    features: [
      "Up to 100 assets",
      "3 user seats",
      "AI work order generation",
      "Maintenance scheduling",
      "Mobile app access",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
    badgeText: null,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/month",
    description: "For growing operations teams that need more scale.",
    features: [
      "Up to 500 assets",
      "10 user seats",
      "Everything in Starter",
      "Predictive maintenance AI",
      "Vendor & contractor portal",
      "Real-time dashboards",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
    badgeText: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored for larger operations with complex needs.",
    features: [
      "Unlimited assets",
      "Unlimited users",
      "Everything in Growth",
      "Custom integrations",
      "Dedicated onboarding",
      "SLA-backed support",
      "Custom reporting",
    ],
    cta: "Talk to Sales",
    highlighted: false,
    badgeText: null,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-6 border"
            style={{
              backgroundColor: "#DBEAFE",
              borderColor: "#BFDBFE",
              color: "#2563EB",
            }}
          >
            Simple pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
            Plans that{" "}
            <span className="gradient-text">grow with you</span>
          </h2>
          <p className="text-[#475569] text-lg">
            No hidden fees. No enterprise lock-in. Start free, scale when you&apos;re ready.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col border transition-shadow duration-300 hover:shadow-xl ${
                tier.highlighted
                  ? "shadow-xl border-[#2563EB]"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
              style={
                tier.highlighted
                  ? { backgroundColor: "#2563EB" }
                  : {}
              }
            >
              {/* Popular badge */}
              {tier.badgeText && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full shadow"
                  style={{ backgroundColor: "#0F172A", color: "white" }}
                >
                  {tier.badgeText}
                </div>
              )}

              {/* Tier name */}
              <p
                className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
                  tier.highlighted ? "text-blue-200" : "text-[#475569]"
                }`}
              >
                {tier.name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span
                  className={`text-5xl font-black ${
                    tier.highlighted ? "text-white" : "text-[#0F172A]"
                  }`}
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span
                    className={`text-sm pb-2 ${
                      tier.highlighted ? "text-blue-200" : "text-[#475569]"
                    }`}
                  >
                    {tier.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                className={`text-sm mb-6 ${
                  tier.highlighted ? "text-blue-100" : "text-[#475569]"
                }`}
              >
                {tier.description}
              </p>

              {/* Divider */}
              <div
                className={`h-px mb-6 ${
                  tier.highlighted ? "bg-white/20" : "bg-slate-200"
                }`}
              />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: tier.highlighted ? "#BFDBFE" : "#2563EB" }}
                    />
                    <span
                      className={
                        tier.highlighted ? "text-blue-50" : "text-[#475569]"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#waitlist"
                className={`inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3 transition-all duration-200 ${
                  tier.highlighted
                    ? "bg-white text-[#2563EB] hover:bg-[#DBEAFE]"
                    : "btn-primary"
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-[#475569] mt-10">
          All plans include a 14-day free trial. No credit card required.
          {" "}
          <a href="#waitlist" className="underline" style={{ color: "#2563EB" }}>
            Join the waitlist
          </a>{" "}
          for early-bird pricing.
        </p>
      </div>
    </section>
  );
}
