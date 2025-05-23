import { ButtonLirePlus, Titresection } from "../../ui/AllComponentsSections";

interface ContactcardProps {
    imgSrc : string
    titre : string,
    linkToAction : string,
    textButton : string
}

function Contactcard({titre, imgSrc, linkToAction, textButton} : ContactcardProps ){
    return(
        <div className="card rounded-3xl shadow-xl bg-white items-start">
        <figure className="p-4">
          <img
            src={imgSrc}
            alt="Whatsapp"
            className="object-contain h-10"
          />
        </figure>

        <div className="card-body pt-0 justify-between">
          <div className="flex flex-row items-center">
            <h3 className="card-title lg:text-lg text-sm font-normal">{titre}</h3>
          </div>

          <a className="card-actions justify-start">
            <ButtonLirePlus link={linkToAction} text={textButton} />
          </a>
        </div>
      </div>
    )

}

export function Contactbutton() {
  return (
    <div className="">
      <Titresection titre="Me contacter" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-2">
        <Contactcard titre="Un appel GSM ?" imgSrc="/assets/icon/call.svg" linkToAction="" textButton="Par ici"/>
        <Contactcard titre="Me contacter par whatsapp" imgSrc="/assets/icon/whatsapp.svg" linkToAction="" textButton="Un sms par ici"/>
        <Contactcard titre="Me contacter par telegram" imgSrc="/assets/icon/telegram.svg" linkToAction="" textButton="Un message telegram par ici"/>
        <Contactcard titre="Me contacter par whatsapp" imgSrc="/assets/icon/mail_2.svg" linkToAction="" textButton="Écrire un mail par ici"/>
      </div>
    </div>
  );
}
