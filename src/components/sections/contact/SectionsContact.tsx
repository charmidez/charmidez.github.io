import { ButtonLirePlus, Titresection } from "../../ui/AllComponentsSections";
import { useState, FormEvent } from "react";

interface ContactcardProps {
    imgSrc : string
    titre : string,
    linkToAction : string,
    textButton : string
}



interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contactcard({titre, imgSrc, linkToAction, textButton} : ContactcardProps ){
    return(
        <div className="card rounded-3xl shadow-xl bg-white items-start">
        <figure className="p-4">
          <img
            src={imgSrc}
            alt="Whatsapp"
            className="object-contain h-10 rounded-xl"
          />
        </figure>

        <div className="card-body pt-0 justify-between">
          <div className="flex flex-row items-center">
            <h3 className="card-title lg:text-lg text-sm font-normal">{titre}</h3>
          </div>

          <a className="card-actions justify-start">
            <ButtonLirePlus link={linkToAction} text={textButton} />
          </a>
        </div>
      </div>
    )

}

function Form(){
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Ici tu peux ajouter une logique d'envoi avec emailjs, formspree, API, etc.
    console.log("Formulaire soumis:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="shadow-2xl p-8 rounded-3xl">

      {submitted && (
        <div className="mb-4 text-green-600 font-semibold">
          Merci pour votre message !
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <button
          type="submit"
          className="bg-violet-600 text-white px-6 py-2 rounded-xl hover:bg-violet-700 transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export function Contactbutton() {
  return (
    <div className="">
      <Titresection titre="Me contacter" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-2">
        <Contactcard titre="Un appel GSM ?" imgSrc="/assets/icon/call.svg" linkToAction="" textButton="Par ici"/>
        <Contactcard titre="Me contacter par whatsapp" imgSrc="/assets/icon/whatsapp.svg" linkToAction="" textButton="Un sms par ici"/>
        <Contactcard titre="Me contacter par telegram" imgSrc="/assets/icon/telegram.svg" linkToAction="" textButton="Un message telegram par ici"/>
        <Contactcard titre="Me contacter par whatsapp" imgSrc="/assets/icon/mail_2.svg" linkToAction="" textButton="Écrire un mail par ici"/>
      </div>
    </div>
  );
}


export function Contactform(){
  return(
    <div>
      <Titresection titre="M'écrire directement" />
      <div className="px-96">
        <Form />
      </div>
    </div>
  )
}
