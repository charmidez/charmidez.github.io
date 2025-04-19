import ContactForm from "../objects/ContactForm";
import SectionMine from "../objects/SectionMine";

function ContactPage() {
  return (
    <>
      <SectionMine
        idSectionMine="contact"
        className="w-full flex flex-col items-center justify-center dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 bg-violet-50 scroll-mt-16"
      >
        <h2 className="text-4xl font-extrabold text-violet-800 dark:text-white text-center mb-8">
          Don't hesitate to contact me!
        </h2>
        <ContactForm />
      </SectionMine>
    </>
  );
}

export default ContactPage;
