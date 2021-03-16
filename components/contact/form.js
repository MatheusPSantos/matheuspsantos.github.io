function Form() {
  return (

    <div className="email col-md-6">
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
  );
}

export default Form;