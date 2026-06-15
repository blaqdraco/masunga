import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Cpu, Network, Camera, Fingerprint, Code2, Cloud, Server, GraduationCap,
  Printer, Headphones, BadgeCheck, ShieldCheck, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services (Huduma Zetu) — JQ Company Limited" },
      { name: "description", content: "Complete ICT services: equipment supply, networking, CCTV, biometrics, software development, cloud, cybersecurity and ICT training in Tanzania." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Cpu, title: "ICT Equipment Supply", desc: "Computers, laptops, servers, peripherals and accessories from globally trusted brands.", items: ["Desktops & Laptops", "Servers & Storage", "Monitors & Peripherals"] },
  { icon: BadgeCheck, title: "Office Stationery & Supplies", desc: "Comprehensive office consumables, furniture and specialised stationery in bulk.", items: ["Paper & Toner", "Office Furniture", "General Consumables"] },
  { icon: Network, title: "Networking Solutions", desc: "Structured cabling, routers, switches, firewalls and enterprise Wi‑Fi deployment.", items: ["LAN/WAN Design", "Enterprise Wi‑Fi", "Network Security"] },
  { icon: Camera, title: "CCTV Surveillance", desc: "HD, IP and remote‑monitored camera systems for offices, schools and estates.", items: ["IP Cameras", "DVR/NVR Systems", "Remote Monitoring"] },
  { icon: Fingerprint, title: "Access Control & Biometrics", desc: "Door access systems and biometric attendance to secure your premises.", items: ["Fingerprint Access", "Face Recognition", "Time & Attendance"] },
  { icon: Code2, title: "Software Development", desc: "Custom web, mobile, ERP and management systems built for your workflow.", items: ["Web & Mobile Apps", "ERP & CRM", "School & Hospital Systems"] },
  { icon: Headphones, title: "ICT Consultancy", desc: "Strategic advisory on technology, procurement and digital transformation.", items: ["IT Strategy", "Procurement", "Project Management"] },
  { icon: Server, title: "Data Center Solutions", desc: "Server rooms, racks, UPS systems and disaster recovery planning.", items: ["Server Rooms", "UPS & Power", "DR Planning"] },
  { icon: Cloud, title: "Cloud Solutions", desc: "Hosting, Microsoft 365, Google Workspace, backups and migration.", items: ["Microsoft 365", "Cloud Backup", "Migration"] },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Endpoint protection, firewalls, audits and incident response.", items: ["Firewalls", "Endpoint Security", "Security Audits"] },
  { icon: Printer, title: "Printer & Copier Solutions", desc: "Sales, leasing and full maintenance for office print infrastructure.", items: ["Sales & Leasing", "Maintenance", "Toner Supply"] },
  { icon: GraduationCap, title: "ICT Training", desc: "Practical training programmes for staff, students and administrators.", items: ["Basic ICT Skills", "Microsoft Office", "Custom Training"] },
];

function Services() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand">Huduma Zetu</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold max-w-3xl text-balance">Complete ICT and office services under one roof.</h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80 text-lg">From design and supply to installation and after‑sales support — we partner with you for the long term.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, items }) => (
            <article key={title} className="group rounded-2xl bg-card border border-border p-7 shadow-card hover:border-brand/40 hover:-translate-y-1 transition">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand-gradient group-hover:text-brand-foreground transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-brand" />{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-soft-gradient border border-border p-10 text-center">
          <h2 className="font-display text-3xl font-extrabold text-balance">Not sure which service you need?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Talk to our consultants — we'll recommend the right solution for your budget and goals.</p>
          <Link to="/quote" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-brand">
            Get a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
