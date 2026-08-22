"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle, AlertCircle } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject) errs.subject = "Please select a subject.";
    if (!formData.message.trim()) errs.message = "Please enter your message.";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorField = document.querySelector("[aria-invalid='true']");
      if (firstErrorField instanceof HTMLElement) firstErrorField.focus();
      return;
    }

    setSending(true);
    try {
      const honeypot = (e.target as HTMLFormElement).website?.value;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website: honeypot }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
    } catch (err) {
      setErrors({
        message: err instanceof Error ? err.message : "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/contact/contact-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--netcb-base)]/95 via-[var(--netcb-base)]/80 to-[var(--netcb-base)]/60" />
        </div>
        <div className="absolute bottom-6 right-6 opacity-10">
          <img src="/netcb-logo-white.png" alt="" className="h-12 w-auto" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6 leading-tight">
              Let&apos;s explore how
              <br />
              <span className="text-accent">we can assist.</span>
            </h1>
            <p className="text-lg text-[var(--netcb-text-muted)] max-w-2xl leading-relaxed">
              Whether you need a technical consultation, a proof of concept, or
              want to discuss a specific challenge — our team is ready to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-6">
                      Get in touch
                    </h2>
                    <div className="space-y-4">
                      <div className="p-4 glass rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center text-[var(--netcb-accent)]">
                            <Phone className="w-5 h-5" />
                          </div>
                          <div className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider">
                            Call us for any query
                          </div>
                        </div>
                        <div className="space-y-2 ml-[52px]">
                          <a href="tel:+254707112232" className="flex items-center gap-2 group">
                            <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] w-24">Kenya:</span>
                            <span className="text-sm font-semibold text-[var(--netcb-text)] group-hover:text-[var(--netcb-accent)] transition-colors">+254 707 112 232</span>
                          </a>
                          <a href="tel:+27128804040" className="flex items-center gap-2 group">
                            <span className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] w-24">South Africa:</span>
                            <span className="text-sm font-semibold text-[var(--netcb-text)] group-hover:text-[var(--netcb-accent)] transition-colors">+27 12 880 4040</span>
                          </a>
                        </div>
                      </div>

                      <a
                        href="mailto:info@netcb.com"
                        className="flex items-center gap-4 p-4 glass rounded-xl hover:glass-elevated transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center text-[var(--netcb-accent)]">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider mb-0.5">
                            Email us
                          </div>
                          <div className="text-sm font-semibold text-[var(--netcb-text)] group-hover:text-[var(--netcb-accent)] transition-colors">
                            info@netcb.com
                          </div>
                        </div>
                      </a>

                      <div className="p-4 glass rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center text-[var(--netcb-accent)]">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider">
                            Our locations
                          </div>
                        </div>
                        <div className="space-y-3 ml-[52px]">
                          <div>
                            <div className="text-sm font-semibold text-[var(--netcb-text)]">Kenya</div>
                            <div className="text-xs text-[var(--netcb-text-muted)]">Kahawa Sukari Avenue, Nairobi</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[var(--netcb-text)]">South Africa</div>
                            <div className="text-xs text-[var(--netcb-text-muted)]">Innovation Centre, The Innovation Hub<br />1 Mark Shuttleworth Street, Pretoria</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[var(--netcb-text)]">Botswana</div>
                            <div className="text-xs text-[var(--netcb-text-muted)]">Unit 4, Gaborone International Commerce Park<br />Plot 99, Gaborone</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 glass rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center text-[var(--netcb-accent)]">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider mb-0.5">
                            Business hours
                          </div>
                          <div className="text-sm text-[var(--netcb-text-muted)]">
                            Mon — Fri, 08:00 — 17:00 SAST
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass rounded-xl p-6">
                    <h3 className="text-sm font-semibold text-[var(--netcb-text)] mb-3">
                      Direct emails
                    </h3>
                    <div className="space-y-2 text-sm">
                      <a href="mailto:partners@netcb.com" className="block text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors">
                        partners@netcb.com
                      </a>
                      <a href="mailto:support@netcb.com" className="block text-[var(--netcb-text-muted)] hover:text-[var(--netcb-accent)] transition-colors">
                        support@netcb.com
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={100}>
                {submitted ? (
                  <div className="glass rounded-2xl p-12 text-center">
                    <CheckCircle className="w-16 h-16 text-[var(--netcb-success)] mx-auto mb-6" />
                    <h3 className="text-2xl font-bold font-[var(--font-display)] text-[var(--netcb-text)] mb-3">
                      Message received
                    </h3>
                    <p className="text-[var(--netcb-text-muted)] mb-6">
                      Thank you for reaching out. A member of our team will respond
                      within one business day.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setErrors({});
                        setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
                      }}
                      className="text-sm text-[var(--netcb-accent)] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-6" noValidate>
                    <h3 className="text-lg font-semibold font-[var(--font-display)] text-[var(--netcb-text)]">
                      Send us a message
                    </h3>

                    {Object.keys(errors).length > 0 && (
                      <div role="alert" tabIndex={-1} className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                        <p className="text-sm font-semibold text-red-400 mb-1">Please fix the following errors:</p>
                        <ul className="text-sm text-red-400/80 list-disc list-inside space-y-0.5">
                          {Object.values(errors).map((err) => (
                            <li key={err}>{err}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider mb-2">
                          Full name <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => { setFormData({ ...formData, name: e.target.value }); if (errors.name) setErrors((prev) => ({ ...prev, name: undefined })); }}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={`w-full px-4 py-3 bg-[var(--netcb-surface-2)] border rounded-lg text-sm text-[var(--netcb-text)] placeholder:text-[var(--netcb-text-muted)]/50 focus:border-[var(--netcb-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--netcb-accent)] transition-colors ${errors.name ? "border-red-500" : "border-[var(--netcb-border)]"}`}
                          placeholder="Your name"
                        />
                        {errors.name && <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider mb-2">
                          Email <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => { setFormData({ ...formData, email: e.target.value }); if (errors.email) setErrors((prev) => ({ ...prev, email: undefined })); }}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={`w-full px-4 py-3 bg-[var(--netcb-surface-2)] border rounded-lg text-sm text-[var(--netcb-text)] placeholder:text-[var(--netcb-text-muted)]/50 focus:border-[var(--netcb-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--netcb-accent)] transition-colors ${errors.email ? "border-red-500" : "border-[var(--netcb-border)]"}`}
                          placeholder="you@company.com"
                        />
                        {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider mb-2">
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 bg-[var(--netcb-surface-2)] border border-[var(--netcb-border)] rounded-lg text-sm text-[var(--netcb-text)] placeholder:text-[var(--netcb-text-muted)]/50 focus:border-[var(--netcb-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--netcb-accent)] transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider mb-2">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-[var(--netcb-surface-2)] border border-[var(--netcb-border)] rounded-lg text-sm text-[var(--netcb-text)] placeholder:text-[var(--netcb-text-muted)]/50 focus:border-[var(--netcb-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--netcb-accent)] transition-colors"
                          placeholder="+27..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider mb-2">
                        Subject <span aria-hidden="true">*</span>
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => { setFormData({ ...formData, subject: e.target.value }); if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined })); }}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                        className={`w-full px-4 py-3 bg-[var(--netcb-surface-2)] border rounded-lg text-sm text-[var(--netcb-text)] focus:border-[var(--netcb-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--netcb-accent)] transition-colors ${errors.subject ? "border-red-500" : "border-[var(--netcb-border)]"}`}
                      >
                        <option value="">Select a topic</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="hybrid-cloud">Hybrid Cloud</option>
                        <option value="digital-workspaces">Digital Workspaces</option>
                        <option value="open-source">Open Source Solutions</option>
                        <option value="support">Support Services</option>
                        <option value="partnership">Partnership Enquiry</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && <p id="subject-error" className="mt-1 text-xs text-red-400">{errors.subject}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] uppercase tracking-wider mb-2">
                        Message <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => { setFormData({ ...formData, message: e.target.value }); if (errors.message) setErrors((prev) => ({ ...prev, message: undefined })); }}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={`w-full px-4 py-3 bg-[var(--netcb-surface-2)] border rounded-lg text-sm text-[var(--netcb-text)] placeholder:text-[var(--netcb-text-muted)]/50 focus:border-[var(--netcb-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--netcb-accent)] transition-colors resize-none ${errors.message ? "border-red-500" : "border-[var(--netcb-border)]"}`}
                        placeholder="Tell us about your requirements..."
                      />
                      {errors.message && <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>}
                    </div>

                    {/* Honeypot */}
                    <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-lg bg-[var(--netcb-accent)] text-[var(--netcb-base)] hover:bg-[var(--netcb-accent-hover)] active:bg-[var(--netcb-accent-active)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-busy={sending}
                    >
                      {sending ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                            <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations with Maps */}
      <section className="relative py-24 border-t border-[var(--netcb-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-[var(--font-display)] text-[var(--netcb-text)]">
                Our offices
              </h2>
              <p className="text-[var(--netcb-text-muted)] mt-4 max-w-2xl mx-auto">
                Find us across Africa — Kenya, South Africa, and Botswana.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Kenya */}
            <AnimatedSection delay={0}>
              <div className="glass rounded-2xl overflow-hidden hover:glass-elevated transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 bg-[var(--netcb-surface-2)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.5!2d36.95!3d-1.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zKahawa+Sukari,+Nairobi!5e0!3m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NETCB Kenya Office"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[var(--netcb-accent)]" />
                    </div>
                    <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)]">Kenya</h3>
                  </div>
                  <p className="text-sm text-[var(--netcb-text-muted)] flex-1">
                    Kahawa Sukari Avenue<br />Nairobi, Kenya
                  </p>
                  <a href="tel:+254707112232" className="mt-4 text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] hover:text-[var(--netcb-accent-hover)] transition-colors">
                    +254 707 112 232
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* South Africa */}
            <AnimatedSection delay={100}>
              <div className="glass rounded-2xl overflow-hidden hover:glass-elevated transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 bg-[var(--netcb-surface-2)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5!2d28.2625!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVGhl+SW5ub3ZhdGlvbitIdWIN!5e0!3m2!1sen!2za"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NETCB South Africa Office"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[var(--netcb-accent)]" />
                    </div>
                    <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)]">South Africa</h3>
                  </div>
                  <p className="text-sm text-[var(--netcb-text-muted)] flex-1">
                    Innovation Centre, The Innovation Hub<br />1 Mark Shuttleworth Street<br />Pretoria, South Africa
                  </p>
                  <a href="tel:+27128804040" className="mt-4 text-xs font-[var(--font-mono)] text-[var(--netcb-accent)] hover:text-[var(--netcb-accent-hover)] transition-colors">
                    +27 12 880 4040
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Botswana */}
            <AnimatedSection delay={200}>
              <div className="glass rounded-2xl overflow-hidden hover:glass-elevated transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 bg-[var(--netcb-surface-2)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5!2d25.913!3d-24.656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR2Fib3JvbmUrSW50ZXJuYXRpb25hbCtDb21tZXJjZStQYXJr!5e0!3m2!1sen!2sbw"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NETCB Botswana Office"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--netcb-accent-dim)] flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[var(--netcb-accent)]" />
                    </div>
                    <h3 className="font-[var(--font-display)] font-semibold text-[var(--netcb-text)]">Botswana</h3>
                  </div>
                  <p className="text-sm text-[var(--netcb-text-muted)] flex-1">
                    Unit 4, Gaborone International Commerce Park<br />Plot 99<br />Gaborone, Botswana
                  </p>
                  <span className="mt-4 text-xs font-[var(--font-mono)] text-[var(--netcb-text-muted)] italic">
                    Phone pending
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
