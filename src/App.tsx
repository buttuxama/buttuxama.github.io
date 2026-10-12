import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg font-mono">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}