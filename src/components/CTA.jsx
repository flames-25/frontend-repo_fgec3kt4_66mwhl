export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-[#0b0b12] to-black py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white">
          Ready to build something unreal?
        </h3>
        <p className="mt-3 text-white/70">
          Tell us about your vision — we’ll bring it to life with design, motion, and code.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          <input
            type="text"
            placeholder="Your name"
            className="col-span-1 sm:col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="col-span-1 sm:col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            required
          />
          <button
            type="submit"
            className="col-span-1 sm:col-span-1 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-fuchsia-600/20 hover:shadow-fuchsia-600/40 transition"
          >
            Request Proposal
          </button>
        </form>
      </div>
    </section>
  );
}
