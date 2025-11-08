import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B12] antialiased selection:bg-fuchsia-500/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
