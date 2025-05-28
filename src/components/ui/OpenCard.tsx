import { AnimatePresence, motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface OpencarteProps {
  isVisible: boolean;
  titre? : string;
  desc?: string;
  imgSrc?: string;
  date?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

export function OpencarteActualite({ isVisible, onClick, titre, desc, date }: OpencarteProps) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
        onClick={onClick}
          className="fixed inset-0 backdrop-blur-xs bg-transparent-violet flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <div>
              <p>{date}</p>
              <img src="/assets/icon/close-circle.svg" alt="close" onClick={onClick} className="h-10 w-10"/>
            </div>
            <button
              onClick={onClick}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2">{titre}</h2>
            <p className="mb-4 text-gray-700">
              {desc}
            </p>
            <button
              onClick={onClick}
              className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition"
            >
              Fermer
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


export function Opencarte({ isVisible, onClick }: OpencarteProps) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
        onClick={onClick}
          className="fixed inset-0 backdrop-blur-xs bg-transparent-violet flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button
              onClick={onClick}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2">Titre de la carte</h2>
            <p className="mb-4 text-gray-700">
              Voici les données cachées affichées dans cette carte. Tu peux y
              ajouter ce que tu veux : des textes, images, formulaire, etc.
            </p>
            <button
              onClick={onClick}
              className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition"
            >
              Fermer
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


