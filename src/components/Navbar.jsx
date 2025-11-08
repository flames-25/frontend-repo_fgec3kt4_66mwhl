import { Rocket, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 p-[2px]">
            <div className="h-full w-full rounded-lg bg-black flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-fuchsia-400" />
            </div>
          </div>
          <span className="font-semibold tracking-tight text-white text-lg">
            Pixel Creatives
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm text-white/80">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-white shadow-lg shadow-fuchsia-600/20 hover:shadow-fuchsia-600/40 transition"
        >
          <Rocket className="h-4 w-4" />
          Start a Project
        </a>
      </div>
    </header>
  );
}
