"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.svg" alt="AssetWyze" width={160} height={36} priority />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "How it works", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[#475569] hover:text-[#0F172A] text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#waitlist"
              className="text-[#475569] hover:text-[#0F172A] text-sm font-medium transition-colors"
            >
              Sign in
            </a>
            <a href="#waitlist" className="btn-primary text-sm py-2 px-5">
              Start Free Trial
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#475569] hover:text-[#0F172A] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-1">
          {["Features", "How it works", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-[#475569] hover:text-[#0F172A] py-2 text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#waitlist"
            className="block btn-primary text-center mt-3"
            onClick={() => setMobileOpen(false)}
          >
            Start Free Trial
          </a>
        </div>
      )}
    </nav>
  );
}
