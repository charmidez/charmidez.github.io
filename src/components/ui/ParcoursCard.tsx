import { motion } from "framer-motion";
import { TabKey } from "../sections/dataContents/AboutPageData";

interface parcoursProps {
  titre: string;
  description: string;
  className?: string;
  index: number;
  activeTab?: TabKey;
}

export default function SectionParcoursCard({
  titre,
  description,
  className,
  index,
  activeTab,
}: parcoursProps) {
  return (
    <motion.div
      key={`${activeTab}-${index}`}
      className={`card card-body w-full rounded-3xl bg-white ${className} `}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <h2 className="card-title">{titre}</h2>
      <p className="card-text">{description}</p>
      <a className="card-actions justify-start w-fit hover:gap-4 transition-all transform duration-300" href="#">
        <p className="text-violet-800 text-sm">Voir plus</p>
        <img src="/assets/icon/arrow-right.svg" alt="Arrow Right" className="lg:h-5 lg:w-5 w-5" />
      </a>
    </motion.div>
  );
}
