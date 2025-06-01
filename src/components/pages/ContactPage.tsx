//import ContactForm from "../ui/ContactForm";


import { Contactbutton, Contactform } from "../sections/contact/SectionsContact";

function ContactPage() {
  return (
    <>
      <section className="flex flex-col dark:bg-gray-900">
        <div className="pt-20 lg:pt-26 lg:pb-16 pb-8 px-4 lg:px-32 bg-violet-100">
          <Contactbutton />
        </div>
        <div className="bg-white lg:py-16 py-8 px-4 lg:px-32">
          <Contactform />
        </div>
      </section>
    </>
  );
}

export default ContactPage;
