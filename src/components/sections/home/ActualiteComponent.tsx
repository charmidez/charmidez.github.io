export function UtiliserNextJS() {
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
