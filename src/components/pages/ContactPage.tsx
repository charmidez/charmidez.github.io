//import ContactForm from "../ui/ContactForm";

import ImageMine from "../ui/ImageMine";
import { StatCard } from "../ui/Others";

function ContactPage() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 bg-violet-50 scroll-mt-16">
        <h2 className="text-4xl font-extrabold text-violet-800 dark:text-white text-center mb-8">
          Don't hesitate to contact me!
        </h2>
        <StatCard 
          icon={<ImageMine src="/assets/logo/carre.png" />}
          label="Test"
          value="100"
          changePercentage={23}
          changeText="You"

        />
      </section>
    </>
  );
}

export default ContactPage;
