export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0B0B12] pb-10 pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Have a vision? Let’s build it.</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Tell us about your product or brand and we’ll craft a bespoke experience focused on outcomes.
          </p>
          <a
            href="mailto:hello@pixelcreatives.studio"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-fuchsia-600/20"
          >
            hello@pixelcreatives.studio
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Pixel Creatives. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
