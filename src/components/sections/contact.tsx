"use client";

import { useState, useRef, FormEvent } from "react";
import { Github, Linkedin, Mail, CheckCircle2, AlertCircle, FileText } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { contactInfo } from "@/data/contact";
import type { ContactFormData, SubmitStatus } from "@/types/contact";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Lazy load EmailJS only when form is submitted
      const emailjs = (await import("@emailjs/browser")).default;
      
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus("success");
      // Reset form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name as keyof ContactFormData]: value }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 text-white sm:py-32 lg:py-40"
      style={{
        background: `
          radial-gradient(ellipse 1000px 800px at 75% 35%, rgba(249, 115, 22, 0.18) 0%, transparent 50%),
          #000000
        `,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <TextGenerateEffect
            words="Let's Connect"
            className="text-4xl sm:text-5xl lg:text-6xl"
          />
          <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />
        </div>

        {/* Availability Badge */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-400 sm:text-base">
              {contactInfo.availability}
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 lg:items-start">
            {/* Contact Info Sidebar - Shows first on mobile, second on desktop */}
            <div className="flex flex-col gap-6 lg:col-span-2 lg:h-full lg:justify-between lg:order-2">
              {/* Resume Link */}
              <div 
                className="rounded-3xl backdrop-blur-xl p-8 flex-1 flex flex-col justify-center"
                style={{
                  background: 'rgba(30, 30, 30, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(249, 115, 22, 0.1)',
                }}
              >
                <h3 className="mb-6 text-xl font-semibold text-white">Resume</h3>
                <a
                  href={contactInfo.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl backdrop-blur-md px-4 py-3 transition hover:bg-white/10"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <FileText className="h-5 w-5 text-[#f97316]" />
                  <span className="text-base text-white">View Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div 
                className="rounded-3xl backdrop-blur-xl p-8 flex-1 flex flex-col justify-center"
                style={{
                  background: 'rgba(30, 30, 30, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(249, 115, 22, 0.1)',
                }}
              >
                <h3 className="mb-6 text-xl font-semibold text-white">Connect With Me</h3>
                <div className="space-y-4">
                  {contactInfo.social.map((social) => {
                    const Icon = iconMap[social.icon];
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-xl backdrop-blur-md px-4 py-3 transition hover:bg-white/10"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        <Icon className="h-5 w-5 text-[#f97316]" />
                        <span className="text-base text-white">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Direct Email */}
              <div 
                className="rounded-3xl backdrop-blur-xl p-8 flex-1 flex flex-col justify-center"
                style={{
                  background: 'rgba(30, 30, 30, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(249, 115, 22, 0.1)',
                }}
              >
                <div 
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: 'rgba(249, 115, 22, 0.2)',
                  }}
                >
                  <Mail className="h-6 w-6 text-[#f97316]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all text-base text-white hover:text-[#f97316] transition underline underline-offset-4 decoration-white/40 hover:decoration-[#f97316]"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Contact Form - Shows second on mobile, first on desktop */}
            <div className="lg:col-span-3 lg:order-1">
              <div 
                className="rounded-3xl backdrop-blur-xl p-8 sm:p-10"
                style={{
                  background: 'rgba(30, 30, 30, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(249, 115, 22, 0.1)',
                }}
              >
                <h3 className="mb-8 text-2xl font-semibold text-white sm:text-3xl">
                  Send a Message
                </h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl backdrop-blur-md px-4 py-3 text-white placeholder:text-white focus:outline-none transition"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '1px solid rgba(249, 115, 22, 0.5)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(249, 115, 22, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl backdrop-blur-md px-4 py-3 text-white placeholder:text-white focus:outline-none transition"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '1px solid rgba(249, 115, 22, 0.5)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(249, 115, 22, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl backdrop-blur-md px-4 py-3 text-white placeholder:text-white focus:outline-none transition"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '1px solid rgba(249, 115, 22, 0.5)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(249, 115, 22, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full rounded-xl backdrop-blur-md px-4 py-3 text-white placeholder:text-white focus:outline-none transition resize-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '1px solid rgba(249, 115, 22, 0.5)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(249, 115, 22, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl backdrop-blur-md px-6 py-4 text-base font-semibold text-white transition hover:transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 sm:text-lg"
                    style={{
                      background: 'rgba(249, 115, 22, 0.3)',
                      border: '1px solid rgba(249, 115, 22, 0.5)',
                      boxShadow: '0 4px 16px 0 rgba(249, 115, 22, 0.2)',
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-400">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">{`Message sent successfully! I'll get back to you soon.`}</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">Failed to send message. Please try again or email me directly.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
