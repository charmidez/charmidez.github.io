//import { Component } from "react";

import {
  ComprendreGitEtPlateformes,
  KtorVsSpringArticle,
  UtiliserNextJS,
} from "./ActualiteComponent";

export const homePageDataPresentation = {
  salutation: `Bonjour, Je suis `,
  title: "Charmidez ASSIOBO",
  subtitle: "Développeur Web & Mobile Passionné",
  description: `Je suis un développeur web et mobile passionné, spécialisé dans la création d'applications modernes et réactives. Mon expertise couvre une variété de technologies, notamment React, Node.js, et bien d'autres. 
                  Je suis toujours à la recherche de nouveaux défis et d'opportunités pour apprendre et grandir dans le domaine du développement.`,
};

export const homePageDataActualite = {
  title: "Ce que je pense",
  articles: [
    {
      slug: "pourquoi-utiliser-nextjs",
      titre: "Pourquoi utiliser <Image/> de Next.js ?",
      date: "04 Avril 2025",
      image: "/assets/featured/n.png",
      resume: `Un outil puissant en subtitut de <img>.`,
      component: <UtiliserNextJS />,
      auteur: "Charmidez ASSIOBO",
    },
    {
      slug: "comprendre-git-et-plateformes",
      titre:
        "Git, GitHub, GitLab, Bitbucket : comprendre les différences et bien choisir sa plateforme",
      date: "25 Mai 2025",
      image: "/assets/featured/git.webp",
      resume: `Git est un système de contrôle de version puissant, mais pour collaborer efficacement, il faut choisir une plateforme d’hébergement adaptée`,
      component: <ComprendreGitEtPlateformes />,
      auteur: "Charmidez ASSIOBO",
    },
    {
  slug: "kotlin-vs-spring",
  titre: "Kotlin vs Spring Boot : comprendre leurs rôles et bien choisir sa stack backend",
  date: "29 Mai 2025",
  image: "/assets/featured/kotlin-spring.webp",
  resume: `Kotlin et Spring Boot sont souvent associés, mais leurs rôles sont bien différents. L'un est un langage moderne, l'autre un framework robuste. Lequel utiliser et quand ?`,
  component: <KtorVsSpringArticle />,
  auteur: "Charmidez ASSIOBO"
}

  ],
};

export const homePageDataCodeVibe = {
  title: "Vibe Coding",
  texte: "",
};
