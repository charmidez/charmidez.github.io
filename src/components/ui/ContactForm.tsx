import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
  captcha: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [a] = useState(Math.floor(Math.random() * 10));
  const [b] = useState(Math.floor(Math.random() * 10));
  const expectedAnswer = a + b;

  const onSubmit = (data: FormData) => {
    if (parseInt(data.captcha) !== expectedAnswer) {
      alert("Captcha incorrect!");
      return;
    }

    emailjs
      .send(
        "service_zexn64l",
        "template_bwf0mrd",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "ypCpLXQ3-MBB3UpET"
      )
      .then(() => {
        alert("Message envoyé avec succès !");
        reset();
      })
      .catch((error) => {
        console.error("Erreur d'envoi :", error);
        alert("Erreur d'envoi du message.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Contact Me
      </h2>

      <input
        type="text"
        {...register("name", { required: "Name is required" })}
        placeholder="Your name"
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}

      <input
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format",
          },
        })}
        placeholder="Your email"
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <textarea
        rows={5}
        {...register("message", { required: "Message is required" })}
        placeholder="Your message"
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
      />
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message.message}</p>
      )}

      <div>
        <label className="block text-sm mb-1 text-gray-600">
          What is {a} + {b} ?
        </label>
        <input
          type="text"
          {...register("captcha", { required: "Captcha is required" })}
          placeholder="Your answer"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        {errors.captcha && (
          <p className="text-red-500 text-sm">{errors.captcha.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
