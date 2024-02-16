import type { NextPage } from 'next';
import Home from '@/components/home/Home';
import About from '@/components/about/About';
import Experience from '@/components/experience/Experience';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';
const Main: NextPage = () => {
  return (
    <main className="relative w-11/12 mx-auto md:w-4/5">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
