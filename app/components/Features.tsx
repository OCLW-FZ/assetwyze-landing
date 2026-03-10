import { Bot, TrendingUp, Package, Users, BarChart3, Smartphone } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Work Orders",
    description:
      "Automatically generate, assign and prioritise work orders using AI. Reduce manual admin and ensure nothing slips through the cracks.",
    iconColor: "#2563EB",
    iconBg: "#DBEAFE",
  },
  {
    icon: TrendingUp,
    title: "Predictive Maintenance",
    description:
      "Spot failure patterns before they become breakdowns. AI analyses usage data to recommend preventive action at the right time.",
    iconColor: "#7C3AED",
    iconBg: "#EDE9FE",
  },
  {
    icon: Package,
    title: "Asset Inventory & Tracking",
    description:
      "One searchable register for every asset you own. Location, condition, history, documents and lifecycle — all in one place.",
    iconColor: "#D97706",
    iconBg: "#FEF3C7",
  },
  {
    icon: Users,
    title: "Vendor & Contractor Portal",
    description:
      "Give external contractors limited access to raise and complete work orders. No more phone calls and email chains.",
    iconColor: "#059669",
    iconBg: "#D1FAE5",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description:
      "Live visibility across all your assets and maintenance activity. Customisable KPIs so management always knows what matters.",
    iconColor: "#0891B2",
    iconBg: "#CFFAFE",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Field Access",
    description:
      "Technicians can scan assets, update work orders and log issues from any device — even offline in the field.",
    iconColor: "#DC2626",
    iconBg: "#FEE2E2",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24" style={{ backgroundColor: "#DBEAFE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-6 border"
            style={{
              backgroundColor: "white",
              borderColor: "#BFDBFE",
              color: "#2563EB",
            }}
          >
            Everything you need
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
            Built for how your{" "}
            <span className="gradient-text">team actually works</span>
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed">
            Every feature is designed for operations teams — not IT departments. Get up and
            running in minutes, not months.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm
                           hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5
                             group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: f.iconBg }}
                >
                  <Icon className="w-6 h-6" style={{ color: f.iconColor }} />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                  {f.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
