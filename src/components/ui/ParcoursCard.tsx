import { motion } from "framer-motion";
import { TabKey } from "../sections/about/AboutPageData";
//import { details } from "framer-motion/client";

interface parcoursProps {
  titre: string;
  date?: string;
  description: string;
  details?: string[];
  institut?: string;
  className?: string;
  index: number;
  activeTab?: TabKey;
}

export default function SectionParcoursCard({
  titre,
  date,
  description,
  details,
  institut,
  className,
  index,
  activeTab,
}: parcoursProps) {
  return (
    <motion.div
      key={`${activeTab}-${index}`}
      className=""
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div
        className={`card card-body p-2 lg:p-4 w-full rounded-3xl bg-white ${className} `}
      >
        <p className="card-title font-bold lg:text-lg lg:p-4 p-2 bg-violet-200 text-violet-600 rounded-xl justify-center">
          {titre}
        </p>
        <p className="self-center font-semibold">{date}</p>
        {activeTab && activeTab === "experiences" && (
          <p className="font-medium text-violet-600"><span className="font-bold">Entreprise : </span> {institut}</p>
        )
        }
        {activeTab && activeTab === "formations" && (
          <p className="font-medium text-violet-600"><span className="font-bold">Institut : </span> {institut}</p>
        )}
        <p className="card-text font-bold">{description}</p>
        { details && details.map((detail, i) => (
          <p key={i} className="card-text pl-2 lg:pl-4">
            {detail}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
