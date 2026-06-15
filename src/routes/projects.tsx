import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Tag } from "lucide-react";
import networkImg from "@/assets/svc-network.jpg";
import cctvImg from "@/assets/svc-cctv.jpg";
import bioImg from "@/assets/svc-biometric.jpg";
import softwareImg from "@/assets/svc-software.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects (Kazi Tulizofanya) — JQ Company Limited" },
      { name: "description", content: "Selected ICT projects delivered by JQ Company Limited across Tanzania — networks, CCTV, biometrics and custom software." },
    ],
  }),
  component: Projects,
});

const projects = [
  { img: networkImg, name: "Enterprise Network Rollout", client: "Kibo Logistics Ltd", desc: "Designed and deployed a 4‑site WAN with fibre uplinks and managed Wi‑Fi covering 200+ users.", tech: "Cisco, Ubiquiti UniFi", date: "2024", location: "Dar es Salaam" },
  { img: cctvImg, name: "Campus CCTV Surveillance", client: "Bright Future Academy", desc: "32‑camera HD IP surveillance system with remote monitoring and 30‑day storage.", tech: "Hikvision IP, NVR", date: "2024", location: "Dodoma" },
  { img: bioImg, name: "Biometric Attendance System", client: "Mbeya District Council", desc: "Rolled out biometric time & attendance across 12 departments with centralised reporting.", tech: "ZKTeco, Custom Reports", date: "2023", location: "Mbeya" },
  { img: softwareImg, name: "School Management System", client: "Bright Future Academy", desc: "Custom web platform for admissions, fees, attendance and parent communications.", tech: "React, Node.js, PostgreSQL", date: "2024", location: "Dodoma" },
  { img: networkImg, name: "Government Office IT Setup", client: "Confidential NGO", desc: "Supplied and configured 80 workstations, printers, server room and structured cabling.", tech: "HP, Cisco, APC UPS", date: "2023", location: "Dodoma" },
  { img: cctvImg, name: "Retail Store Security Upgrade", client: "TZ Retail Group", desc: "Replaced legacy DVR with modern ColorVu IP system across 6 branches.", tech: "Hikvision ColorVu", date: "2024", location: "Nationwide" },
];

function Projects() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand">Kazi Tulizofanya</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold max-w-3xl text-balance">Real projects. Real results. Across Tanzania.</h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80 text-lg">A selection of ICT and software projects we've delivered for businesses, schools, NGOs and government.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="group rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} width={800} height={600} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-brand-gradient text-brand-foreground px-3 py-1 text-[10px] uppercase tracking-wider font-bold">{p.date}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">Client: {p.client}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Tag className="h-3.5 w-3.5 text-brand" />{p.tech}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand" />{p.location}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-brand" />{p.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
