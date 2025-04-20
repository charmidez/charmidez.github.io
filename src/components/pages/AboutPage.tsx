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
    { name: "Kotlin", path: "/src/assets/kotlin.png" },
    { name: "ANDROID", path: "/src/assets/android.png" },
    { name: "XML", path: "/src/assets/xml.png" },
    { name: "JetPack", path: "/src/assets/jetpack.svg" },
    { name: "KTOR", path: "/src/assets/ktor.png" },

    { name: "HTML", path: "/src/assets/html.png" },
    { name: "CSS", path: "/src/assets/css.png" },
    { name: "Typescript", path: "/src/assets/typescript.png" },
    { name: "Javascript", path: "/src/assets/javascript.png" },
    { name: "NodeJS", path: "/src/assets/node.png" },
    { name: "ReactJS", path: "/src/assets/react.svg" },
    { name: "NextJS", path: "/src/assets/next.png" },
    { name: "VueJS", path: "/src/assets/vuejs.png" },
    { name: "Gatsby", path: "/src/assets/gatsbyjs.png" },
    { name: "TailwindCSS", path: "/src/assets/tailwind.png" },
    { name: "DaisyUI", path: "/src/assets/daisy.png" },
    { name: "JSON", path: "/src/assets/json.png" },


    { name: "PHP", path: "/src/assets/php.png" },
    { name: "wordpress", path: "/src/assets/wordpress.png" },


    { name: "Python3", path: "/src/assets/python.png" },
    { name: "Django", path: "/src/assets/django.png" },
    { name: "SQLite", path: "/src/assets/sqlite.png" },
    { name: "PostgreSQL", path: "/src/assets/postgresql.png" },
    
    { name: "GCP", path: "/src/assets/g-cloud.png" },
    { name: "Apache", path: "/src/assets/apache.png" },

    { name: "SQL", path: "/src/assets/sql.png" },
    { name: "MongoDB", path: "/src/assets/no-sql.png" },
    { name: "NO-SQL", path: "/src/assets/no-sql2.png" },
    
  ];

  const imagesSoftSkills = [
    { name: "Teamwork", path: "/src/assets/workingroup.png" },
    { name: "Solve", path: "/src/assets/solving.png" },
    { name: "Talk", path: "/src/assets/communication.png" },
    { name: "Adapt", path: "/src/assets/adapter.png" },
    { name: "Create", path: "/src/assets/creativity.png" },
    { name: "TTiming", path: "/src/assets/fastdelivery.png" },
    { name: "Lead", path: "/src/assets/leadership.png" },
    { name: "Think", path: "/src/assets/critical-thinking.png" },
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
              src="/src/assets/setup5.jpg"
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
              src="/src/assets/setup6.jpg"
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
