
import Image from 'next/image';
import About from '../components/about';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Navbar from '../components/navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="row"></div>
      <About />
      <div className="row"></div>
      <section className="my-projects wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s" id="my-projects">
        <div className="container">
          <h2>My projects</h2>
          <h3>Here are my projects, both personal and professional.</h3>
          {/* <!-- Cards --> */}
          <div className="card-projects">
            <div className="row">
              <div className="card col-md-3" style={{ textAlign: "left", padding: "0px", marginLeft: "5px" }}>
                <img src="/unectjr.png" alt="A company formed by students" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">
                    Unect Jr.
                      </h5>
                  <p className="card-text">Unect Jr. it's a technology company formed by UTFPR-CP students.</p>
                  <a href="http://www.unect.com.br/" target="_blank" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row"></div>
      <Contact />

    </>
  );
}