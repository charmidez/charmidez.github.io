
// components/PageWrapper.js
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

import { PropsWithChildren } from "react";

export default function PageWrapper({ children }: PropsWithChildren<{}>) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
