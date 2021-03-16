import { useEffect, useState } from "react";

function About() {

  const listSkills = [
    , {
      img: "/htmlcssicon.png",
      name: "HTML/Css"
    }
    , {
      img: "/jsicon.svg",
      name: "Javascript"
    }
    , {
      img: "/javaicon.png",
      name: "Java"
    }
    , {
      img: "/react.svg",
      name: "React Js"
    }
    , {
      img: " /node.png",
      name: "Node Js"
    }
    , {
      img: "/adonis.png",
      name: "Adonis"
    }, {
      img: "/python.png",
      name: "Python"
    }, {
      img: "/linux.svg",
      name: "Linux"
    }, {
      img: "/mongo.jpg",
      name: "Mongo Db"
    }, {
      img: "/git.png",
      name: "Git"
    }
  ]
  const [skills, setSkills] = useState(listSkills);

  return (
    <section className="about wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s" id="about">
      <div className="container">
        <h2>About me</h2>
        <h3>Here you will know more about me, who I am and what I do.</h3>
        <div className="row">
          <div className="text-about col-md-12">
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
        </div>
        <h3 style={{ marginTop: "20px" }}>Skills</h3>
        <div className="row">
          <div className="col-md-12">
            {
              skills.map((skill, index) => {
                return <div className="skills" key={index.toString()}>
                  <img src={skill.img} alt={skill.name} />
                  <span style={{ position: "relative", margin: "60px", marginLeft: "10px" }}>{skill.name}</span>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </section >

  );
}

export default About;

