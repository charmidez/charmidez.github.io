import React from "react";
import CardProject from "../CardProject";

function ProjectsMine() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-violet-800 mb-4">My Projects</h1>
        <p className="text-lg text-gray-700 mb-8">
          Here are some of the projects I have worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
        <CardProject imageSrc="/src/assets/PhotoMoi.png" title="Site web YEMAG" description="Nous avons fait un site web YEMAG très propre"/>
        <CardProject imageSrc="/src/assets/PhotoMoi.png" title="Site web YEMAG" description="Nous avons fait un site web YEMAG très propre"/>
        <CardProject imageSrc="/src/assets/PhotoMoi.png" title="Site web YEMAG" description="Nous avons fait un site web YEMAG très propre"/>
        <CardProject imageSrc="/src/assets/PhotoMoi.png" title="Site web YEMAG" description=""/>
      </div>
    </div>
  );
}

export default ProjectsMine;