import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp } from "@/lib/animations";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
}

export default function SectionReveal({
  children,
  className,
}: SectionRevealProps) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}