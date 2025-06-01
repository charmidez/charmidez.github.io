import { AnimatePresence, motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface OpencarteProps {
  isVisible: boolean;
  titre?: string;
  imgSrc?: string;
  date?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  component?: React.ReactNode;
}

export function OpencarteActualite({
  isVisible,
  onClick,
  titre,
  component,
  date,
}: OpencarteProps) {
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
          <div className="bg-white rounded-3xl shadow-lg p-4  relative flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
              <p className="text-violet-600 font-semibold lg:text-lg text-sm">
                {date}
              </p>
              <img
                src="/assets/icon/close-circle.svg"
                alt="close"
                onClick={onClick}
                className="h-10 w-10"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{titre}</h2>
            <div className="mb-4 text-gray-700">{component}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Opencarte({
  isVisible,
  onClick,
  titre,
  component,
}: OpencarteProps) {
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
          <div className="bg-white rounded-3xl lg:p-4 p-2  relative">
            <div className="bg-violet-200 p-2 rounded-2xl flex flex-row gap-4 justify-between items-center mb-2">
              <h2 className="text-sm font-bold text-violet-800"><span className="font-light">Quelques aperçus de </span> {titre}</h2>
              <img
                src="/assets/icon/close-circle.svg"
                alt="close"
                onClick={onClick}
                className="h-10 w-10 "
              />
            </div>

            <div>{component}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

{
  /*absolute top-4 right-4*/
}
