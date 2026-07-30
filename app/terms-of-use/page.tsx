// app/terms-of-use/page.tsx
"use client";

import { ShieldCheck, ArrowLeft, Mail } from "lucide-react";

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services", title: "2. Services Overview" },
  { id: "submissions", title: "3. User Submissions & Consent" },
  { id: "recording", title: "4. Telephone Call Recording" },
  { id: "ip", title: "5. Intellectual Property" },
  { id: "third-party", title: "6. Third-Party Links & Referrals" },
  { id: "warranties", title: "7. Disclaimer of Warranties" },
  { id: "liability", title: "8. Limitation of Liability" },
  { id: "governing-law", title: "9. Governing Law" },
  { id: "language", title: "10. Language / Langue" },
  { id: "contact", title: "11. Contact Us" },
];

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] antialiased">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        .sr-display { font-family: 'Oswald', 'Arial Narrow', sans-serif; letter-spacing: -0.01em; }
        .sr-body { font-family: 'Inter', system-ui, sans-serif; }
      `}} />

      <div className="sr-body">
        {/* Header */}
        <header className="bg-[#0D1B2A] border-b-2 border-[#F59E0B] sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <ShieldCheck className="text-[#3AAFE0]" size={24} />
              <span className="sr-display text-xl font-bold text-white uppercase tracking-tight">
                Shop<span className="text-[#3AAFE0]">Rides</span>
              </span>
            </a>
            <a href="/" className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </a>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Title */}
          <div className="mb-10">
            <h1 className="sr-display text-3xl md:text-5xl font-bold text-white uppercase mb-3">
              Terms of Use
            </h1>
            <p className="text-gray-500 text-sm">Last updated: July 30, 2026</p>
          </div>

          <div className="grid md:grid-cols-[220px_1fr] gap-10">
            {/* Table of Contents */}
            <aside className="hidden md:block">
              <div className="sticky top-24 bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">On This Page</h3>
                <nav className="space-y-2.5">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-gray-400 hover:text-[#3AAFE0] transition-colors leading-snug"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="bg-[#111E30] border border-white/10 rounded-2xl p-6 md:p-10 space-y-10 text-gray-300 leading-relaxed text-sm md:text-base">
              <section id="acceptance">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">1. Acceptance of Terms</h2>
                <p>
                  Welcome to shoprides.ca and its financing subdomains (the &quot;Site&quot;), operated by ShopRides Canada (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By visiting, browsing, accessing, or submitting information through the Site, you agree to comply with and be bound by these Terms of Use and our Privacy Policy. If you do not accept these terms, please refrain from using our Site and services.
                </p>
              </section>

              <section id="services">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">2. Services Overview</h2>
                <p>
                  ShopRides operates as a financing referral platform based in Canada, connecting consumers with independent third-party credit providers, dealers, and financial institutions for auto, powersports, and heavy equipment financing. ShopRides is not a direct lender, does not issue credit approvals directly, and does not guarantee that any applicant will receive approval, a specific interest rate, or particular loan terms.
                </p>
              </section>

              <section id="submissions">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">3. User Submissions &amp; Consent</h2>
                <p className="mb-3">By submitting an application or information through our Site, you confirm and agree that:</p>
                <ul className="list-disc list-outside pl-5 space-y-2">
                  <li>You are at least 18 years of age (or the legal age of majority in your jurisdiction) and a legal resident of Canada.</li>
                  <li>All information you provide is accurate, true, current, and complete.</li>
                  <li>You authorize ShopRides and its network of independent lending and dealership partners to obtain your credit report, credit score, and financial history from credit reporting agencies (such as Equifax or TransUnion) to evaluate your eligibility.</li>
                  <li>You authorize ShopRides to collect and share bank transaction history where bank verification tools are used during your application.</li>
                  <li>You consent to being contacted by ShopRides and its commercial partners by phone, automated dialer, text message (SMS), and email using the contact details you provide, for transactional updates, application follow-ups, and marketing communications. You may opt out of marketing communications at any time using the unsubscribe or opt-out options provided.</li>
                  <li>You consent to receive a one-time SMS verification code to confirm your phone number as part of the application process.</li>
                </ul>
              </section>

              <section id="recording">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">4. Telephone Call Recording</h2>
                <p>
                  You acknowledge and consent that telephone communications between you and ShopRides representatives may be monitored and recorded for training, quality control, accuracy, and contractual verification purposes.
                </p>
              </section>

              <section id="ip">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">5. Intellectual Property</h2>
                <p>
                  All material on the Site — including its architecture, text, graphics, logos, designs, and software — is the property of ShopRides or its licensors and is protected under Canadian and international copyright and trademark laws. You are granted a limited, non-exclusive, non-transferable license to access the Site for personal, non-commercial use only.
                </p>
              </section>

              <section id="third-party">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">6. Third-Party Links &amp; Referrals</h2>
                <p>
                  The Site may contain links to independent third-party websites, lenders, dealers, or service providers. ShopRides does not control, endorse, or guarantee the content, services, terms, or privacy practices of these third parties. Any agreement, loan, purchase, or obligation entered into between you and a third party is strictly between you and that business. ShopRides assumes no responsibility for third-party products, services, or data handling.
                </p>
              </section>

              <section id="warranties">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">7. Disclaimer of Warranties</h2>
                <p>
                  The Site and all content, services, and functions included are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that access to the Site will be uninterrupted, error-free, or free of security vulnerabilities.
                </p>
              </section>

              <section id="liability">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">8. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, ShopRides, its officers, directors, employees, affiliates, and agents shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of the Site, reliance on information provided, inability to secure financing, or interactions with third-party lenders and dealerships referred through our services.
                </p>
              </section>

              <section id="governing-law">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">9. Governing Law</h2>
                <p>
                  These Terms of Use are governed by, and construed in accordance with, the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles. Any legal action arising from these terms shall be brought in a court of competent jurisdiction in Ontario, Canada.
                </p>
              </section>

              <section id="language">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">10. Language / Langue</h2>
                <p>
                  The parties declare that they have required these Terms of Use and all related documents to be written in English. <em>Les parties déclarent qu&apos;elles ont exigé que cette entente et tous les documents y afférents soient rédigés en anglais.</em>
                </p>
              </section>

              <section id="contact" className="pt-4 border-t border-white/10">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">11. Contact Us</h2>
                <p className="mb-4">
                  For questions or notices regarding these Terms of Use, please contact us:
                </p>
                <a
                  href="mailto:info@shoprides.ca"
                  className="inline-flex items-center gap-2 bg-[#3AAFE0]/10 border border-[#3AAFE0]/30 text-[#3AAFE0] px-5 py-3 rounded-xl font-semibold hover:bg-[#3AAFE0]/20 transition-colors"
                >
                  <Mail size={16} /> info@shoprides.ca
                </a>
              </section>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 px-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <span>© 2026 ShopRides Canada. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
              <a href="/terms-of-use" className="text-[#3AAFE0]">Terms of Use</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
