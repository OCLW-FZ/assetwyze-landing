"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <section
      id="waitlist"
      className="py-24"
      style={{ backgroundColor: "#DBEAFE" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-8 border"
          style={{
            backgroundColor: "white",
            borderColor: "#BFDBFE",
            color: "#2563EB",
          }}
        >
          <Mail className="w-4 h-4" />
          Limited early access
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
          Join the waitlist.{" "}
          <span className="gradient-text">Get 3 months free.</span>
        </h2>

        <p className="text-[#475569] text-lg mb-10 max-w-xl mx-auto">
          Be the first to know when we launch. Early members get 3 months free on
          any plan — no strings attached.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            noValidate
          >
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="you@company.com"
                className="w-full px-5 py-3 rounded-xl border border-slate-300 bg-white text-[#0F172A]
                           placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]
                           focus:border-transparent transition text-sm"
                aria-label="Email address"
              />
              {error && (
                <p className="mt-1 text-xs text-left" style={{ color: "#DC2626" }}>
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn-primary whitespace-nowrap px-7 py-3 text-sm"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div
            className="inline-flex flex-col items-center gap-3 px-8 py-6 rounded-2xl border"
            style={{ backgroundColor: "white", borderColor: "#BFDBFE" }}
          >
            <CheckCircle className="w-10 h-10" style={{ color: "#059669" }} />
            <p className="font-semibold text-[#0F172A]">You&apos;re on the list!</p>
            <p className="text-sm text-[#475569]">
              We&apos;ll email <strong>{email}</strong> when AssetWyze launches. Get ready
              for 3 months on us.
            </p>
          </div>
        )}

        {/* Micro-trust */}
        <p className="text-xs mt-6" style={{ color: "#475569" }}>
          No spam, ever. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
