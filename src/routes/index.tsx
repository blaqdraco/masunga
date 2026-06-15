import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Download, ShieldCheck, Cpu, Network, Camera, Fingerprint,
  Code2, Cloud, Server, GraduationCap, Printer, Headphones, BadgeCheck,
  Truck, Award, Users, Star, CheckCircle2, Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-ict.jpg";
import aboutImg from "@/assets/about-team.jpg";
import cctvImg from "@/assets/svc-cctv.jpg";
import networkImg from "@/assets/svc-network.jpg";
import softwareImg from "@/assets/svc-software.jpg";
import bioImg from "@/assets/svc-biometric.jpg";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JQ Company Limited — ICT Equipment, Software & Office Solutions in Tanzania" },
      { name: "description", content: "Trusted Tanzanian supplier of ICT equipment, networking, CCTV, biometric access, software development and office stationery. Get a quote from Dodoma today." },
      { property: "og:title", content: "JQ Company Limited — ICT & Office Solutions" },
      { property: "og:description", content: "Premium ICT equipment, software and office supplies for businesses, schools and government across Tanzania." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Cpu, title: "ICT Equipment Supply", desc: "Computers, laptops, servers and accessories from trusted global brands." },
  { icon: Network, title: "Networking Solutions", desc: "Structured cabling, routers, switches and enterprise Wi‑Fi." },
  { icon: Camera, title: "CCTV Surveillance", desc: "HD, IP and remote-monitored camera systems for any premises." },
  { icon: Fingerprint, title: "Access & Biometrics", desc: "Biometric attendance, door access and visitor management." },
  { icon: Code2, title: "Software Development", desc: "Custom web, mobile and ERP solutions tailored to your workflow." },
  { icon: Cloud, title: "Cloud & Managed IT", desc: "Hosting, backups, Microsoft 365, monitoring and support." },
  { icon: Server, title: "Data Center Solutions", desc: "Server rooms, UPS, racks and disaster-recovery design." },
  { icon: Printer, title: "Printers & Copiers", desc: "Sales, leasing and maintenance for office print infrastructure." },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Firewalls, endpoint protection and security audits." },
  { icon: GraduationCap, title: "ICT Training", desc: "Practical training for staff, students and administrators." },
  { icon: Headphones, title: "ICT Consultancy", desc: "Strategy, procurement and project management advisory." },
  { icon: BadgeCheck, title: "Office Stationery", desc: "Bulk supply of premium office consumables and furniture." },
];

const stats = [
  { v: "500+", l: "Projects Delivered" },
  { v: "120+", l: "Active Clients" },
  { v: "24/7", l: "Support Response" },
  { v: "4+ yrs", l: "Trusted Partner" },
];

const why = [
  { icon: Award, title: "Certified Expertise", desc: "Vendor‑certified engineers and proven deployment experience." },
  { icon: BadgeCheck, title: "Genuine Products", desc: "Authentic equipment with manufacturer warranty." },
  { icon: Truck, title: "Fast Delivery", desc: "Reliable countrywide logistics from our Dodoma hub." },
  { icon: Headphones, title: "Reliable Support", desc: "Local team available for onsite and remote assistance." },
  { icon: Users, title: "Customer‑First", desc: "Tailored solutions that match your budget and goals." },
  { icon: Sparkles, title: "Quality Promise", desc: "Every order is QC‑checked before it leaves our warehouse." },
];

