import { Zap } from "lucide-react";

const links = {
  Product: ["Features", "Pricing", "How it works", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#2563EB" }}
              >
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Asset<span style={{ color: "#93C5FD" }}>Wyze</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
              The intelligent asset management platform built for growing businesses.
              Stop losing track. Start staying ahead.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">
                {section}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#waitlist"
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "#94A3B8" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "#1E293B" }}
        >
          <p className="text-sm" style={{ color: "#64748B" }}>
            © 2026 AssetWyze Pty Ltd. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "#64748B" }}>
            Made with care for operations teams everywhere 🏭
          </p>
        </div>
      </div>
    </footer>
  );
}
