"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-[var(--netcb-success)] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[var(--netcb-text)] mb-2">
          Thank you for contacting us!
        </h3>
        <p className="text-[var(--netcb-text-muted)]">
          We have received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--netcb-text)] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-[var(--netcb-surface)] border border-[var(--netcb-border-bright)] text-[var(--netcb-text)] placeholder-[var(--netcb-text-muted)] focus:outline-none focus:border-[var(--netcb-accent)] transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--netcb-text)] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-[var(--netcb-surface)] border border-[var(--netcb-border-bright)] text-[var(--netcb-text)] placeholder-[var(--netcb-text-muted)] focus:outline-none focus:border-[var(--netcb-accent)] transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[var(--netcb-text)] mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[var(--netcb-surface)] border border-[var(--netcb-border-bright)] text-[var(--netcb-text)] placeholder-[var(--netcb-text-muted)] focus:outline-none focus:border-[var(--netcb-accent)] transition-colors"
            placeholder="Your Company"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--netcb-text)] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[var(--netcb-surface)] border border-[var(--netcb-border-bright)] text-[var(--netcb-text)] placeholder-[var(--netcb-text-muted)] focus:outline-none focus:border-[var(--netcb-accent)] transition-colors"
            placeholder="+27 12 345 6789"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[var(--netcb-text)] mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-[var(--netcb-surface)] border border-[var(--netcb-border-bright)] text-[var(--netcb-text)] focus:outline-none focus:border-[var(--netcb-accent)] transition-colors"
        >
          <option value="">Select a subject</option>
          <option value="cybersecurity">Cybersecurity Solutions</option>
          <option value="cloud">Hybrid Cloud Services</option>
          <option value="workspace">Digital Workspaces</option>
          <option value="support">Enterprise Support</option>
          <option value="partnership">Partnership Inquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--netcb-text)] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-[var(--netcb-surface)] border border-[var(--netcb-border-bright)] text-[var(--netcb-text)] placeholder-[var(--netcb-text-muted)] focus:outline-none focus:border-[var(--netcb-accent)] transition-colors resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[var(--netcb-accent)] text-[var(--netcb-base)] font-semibold hover:bg-[var(--netcb-accent-hover)] disabled:opacity-50 transition-all btn-magnetic"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-[var(--netcb-base)]/30 border-t-[var(--netcb-base)] rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
