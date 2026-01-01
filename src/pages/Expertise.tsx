import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Building2,
  Landmark,
  FileText,
  Shield,
  Scale,
  Gavel,
} from "lucide-react";

const practiceAreas = [
  {
    icon: Building2,
    title: "Corporate & Commercial Law",
    description:
      "Advisory on corporate structures, governance, and commercial transactions. Experience with company formation, shareholder agreements, and corporate reorganizations.",
  },
  {
    icon: Landmark,
    title: "Investment Funds & Regulatory Frameworks",
    description:
      "Understanding of Luxembourg fund structures including SICAVs, SIFs, and RAIFs. Familiarity with UCITS and AIFMD regulatory requirements.",
  },
  {
    icon: FileText,
    title: "Contract Drafting & Legal Documentation",
    description:
      "Preparation and review of commercial contracts, service agreements, and corporate documentation. Focus on clarity, enforceability, and risk allocation.",
  },
  {
    icon: Shield,
    title: "Compliance & Risk Assessment",
    description:
      "Support in regulatory compliance matters, risk identification, and development of compliance frameworks. Understanding of AML/KYC requirements.",
  },
  {
    icon: Scale,
    title: "Comparative Private Law",
    description:
      "Analysis of private law across jurisdictions, with particular focus on contract law, obligations, and legal personality. Academic research published in this field.",
  },
  {
    icon: Gavel,
    title: "Court Practice & Case Law Analysis",
    description:
      "Experience in litigation support and procedural matters. Systematic analysis of case law developments and their practical implications.",
  },
];

const Expertise = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-overline">Practice Areas</span>
            <h1 className="mt-4 heading-display text-foreground">
              Areas of Expertise
            </h1>
            <div className="divider-gold-wide mt-6" />
            <p className="mt-8 text-body text-lg">
              Focused expertise in corporate and investment funds law, 
              supported by strong foundations in contract drafting, 
              compliance, and comparative legal analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-card border border-border/50 hover:border-accent/40 transition-all duration-500"
              >
                {/* Background accent on hover */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-primary/5 group-hover:bg-accent/10 transition-colors duration-500">
                    <area.icon
                      size={28}
                      className="text-primary group-hover:text-accent transition-colors duration-500"
                    />
                  </div>

                  {/* Number */}
                  <span className="absolute top-0 right-0 font-serif text-5xl text-accent/10 group-hover:text-accent/20 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-6 heading-card text-foreground">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-body">{area.description}</p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Context */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-light text-xs tracking-[0.2em] uppercase">
              Jurisdictional Focus
            </span>
            <h2 className="heading-section mt-4 text-primary-foreground">
              Luxembourg & EU Legal Framework
            </h2>
            <div className="divider-gold mt-6 mx-auto" />
            <p className="mt-8 text-primary-foreground/70 max-w-2xl mx-auto">
              My practice is centered on Luxembourg law, with particular 
              attention to its role as a premier financial center within the 
              European Union. The CCDL qualification currently in progress 
              will further strengthen my foundation in Luxembourg's 
              distinctive legal system.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {[
              "Luxembourg Law",
              "EU Directives",
              "UK Common Law",
              "Russian Civil Law",
            ].map((item) => (
              <span
                key={item}
                className="px-6 py-2 border border-primary-foreground/20 text-sm text-primary-foreground/80"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            overline="Working Method"
            title="Professional Approach"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Research",
                description:
                  "Thorough analysis of applicable legal frameworks, precedents, and scholarly commentary to build a solid foundation for any matter.",
              },
              {
                step: "02",
                title: "Analysis",
                description:
                  "Systematic examination of legal questions, identifying key issues, risks, and opportunities through structured reasoning.",
              },
              {
                step: "03",
                title: "Solution",
                description:
                  "Development of practical, well-reasoned recommendations that address legal requirements while serving client objectives.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center p-8"
              >
                <span className="font-serif text-5xl text-accent/30">
                  {item.step}
                </span>
                <h3 className="mt-4 font-serif text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-body">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Expertise;
