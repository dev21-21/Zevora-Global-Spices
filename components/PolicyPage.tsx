import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TabId = 'terms' | 'privacy' | 'shipping' | 'refund';

interface PolicyTab {
  id: TabId;
  label: string;
  icon: string;
  shortLabel: string;
}

const tabs: PolicyTab[] = [
  { id: 'terms', label: 'Terms & Conditions', icon: 'gavel', shortLabel: 'Terms' },
  { id: 'privacy', label: 'Privacy Policy', icon: 'lock', shortLabel: 'Privacy' },
  { id: 'shipping', label: 'Shipping Policy', icon: 'local_shipping', shortLabel: 'Shipping' },
  { id: 'refund', label: 'Refund & Cancellation', icon: 'sync', shortLabel: 'Refund' },
];

const SectionHeading: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <div className="flex items-start gap-4 mb-4 mt-10 first:mt-0">
    <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary font-mono text-sm sm:text-base font-bold flex items-center justify-center">
      {number}
    </span>
    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-0.5 sm:pt-1">
      {title}
    </h3>
  </div>
);

const BulletItem: React.FC<{ children: React.ReactNode; indent?: boolean }> = ({ children, indent = false }) => (
  <li className={`flex items-start gap-3 ${indent ? 'ml-6 sm:ml-8' : ''}`}>
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
    <span className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-sans">{children}</span>
  </li>
);

const PolicyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('terms');
  const effectiveDate = 'February 16, 2026';
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b-2 border-slate-200 dark:border-slate-800">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(13, 242, 13, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 242, 13, 0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-background-dark" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16">
          <div className="flex items-center gap-2 mb-6 text-sm font-mono">
            <a href="/" className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
              Home
            </a>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-slate-600 dark:text-slate-400">Legal</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-primary" />
            <span className="text-primary font-mono text-[11px] font-medium tracking-[0.15em] uppercase">
              Legal Documentation
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4">
            Policies &{' '}
            <span className="text-primary">Terms</span>
          </h1>

          <p className="font-sans text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Transparency and trust are the foundation of our global partnerships.
            Please review our policies governing business transactions and data handling.
          </p>

          <div className="inline-flex items-center gap-2 mt-6 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2">
            <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 tracking-wide">
              Effective: {effectiveDate}
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-28">
              <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 hide-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">{tab.icon}</span>
                    <span className="whitespace-nowrap">{tab.shortLabel}</span>
                  </button>
                ))}
              </div>

              <nav className="hidden lg:block space-y-1">
                <p className="font-mono text-[10px] text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase mb-4 px-3">
                  Sections
                </p>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${
                      activeTab === tab.id
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-lg transition-colors ${
                        activeTab === tab.id
                          ? 'text-primary'
                          : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                      }`}
                    >
                      {tab.icon}
                    </span>
                    {tab.label}
                  </button>
                ))}

                {/* Contact card */}
                <div className="mt-8 p-5 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl">
                  <span className="material-symbols-outlined text-primary text-2xl mb-3 block">support_agent</span>
                  <h4 className="font-sans text-sm font-semibold text-slate-900 dark:text-white mb-1">
                    Have Questions?
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                    Contact our compliance team for policy clarifications.
                  </p>
                  <a
                    href="#contact"
                    onClick={handleContactClick}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer"
                  >
                    Contact Us
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
              {/* Tab Header */}
              <div className="flex items-start gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                    {tabs.find((t) => t.id === activeTab)?.icon}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {tabs.find((t) => t.id === activeTab)?.label}
                  </h2>
                  <p className="font-mono text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 tracking-wide mt-1">
                    Effective Date: {effectiveDate} • Zevora Global Spices
                  </p>
                </div>
              </div>

              {/* TERMS & CONDITIONS */}
              {activeTab === 'terms' && (
                <div className="space-y-2">
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-sans mb-8">
                    Welcome to Zevora Global Spices. By accessing or using this website, you agree to the following terms
                    and conditions. Please read them carefully before engaging in any business transaction.
                  </p>

                  <SectionHeading number="1" title="Business Nature" />
                  <ul className="space-y-3 mb-6">
                    <BulletItem>
                      Zevora Global Spices operates as a B2B exporter of spices including premium Kerala green cardamom,
                      black pepper, and cloves.
                    </BulletItem>
                    <BulletItem>
                      All sales are conducted in bulk quantities and subject to contractual agreement.
                    </BulletItem>
                  </ul>

                  <SectionHeading number="2" title="Product Information" />
                  <ul className="space-y-3 mb-6">
                    <BulletItem>
                      Product specifications such as grade, size (e.g., 8mm+), moisture content, and packaging are
                      provided for reference and may vary slightly depending on harvest season and batch availability.
                    </BulletItem>
                    <BulletItem>
                      Final specifications are confirmed in Proforma Invoice or Sales Contract.
                    </BulletItem>
                  </ul>

                  <SectionHeading number="3" title="Pricing" />
                  <ul className="space-y-3 mb-6">
                    <BulletItem>
                      Prices displayed (if any) are indicative and subject to market fluctuation.
                    </BulletItem>
                    <BulletItem>Final pricing is confirmed through official quotation.</BulletItem>
                  </ul>

                  <SectionHeading number="4" title="Orders & Contracts" />
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-sans mb-3 ml-12 sm:ml-14">
                    All export orders are valid only after:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <BulletItem indent>Signed Sales Contract or Proforma Invoice</BulletItem>
                    <BulletItem indent>Advance payment confirmation (if applicable)</BulletItem>
                  </ul>

                  <SectionHeading number="5" title="Payment Terms" />
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-sans mb-3 ml-12 sm:ml-14">
                    Accepted payment methods:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <BulletItem indent>Bank Transfer (T/T)</BulletItem>
                    <BulletItem indent>Letter of Credit (LC)</BulletItem>
                    <BulletItem indent>Other mutually agreed international payment methods</BulletItem>
                  </ul>
                  <div className="ml-12 sm:ml-14 mb-6 p-4 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl">
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-sans flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5">info</span>
                      Payment terms are defined in the contract and agreed upon before shipment.
                    </p>
                  </div>

                  <SectionHeading number="6" title="Liability Limitation" />
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-sans mb-3 ml-12 sm:ml-14">
                    Zevora Global Spices shall not be liable for delays caused by:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <BulletItem indent>Customs clearance</BulletItem>
                    <BulletItem indent>Port congestion</BulletItem>
                    <BulletItem indent>Force majeure events</BulletItem>
                    <BulletItem indent>Government regulations</BulletItem>
                  </ul>

                  <SectionHeading number="7" title="Intellectual Property" />
                  <ul className="space-y-3">
                    <BulletItem>
                      All content on this website — including text, images, logos, graphics, and design — is owned by
                      Zevora Global Spices and may not be copied, reproduced, or distributed without prior written
                      permission.
                    </BulletItem>
                  </ul>
                </div>
              )}

              {/* PRIVACY POLICY */}
              {activeTab === 'privacy' && (
                <div className="space-y-2">
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-sans mb-8">
                    Zevora Global Spices respects your privacy. This policy outlines how we collect, use, and protect
                    your personal data when you interact with our website and services.
                  </p>

                  <SectionHeading number="1" title="Information We Collect" />
                  <div className="ml-12 sm:ml-14 mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { icon: 'person', label: 'Full Name' },
                        { icon: 'business', label: 'Company Name' },
                        { icon: 'mail', label: 'Email Address' },
                        { icon: 'phone', label: 'Phone Number' },
                        { icon: 'public', label: 'Country' },
                        { icon: 'description', label: 'Inquiry Details' },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800"
                        >
                          <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 font-sans">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <SectionHeading number="2" title="How We Use Information" />
                  <ul className="space-y-3 mb-6">
                    <BulletItem>Respond to export inquiries and business communications</BulletItem>
                    <BulletItem>Send quotations and pricing details</BulletItem>
                    <BulletItem>Process and fulfill orders</BulletItem>
                    <BulletItem>Improve our services and user experience</BulletItem>
                  </ul>

                  <SectionHeading number="3" title="Data Sharing & Protection" />
                  <div className="ml-12 sm:ml-14 space-y-4">
                    <div className="p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-xl">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-xl mt-0.5">
                          verified_user
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-1 font-sans">
                            Your Data is Safe
                          </h4>
                          <p className="text-sm text-emerald-700 dark:text-emerald-400/80 leading-relaxed font-sans">
                            We do <span className="font-bold">NOT</span> sell or share your information with third
                            parties except when required by law or for export processing purposes. All data is stored
                            securely with industry-standard encryption.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SHIPPING POLICY */}
              {activeTab === 'shipping' && (
                <div className="space-y-2">
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-sans mb-8">
                    Zevora Global Spices exports internationally to 50+ countries. Our shipping operations are designed
                    for reliability, compliance, and timely delivery.
                  </p>

                  <SectionHeading number="1" title="Shipping Terms" />
                  <div className="ml-12 sm:ml-14 mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      {['FOB', 'CIF', 'CFR'].map((term) => (
                        <div
                          key={term}
                          className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl"
                        >
                          <span className="font-mono text-lg font-bold text-primary">{term}</span>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-mono uppercase tracking-wider">
                            As Agreed
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 rounded-xl">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-xl">
                        schedule
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 font-sans">
                          Shipment Timeline
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400/80 font-sans">
                          5–15 business days after payment confirmation
                        </p>
                      </div>
                    </div>
                  </div>

                  <SectionHeading number="2" title="Documentation Provided" />
                  <div className="ml-12 sm:ml-14 mb-6">
                    <div className="space-y-2">
                      {[
                        { icon: 'receipt_long', label: 'Commercial Invoice' },
                        { icon: 'inventory_2', label: 'Packing List' },
                        { icon: 'sailing', label: 'Bill of Lading / Airway Bill' },
                        { icon: 'eco', label: 'Phytosanitary Certificate' },
                        { icon: 'flag', label: 'Certificate of Origin' },
                      ].map((doc) => (
                        <div
                          key={doc.label}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors text-base">
                              {doc.icon}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 font-sans">
                            {doc.label}
                          </span>
                          <span className="material-symbols-outlined text-slate-300 dark:text-slate-700 text-base ml-auto">
                            check_circle
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-xl ml-0">
                    <p className="text-sm text-amber-800 dark:text-amber-300 font-sans flex items-start gap-2">
                      <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-base mt-0.5">
                        warning
                      </span>
                      Shipping timelines may vary depending on destination port and customs clearance procedures.
                    </p>
                  </div>
                </div>
              )}

              {/* REFUND & CANCELLATION */}
              {activeTab === 'refund' && (
                <div className="space-y-2">
                  <div className="p-5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-xl mb-8">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-xl mt-0.5">
                        priority_high
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-red-800 dark:text-red-300 mb-1 font-sans">
                          Important Notice
                        </h4>
                        <p className="text-sm text-red-700 dark:text-red-400/80 leading-relaxed font-sans">
                          Due to the perishable nature of agricultural products, our refund and cancellation policies are
                          strictly governed by the terms outlined below.
                        </p>
                      </div>
                    </div>
                  </div>

                  <SectionHeading number="1" title="Cancellation Policy" />
                  <ul className="space-y-3 mb-6">
                    <BulletItem>
                      Orders <span className="font-semibold text-slate-900 dark:text-white">cannot be cancelled</span>{' '}
                      once shipment is dispatched from the origin port.
                    </BulletItem>
                    <BulletItem>
                      Cancellation requests before dispatch may be considered on a case-by-case basis, subject to
                      applicable charges.
                    </BulletItem>
                  </ul>

                  <SectionHeading number="2" title="Refund Policy" />
                  <ul className="space-y-3 mb-6">
                    <BulletItem>
                      Refunds are{' '}
                      <span className="font-semibold text-slate-900 dark:text-white">not applicable</span> after goods
                      have been shipped.
                    </BulletItem>
                    <BulletItem>
                      Any advance payments are governed by the terms specified in the signed Sales Contract.
                    </BulletItem>
                  </ul>

                  <SectionHeading number="3" title="Quality Disputes" />
                  <div className="ml-12 sm:ml-14 space-y-4">
                    <div className="relative border-l-2 border-primary/30 pl-6 space-y-6">
                      {[
                        {
                          step: '01',
                          title: 'Report within 48 Hours',
                          desc: 'Any quality disputes must be reported within 48 hours of delivery at the destination port.',
                        },
                        {
                          step: '02',
                          title: 'Provide Documentation',
                          desc: 'Submit documented proof including photographs, lab reports, and inspection certificates.',
                        },
                        {
                          step: '03',
                          title: 'Review & Resolution',
                          desc: 'Quality claims will be thoroughly reviewed based on contract terms and resolved in good faith.',
                        },
                      ].map((item) => (
                        <div key={item.step} className="relative">
                          <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          </div>
                          <div className="pb-2">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-mono text-xs text-primary font-bold">STEP {item.step}</span>
                            </div>
                            <h4 className="font-sans text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {item.title}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Footer Note */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-400 text-lg">update</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-mono tracking-wide">
                        Last Updated
                      </p>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 font-sans">
                        {effectiveDate}
                      </p>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    onClick={handleContactClick}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-xl transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">help_outline</span>
                    Questions? Contact Us
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default PolicyPage;