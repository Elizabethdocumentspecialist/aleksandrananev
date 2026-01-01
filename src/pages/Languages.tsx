import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { Globe, CheckCircle } from "lucide-react";

interface LanguageItem {
  language: string;
  level: string;
  proficiency: number;
  description: string;
}

const languages: LanguageItem[] = [
  {
    language: "Russian",
    level: "Native",
    proficiency: 100,
    description: "Mother tongue with full professional and academic proficiency",
  },
  {
    language: "English",
    level: "C1 - Advanced",
    proficiency: 90,
    description: "Full working proficiency for legal practice and academic writing",
  },
  {
    language: "French",
    level: "B1-B2 - Upper Intermediate",
    proficiency: 60,
    description: "Professional working proficiency, continuing development",
  },
  {
    language: "German",
    level: "B1-B2 - Upper Intermediate",
    proficiency: 60,
    description: "Professional working proficiency, continuing development",
  },
  {
    language: "Luxembourgish",
    level: "A2 - Elementary",
    proficiency: 30,
    description: "Basic proficiency, actively learning for local integration",
  },
];

const skills = [
  {
    category: "Legal Research",
    items: [
      "Legal database research (Lexis, Westlaw)",
      "Academic research methodology",
      "Case law analysis and synthesis",
      "Statutory interpretation",
      "Comparative law analysis",
    ],
  },
  {
    category: "Drafting",
    items: [
      "Contract drafting and review",
      "Corporate documentation",
      "Legal memoranda",
      "Academic articles",
      "Procedural documents",
    ],
  },
  {
    category: "Professional Skills",
    items: [
      "Cross-border collaboration",
      "Multi-jurisdictional matters",
      "Due diligence processes",
      "Regulatory compliance review",
      "Legal project coordination",
    ],
  },
];

const Languages = () => {
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
            <span className="text-overline">Professional Profile</span>
            <h1 className="mt-4 heading-display text-foreground">
              Languages & Skills
            </h1>
            <div className="divider-gold-wide mt-6" />
            <p className="mt-8 text-body text-lg">
              A multilingual profile essential for Luxembourg's international 
              legal environment, combined with core legal competencies developed 
              through education and practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            overline="Multilingual Capabilities"
            title="Language Proficiency"
            subtitle="Working across languages is essential in Luxembourg's multicultural legal environment"
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card border border-border/50 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Language info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Globe size={20} className="text-accent" />
                      <h3 className="font-serif text-xl text-foreground">
                        {lang.language}
                      </h3>
                    </div>
                    <p className="mt-1 text-overline">{lang.level}</p>
                    <p className="mt-2 text-small">{lang.description}</p>
                  </div>

                  {/* Proficiency bar */}
                  <div className="w-full md:w-48">
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-accent"
                      />
                    </div>
                    <p className="mt-2 text-right text-xs text-muted-foreground">
                      {lang.proficiency}%
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <SectionHeading
            overline="Core Competencies"
            title="Professional Skills"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.15 }}
                className="bg-card border border-border/50 p-8"
              >
                <h3 className="font-serif text-xl text-foreground mb-6">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-start gap-3 text-body"
                    >
                      <CheckCircle
                        size={16}
                        className="text-accent shrink-0 mt-1"
                      />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Tools */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            overline="Tools & Technology"
            title="Technical Proficiency"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Microsoft Office",
              "Legal Databases",
              "Document Management",
              "Research Platforms",
              "Virtual Collaboration",
              "Case Management",
              "PDF & E-Signing",
              "Translation Tools",
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-card border border-border/50 text-center hover:border-accent/30 transition-colors duration-300"
              >
                <span className="text-sm text-foreground">{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Border Context */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-light text-xs tracking-[0.2em] uppercase">
              International Practice
            </span>
            <h2 className="heading-section mt-4 text-primary-foreground">
              Cross-Border Capability
            </h2>
            <div className="divider-gold mt-6 mx-auto" />
            <p className="mt-8 text-primary-foreground/70 max-w-2xl mx-auto">
              Luxembourg's position as an international financial center 
              requires legal professionals who can work across languages 
              and jurisdictions. My multilingual abilities and cross-cultural 
              experience enable effective collaboration with clients and 
              colleagues from diverse backgrounds.
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
              "Multi-lingual Drafting",
              "Cross-cultural Communication",
              "International Collaboration",
              "Comparative Analysis",
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
    </PageTransition>
  );
};

export default Languages;
