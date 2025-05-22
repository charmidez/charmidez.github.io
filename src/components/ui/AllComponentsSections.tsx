type TitresectionProps = {
  titre: string;
  className?: string;
};

export function Titresection({ titre, className }: TitresectionProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2
        className={`text-violet-600 lg:text-3xl md:text-2xl text-xl font-semibold uppercase lg:pb-4 md:pb-4 pb-2 ${className} `}
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
      className={`flex flex-col justify-center lg:px-16 py-8 lg:py-16 px-4 lg:gap-4 gap-2 ${className}`}
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
}: CardsimpleProps) {
  return (
    <>
      <div className="card shadow-sm bg-violet-100 lg:card-side lg:card-md card-sm rounded-3xl">
        <figure>
          <img
            src={imgSrc}
            alt={titreCard}
            className="w-full h-40 lg:w-40 lg:h-full object-cover lg:rounded-none"
          />
        </figure>

        <div className="card-body flex-1 p-4 flex flex-col justify-start">
          <h2 className="card-title">{titreCard}</h2>
          <p className="text-gray-600">{resume}</p>
          <p>{date}</p>
          <a className="card-actions justify-start">
            <ButtonLirePlus link="#" text="Voir plus" />
          </a>
        </div>
      </div>
    </>
  );
}

interface ButtonProps {
  link : string;
  text : string
  onClick? : MouseEventHandler<HTMLAnchorElement>
}

export function ButtonLirePlus({link, text, onClick}: ButtonProps) {
  return (
    <a
      className="card-actions justify-start w-fit hover:gap-4 transition-all transform duration-300"
      href={link}
      onClick={onClick}
    >
      <p className="text-violet-800 text-sm">{text}</p>
      <img
        src="/assets/icon/arrow-right.svg"
        alt="Arrow Right"
        className="lg:h-5 lg:w-5 w-5"
      />
    </a>
  );
}



