// app/privacy-policy/page.tsx
"use client";

import { ShieldCheck, ArrowLeft, Mail } from "lucide-react";

const sections = [
  { id: "consent", title: "1. Your Consent" },
  { id: "definition", title: "2. Definition of Personal Information" },
  { id: "collect", title: "3. Information We Collect" },
  { id: "use", title: "4. How We Use Your Information" },
  { id: "disclosure", title: "5. Disclosure of Personal Information" },
  { id: "location", title: "6. Cross-Border Data Transfers" },
  { id: "retention", title: "7. Retention & Security" },
  { id: "rights", title: "8. Access & Deletion Rights" },
  { id: "cookies", title: "9. Cookies & Marketing Consent" },
  { id: "language", title: "10. Language / Langue" },
  { id: "contact", title: "11. Contact Us" },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-sm">Last updated: July 30, 2026</p>
          </div>

          <div className="grid md:grid-cols-[220px_1fr] gap-10">
            {/* Table of Contents — sticky sidebar */}
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
              <p>
                Your privacy is important to ShopRides Canada (&quot;ShopRides,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy explains how ShopRides collects, uses, discloses, and retains personal information, including information collected through our websites — shoprides.ca and its financing subdomains (auto.shoprides.ca, powersports.shoprides.ca, equipment.shoprides.ca) — by telephone, and when providing our financing referral services.
              </p>

              <section id="consent">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">1. Your Consent</h2>
                <p>
                  By providing ShopRides with your personal information, you consent to the collection, use, disclosure, and retention of that information in accordance with this Privacy Policy and as otherwise permitted by applicable Canadian law. You may withdraw your consent at any time, subject to legal or contractual restrictions and on reasonable notice to ShopRides; however, withdrawing consent may prevent you from proceeding with your intended application or receiving the full benefit of our financing services.
                </p>
              </section>

              <section id="definition">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">2. Definition of Personal Information</h2>
                <p>
                  In this Privacy Policy, &quot;personal information&quot; means information about an identifiable individual (such as a name, contact details, financial status, or credit details), but does not include (to the extent permitted by law) information that is publicly available or business contact information used to contact an individual at their place of business.
                </p>
              </section>

              <section id="collect">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">3. Information We Collect</h2>
                <div className="space-y-4">
                  <p>
                    <strong className="text-white">Information You Provide:</strong> We collect information you voluntarily provide when interacting with us — such as completing an online application, requesting a callback, or subscribing to updates. This includes your name, address, email address, phone number, employment details, income information, and vehicle or equipment preferences.
                  </p>
                  <p>
                    <strong className="text-white">Phone Verification:</strong> When you submit an application, we may send a one-time verification code (OTP) to your phone number by SMS to confirm you can be reached at that number. This code is used only to verify your submission and is not retained after verification.
                  </p>
                  <p>
                    <strong className="text-white">Telephone Call Recording:</strong> Telephone calls between you and ShopRides may be recorded to ensure accuracy, maintain quality assurance, and verify compliance with contractual obligations. If you prefer not to have your call recorded, you may choose to communicate with us in writing or electronically instead.
                  </p>
                  <p>
                    <strong className="text-white">Credit Reports:</strong> When you apply for financing through ShopRides, you authorize us to obtain, and periodically re-obtain, your credit score and related credit report details from credit reporting agencies (such as Equifax or TransUnion) to evaluate your profile and process your application. Independent dealers or lenders to whom we disclose your information may also request credit reports for legitimate purposes connected to your application.
                  </p>
                  <p>
                    <strong className="text-white">Bank Verification:</strong> Where our website offers bank account verification tools, ShopRides or its third-party providers may retrieve transaction history (without storing your login credentials) to verify income and assess creditworthiness.
                  </p>
                  <p>
                    <strong className="text-white">Referred Transaction Details:</strong> If we refer you to an independent lender, dealership, or partner, we may collect information from that business regarding the status of your transaction to maintain your profile.
                  </p>
                  <p>
                    <strong className="text-white">Automated Collection:</strong> We automatically collect standard technical information when you visit our website, including IP address, browser type, device information, and browsing behaviour. We use cookies, pixels (including Meta and Google), and analytics tools to understand site usage, prevent fraud, and serve relevant advertising. You can disable cookies in your browser settings, though some site functions may be limited.
                  </p>
                </div>
              </section>

              <section id="use">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">4. How We Use Your Information</h2>
                <ul className="list-disc list-outside pl-5 space-y-2">
                  <li>To process, evaluate, and fulfill your applications for auto, powersports, or equipment financing.</li>
                  <li>To correspond with you by phone, text message, and email regarding your inquiry, account updates, and customer service needs.</li>
                  <li>To verify your phone number and identity during the application process.</li>
                  <li>To send you promotional communications and offers regarding ShopRides or third-party products, where you have not opted out.</li>
                  <li>To perform credit evaluations and share necessary details with financing institutions, lenders, and partner dealerships.</li>
                  <li>To maintain, protect, analyze, and improve our services and digital platforms.</li>
                  <li>To protect legal rights, enforce our terms, detect fraud, and comply with legal requirements.</li>
                </ul>
              </section>

              <section id="disclosure">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">5. Disclosure of Personal Information</h2>
                <div className="space-y-4">
                  <p>
                    <strong className="text-white">Referred Transactions:</strong> If ShopRides refers you to an independent partner (a lender, dealership, or insurance broker), we disclose relevant personal information, credit details, and financial history to facilitate the transaction. Independent businesses operate under their own privacy policies, and ShopRides is not responsible for their independent handling of your information.
                  </p>
                  <p>
                    <strong className="text-white">Service Providers:</strong> We share information with third-party providers who assist us with hosting, data storage, credit processing, bank verification, SMS/phone systems, and digital marketing.
                  </p>
                  <p>
                    <strong className="text-white">Law Enforcement:</strong> We may disclose personal information as required by law, such as to comply with a subpoena, court order, or regulatory investigation.
                  </p>
                  <p>
                    <strong className="text-white">Business Transfers:</strong> If ShopRides is involved in a merger, acquisition, or sale of assets, customer information may be transferred as part of that transaction, subject to confidentiality obligations.
                  </p>
                </div>
              </section>

              <section id="location">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">6. Cross-Border Data Transfers</h2>
                <p>
                  ShopRides, its affiliates, and third-party service providers may process, store, and access your personal information at facilities outside your province or outside Canada, including in the United States. Laws in foreign jurisdictions may differ from Canadian privacy statutes and may permit local courts or authorities to access your information under local legal orders.
                </p>
              </section>

              <section id="retention">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">7. Retention &amp; Security</h2>
                <p>
                  We retain your personal information only as long as necessary to fulfill the purposes described in this policy, or to satisfy legal, tax, or accounting requirements. We maintain administrative, technical, and physical safeguards appropriate to the sensitivity of your information. However, no transmission over the internet can be guaranteed 100% secure.
                </p>
              </section>

              <section id="rights">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">8. Access &amp; Deletion Rights</h2>
                <div className="space-y-4">
                  <p>
                    <strong className="text-white">Accuracy:</strong> You are responsible for ensuring the personal information you provide remains accurate and up to date.
                  </p>
                  <p>
                    <strong className="text-white">Access Requests:</strong> You may request access to the personal information we hold about you by contacting our Privacy Officer below. We will respond within reasonable statutory timeframes, subject to identity verification.
                  </p>
                  <p>
                    <strong className="text-white">Deletion Requests:</strong> You may request deletion of your personal information. Subject to legal, contractual, or fraud-prevention requirements, we will take appropriate steps to remove your record from our active systems.
                  </p>
                </div>
              </section>

              <section id="cookies">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">9. Cookies &amp; Marketing Consent</h2>
                <p>
                  Our site uses cookies and tracking technologies, including Meta Pixel and Google Analytics/Tag Manager, to measure site performance and deliver relevant advertising. By using our site and submitting your contact information, you consent to receive marketing communications by phone, SMS, and email. You may withdraw marketing consent at any time by using the unsubscribe link in our emails or by replying &quot;STOP&quot; to SMS messages, without affecting our ability to contact you regarding an active application.
                </p>
              </section>

              <section id="language">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">10. Language / Langue</h2>
                <p>
                  The parties expressly wish that this Privacy Policy and all related documents be drawn up in English. <em>Les parties conviennent et exigent expressément que cette Politique de Confidentialité et tous les documents qui s&apos;y rapportent soient rédigés en anglais.</em>
                </p>
              </section>

              <section id="contact" className="pt-4 border-t border-white/10">
                <h2 className="sr-display text-xl font-bold text-white uppercase mb-3">11. Contact Us</h2>
                <p className="mb-4">
                  If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our Privacy Officer:
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
              <a href="/privacy-policy" className="text-[#3AAFE0]">Privacy Policy</a>
              <a href="/terms-of-use" className="hover:text-gray-300">Terms of Use</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
