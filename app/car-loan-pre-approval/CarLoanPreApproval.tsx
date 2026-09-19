"use client";

import Link from "next/link";
import { ShieldCheck, Zap, CarFront, Phone, CheckCircle2, Clock, Users, MapPin, DollarSign, FileText, CreditCard, UserPlus, Briefcase, Globe } from "lucide-react";

const PHONE_NUMBER = "(343) 307-5919";
const PHONE_LINK = "tel:+13433075919";

export default function CarLoanPreApproval() {
  return (
    <main className="min-h-screen bg-[#F4F7FA] text-[#0D1B2A] antialiased">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        .sr-display { font-family: 'Oswald', 'Arial Narrow', sans-serif; letter-spacing: -0.01em; }
        .sr-body { font-family: 'Inter', system-ui, sans-serif; }
        .sr-hazard { background-image: repeating-linear-gradient(-45deg, #F59E0B 0 14px, #0D1B2A 14px 28px); }
      `}} />

      <div className="sr-body">

        {/* ─── HEADER ─────────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-[#0D1B2A] border-b-2 border-[#F59E0B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" aria-label="ShopRides home">
              <CarFront className="text-[#3AAFE0]" size={24} />
              <span className="sr-display text-xl font-bold text-white uppercase tracking-tight">Shop<span className="text-[#3AAFE0]">Rides</span></span>
            </Link>
            <div className="flex items-center gap-3">
              <a href={PHONE_LINK} className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#3AAFE0]">
                <Phone size={16} /> {PHONE_NUMBER}
              </a>
              <Link href="/form" className="sr-display uppercase tracking-wide px-5 py-2 bg-[#F59E0B] text-[#0D1B2A] font-bold rounded-md text-sm hover:opacity-90 transition-opacity">
                Apply Now
              </Link>
            </div>
          </div>
        </header>

        {/* ─── HERO ───────────────────────────────────── */}
        <section className="bg-[#0D1B2A] pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="sr-display text-4xl md:text-5xl font-bold text-white uppercase leading-tight">
              Get pre-approved for a car loan in Canada
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Apply online from anywhere in Canada. All credit types welcome — including bad credit, consumer proposals, and newcomers. No SIN required to start. No impact on your credit score.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/form" className="sr-display uppercase tracking-wide px-8 py-4 bg-[#F59E0B] text-[#0D1B2A] font-bold rounded-md text-lg hover:opacity-90 transition-opacity">
                Get my free pre-approval
              </Link>
              <a href={PHONE_LINK} className="flex items-center gap-2 text-[#3AAFE0] font-semibold">
                <Phone size={18} /> {PHONE_NUMBER}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400 font-semibold">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="text-[#3AAFE0]" size={16} /> 97% approval rate</span>
              <span className="flex items-center gap-1.5"><DollarSign className="text-[#3AAFE0]" size={16} /> $0 down options</span>
              <span className="flex items-center gap-1.5"><Clock className="text-[#3AAFE0]" size={16} /> Decision in ~24 hours</span>
              <span className="flex items-center gap-1.5"><MapPin className="text-[#3AAFE0]" size={16} /> Canada-wide</span>
            </div>
          </div>
        </section>

        <div className="sr-hazard h-2 w-full" aria-hidden="true" />

        {/* ─── DIRECT ANSWER (AEO block) ──────────────── */}
        <section className="py-10 bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F4F7FA] border-l-4 border-[#3AAFE0] p-6 rounded-r-md">
              <p className="text-[#0D1B2A] font-semibold leading-relaxed">
                Yes, you can get pre-approved for a car loan online in Canada without hurting your credit. ShopRides does not run a hard credit inquiry to start your application. You need a valid driver&apos;s licence and basic employment info — no SIN is required up front. All credit types are accepted, including bad credit, consumer proposals, and newcomers to Canada.
              </p>
            </div>
          </div>
        </section>

        {/* ─── WHAT PRE-APPROVED MEANS ────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="sr-display text-3xl md:text-4xl font-bold text-[#0D1B2A] uppercase">What &ldquo;pre-approved&rdquo; means here</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Pre-approval is a financing decision made <em>before</em> you pick a vehicle. Instead of walking onto a dealer lot and hoping you qualify, you know your buying power and estimated monthly payment range up front.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              With ShopRides, the process is straightforward: submit a short application, receive a pre-approval decision, choose from cars, SUVs, trucks, or vans across Canada, then sign and arrange pickup or delivery. You shop with confidence because the financing question is already answered.
            </p>
          </div>
        </section>

        {/* ─── WHO THIS IS FOR ────────────────────────── */}
        <section className="py-16 bg-[#0D1B2A]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="sr-display text-3xl md:text-4xl font-bold text-white uppercase text-center">Who qualifies for pre-approval</h2>
            <p className="text-center text-gray-400 mt-2 max-w-xl mx-auto">We work with all credit situations across Canada</p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <CreditCard size={24} />, title: "Bad or low credit", desc: "Past missed payments, collections, or a low score won't automatically disqualify you." },
                { icon: <FileText size={24} />, title: "Consumer proposal", desc: "Whether active or discharged, we have lender options that work with consumer proposals." },
                { icon: <ShieldCheck size={24} />, title: "Bankruptcy history", desc: "A past bankruptcy doesn't close the door. Lenders in our network consider post-bankruptcy applicants." },
                { icon: <Briefcase size={24} />, title: "Self-employed", desc: "Variable income or contract work is considered. You'll need to show basic proof of earnings." },
                { icon: <Globe size={24} />, title: "New to Canada", desc: "Little or no Canadian credit history is not a barrier. Newcomer-friendly lenders are part of our network." },
                { icon: <DollarSign size={24} />, title: "$0 down options", desc: "$0 down payment options are available on qualifying vehicles — not guaranteed for every applicant." },
              ].map((card) => (
                <div key={card.title} className="bg-[#142840] border border-[#1E3A5F] rounded-md p-6">
                  <div className="text-[#3AAFE0] mb-3">{card.icon}</div>
                  <h3 className="sr-display text-lg font-bold text-white uppercase">{card.title}</h3>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/form" className="sr-display uppercase tracking-wide px-8 py-3.5 bg-[#F59E0B] text-[#0D1B2A] font-bold rounded-md hover:opacity-90 transition-opacity">
                Check if you qualify
              </Link>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ───────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="sr-display text-3xl md:text-4xl font-bold text-[#0D1B2A] uppercase">How it works</h2>
            <p className="mt-2 text-gray-500">Four steps from application to driving away</p>
            <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Apply online", desc: "Fill out the 2-minute form. No SIN required to start. Basic contact, employment, and vehicle preference." },
                { step: "02", title: "Get your decision", desc: "Our finance team reviews your application and matches you with lenders. Decisions typically come within 24 hours." },
                { step: "03", title: "Choose your vehicle", desc: "Browse cars, SUVs, trucks, and vans from inventory across Canada. Your pre-approval tells you what fits your budget." },
                { step: "04", title: "Sign and drive", desc: "Finalize the paperwork, then pick up your vehicle or have it delivered to you." },
              ].map((s) => (
                <li key={s.step} className="bg-[#F4F7FA] rounded-md border border-gray-200 p-6">
                  <div className="sr-display text-2xl font-bold text-[#1A6FA8] mb-4 pb-4 border-b-2 border-dashed border-gray-300">{s.step}</div>
                  <h3 className="sr-display text-lg font-bold uppercase text-[#0D1B2A]">{s.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── WHAT YOU NEED / DON'T NEED ─────────────── */}
        <section className="py-16 bg-[#F4F7FA]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="sr-display text-3xl md:text-4xl font-bold text-[#0D1B2A] uppercase">What you&apos;ll need to apply</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-md border border-gray-200 p-6">
                <h3 className="sr-display text-xl font-bold text-[#0D1B2A] uppercase mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={22} /> You&apos;ll need
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={16} /> Valid Canadian driver&apos;s licence</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={16} /> Employment or income details (employer name, monthly income)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={16} /> Contact information (phone, email, address)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={16} /> Vehicle type preference (car, SUV, truck, or van)</li>
                </ul>
              </div>
              <div className="bg-white rounded-md border border-gray-200 p-6">
                <h3 className="sr-display text-xl font-bold text-[#0D1B2A] uppercase mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-[#3AAFE0]" size={22} /> You won&apos;t need up front
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2"><ShieldCheck className="text-[#3AAFE0] flex-shrink-0 mt-0.5" size={16} /> No SIN required to start the application</li>
                  <li className="flex items-start gap-2"><ShieldCheck className="text-[#3AAFE0] flex-shrink-0 mt-0.5" size={16} /> No hard credit inquiry during pre-approval</li>
                  <li className="flex items-start gap-2"><ShieldCheck className="text-[#3AAFE0] flex-shrink-0 mt-0.5" size={16} /> No commitment — free to apply</li>
                </ul>
                <p className="mt-4 text-xs text-gray-400">A SIN may be required later during final underwriting with the lender.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CREDIT SCORE & PRIVACY ─────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="sr-display text-3xl md:text-4xl font-bold text-[#0D1B2A] uppercase">Will applying affect your credit score?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              No. ShopRides does not run a hard credit inquiry when you submit the pre-approval form. Your credit score stays exactly where it is. The application is processed through a secure, 256-bit encrypted connection — your personal information is protected at every step.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              A hard inquiry may only happen later if you choose to move forward with a specific lender and finalize a loan — at that point, you&apos;ll know about it in advance.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500 font-semibold">
              <span className="flex items-center gap-1.5"><ShieldCheck className="text-[#3AAFE0]" size={18} /> 256-bit encrypted</span>
              <span className="flex items-center gap-1.5 text-green-600"><CheckCircle2 size={18} /> No credit impact</span>
            </div>
          </div>
        </section>

        {/* ─── RATES & PAYMENTS ────────────────────────── */}
        <section className="py-16 bg-[#F4F7FA]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="sr-display text-3xl md:text-4xl font-bold text-[#0D1B2A] uppercase">Rates, payments, and $0 down</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Your rate and monthly payment depend on your credit profile, the vehicle you choose, and the loan term. As an example, a $25,000 vehicle at 8.9% APR over 72 months works out to roughly $449 per month — but your actual rate may be higher or lower.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              $0 down payment options are available on many qualifying vehicles. Not every applicant will qualify for zero down, but it is a real option in our lender network — not a bait-and-switch. Your pre-approval will spell out what&apos;s available to you.
            </p>
            <p className="mt-3 text-xs text-gray-400">
              Payment example is an estimate only and does not constitute a loan offer. Actual terms depend on creditworthiness, vehicle selection, and lender conditions.
            </p>
            <div className="mt-8">
              <Link href="/form" className="sr-display uppercase tracking-wide px-8 py-3.5 bg-[#1A6FA8] hover:bg-[#3AAFE0] text-white font-bold rounded-md transition-colors">
                See what you qualify for
              </Link>
            </div>
          </div>
        </section>

        {/* ─── WHY SHOPRIDES ──────────────────────────── */}
        <section className="py-16 bg-[#0D1B2A]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="sr-display text-3xl md:text-4xl font-bold text-white uppercase text-center">Why ShopRides vs a bank or dealer lot</h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                { icon: <Users size={22} />, title: "Lender network", desc: "Multiple lenders competing for your business means better odds of approval and competitive rates — not just one bank's decision." },
                { icon: <Globe size={22} />, title: "Nationwide inventory", desc: "You're not limited to one lot. Browse vehicles from across Canada and have them delivered or pick up locally." },
                { icon: <ShieldCheck size={22} />, title: "Online, low pressure", desc: "Apply from your couch. No sitting in a finance office for hours. You control the pace." },
                { icon: <Zap size={22} />, title: "Fast decisions", desc: "Most applicants hear back within 24 hours. No weeks of waiting or follow-up calls to check on status." },
              ].map((item) => (
                <div key={item.title} className="bg-[#142840] border border-[#1E3A5F] rounded-md p-6">
                  <div className="text-[#3AAFE0] mb-3">{item.icon}</div>
                  <h3 className="sr-display text-lg font-bold text-white uppercase">{item.title}</h3>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ───────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="sr-display text-3xl md:text-4xl font-bold text-[#0D1B2A] uppercase text-center">What our customers say</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-4">
              {[
                { name: "Maria S.", location: "Hamilton, ON", quote: "I was turned down by my bank and thought I was out of options. ShopRides matched me with a lender within a day. I drove home in a Civic that weekend." },
                { name: "Ravi P.", location: "Brampton, ON", quote: "New to Canada with no credit history. The process was straightforward — no SIN needed to start, and I got approved for an SUV with a reasonable rate." },
                { name: "Mike T.", location: "Ottawa, ON", quote: "Coming out of a consumer proposal, I wasn't sure anyone would approve me. Got pre-approved in less than 24 hours. The monthly payment fit my budget." },
              ].map((t) => (
                <div key={t.name} className="bg-[#F4F7FA] rounded-md border border-gray-200 p-6">
                  <div className="flex gap-1 text-[#F59E0B] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-3 font-bold text-sm text-[#0D1B2A]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ────────────────────────────────────── */}
        <section className="py-16 bg-[#F4F7FA]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="sr-display text-3xl md:text-4xl font-bold text-[#0D1B2A] uppercase">Frequently asked questions</h2>
            <div className="mt-8 space-y-6">
              {[
                { q: "What does car loan pre-approval mean in Canada?", a: "Pre-approval means a lender has reviewed your basic financial information and given you a conditional approval for financing up to a certain amount. It tells you how much you can spend before you start shopping for a vehicle, so you know your budget and monthly payment range in advance." },
                { q: "Can I get pre-approved with bad credit?", a: "Yes. ShopRides works with a network of lenders that specialize in all credit situations, including bad credit, low credit scores, consumer proposals, and past bankruptcies. A 97% approval rate means most applicants are matched with a financing option." },
                { q: "Do I need a SIN to apply?", a: "No. You do not need to provide your Social Insurance Number to start the pre-approval application. A SIN may be required later if you move forward with a specific lender during final underwriting, but it is not needed for the initial form." },
                { q: "Will pre-approval hurt my credit score?", a: "No. The ShopRides pre-approval application does not trigger a hard credit inquiry. Your credit score will not be affected by submitting the form. A hard inquiry only occurs if you proceed to finalize a loan with a specific lender." },
                { q: "How fast will I get a decision?", a: "Most applicants receive a decision within 24 hours. In many cases, the turnaround is faster. Once pre-approved, you can start browsing vehicles and selecting options right away." },
                { q: "Is a down payment required?", a: "$0 down payment options are available on many qualifying vehicles. Whether you need a down payment depends on your credit profile and the vehicle you choose. Your pre-approval terms will outline what is required." },
                { q: "Which provinces do you serve?", a: "ShopRides serves applicants across all provinces in Canada. Whether you are in Ontario, British Columbia, Alberta, Quebec, or any other province, you can apply online and have a vehicle delivered or arranged for local pickup." },
                { q: "What vehicles can I finance after pre-approval?", a: "Pre-approval covers cars, SUVs, trucks, and vans from inventory across Canada. You are not limited to a single dealer lot. Once approved, your finance specialist will help you find a vehicle that fits your budget and needs." },
              ].map((item) => (
                <details key={item.q} className="group bg-white rounded-md border border-gray-200">
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-bold text-[#0D1B2A] hover:text-[#1A6FA8] transition-colors">
                    <span>{item.q}</span>
                    <span className="text-[#3AAFE0] group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ SCHEMA ─────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "What does car loan pre-approval mean in Canada?", acceptedAnswer: { "@type": "Answer", text: "Pre-approval means a lender has reviewed your basic financial information and given you a conditional approval for financing up to a certain amount, so you know your budget before shopping." } },
                { "@type": "Question", name: "Can I get pre-approved with bad credit?", acceptedAnswer: { "@type": "Answer", text: "Yes. ShopRides works with lenders that specialize in all credit situations including bad credit, consumer proposals, and past bankruptcies." } },
                { "@type": "Question", name: "Do I need a SIN to apply?", acceptedAnswer: { "@type": "Answer", text: "No. A SIN is not required to start the pre-approval application. It may be required later during final underwriting with the lender." } },
                { "@type": "Question", name: "Will pre-approval hurt my credit score?", acceptedAnswer: { "@type": "Answer", text: "No. The pre-approval application does not trigger a hard credit inquiry. Your credit score is not affected." } },
                { "@type": "Question", name: "How fast will I get a decision?", acceptedAnswer: { "@type": "Answer", text: "Most applicants receive a decision within 24 hours." } },
                { "@type": "Question", name: "Is a down payment required?", acceptedAnswer: { "@type": "Answer", text: "$0 down options are available on many qualifying vehicles. Requirements depend on your credit profile and vehicle choice." } },
                { "@type": "Question", name: "Which provinces do you serve?", acceptedAnswer: { "@type": "Answer", text: "ShopRides serves applicants across all provinces in Canada." } },
                { "@type": "Question", name: "What vehicles can I finance after pre-approval?", acceptedAnswer: { "@type": "Answer", text: "Cars, SUVs, trucks, and vans from inventory across Canada." } },
              ],
            }),
          }}
        />

        {/* ─── CLOSING CTA ────────────────────────────── */}
        <section className="py-12 bg-[#0D1B2A] border-t-2 border-[#F59E0B]">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h2 className="sr-display text-2xl md:text-3xl font-bold text-white uppercase">Ready to get pre-approved?</h2>
            <p className="mt-3 text-gray-400">
              Free to apply. No SIN needed. No credit impact. Find out what you qualify for in minutes.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/form" className="sr-display uppercase tracking-wide px-8 py-4 bg-[#F59E0B] text-[#0D1B2A] font-bold rounded-md text-lg hover:opacity-90 transition-opacity">
                Start your pre-approval
              </Link>
              <a href={PHONE_LINK} className="flex items-center gap-2 text-[#3AAFE0] font-semibold">
                <Phone size={18} /> {PHONE_NUMBER}
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Or email us at <a href="mailto:info@shoprides.ca" className="text-[#3AAFE0] hover:underline">info@shoprides.ca</a>
            </p>
          </div>
        </section>

        {/* ─── FOOTER ──────────────────────────────────── */}
        <footer className="bg-[#0D1B2A] text-white pt-12 pb-8 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CarFront className="text-[#3AAFE0]" size={24} />
                <span className="sr-display text-xl font-bold uppercase">Shop<span className="text-[#3AAFE0]">Rides</span></span>
              </div>
              <p className="text-sm text-gray-400">Financing that moves you forward. Serving all provinces across Canada.</p>
            </div>
            <div>
              <h4 className="sr-display font-bold mb-4 uppercase tracking-wide text-sm text-gray-300">Quick links</h4>
              <ul className="space-y-2 text-sm font-semibold">
                <li><Link href="/form" className="text-gray-400 hover:text-[#3AAFE0] transition-colors">Apply now</Link></li>
                <li><Link href="/car-loan-pre-approval" className="text-gray-400 hover:text-[#3AAFE0] transition-colors">Car loan pre-approval</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-400 hover:text-[#3AAFE0] transition-colors">Privacy policy</Link></li>
                <li><Link href="/terms-of-use" className="text-gray-400 hover:text-[#3AAFE0] transition-colors">Terms of use</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="sr-display font-bold mb-4 uppercase tracking-wide text-sm text-gray-300">Contact</h4>
              <ul className="space-y-2 text-sm font-semibold">
                <li><a href={PHONE_LINK} className="text-[#3AAFE0]">{PHONE_NUMBER}</a></li>
                <li><a href="mailto:info@shoprides.ca" className="text-gray-400 hover:text-[#3AAFE0] transition-colors">info@shoprides.ca</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-semibold uppercase tracking-widest border-t border-white/10 pt-6 gap-3">
            <div>&copy; {new Date().getFullYear()} ShopRides Canada. All rights reserved.</div>
            <div className="flex items-center gap-2 text-[#3AAFE0]"><ShieldCheck size={14} /> Secure SSL encrypted</div>
          </div>
        </footer>

      </div>
    </main>
  );
}
