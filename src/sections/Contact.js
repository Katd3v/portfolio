import React, { useState } from "react";
import axios from "axios";

//valeurs par default des données du formulaire
const defaultFormData = {
  name: "",
  firstName: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(defaultFormData);

  //fonction qui permet de mettre à jour l'état du formulaire en fonction des changements dans les champs de saisie
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envoyer les données du formulaire au backend
      await axios.post("http://localhost:4000/mail", formData);
      // Réinitialiser les champs du formulaire après la soumission réussie
      setFormData(defaultFormData);

      console.log("Formulaire envoyé avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
    }
  };

  return (
    <section id="contact" className="bg-primary p-4">
      <div>
        <h2>Contactez-moi</h2>
        <p className="py-4">
          N'hésitez pas à me contacter pour toute question ou collaboration.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
