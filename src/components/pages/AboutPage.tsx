import ImageMine from "../ImageMine";

function AboutPage() {
  return (
    <>
      <section
        id="about"
        className="dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 bg-violet-50"
      >
        <h2 className="text-4xl font-extrabold text-violet-800 dark:text-white text-center">
          About Me
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-4">
          {/* Colonne de gauche */}
          <div className=" p-16 rounded-lg">
            {/* Contenu à ajouter */}
            <ImageMine src="/src/assets/setup3.jpg" alt="image" className="shadow-xl"/>
          </div>
          {/* Colonne centrale (plus grande) */}
          <div className="p-6 rounded-lg col-span-1">
            {/* Contenu à ajouter */}
            <img
              src="/src/assets/profil.png"
              alt="My Photo"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hi! I’m{" "}
                <span className="font-semibold text-blue-600">
                  Charmidez K.H. Assiobo
                </span>
                , a curious and creative
                <span className="font-semibold text-blue-600">
                  {" "}
                  Web & Mobile Developer
                </span>{" "}
                based in{" "}
                <span className="font-semibold text-blue-600">Lomé, Togo</span>.
                I specialize in building full-stack applications using modern
                tools like
                <span className="font-medium"> Python</span>,{" "}
                <span className="font-medium">JavaScript</span>, and{" "}
                <span className="font-medium">Kotlin</span>, and I’m always
                exploring new technologies and frameworks to sharpen my skills.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                I love tackling challenges, collaborating with passionate teams,
                and constantly learning. Whether it’s crafting sleek UIs or
                optimizing backend systems, I strive for clean and maintainable
                code.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                When I’m not coding, you’ll find me reading, exploring ideas, or
                mentoring others in tech.
              </p>
            </div>
          </div>

          {/* Colonne de droite */}
          <div className="p-15 rounded-lg pb-30 content-center">
            {/* Contenu à ajouter */}
            <ImageMine src="/src/assets/setup4.jpg" alt="image" className="h-30 w-30"/>
          </div>
        </section>
      </section>
    </>
  );
}
export default AboutPage;
