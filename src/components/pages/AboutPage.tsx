import ImageGallery from "../objects/ImageGallerie";
import ImageMine from "../objects/ImageMine";
import SectionMine from "../objects/SectionMine";
import ImageGallerySkills from "../objects/ImageGallerieskils";

function AboutPage() {
  /*

  const images = ImageMine[
    "/src/assets/kotlin.png",
    "/src/assets/typescript.png",
    "/src/assets/javascript.png",
    "/src/assets/php.png",
    "/src/assets/python.png",
    "/src/assets/react.svg",
    "/src/assets/sql.png",
    "/src/assets/wordpress.png",
    "/src/assets/xml.png",
    "/src/assets/next.png",
    "/src/assets/no-sql.png",
    "/src/assets/no-sql2.png",
    "/src/assets/json.png",
    "/src/assets/html.png",
    "/src/assets/css.png",
    "/src/assets/django.png",
    "/src/assets/android.png",
    "/src/assets/g-cloud.png",
    
  ];

*/

  const imagesTechnicalSkills = [
    { name: "Kotlin", path: "/assets/kotlin.png" },
    { name: "ANDROID", path: "/assets/android.png" },
    { name: "XML", path: "/assets/xml.png" },
    { name: "JetPack", path: "/assets/jetpack.svg" },
    { name: "KTOR", path: "/assets/ktor.png" },

    { name: "HTML", path: "/assets/html.png" },
    { name: "CSS", path: "/assets/css.png" },
    { name: "Typescript", path: "/assets/typescript.png" },
    { name: "Javascript", path: "/assets/javascript.png" },
    { name: "NodeJS", path: "/assets/node.png" },
    { name: "ReactJS", path: "/assets/react.svg" },
    { name: "NextJS", path: "/assets/next.png" },
    { name: "VueJS", path: "/assets/vuejs.png" },
    { name: "Gatsby", path: "/assets/gatsbyjs.png" },
    { name: "TailwindCSS", path: "/assets/tailwind.png" },
    { name: "DaisyUI", path: "/assets/daisy.png" },
    { name: "JSON", path: "/assets/json.png" },


    { name: "PHP", path: "/assets/php.png" },
    { name: "wordpress", path: "/assets/wordpress.png" },


    { name: "Python3", path: "/assets/python.png" },
    { name: "Django", path: "/assets/django.png" },
    { name: "SQLite", path: "/assets/sqlite.png" },
    { name: "PostgreSQL", path: "/assets/postgresql.png" },
    
    { name: "GCP", path: "/assets/g-cloud.png" },
    { name: "Apache", path: "/assets/apache.png" },

    { name: "SQL", path: "/assets/sql.png" },
    { name: "MongoDB", path: "/assets/no-sql.png" },
    { name: "NoSQL", path: "/assets/no-sql2.png" },
    
  ];

  const imagesSoftSkills = [
    { name: "Teamwork", path: "/assets/workingroup.png" },
    { name: "Solve", path: "/assets/solving.png" },
    { name: "Talk", path: "/assets/communication.png" },
    { name: "Adapter", path: "/assets/adapter.png" },
    { name: "Create", path: "/assets/creativity.png" },
    { name: "Timing", path: "/assets/fastdelivery.png" },
    { name: "Lead", path: "/assets/leadership.png" },
    { name: "Think", path: "/assets/critical-thinking.png" },
  ];

  return (
    <>
      <SectionMine
        idSectionMine="about"
        className="flex flex-col items-center justify-center dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-32 bg-violet-50 scroll-mt-16"
      >
        <h2 className="text-4xl font-extrabold text-violet-800 dark:text-white text-center mb-4">
          About Me
        </h2>
        <section className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:gap-20 gap-4 mb-4">
          {/* Colonne de gauche */}
          <div className=" rounded-lg">
            {/* Contenu à ajouter */}
            <ImageMine
              src="/assets/setup5.jpg"
              alt="image"
              className="shadow-xl"
            />
          </div>
          {/* Colonne centrale (plus grande) */}
          <div className="rounded-lg col-span-1">
            {/* Contenu à ajouter */}
            {/*<img src="/src/assets/profil.png" alt="My Photo" className="rounded-full w-32 h-32 mx-auto mb-4"/> */}
            <div className="max-w-4xl mx-auto text-justify">
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
          <div className="rounded-lg content-center">
            {/* Contenu à ajouter */}
            <ImageMine
              src="/assets/setup6.jpg"
              alt="image"
              className="h-30 w-30"
            />
          </div>
        </section>
        <div className="flex flex-col w-full">{/*Technical skill*/}
          <h2 className="font-bold p-4  bg-violet-300 rounded-sm my-4 text-center w-full mb-4">
          Technical Skills
          </h2>
          <ImageGallery imagesSrc={imagesTechnicalSkills} />
        </div>

        <div className="flex flex-col w-full mt-8">{/*Soft skill*/}
          <h2 className="font-bold p-4  bg-violet-300 rounded-sm my-4 text-center w-full mb-4">
          Soft Skills
          </h2>
          <ImageGallerySkills imagesSrc={imagesSoftSkills}/>
        </div>

      </SectionMine>
    </>
  );
}
export default AboutPage;
