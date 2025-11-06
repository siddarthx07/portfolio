"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, Download, CheckCircle2, AlertCircle } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { contactInfo } from "@/data/contact";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
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
      await emailjs.sendForm(
        "service_dgm98ae",
        "template_46up75u",
        formRef.current!,
        "2o4_lM5yWYK_VCrzK"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative py-24 text-cloud sm:py-32 lg:py-40"
      style={{
        background: `
          radial-gradient(ellipse at 20% 30%, #f9731633 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, #f9731633 0%, transparent 50%),
          linear-gradient(135deg, #05080f 0%, #0f172a 50%, #9ca3af22 100%)
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
          <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-cloud/30 to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-cloud/70 leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
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
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur">
                <h3 className="mb-8 text-2xl font-semibold text-cloud sm:text-3xl">
                  Send a Message
                </h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-cloud/80"
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
                      className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-cloud placeholder:text-cloud/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 transition"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-cloud/80"
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
                      className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-cloud placeholder:text-cloud/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-cloud/80"
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
                      className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-cloud placeholder:text-cloud/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 transition"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-cloud/80"
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
                      className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-cloud placeholder:text-cloud/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 transition resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-white/10 px-6 py-4 text-base font-semibold text-cloud transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 sm:text-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-400">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
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

            {/* Contact Info Sidebar */}
            <div className="space-y-8 lg:col-span-2">
              {/* Direct Email */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-6 w-6 text-cloud" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-cloud">Email Me</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all text-base text-cloud/90 hover:text-cloud transition underline underline-offset-4 decoration-cloud/40 hover:decoration-cloud"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Social Links */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur">
                <h3 className="mb-6 text-xl font-semibold text-cloud">Connect With Me</h3>
                <div className="space-y-4">
                  {contactInfo.social.map((social) => {
                    const Icon = iconMap[social.icon];
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 transition hover:border-white/30 hover:bg-slate-800"
                      >
                        <Icon className="h-5 w-5 text-cloud/70" />
                        <span className="text-base text-cloud/80">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Resume Download */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Download className="h-6 w-6 text-cloud" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-cloud">Resume</h3>
                <p className="mb-4 text-sm text-cloud/70">Download my latest resume</p>
                <a
                  href={contactInfo.resume.url}
                  download={contactInfo.resume.filename}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-cloud transition hover:bg-white/20"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
