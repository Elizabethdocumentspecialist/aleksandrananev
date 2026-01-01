import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string | ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeading = ({
  overline,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignClass} mb-12 md:mb-16`}
    >
      {overline && (
        <span className={`text-overline mb-4 ${light ? "text-gold-light" : ""}`}>
          {overline}
        </span>
      )}
      <h2
        className={`heading-section ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <div className={`divider-gold mt-6 ${align === "center" ? "mx-auto" : ""}`} />
      {subtitle && (
        <p
          className={`mt-6 max-w-2xl text-body ${
            light ? "text-primary-foreground/70" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
