

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
      className={`flex flex-col justify-center lg:px-16 py-8 px-4 lg:gap-4 gap-2 ${className}`}
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
      <div className="card shadow-sm bg-violet-100 lg:card-side lg:card-md card-sm rounded-lg">
        <figure>
          <img src={imgSrc} alt={titreCard} className="w-full h-40 lg:w-40 lg:h-full object-cover lg:rounded-none" />
        </figure>


        <div className="card-body flex-1 p-4 flex flex-col justify-start">
          <h2 className="card-title">{titreCard}</h2>
          <p className="text-gray-600">{resume}</p>
          <p>{date}</p>
          <a className="card-actions justify-end">
            <button className="btn bg-violet-600 w-full text-white">{button}</button>
          </a>
        </div>
      </div>
    </>
  );
}
