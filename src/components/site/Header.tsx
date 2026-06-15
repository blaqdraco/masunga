import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="hidden md:block bg-navy-deep text-primary-foreground/90 text-xs">
        <div className="mx-auto max-w-7xl container-px flex h-9 items-center justify-between">
          <span>{site.address}</span>
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phone1}`} className="flex items-center gap-1.5 hover:text-brand transition">
              <Phone className="h-3.5 w-3.5" /> {site.phone1}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-brand transition">{site.email}</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl container-px flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-brand-foreground font-black shadow-brand">
            JQ
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-[15px] tracking-tight">JQ COMPANY</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">ICT &amp; Office Solutions</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground after:scale-x-100" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="relative px-3 py-2 text-sm font-medium transition after:absolute after:left-3 after:right-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/quote"
            className="hidden md:inline-flex items-center rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand hover:brightness-110 transition"
          >
            Request Quote
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-7xl container-px flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium border-b border-border last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-brand-foreground shadow-brand"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
