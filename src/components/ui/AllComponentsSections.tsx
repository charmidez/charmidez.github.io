import MineImage from "./MineImage";

type TitresectionProps = {
  titre: string;
  className?: string;
};

export function Titresection({ titre, className }: TitresectionProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2
        className={`text-violet-600 lg:text-3xl md:text-2xl text-xl font-semibold uppercase ${className} `}
      >
        {titre}
      </h2>
    </div>
  );
}

type SectionDivProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionDivMine({ children, className }: SectionDivProps) {
  return (
    <div
      className={`flex flex-col justify-center lg:px-16 py-8 lg:gap-4 gap-2 ${className}`}
    >
      {children}
    </div>
  );
}

type CardsimpleProps = {
  titreCard: string;
  imgSrc: string;
  resume?: string;
  date?: string;
  button?: string;
};

export function Cardsimple({
  titreCard,
  imgSrc,
  resume,
  date,
  button,
}: CardsimpleProps) {
  return (
    <>
<div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={imgSrc}
      alt={titreCard} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{titreCard}</h2>
    <p>{resume}</p>
    <p>{date}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-neutral">{button}</button>
    </div>
  </div>
</div>
    </>
  );
}
