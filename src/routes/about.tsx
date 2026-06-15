import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Shield, Sparkles, Leaf } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JQ Company Limited — Tanzanian ICT Partner" },
      { name: "description", content: "Learn about JQ Company Limited's mission, vision and core values as Tanzania's integrated ICT and office solutions provider since 2021." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Sparkles, t: "Innovation", d: "Embracing the latest technologies and creative solutions in both ICT and stationery." },
  { icon: Shield, t: "Quality", d: "Committing to the highest standards in every product and service we deliver." },
  { icon: Heart, t: "Customer‑Centricity", d: "Prioritising client needs with tailored solutions and exceptional service." },
  { icon: Target, t: "Integrity", d: "Conducting business with transparency, honesty and ethical practices." },
  { icon: Leaf, t: "Sustainability", d: "Implementing eco‑friendly practices and promoting responsible products." },
  { icon: Eye, t: "Excellence", d: "Striving for excellence in everything we do — every order, every project." },
];

function About() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-20 md:py-28">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand">About Us</span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold max-w-3xl text-balance">A Tanzanian ICT and stationery supplier built on trust.</h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80 text-lg">
            Established in 2021, JQ Company Limited is a fully compliant Tanzanian‑owned company specialising in ICT equipment and general office consumables, serving businesses, schools, NGOs and government institutions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <img src={aboutImg} alt="" width={1280} height={960} loading="lazy" className="rounded-2xl shadow-elegant aspect-[4/3] object-cover" />
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-balance">Welcome from the Managing Director</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Since our inception, JQ Company Limited has been dedicated to providing high‑quality ICT equipment, office supplies and innovative solutions that cater to diverse client needs. Our journey is marked by a commitment to excellence, creativity and sustainability.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We invest continuously in research and development, seek out the latest innovations, and form strategic partnerships that add real value to our clients' business growth.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl container-px py-20 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-card border border-border p-8 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-brand-foreground"><Eye className="h-6 w-6" /></div>
            <h3 className="mt-5 font-display text-2xl font-extrabold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">To be the leading provider of integrated ICT and stationery solutions, known for our innovative approach, exceptional quality and unwavering commitment to customer satisfaction.</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-8 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-brand-foreground"><Target className="h-6 w-6" /></div>
            <h3 className="mt-5 font-display text-2xl font-extrabold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">To deliver a diverse array of high‑quality ICT and stationery products that meet evolving client needs, backed by outstanding service and technical support.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand">Core Values</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-balance">The principles that guide our work.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-card border border-border p-7 hover:border-brand/40 hover:-translate-y-1 transition shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display font-bold text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
