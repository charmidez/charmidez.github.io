import { motion } from "framer-motion";
import { TabKey } from "../sections/about/AboutPageData";

interface parcoursProps {
  titre: string;
  description: string;
  institut? : string;
  className?: string;
  index: number;
  activeTab?: TabKey;
}

export default function SectionParcoursCard({
  titre,
  description,
  institut,
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
      <h2 className="card-title font-bold">{titre}</h2>
      <p className="card-text">{institut}</p>
      <p className="card-text">{description}</p>
    </motion.div>
  );
}
