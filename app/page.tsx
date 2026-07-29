// app/page.tsx — ShopRides.ca Main Hub
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CarFront, Bike, HardHat, ArrowRight,
  ShieldCheck, Zap, CheckCircle2, Phone,
  Star, Users, Clock, DollarSign,
} from "lucide-react";

export default function ShopRidesHub() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const verticals = [
    {
      title: "Auto Financing",
      subtitle: "Cars, SUVs, Trucks & Vans",
      description: "Bad credit? No problem. Get pre-approved for a car loan in minutes with $0 down options available across Canada.",
      url: "https://auto.shoprides.ca",
      icon: <CarFront size={32} />,
      color: "#3AAFE0",
      features: ["All credit types welcome", "$0 down options", "24-hour approval", "Canada-wide delivery"],
      cta: "Apply for Auto Financing",
      image: "https://assets.cdn.filesafe.space/H3ivbExf1vNWxvYLjQZ0/media/6a6a172e855e61906974c264.jpg",
    },
    {
      title: "Powersports Financing",
      subtitle: "ATVs, Motorcycles, Snowmobiles & More",
      description: "Finance your next adventure. Whether it's a motorcycle, ATV, or snowmobile — we make powersports affordable.",
      url: "https://powersports.shoprides.ca",
      icon: <Bike size={32} />,
      color: "#F59E0B",
      features: ["Motorcycles & ATVs", "Snowmobiles & PWCs", "Flexible terms", "Fast approval"],
      cta: "Apply for Powersports",
      image: "https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Heavy Equipment Financing",
      subtitle: "Construction, Agriculture & Commercial",
      description: "Get the equipment your business needs. Flexible financing for excavators, loaders, trailers, and more.",
      url: "https://equipment.shoprides.ca",
      icon: <HardHat size={32} />,
      color: "#22C55E",
      features: ["Construction equipment", "Agricultural machinery", "Commercial vehicles", "Business-friendly terms"],
      cta: "Apply for Equipment",
      image: "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0D1B2A] antialiased">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        .sr-display { font-family: 'Oswald', 'Arial Narrow', sans-serif; letter-spacing: -0.01em; }
        .sr-body { font-family: 'Inter', system-ui, sans-serif; }
      `}} />

      <div className="sr-body">

        {/* ── HEADER ── */}
        <header className="bg-[#0D1B2A] border-b-2 border-[#F59E0B] sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <CarFront className="text-[#3AAFE0]" size={28} />
              <span className="sr-display text-2xl font-bold text-white uppercase tracking-tight">
                Shop<span className="text-[#3AAFE0]">Rides</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+13433075919" className="hidden sm:flex items-center gap-2 text-[#3AAFE0] text-sm font-semibold hover:text-white transition-colors">
                <Phone size={16} /> 343-307-5919
              </a>
            </div>
          </div>
        </header>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0D1B2A] to-[#0D1B2A]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#3AAFE0]/5 rounded-full blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Financing That Moves You Forward</span>
              </div>

              <h1 className="sr-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase leading-[0.9] mb-6">
                One Platform.<br />
                <span className="text-[#3AAFE0]">Every Ride.</span>
              </h1>

              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Whether you need a car, a powersports vehicle, or heavy equipment — ShopRides connects you with Canada&apos;s top lenders for fast, flexible financing.
              </p>

              <div className="flex flex-wrap justify-center gap-3 text-sm text-white font-semibold">
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg">
                  <ShieldCheck className="text-[#3AAFE0]" size={18} /> All Credit Types
                </span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg">
                  <Zap className="text-[#F59E0B]" size={18} /> Fast Approval
                </span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg">
                  <DollarSign className="text-[#22C55E]" size={18} /> $0 Down Options
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CHOOSE YOUR PATH ── */}
        <section className="py-16 md:py-24 bg-[#0D1B2A] px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="sr-display text-3xl md:text-5xl font-bold text-white uppercase mb-3">
                What Are You Financing?
              </h2>
              <p className="text-gray-400 text-lg">Select a category to get started with your application</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {verticals.map((v, i) => (
                <motion.a
                  key={v.title}
                  href={v.url}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-[#111E30] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl"
                  style={{ boxShadow: `0 0 0 0 ${v.color}00` }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${v.color}15`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${v.color}00`; }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111E30] via-[#111E30]/40 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${v.color}20` }}>
                      <span style={{ color: v.color }}>{v.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="sr-display text-2xl font-bold text-white uppercase mb-1">{v.title}</h3>
                    <p className="text-sm font-semibold mb-4" style={{ color: v.color }}>{v.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{v.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {v.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 size={14} style={{ color: v.color }} className="shrink-0" />
                          <span className="text-gray-300">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div
                      className="flex items-center justify-between px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 group-hover:gap-3"
                      style={{ backgroundColor: `${v.color}15`, color: v.color }}
                    >
                      <span className="sr-display uppercase tracking-wide">{v.cta}</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-[#0A1628] py-12 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Users size={24} />, value: "5,000+", label: "Canadians Financed" },
              { icon: <CheckCircle2 size={24} />, value: "97%", label: "Approval Rate" },
              { icon: <Clock size={24} />, value: "24hrs", label: "Average Decision" },
              { icon: <DollarSign size={24} />, value: "$0", label: "Down Options" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center py-6"
              >
                <div className="text-[#3AAFE0] flex justify-center mb-3">{stat.icon}</div>
                <div className="sr-display text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── WHY SHOPRIDES ── */}
        <section className="py-16 md:py-24 bg-[#0D1B2A] px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="sr-display text-3xl md:text-5xl font-bold text-white uppercase mb-3">
                Why Choose ShopRides?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We&apos;re not a dealership. We&apos;re your financing partner — connecting you with the best lenders across Canada.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: <ShieldCheck size={24} />,
                  title: "All Credit Welcome",
                  desc: "Bad credit, consumer proposals, bankruptcy, newcomers to Canada — we work with every situation.",
                  color: "#3AAFE0",
                },
                {
                  icon: <Zap size={24} />,
                  title: "Fast & Simple",
                  desc: "Apply online in 3 minutes. No SIN required, no impact on your credit score. Get a decision within 24 hours.",
                  color: "#F59E0B",
                },
                {
                  icon: <DollarSign size={24} />,
                  title: "Best Rates Guaranteed",
                  desc: "We partner with 12+ lenders to find you the most competitive rates and flexible terms available.",
                  color: "#22C55E",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${item.color}15` }}>
                    <span style={{ color: item.color }}>{item.icon}</span>
                  </div>
                  <h3 className="sr-display text-lg font-bold text-white uppercase mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 md:py-24 bg-[#0A1628] px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="sr-display text-3xl md:text-4xl font-bold text-white uppercase mb-3">Real People. Real Approvals.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { n: "Maria T.", l: "Ontario", r: "I was turned down by two banks but ShopRides approved me in 24 hours. I'm driving a 2021 Civic now!" },
                { n: "Ravi S.", l: "Ontario", r: "Came to Canada two years ago with no credit history. They got me into a Hyundai Elantra with zero down." },
                { n: "Mike D.", l: "Ontario", r: "Self-employed tradesman — banks always said no. ShopRides worked with my income situation. Highly recommend." },
              ].map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex gap-0.5 mb-4 text-[#F59E0B]">
                    {[...Array(5)].map((_, s) => <Star key={s} fill="currentColor" size={16} />)}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">&ldquo;{review.r}&rdquo;</p>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-white font-bold text-sm">{review.n}</div>
                    <div className="text-gray-500 text-xs">{review.l}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-20 bg-[#0D1B2A] px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="sr-display text-3xl md:text-5xl font-bold text-white uppercase mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Choose your financing type and apply in minutes. No impact on your credit score.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {verticals.map((v) => (
                <a
                  key={v.title}
                  href={v.url}
                  className="sr-display uppercase tracking-wide px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: v.color,
                    color: v.color === "#F59E0B" ? "#0D1B2A" : "#fff",
                  }}
                >
                  {v.icon} {v.title.split(" ")[0]}
                  <ArrowRight size={16} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-[#0D1B2A] border-t-2 border-[#F59E0B] pt-12 pb-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-10">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2.5 mb-4">
                  <CarFront className="text-[#3AAFE0]" size={28} />
                  <span className="sr-display text-2xl font-bold text-white uppercase tracking-tight">
                    Shop<span className="text-[#3AAFE0]">Rides</span>
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  ShopRides Canada — Financing That Moves You Forward. Auto loans, powersports financing, and heavy equipment lending across Canada.
                </p>
              </div>

              <div>
                <h4 className="sr-display font-bold text-sm text-gray-300 uppercase tracking-wide mb-4">Our Services</h4>
                <ul className="space-y-2.5 text-sm">
                  <li><a href="https://auto.shoprides.ca" className="text-gray-400 hover:text-[#3AAFE0] transition-colors">Auto Financing</a></li>
                  <li><a href="https://powersports.shoprides.ca" className="text-gray-400 hover:text-[#F59E0B] transition-colors">Powersports Financing</a></li>
                  <li><a href="https://equipment.shoprides.ca" className="text-gray-400 hover:text-[#22C55E] transition-colors">Equipment Financing</a></li>
                </ul>
              </div>

              <div>
                <h4 className="sr-display font-bold text-sm text-gray-300 uppercase tracking-wide mb-4">Contact</h4>
                <ul className="space-y-2.5 text-sm">
                  <li><a href="tel:+13433075919" className="text-[#3AAFE0] font-semibold">📞 (343) 307-5919</a></li>
                  <li><a href="mailto:info@shoprides.ca" className="text-gray-400 hover:text-[#3AAFE0] transition-colors">✉️ info@shoprides.ca</a></li>
                  <li className="pt-2"><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Terms of Use</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500 uppercase tracking-wider font-semibold">
              <span>© 2026 ShopRides Canada. All rights reserved.</span>
              <span className="flex items-center gap-1.5 text-[#3AAFE0]">
                <ShieldCheck size={14} /> Secure SSL Encrypted
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
