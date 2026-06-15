import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products (Bidhaa Zetu) — JQ Company Limited" },
      { name: "description", content: "Browse computers, printers, networking devices, CCTV cameras, access control, biometrics, office furniture and stationery." },
    ],
  }),
  component: Products,
});

const categories = ["All", "Computers", "Printers", "Networking", "CCTV", "Access Control", "Biometrics", "Office Furniture", "Stationery", "Software", "Storage", "UPS & Power", "Accessories"];

const products = [
  { name: "HP EliteBook 840 G10", cat: "Computers", price: "From TSh 2,650,000", desc: "Business‑grade laptop, Intel Core i7, 16GB RAM, 512GB SSD." },
  { name: "Dell OptiPlex 7010 Desktop", cat: "Computers", price: "From TSh 1,950,000", desc: "Reliable desktop for office workstations, full warranty." },
  { name: "HP LaserJet Pro M404dn", cat: "Printers", price: "From TSh 850,000", desc: "Monochrome laser printer, fast and economical." },
  { name: "Canon imageCLASS MF445dw", cat: "Printers", price: "From TSh 1,400,000", desc: "Wireless multifunction printer for busy offices." },
  { name: "Cisco Catalyst 2960 Switch", cat: "Networking", price: "On Request", desc: "Managed 24‑port Gigabit Ethernet switch." },
  { name: "Ubiquiti UniFi AC Pro", cat: "Networking", price: "From TSh 480,000", desc: "Enterprise Wi‑Fi access point for high‑density use." },
  { name: "Hikvision 4MP Dome Camera", cat: "CCTV", price: "From TSh 320,000", desc: "ColorVu IP dome camera with night vision." },
  { name: "Hikvision 8‑CH NVR Kit", cat: "CCTV", price: "From TSh 1,850,000", desc: "Complete 4‑camera surveillance system with NVR." },
  { name: "ZKTeco F18 Access Control", cat: "Access Control", price: "From TSh 650,000", desc: "Fingerprint and card door access controller." },
  { name: "ZKTeco MB360 Biometric", cat: "Biometrics", price: "From TSh 720,000", desc: "Face + fingerprint time attendance terminal." },
  { name: "Executive Office Desk", cat: "Office Furniture", price: "From TSh 950,000", desc: "Solid wood executive desk with cable management." },
  { name: "Mesh Ergonomic Chair", cat: "Office Furniture", price: "From TSh 380,000", desc: "High‑back chair with lumbar support." },
  { name: "A4 Premium Bond Paper (5 rms)", cat: "Stationery", price: "From TSh 65,000", desc: "80gsm bond paper, 500 sheets per ream." },
  { name: "Microsoft 365 Business Std", cat: "Software", price: "Annual License", desc: "Office apps, Teams, OneDrive and Exchange email." },
  { name: "Seagate 4TB External HDD", cat: "Storage", price: "From TSh 280,000", desc: "Plug‑and‑play backup storage, USB 3.0." },
  { name: "APC 1500VA UPS", cat: "UPS & Power", price: "From TSh 720,000", desc: "Smart‑UPS with AVR for office equipment." },
];

function Products() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const filtered = products.filter((p) =>
    (cat === "All" || p.cat === cat) &&
    (q === "" || p.name.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand">Bidhaa Zetu</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold max-w-3xl text-balance">Quality ICT products and office supplies in stock.</h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80 text-lg">Hundreds of items ready to ship from our Dodoma warehouse — request a quote on any product.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-12">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-8">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm outline-none focus:border-brand transition"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition ${
                  cat === c ? "bg-brand-gradient text-brand-foreground border-transparent shadow-brand" : "border-border hover:border-brand/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <article key={p.name} className="group rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 transition">
              <div className="aspect-[4/3] bg-soft-gradient grid place-items-center relative overflow-hidden">
                <div className="font-display text-5xl font-black text-muted-foreground/30 group-hover:text-brand/40 transition">
                  {p.cat[0]}
                </div>
                <span className="absolute top-3 left-3 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-wider font-semibold border border-border">{p.cat}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base leading-tight">{p.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-brand">{p.price}</span>
                  <a href={whatsappLink(`Hi, I'd like a quote for ${p.name}`)} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold inline-flex items-center gap-1 hover:text-brand transition">
                    Quote <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">No products match your search.</div>
        )}

        <div className="mt-16 rounded-3xl bg-navy-deep text-primary-foreground p-10 text-center">
          <h2 className="font-display text-3xl font-extrabold text-balance">Can't find what you're looking for?</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-xl mx-auto">We source thousands of ICT and office products. Tell us what you need and we'll get it.</p>
          <Link to="/quote" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-brand">
            Request Custom Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
