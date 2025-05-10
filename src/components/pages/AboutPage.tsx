import { Link } from "react-router-dom";
import ImageGallery from "../ui/ImageGallerie";
import ImageGallerySkills from "../ui/ImageGallerieskils";

function AboutPage() {
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
    { name: "Créativité", path: "/assets/icon/about2.svg" },
    { name: "Esprit d’équipe", path: "/assets/icon/about1.svg" },
    { name: "Fiabilité ", path: "/assets/icon/about3.svg" },

    //{ name: "Capacité d'adaptation", path: "/assets/adapter.png" },
    //{ name: "Create", path: "/assets/creativity.png" },
    //{ name: "Respect du deadline", path: "/assets/fastdelivery.png" },
    //{ name: "Capacité à diriger", path: "/assets/leadership.png" },
    //{ name: "Think", path: "/assets/critical-thinking.png" },
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-center dark:bg-gray-900 pb-16 px-4 lg:px-32 bg-violet-50 pt-24">
        <h2 className="text-4xl font-extrabold text-violet-800 dark:text-white text-center mb-4">
          A propos de moi
        </h2>
        <section className="w-full flex flex-col lg:flex-row lg:gap-8 gap-2">
          {/* Colonne de gauche */}
          <div className="items-center justify-center flex">
            <img
              src="/assets/profil.webp"
              alt="image"
              className="lg:h-auto lg:w-80 h-80 rounded-2xl"
            />
          </div>

          {/* Colonne droite (plus grande) */}
          <div className="rounded-lg w-full flex flex-col lg:gap-4 gap-2">
            <div className="flex lg:flex-row">
              <ImageGallerySkills imagesSrc={imagesSoftSkills} />
            </div>

            <div className="flex flex-col gap-4 text-sm lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="">
              <span className="text-violet-700">
                Développeur Web & Mobile full-stack basé à Lomé, Togo,
              </span>{" "}
              je m’appelle Charmidez K.H. Assiobo. Curieux, créatif et passionné
              par les technologies émergentes, je développe des solutions
              numériques performantes et évolutives, qu’il s’agisse de modules
              légers ou d’applications complexes, en m’appuyant sur des langages
              comme Python, Kotlin ou TypeScript, ainsi que sur leurs
              frameworks, bibliothèques et stacks respectifs.
            </p>
            <p>
              Mon approche rigoureuse du code, mon goût pour l’optimisation et
              l’expérience utilisateur, ainsi que ma capacité à collaborer
              efficacement en équipe me permettent de mener des projets
              ambitieux, y compris des missions confidentielles à haute valeur
              ajoutée.
            </p>
            <p>
              Fort de plus de cinq ans d’expérience, je mets un point d’honneur
              à développer des produits robustes et adaptés aux besoins réels,
              en m’appuyant sur une organisation méthodique, une grande capacité
              d’adaptation et un esprit résolument ouvert. Que ce soit pour
              concevoir des interfaces élégantes, optimiser des systèmes backend
              ou accompagner d'autres développeurs, je m’investis pleinement
              avec dynamisme et humilité.
            </p>
            <p>
              En dehors du développement, je consacre mon temps à la lecture, à
              l'exploration d'idées innovantes et au mentorat, convaincu que le
              partage et l’apprentissage continu sont au cœur du progrès
              technologique.
            </p>
            </div>

          <Link to="/contact" className="btn w-fit p-8 bg-violet-600 text-white lg:text-lg text-sm font-light rounded-xl shadow-xl">Contactez moi</Link>

          </div>

          
        </section>




        <section className="flex flex-col w-full">
          {/*Technical skill*/}
          <h2 className="font-bold p-4  bg-violet-300 rounded-sm my-4 text-center w-full mb-4">
            Technical Skills
          </h2>
          <ImageGallery imagesSrc={imagesTechnicalSkills} />
        </section>
      </section>
    </>
  );
}
export default AboutPage;
