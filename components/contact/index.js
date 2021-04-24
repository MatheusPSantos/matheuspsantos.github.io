import Form from "./form";
import Social from "./social";

function Contact() {
  return (
    <section id="contact" className="contact wow fadeIn">
      <div className="container">
        <h2>Contact</h2>
        <h3>Here are my contacts.</h3>
        <div style={{ display: "flex", flexDirection: "row" }} >
          <Social />
          <Form />
        </div>
      </div>
    </section>
  );
}
export default Contact;