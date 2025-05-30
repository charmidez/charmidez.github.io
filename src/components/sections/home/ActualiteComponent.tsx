{
  /** 
   * 
   * export function UtiliserNextJS() {
  return (
    <div>
      <p>
        Next.js propose un composant natif appelé{" "}
        <span className="font-light text-violet-600">{"<Image />"}</span> qui
        permet d’optimiser les performances de chargement des images. <br />{" "}
        Voici ses principaux avantages :
      </p>
      <ul>
        <li>Chargement paresseux (lazy loading) automatique</li>
        <li>Redimensionnement d’image côté serveur</li>
        <li>Support de formats modernes comme WebP ou AVIF</li>
        <li>Optimisation SEO et accessibilité</li>
        <li>Mise en cache automatique et responsive facile</li>
      </ul>
    </div>
  );
}
   * 
  */
}


export function ComprendreGitEtPlateformes() {
  return (
    <div>
      <p className="mb-4">
        Git est un système de gestion de version distribué, créé par Linus
        Torvalds, permettant à des développeurs de collaborer efficacement sur
        du code source, en gardant un historique clair et traçable des
        modifications.
      </p>

      <img
        src="/assets/featured/git3.png"
        alt="Illustration de Git"
        className="rounded-xl shadow-md w-40 mb-6"
      />

      <h2 className="text-xl font-semibold mb-2">
        Quelle est la différence entre Git, GitHub, GitLab et Bitbucket ?
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Git</strong> est le **logiciel de gestion de version** utilisé
          localement ou à travers des plateformes.
        </li>
        <li>
          <strong>GitHub</strong> est une plateforme en ligne qui héberge des
          dépôts Git, avec un focus sur l’**open source** et la **communauté**.
        </li>
        <li>
          <strong>GitLab</strong> est une alternative open source qui inclut
          **CI/CD intégré** et des fonctionnalités DevOps.
        </li>
        <li>
          <strong>Bitbucket</strong> est une solution d’Atlassian qui s’intègre
          très bien à **Jira**, et supporte **Git et Mercurial** (avant 2020).
        </li>
      </ul>

      <img
        src="/assets/featured/git2.webp"
        alt="Comparaison GitHub, GitLab et Bitbucket"
        className="rounded-xl shadow-md mb-6 w-70"
      />

      <h2 className="text-xl font-semibold mb-2">Pourquoi utiliser chacun ?</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>GitHub</strong> : parfait pour les projets open source, grâce
          à sa **communauté massive**, ses **actions GitHub**, et son
          intégration avec Copilot.
        </li>
        <li>
          <strong>GitLab</strong> : idéal pour les entreprises cherchant une
          **chaîne CI/CD complète** et un contrôle total (auto-hébergement
          possible).
        </li>
        <li>
          <strong>Bitbucket</strong> : recommandé pour les équipes déjà engagées
          dans l’**écosystème Atlassian** (Jira, Confluence).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        Quel outil pour quel domaine ?
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>GitHub</strong> : Développement open source, bibliothèques
          publiques, communautés.
        </li>
        <li>
          <strong>GitLab</strong> : DevOps, intégration continue, déploiement
          automatisé.
        </li>
        <li>
          <strong>Bitbucket</strong> : Gestion de projet d’entreprise avec suivi
          de tâches, surtout si vous utilisez Jira.
        </li>
      </ul>

      <p>
        Quel que soit votre choix, comprendre les particularités de chaque
        plateforme vous permettra de mieux organiser votre travail d’équipe,
        sécuriser votre code, et accélérer vos livraisons.
      </p>
    </div>
  );
}

