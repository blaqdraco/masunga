import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl container-px py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-brand-foreground font-black">JQ</div>
            <div className="font-display font-extrabold">JQ COMPANY LIMITED</div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
            Tanzanian ICT and office solutions partner — supplying equipment, software and dependable support to businesses, schools and government since {site.founded}.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-brand hover:text-brand-foreground transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-brand">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand">Services</Link></li>
            <li><Link to="/products" className="hover:text-brand">Products</Link></li>
            <li><Link to="/projects" className="hover:text-brand">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li>ICT Equipment Supply</li>
            <li>Networking &amp; CCTV</li>
            <li>Access &amp; Biometrics</li>
            <li>Software Development</li>
            <li>Office Stationery</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2.5"><MapPin className="h-4 w-4 shrink-0 text-brand mt-0.5" />{site.address}</li>
            <li className="flex gap-2.5"><Phone className="h-4 w-4 shrink-0 text-brand mt-0.5" /><span>{site.phone1}<br />{site.phone2}</span></li>
            <li className="flex gap-2.5"><Mail className="h-4 w-4 shrink-0 text-brand mt-0.5" />{site.email}</li>
            <li className="flex gap-2.5"><Clock className="h-4 w-4 shrink-0 text-brand mt-0.5" />{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl container-px py-5 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-foreground/60 gap-2">
          <span>© {new Date().getFullYear()} JQ Company Limited. All rights reserved.</span>
          <span>Dodoma · Tanzania</span>
        </div>
      </div>
    </footer>
  );
}
