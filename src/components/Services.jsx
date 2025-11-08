import { Palette, Cuboid, PanelsTopLeft, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Systems",
    desc: "Identity, guidelines, and visual systems that scale across touchpoints.",
  },
  {
    icon: PanelsTopLeft,
    title: "Web Experiences",
    desc: "High-performance websites with motion, 3D, and delightful micro-interactions.",
  },
  {
    icon: Cuboid,
    title: "3D & Spline",
    desc: "Interactive scenes and product visualizations that feel alive.",
  },
  {
    icon: Sparkles,
    title: "Creative R&D",
    desc: "Experimental prototypes merging art direction and emerging tech.",
  },
];

function ServiceCard({ Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/10 to-indigo-500/0 opacity-0 blur-xl transition group-hover:opacity-100" />
      <Icon className="h-6 w-6 text-fuchsia-400" />
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-[#08080d] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Capabilities</h2>
          <p className="mt-3 text-white/70">From concept to code — we design and build premium, future-facing products.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} Icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
