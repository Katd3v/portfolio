import React, { useState } from "react";
import axios from "axios";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

//valeurs par default des données du formulaire
const defaultFormData = {
  name: "",
  firstName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
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
    <section id="contact" className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contactez-moi</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-secondary px-6 py-10 sm:px-10 xl:p-12">
              <div
                className="pointer-events-none absolute inset-0 sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white">Contactez-moi</h3>
              <p className="mt-6 max-w-3xl text-base text-primary">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-primary">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3">katleen.portfolio@gmail.com</span>
                </dd>
                <dd className="flex text-base text-primary">
                  <svg
                    fill="#DDD0C8"
                    width="24px"
                    height="24px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>linkedin</title>
                    <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/katleen-sorhaindo"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-3 hover:text-white"
                  >
                    /katleen-sorhaindo
                  </a>
                </dd>
              </dl>
            </div>

            {/* Contact form */}
            <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-2xl font-medium text-secondary">
                Envoyez-moi un message
              </h3>
              <form
                onSubmit={handleSubmit}
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary"
                  >
                    Nom
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="given-name"
                      className="block w-full rounded-md border-primary px-4 py-3 text-gray-900 shadow-sm shadow-primary focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Prénom
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      autoComplete="family-name"
                      className="block w-full rounded-md border-primary px-4 py-3 text-gray-900 shadow-sm shadow-primary focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-primary px-4 py-3 text-gray-900 shadow-sm shadow-primary focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-secondary"
                    >
                      Téléphone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optionel
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className="block w-full rounded-md border-primary px-4 py-3 text-gray-900 shadow-sm shadow-primary focus:border-secondary focus:ring-secondary"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-secondary"
                  >
                    Objet
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-primary px-4 py-3 text-gray-900 shadow-sm shadow-primary focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-secondary"
                    >
                      Votre message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-primary px-4 py-3 text-gray-900 shadow-sm shadow-primary focus:border-secondary focus:ring-secondary"
                      aria-describedby="message-max"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
