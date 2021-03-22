import About from '../components/about';
import Contact from '../components/contact';
import Hero from '../components/hero';
import MyProjects from '../components/my-projects';
import Navbar from '../components/navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="row"></div>
      <About />
      <div className="row"></div>
      <MyProjects />
      <div className="row"></div>
      <Contact />

    </>
  );
}