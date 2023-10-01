import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-primary p-4">
      <div>
        <h2>Contactez-moi</h2>
        <p className="py-4">
          N'hésitez pas à me contacter pour toute question ou collaboration.
        </p>
        <form className="flex flex-col">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="fistName">Prénom</label>
          <input type="text" id="fistName" name="fistName" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="8" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