const testimonials = [
  { name: "Sarah Mwakalinga", role: "Operations Manager, Kibo Logistics", quote: "JQ rolled out our entire CCTV and access control project on time. Their team is responsive and professional." },
  { name: "John Massawe", role: "ICT Officer, Mbeya District Council", quote: "Reliable supplier of computers and printers — pricing is fair and after‑sales support is excellent." },
  { name: "Amina Hassan", role: "Director, Bright Future Academy", quote: "Our school management system from JQ transformed how we handle admissions and fees." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />
        <div className="relative mx-auto max-w-7xl container-px py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Tanzania's Integrated ICT Partner
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-balance leading-[1.05]">
              Technology that
              <span className="bg-gradient-to-r from-brand to-sky-300 bg-clip-text text-transparent"> moves business </span>
              forward.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              From ICT equipment and networks to custom software and office supplies — JQ Company Limited delivers reliable solutions backed by Tanzanian expertise.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/quote" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-brand hover:brightness-110 transition">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur hover:bg-white/10 transition">
                Contact Us
              </Link>
              <a href="#profile" className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-primary-foreground/90 hover:text-brand transition">
                <Download className="h-4 w-4" /> Company Profile
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl md:text-3xl font-extrabold text-brand">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS strip */}
      <section className="border-y border-border bg-soft-gradient">
        <div className="mx-auto max-w-7xl container-px py-8 flex flex-wrap items-center justify-between gap-6">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Trusted brand partners</span>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-muted-foreground font-display font-bold text-lg opacity-80">
            <span>HP</span><span>Dell</span><span>Cisco</span><span>Lenovo</span><span>Microsoft</span><span>Hikvision</span><span>Canon</span><span>APC</span>
          </div>
        </div>
      </section>

      {/* ABOUT preview */}
      <section id="profile" className="mx-auto max-w-7xl container-px py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <img src={aboutImg} alt="JQ Company team" width={1280} height={960} loading="lazy" className="rounded-2xl shadow-elegant object-cover aspect-[4/3]" />
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-brand-gradient text-brand-foreground p-6 shadow-brand max-w-[220px]">
            <div className="font-display text-3xl font-extrabold">2021</div>
            <div className="text-sm mt-1 font-medium">Founded in Dodoma, serving clients nationwide.</div>
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand">About JQ Company</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-balance">A Tanzanian ICT partner built on trust and innovation.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            JQ Company Limited is a fully compliant Tanzanian-owned supplier specialising in ICT equipment, software solutions and general office consumables. We help private businesses, schools, NGOs and government institutions operate more productively through quality products and dependable service.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {["Integrated ICT & stationery offering", "Vendor-certified team", "Nationwide delivery", "Aftersales & maintenance"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" /> <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition">
              <Download className="h-4 w-4" /> Download Profile
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand">Huduma Zetu</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-balance">End‑to‑end services for the modern workplace.</h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-foreground inline-flex items-center gap-1.5 hover:text-brand transition">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-card border border-border hover:border-brand/40 hover:-translate-y-1 transition">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand-gradient group-hover:text-brand-foreground transition">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED solutions with images */}
      <section className="mx-auto max-w-7xl container-px py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand">Featured Solutions</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-balance">Specialised expertise where it matters most.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { img: networkImg, t: "Enterprise Networks", d: "Reliable wired & wireless networks." },
            { img: cctvImg, t: "CCTV Surveillance", d: "24/7 security for any premises." },
            { img: bioImg, t: "Access Control", d: "Biometric attendance & door access." },
            { img: softwareImg, t: "Custom Software", d: "Web, mobile and ERP systems." },
          ].map((c) => (
            <article key={c.t} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-elegant transition">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={c.img} alt={c.t} width={800} height={600} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                  <h3 className="font-display font-bold text-lg">{c.t}</h3>
                  <p className="text-xs text-primary-foreground/80 mt-1">{c.d}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-navy-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand">Why JQ Company</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-balance">Six reasons clients keep coming back.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur hover:bg-white/10 transition">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-brand-foreground shadow-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl container-px py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand">What clients say</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-balance">Trusted by businesses across Tanzania.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-card border border-border p-7 shadow-card">
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl container-px pb-20 md:pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient text-primary-foreground p-10 md:p-16 shadow-elegant">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-balance max-w-2xl">Ready to modernise your office? Let's build the solution together.</h2>
              <p className="mt-4 text-primary-foreground/80 max-w-xl">Get a free no‑obligation quotation tailored to your needs — usually within 24 hours.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link to="/quote" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-brand-foreground shadow-brand">
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-7 py-4 text-sm font-semibold backdrop-blur hover:bg-white/20 transition">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
