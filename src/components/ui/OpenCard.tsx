import { AnimatePresence, motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface OpencarteProps {
  isVisible: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
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
