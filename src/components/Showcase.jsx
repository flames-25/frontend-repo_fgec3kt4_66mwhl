import { Star } from 'lucide-react';

const projects = [
  {
    title: 'Nebula OS',
    tag: 'Product Site',
    img: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Orbit Labs',
    tag: 'Brand + Web',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Astra Wallet',
    tag: 'App Design',
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 bg-[#0B0B12]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
            <p className="mt-3 text-white/70 max-w-xl">A snapshot of recent explorations across product, brand, and interactive media.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-white/70">
            <Star className="text-fuchsia-400" size={18} />
            <span>More coming soon</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-widest text-white/60">{p.tag}</div>
                <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
