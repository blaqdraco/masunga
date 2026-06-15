import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — JQ Company Limited" },
      { name: "description", content: "Get in touch with JQ Company Limited in Dodoma, Tanzania for ICT equipment, software, networking and office supply enquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand">Get in Touch</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold max-w-3xl text-balance">Let's discuss your next ICT project.</h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80 text-lg">Our team usually responds within a few hours during business days.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {[
            { icon: MapPin, t: "Visit Us", v: site.address },
            { icon: Phone, t: "Call Us", v: `${site.phone1}\n${site.phone2}` },
            { icon: Mail, t: "Email Us", v: site.email },
            { icon: Clock, t: "Working Hours", v: site.hours },
          ].map(({ icon: Icon, t, v }) => (
            <div key={t} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand"><Icon className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold text-sm">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground whitespace-pre-line">{v}</div>
              </div>
            </div>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-white p-5 font-semibold hover:brightness-110 transition">
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 rounded-2xl bg-card border border-border p-7 md:p-9 shadow-card"
        >
          <h2 className="font-display text-2xl font-extrabold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>

          {sent ? (
            <div className="mt-8 rounded-xl bg-success/10 border border-success/30 p-5 text-sm">
              ✅ Thanks! Your message has been received. We'll respond shortly.
            </div>
          ) : (
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Service Required" name="service" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea name="message" rows={5} required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand transition" />
              </div>
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-brand hover:brightness-110 transition">
                Send Message <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </section>

      <section className="mx-auto max-w-7xl container-px pb-20">
        <div className="rounded-2xl overflow-hidden border border-border shadow-elegant aspect-[16/7]">
          <iframe
            title="JQ Company Location"
            src="https://www.google.com/maps?q=Dodoma,Tanzania&output=embed"
            width="100%"
            height="100%"
            className="border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}{required && " *"}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand transition"
      />
    </div>
  );
}
