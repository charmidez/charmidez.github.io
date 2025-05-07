import ContactForm from "../ui/ContactForm";

function ContactPage() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 bg-violet-50 scroll-mt-16">
        <h2 className="text-4xl font-extrabold text-violet-800 dark:text-white text-center mb-8">
          Don't hesitate to contact me!
        </h2>
        <ContactForm />
      </section>
    </>
  );
}

export default ContactPage;
