import Form from "./form";
import Social from "./social";

function Contact() {
  return (
    <section className="contact wow fadeIn">
      <h2>Contact</h2>
      <h3>Please contact me and we will do excellent projects :)</h3>
      <div className="container">
        <Social />
        <Form />
      </div>
    </section>
  );
}
export default Contact;