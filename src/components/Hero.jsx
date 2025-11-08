import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
            Futuristic design studio
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            We craft surreal digital experiences
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            Pixel Creatives blends art and technology to build immersive brands, bold websites, and interactive 3D moments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">Get a quote</a>
            <a href="#work" className="rounded-full border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition">See our work</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(40%_50%_at_80%_20%,rgba(99,102,241,0.22),transparent_60%)]" />
    </section>
  );
}
