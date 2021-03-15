
import Image from 'next/image';

export default function HomePage() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-purple fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item active" id="link-1">
                <a className="nav-link" onclick="smoothScroll(event);" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item" id="link-2">
                <a className="nav-link" onclick="smoothScroll(event);" href="#about">About me</a>
              </li>
              <li className="nav-item" id="link-3">
                <a className="nav-link" onclick="smoothScroll(event);" href="#my-projects">My projects</a>
              </li>
              <li className="nav-item" id="link-4">
                <a className="nav-link" onclick="smoothScroll(event);" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="start">
        <header className="header container wow fadeIn">
          <h2>Matheus Pereira dos Santos</h2>
          <h1>Full stack developer and Student</h1>
        </header>
      </section>

      <div className="row"></div>

      <section className="about wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s" id="about">
        <div className="container">
          <h2>About me</h2>
          <h3>Here you will know more about me, who I am and what I do.</h3>
          <div className="row">
            <div className="text-about col-md-6">
              <p>
                Hello! I am student of the course of Computer Engineering of the Federal Technological University of
                Paraná (UTFPR). I am a computer enthusiast, especially subjects that involve the Web and data science.
            </p>
              <p>
                I am Co-founder and current member of Unect Jr. A company formed by students of UTFPR and current in the
                development of web and mobile applications, besides providing consulting and courses for the students of
              the university itself. </p>
              <p>
                I have interest in the areas of Web and mobile development, database, information security. In addition to
              subjects related to Design, Ux and entrepreneurship. </p>
            </div>
            <div className="col-md-6 align-self-center" style={{ textAlign: "center" }}>
              <img src="/eu.png" alt="about me" className=" my-image" />
            </div>
          </div>
          <h3>Skills</h3>
          <div className="row">
            <ul className="col skills">
              <li>
                <p>
                  <img src="/htmlcssicon.png" alt="" />
                  <span>HTML/Css</span>
                </p>
              </li>
              <li>
                <p>
                  <img src="/jsicon.svg" alt="" />
                  <span>Javascrip</span>
                </p>
              </li>
              <li>
                <p>
                  <img src="/javaicon.png" alt="" />
                  <span>Java</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="row">
            <ul className="col skills">
              <li>
                <p>
                  <img src="/react.svg" alt="" />
                  <span>React Js</span>
                </p>
              </li>
              <li><p><img src=" /node.png" alt="" />
                <span>Node Js</span></p></li>
              <li>
                <p>
                  <img src="/adonis.png" alt="" />
                  <span>Adonis</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="row">
            <ul className="col skills">
              <li>
                <p>
                  <img src="/python.png" alt="" />
                  <span>Python</span>
                </p>
              </li>
              <li>
                <p>
                  <img src="/linux.svg" alt="" />
                  <span>Linux</span>
                </p>
              </li>
              <li>
                <p>
                  <img src="/mongo.jpg" alt="" />
                  <span>Mongo Db</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="row">
            <ul className="col skills">
              <li>
                <p>
                  <img src="/git.png" alt="" />
                  <span>Git</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
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
      <section className="contact wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s" id="contact">
        <div className="container">
          <h2>Contact</h2>
          <h3>Please contact me and we will do excellent projects :)</h3>
          <div className="row">
            <ul className="col">
              <li>
                <a href="https://facebook.com/matheus064">
                  <img src="/icons8-facebook-64.png" alt="contato através do meu facebook" />
                </a>
                <p>/matheus064</p>
              </li>
              <li>
                <a href="https://linkedin.com/in/msantos97/">
                  <img src="/icons8-linkedin-64.png" alt="contato através do meu linkedin" />
                </a>
                <p>/msantos97</p>
              </li>
              <li>
                <a href="https://github.com/matheuspsantos">
                  <img src="/icons8-github-64.png" alt="veja meus projetos e repositórios em meu github" />
                </a>
                <p>@matheuspsantos</p>
              </li>
              <li>
                <a href="https://instagram.com/matheus_psantos">
                  <img src="/icons8-instagram-64.png" alt="Me siga no instagram" />
                </a>
                <p>@matheus_psantos</p>
              </li>
            </ul>
          </div>
          <div className="email col">
            <h3>Send an e-mail</h3>
            <form action="https://formspree.io/pereiramatheus064@gmail.com" method="POST">
              <div className="row">
                <input className="col" type="text" placeholder="Your name" name="name" />
              </div>
              <div className="row">
                <input className="col" type="email" placeholder="Your e-mail" name="email" />
              </div>
              <div className="row">
                <input className="col" type="text" placeholder="Your message" name="message" />
              </div>
              <div className="row">
                <input type="submit" value="Send" className="col align-self-center btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </section>

    </>
  );
}