export function KtorVsSpringArticle() {
  return (
    <div className="prose max-w-none">
      <p className="mb-4">
        Kotlin est devenu un langage populaire pour le développement backend,
        notamment grâce à deux frameworks :{" "}
        <span className="font-medium text-violet-600">Ktor</span> et{" "}
        <span className="font-medium text-green-600">Spring Boot</span>. Mais
        lequel choisir ?
      </p>

      <div className="flex lg:flex-row flex-col gap-4 lg:gap-8 mb-4">
        {/*Spring boot*/}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold">🌱 Spring Boot : le géant mature et robuste</h2>
          <img
            src="/assets/icon/spring.svg"
            alt="Logo Spring"
            className="w-40 my-4"
          />
          <p>
            Spring Boot est un framework Java/Kotlin très riche, qui permet de
            développer des API, des microservices, ou même des applications
            complètes. Il est basé sur le célèbre écosystème Spring.
          </p>
          <ul>
            <li>✅ Énorme écosystème (Spring Security, Data, etc.)</li>
            <li>✅ Maturité et communauté très active</li>
            <li>
              ✅ Intégration native avec des bases de données, Kafka, etc.
            </li>
            <li>⚠️ Courbe d'apprentissage parfois raide</li>
            <li>⚠️ Moins flexible, plus "configuration par convention"</li>
          </ul>

          <h2>🧪 Exemple de code : Hello World</h2>
          <h4>Avec Spring Boot</h4>
          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm">
            <code>
              {`@RestController
@RequestMapping("/api")
class HelloController {
  @GetMapping("/hello")
  fun hello() = "Hello from Spring!"
}`}
            </code>
          </pre>
        </div>

        {/*Ktor*/}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold">🚀 Ktor : la modernité légère made in JetBrains</h2>
          <img
            src="/assets/icon/ktor.svg"
            alt="Logo Ktor"
            className="w-40 my-4 bg-white p-2 rounded-md"
          />
          <p>
            Développé par JetBrains (les créateurs de Kotlin),{" "}
            <strong>Ktor</strong> est un framework minimaliste et asynchrone
            pour créer des APIs HTTP en Kotlin pur.
          </p>
          <ul>
            <li>✅ Léger, rapide à démarrer</li>
            <li>✅ Très modulaire et asynchrone</li>
            <li>✅ Idéal pour des microservices ou API custom</li>
            <li>⚠️ Moins de ressources communautaires</li>
            <li>⚠️ Moins d’outils "clés en main" que Spring</li>
          </ul>

          <h2>🧪 Exemple de code : Hello World</h2>

          <h4>Avec Ktor</h4>
          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm">
            <code>
              {`fun main() {
  embeddedServer(Netty, port = 8080) {
    routing {
      get("/hello") {
        call.respondText("Hello from Ktor!")
      }
    }
  }.start(wait = true)
}`}
            </code>
          </pre>
        </div>
      </div>

      <h2>🤔 Alors, lequel choisir ?</h2>
      <table className="table-auto w-full border mt-4 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Critère</th>
            <th className="border p-2">Ktor</th>
            <th className="border p-2">Spring Boot</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Performance</td>
            <td className="border p-2">Haute (léger)</td>
            <td className="border p-2">Bonne</td>
          </tr>
          <tr>
            <td className="border p-2">Communauté</td>
            <td className="border p-2">Moyenne</td>
            <td className="border p-2">Très grande</td>
          </tr>
          <tr>
            <td className="border p-2">Modularité</td>
            <td className="border p-2">Totale</td>
            <td className="border p-2">Structurée</td>
          </tr>
          <tr>
            <td className="border p-2">Courbe d'apprentissage</td>
            <td className="border p-2">Simple</td>
            <td className="border p-2">Intermédiaire</td>
          </tr>
        </tbody>
      </table>

      <h2 className="mt-8">🔚 Conclusion</h2>
      <p>
        Choisissez <strong>Ktor</strong> si vous recherchez une API rapide,
        légère et 100% Kotlin, notamment pour des microservices modernes.{" "}
        Préférez <strong>Spring Boot</strong> si vous avez besoin d’un framework
        complet, éprouvé et puissant pour des applications d’entreprise.
      </p>

      <p className="mt-4">
        🔗 Ressources utiles :
        <ul className="list-disc pl-6 mt-2">
          <li>
            <a
              href="https://ktor.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Site officiel de Ktor
            </a>
          </li>
          <li>
            <a
              href="https://spring.io/projects/spring-boot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Site officiel de Spring Boot
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
}

export function UtiliserNextJS() {
  return (
    <div className="prose max-w-none">
      <p>
        Dans le développement web moderne, les performances et l’expérience
        utilisateur sont des enjeux cruciaux. C’est pourquoi{" "}
        <strong>Next.js</strong>, le framework React populaire, propose un
        composant natif appelé{" "}
        <code className="text-violet-600">&lt;Image /&gt;</code> pour gérer les
        images de façon intelligente.
      </p>

      <h2>📷 Qu’est-ce que le composant &lt;Image /&gt; ?</h2>
      <img
        src="/assets/featured/nextjs-image.webp"
        alt="Image optimisation Next.js"
        className="rounded-lg my-4 shadow"
      />
      <p>
        Il s’agit d’un composant optimisé qui remplace avantageusement la
        balise HTML classique <code>&lt;img /&gt;</code>, avec des
        fonctionnalités intégrées :
      </p>

      <ul>
        <li>✅ Chargement paresseux (lazy loading)</li>
        <li>✅ Redimensionnement côté serveur (optimisation)</li>
        <li>✅ Conversion automatique en WebP/AVIF</li>
        <li>✅ Mise en cache intelligente</li>
        <li>✅ Support responsive natif</li>
        <li>✅ Accessibilité améliorée (avec priorité)</li>
      </ul>

      <h2>🧪 Exemple d’utilisation basique</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm">
        <code>
{`import Image from 'next/image'

export default function Exemple() {
  return (
    <Image
      src="/mon-image.jpg"
      alt="Texte alternatif"
      width={800}
      height={600}
    />
  )
}`}
        </code>
      </pre>

      <h2>💡 Comparaison avec &lt;img&gt;</h2>
      <table className="table-auto w-full border mt-4 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Fonctionnalité</th>
            <th className="border p-2">&lt;img&gt;</th>
            <th className="border p-2">&lt;Image /&gt;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Chargement paresseux</td>
            <td className="border p-2">❌</td>
            <td className="border p-2">✅</td>
          </tr>
          <tr>
            <td className="border p-2">Optimisation taille/format</td>
            <td className="border p-2">❌</td>
            <td className="border p-2">✅</td>
          </tr>
          <tr>
            <td className="border p-2">Conversion WebP</td>
            <td className="border p-2">❌</td>
            <td className="border p-2">✅</td>
          </tr>
          <tr>
            <td className="border p-2">SEO et accessibilité</td>
            <td className="border p-2">⚠️</td>
            <td className="border p-2">✅</td>
          </tr>
        </tbody>
      </table>

      <h2>🔎 À retenir</h2>
      <p>
        Le composant <code>&lt;Image /&gt;</code> de Next.js est indispensable
        pour toute application qui mise sur :
      </p>
      <ul>
        <li>⚡ Des temps de chargement rapides</li>
        <li>📱 Une interface responsive optimale</li>
        <li>🔍 Un bon référencement naturel (SEO)</li>
      </ul>

      <p className="mt-6">
        Pour aller plus loin :
        <ul className="list-disc pl-6 mt-2">
          <li>
            <a
              href="https://nextjs.org/docs/app/building-your-application/optimizing/images"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Documentation officielle Next.js sur l’optimisation d’image
            </a>
          </li>
          <li>
            <a
              href="https://vercel.com/docs/image-optimization"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Guide Vercel sur les performances images
            </a>
          </li>
        </ul>
      </p>

      <h2 className="mt-8">🧩 Conclusion</h2>
      <p>
        En production, éviter le composant <code>&lt;img&gt;</code> devient une
        évidence si vous utilisez Next.js. Son composant{" "}
        <code>&lt;Image /&gt;</code> vous assure une application rapide,
        accessible et bien référencée. Un choix simple pour un rendu pro. 🌍🚀
      </p>
    </div>
  );
}

