import Loader from '@/components/Loader';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Others from '@/components/Others';
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <main>
      <Loader />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Others />
      <Contact />
      <div className="h-[22px] bg-ink" />
    </main>
  );
}
