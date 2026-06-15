import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, Mail } from "lucide-react";
import { whatsappLink, site } from "@/lib/site";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — JQ Company Limited" },
      { name: "description", content: "Request a fast, no‑obligation quotation for ICT equipment, software, networking, CCTV, or office supplies from JQ Company Limited." },
    ],
  }),
  component: Quote,
});

const services = ["ICT Equipment", "Networking", "CCTV / Security", "Access Control", "Software Development", "Office Stationery", "Printers & Copiers", "Cloud / Managed IT", "Other"];

function Quote() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand">Request a Quote</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold max-w-3xl text-balance">Get a tailored quotation in 24 hours.</h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80 text-lg">Tell us what you need and we'll prepare a detailed quotation with the best pricing.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20 grid lg:grid-cols-[1fr_1.4fr] gap-10">
        <aside className="space-y-5">
          <div className="rounded-2xl bg-card border border-border p-7 shadow-card">
            <h3 className="font-display font-bold text-lg">Why request from JQ?</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {["Free, no‑obligation quotation", "Genuine products with warranty", "Competitive pricing", "Fast nationwide delivery", "Dedicated account manager"].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-brand shrink-0" /> {t}</li>
              ))}
            </ul>
          </div>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-white p-5 font-semibold hover:brightness-110 transition">
            <MessageCircle className="h-5 w-5" /> Quick Quote on WhatsApp
          </a>
          <a href={`mailto:${site.email}?subject=Quotation%20Request`} className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card p-5 font-semibold hover:bg-secondary transition">
            <Mail className="h-5 w-5 text-brand" /> Email a Quote Request
          </a>
        </aside>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl bg-card border border-border p-7 md:p-9 shadow-card"
        >
          {sent ? (
            <div className="rounded-xl bg-success/10 border border-success/30 p-6 text-sm">
              ✅ Thanks for your request! Our team will respond with a detailed quotation shortly.
            </div>
          ) : (
            <>
              <h2 className="font-display text-2xl font-extrabold">Online Quotation Form</h2>
              <p className="mt-1 text-sm text-muted-foreground">All fields marked * are required.</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" required />
                <Field label="Company / Organisation" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone / WhatsApp" name="phone" required />

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service / Product Category *</label>
                  <select required name="service" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand transition">
                    <option value="">Select a category</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <Field label="Quantity / Budget (optional)" name="budget" className="sm:col-span-2" />

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Describe your requirements *</label>
                  <textarea required name="message" rows={6} placeholder="E.g. 10 HP laptops with Microsoft Office, deployment in Dar es Salaam by end of month..." className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand transition" />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Upload requirements (optional)</label>
                  <input type="file" name="file" className="mt-2 w-full rounded-xl border border-dashed border-border bg-background px-4 py-6 text-sm" />
                </div>

                <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-brand hover:brightness-110 transition">
                  Submit Quotation Request <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          )}
        </form>
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
