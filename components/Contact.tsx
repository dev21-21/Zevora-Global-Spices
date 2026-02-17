import React from 'react';
import { useContactForm } from '../src/hooks/useContactForm';

const Contact: React.FC = () => {
  const { formData, status, errorMessage, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section
      id="contact"
      className="py-20 bg-surface-light dark:bg-surface-dark bg-grid-pattern"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-slate-900 dark:border-white shadow-2xl rounded-2xl overflow-hidden">

          {/* ── Left Side: Form ── */}
          <div className="p-8 md:p-12 bg-white dark:bg-background-dark relative">
            <div className="absolute top-4 right-4 font-mono text-[9px] text-slate-400 tracking-[0.15em] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
              QUOTE REQUEST
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-[-0.02em]">
              Get a Quote
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 font-sans font-medium text-sm">
              Response within 24 hours
            </p>

            {/* Success Message */}
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-start gap-3">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 mt-0.5">
                  check_circle
                </span>
                <div>
                  <p className="text-green-800 dark:text-green-300 font-sans font-semibold text-sm">
                    Quote request sent successfully!
                  </p>
                  <p className="text-green-600 dark:text-green-400 font-sans text-xs mt-1">
                    We've sent a confirmation to your email. Our team will
                    respond within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3">
                <span className="material-symbols-outlined text-red-600 dark:text-red-400 mt-0.5">
                  error
                </span>
                <div>
                  <p className="text-red-800 dark:text-red-300 font-sans font-semibold text-sm">
                    Failed to send request
                  </p>
                  <p className="text-red-600 dark:text-red-400 font-sans text-xs mt-1">
                    {errorMessage ||
                      'Please try again or email us directly at enquiry@zevoraglobalspices.com'}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot — hidden from humans */}
              <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-mono font-medium text-slate-600 dark:text-slate-400 tracking-[0.1em]"
                  >
                    FULL NAME <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    disabled={status === 'sending'}
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-0 focus:border-primary font-sans font-medium text-sm placeholder:text-slate-400 px-4 py-3 transition-colors disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-[10px] font-mono font-medium text-slate-600 dark:text-slate-400 tracking-[0.1em]"
                  >
                    COMPANY
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    disabled={status === 'sending'}
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-0 focus:border-primary font-sans text-sm placeholder:text-slate-400 px-4 py-3 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-mono font-medium text-slate-600 dark:text-slate-400 tracking-[0.1em]"
                >
                  EMAIL ADDRESS <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  disabled={status === 'sending'}
                  className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-0 focus:border-primary font-sans text-sm placeholder:text-slate-400 px-4 py-3 transition-colors disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="destination"
                  className="text-[10px] font-mono font-medium text-slate-600 dark:text-slate-400 tracking-[0.1em]"
                >
                  DESTINATION PORT
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Port of Destination"
                  disabled={status === 'sending'}
                  className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-0 focus:border-primary font-sans text-sm placeholder:text-slate-400 px-4 py-3 transition-colors disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-[10px] font-mono font-medium text-slate-600 dark:text-slate-400 tracking-[0.1em]"
                >
                  PRODUCT REQUIREMENTS{' '}
                  <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your product specifications, quantity, and any special requirements..."
                  required
                  disabled={status === 'sending'}
                  className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-0 focus:border-primary font-sans text-sm placeholder:text-slate-400 px-4 py-3 resize-none transition-colors disabled:opacity-50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-slate-900 font-sans font-semibold text-sm border-2 border-transparent hover:shadow-lg transition-all flex justify-between items-center group rounded-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                <span>
                  {status === 'sending'
                    ? 'Sending your request...'
                    : status === 'success'
                    ? 'Sent Successfully!'
                    : 'Submit Request'}
                </span>

                {status === 'sending' ? (
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                ) : status === 'success' ? (
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                ) : (
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* ── Right Side: Contact Info ── */}
          <div className="bg-slate-900 relative flex flex-col justify-between p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute inset-0 border-[40px] border-slate-800 rounded-full scale-150"></div>
              <div className="absolute inset-0 border-[80px] border-slate-800 rounded-full scale-[2]"></div>
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite]"></div>
            </div>
            <div className="absolute inset-0 z-0 opacity-40">
              <div
                className="w-full h-full bg-cover bg-center mix-blend-overlay filter grayscale"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOilXyenTDmr-TrO09n0ceOZyK4MOZ_CPJpX5fCvOPe-y38zQqFlj1ZkIbP6-_DmjndnhQsnCEEtPDzeaZDTGAGCXPe0vhL2T-FCu6WvPa-DM_aGAbxnKmM8xbF4Zm0q7elKbLTdSgaBicjuL0X6xj9eWz8JvV4OE0NF8LiosLHQ2zqyBM3o924jerQIQu9cV0Ys5WHWDWGMYI6RNr-RzsyVaPXdqBskQddhjW3HljqItnt5wfY7GXA_fh6-KeTabGxYdbOQAbfG0p')",
                }}
              ></div>
            </div>
            <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAwLDI1NSwxMDAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')]"></div>

            <div className="relative z-10 space-y-8">
              <div>
                <div className="inline-block border border-primary/50 bg-primary/10 text-primary px-3 py-1.5 font-mono text-[9px] mb-3 rounded-full tracking-[0.15em]">
                  HEAD OFFICE
                </div>
                <h3 className="text-white font-display text-2xl md:text-3xl font-bold tracking-[-0.02em]">
                  Contact Information
                </h3>
                <div className="mt-4 space-y-1">
                  <p className="text-white font-sans text-sm font-medium">
                    Zevora Global Spices
                  </p>
                  <p className="text-slate-400 font-sans text-sm">
                    12/45 Spice Market Road
                  </p>
                  <p className="text-slate-400 font-sans text-sm">
                    Kerala, India
                  </p>
                  <p className="text-slate-400 font-mono text-xs tracking-wide mt-2">
                    PIN: 682001
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 text-slate-300 border-b border-slate-800 pb-4 group hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-lg">call</span>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] text-slate-500 tracking-[0.1em] mb-0.5">PHONE</div>
                    <div className="font-sans text-sm font-medium">+91 98765 43210</div>
                  </div>
                </a>

                <a
                  href="mailto:admin@zevoraglobalspices.com"
                  className="flex items-center gap-4 text-slate-300 border-b border-slate-800 pb-4 group hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-lg">mail</span>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] text-slate-500 tracking-[0.1em] mb-0.5">EMAIL</div>
                    <div className="font-sans text-sm font-medium">enquiry@zevoraglobalspices.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300 border-b border-slate-800 pb-4 group hover:text-primary transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] text-slate-500 tracking-[0.1em] mb-0.5">BUSINESS HOURS</div>
                    <div className="font-sans text-sm font-medium">Mon - Sat: 9AM - 6PM IST</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <h4 className="text-white font-sans text-xs font-medium mb-4 tracking-wide">
                Connect With Us
              </h4>
              <div className="flex gap-3">
                <a href="#" className="h-11 w-11 border border-slate-700 hover:border-primary hover:bg-primary/10 text-white hover:text-primary flex items-center justify-center transition-all bg-slate-800/50 rounded-xl" aria-label="Facebook">
                  <span className="text-sm font-sans font-semibold">f</span>
                </a>
                <a href="#" className="h-11 w-11 border border-slate-700 hover:border-primary hover:bg-primary/10 text-white hover:text-primary flex items-center justify-center transition-all bg-slate-800/50 rounded-xl" aria-label="Twitter">
                  <span className="text-sm font-sans font-semibold">𝕏</span>
                </a>
                <a href="#" className="h-11 w-11 border border-slate-700 hover:border-primary hover:bg-primary/10 text-white hover:text-primary flex items-center justify-center transition-all bg-slate-800/50 rounded-xl" aria-label="LinkedIn">
                  <span className="text-xs font-sans font-semibold">in</span>
                </a>
                <a href="https://wa.me/919876543210" className="h-11 w-11 border border-slate-700 hover:border-primary hover:bg-primary/10 text-white hover:text-primary flex items-center justify-center transition-all bg-slate-800/50 rounded-xl" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-lg">chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;