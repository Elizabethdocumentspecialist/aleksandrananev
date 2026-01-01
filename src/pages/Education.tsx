import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { GraduationCap, Award, BookOpen } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
  status?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Cours Complémentaire en Droit Luxembourgeois (CCDL)",
    institution: "University of Luxembourg",
    location: "Luxembourg",
    period: "In Progress",
    status: "Current",
    details: [
      "Comprehensive program in Luxembourg law for foreign-qualified lawyers",
      "Focus on Luxembourg civil law, commercial law, and procedural law",
      "Essential qualification for legal practice in Luxembourg",
    ],
  },
  {
    degree: "LLB (Hons) in Law",
    institution: "Higher School of Economics",
    location: "Moscow, Russia",
    period: "2018 – 2022",
    details: [
      "Rigorous legal education in civil law tradition",
      "Strong foundation in contract law, corporate law, and legal theory",
      "Academic excellence with focus on private law specialization",
      "Thesis on comparative contract law methodology",
    ],
  },
  {
    degree: "BSc (Hons) in Law",
    institution: "The Open University",
    location: "United Kingdom",
    period: "2019 – 2023",
    details: [
      "Parallel common law degree providing cross-jurisdictional perspective",
      "Understanding of UK legal system and common law principles",
      "Comparative analysis of civil and common law traditions",
      "Recognition of qualification in EU context",
    ],
  },
  {
    degree: "Advanced Legal Training",
    institution: "Various Institutions",
    location: "International",
    period: "Ongoing",
    details: [
      "Corporate law and governance",
      "Banking and finance law",
      "Insolvency and restructuring",
      "Continuing professional development in investment funds",
    ],
  },
];

const Education = () => {
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
            <span className="text-overline">Academic Background</span>
            <h1 className="mt-4 heading-display text-foreground">
              Education & Qualifications
            </h1>
            <div className="divider-gold-wide mt-6" />
            <p className="mt-8 text-body text-lg">
              A comprehensive legal education spanning civil law and common law 
              traditions, combining rigorous academic training with practical 
              professional development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-12">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative pl-20"
                  >
                    {/* Timeline icon */}
                    <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center bg-card border border-border/50 rounded-none">
                      <GraduationCap size={24} className="text-accent" />
                    </div>

                    {/* Content card */}
                    <div className="bg-card border border-border/50 p-8 hover:border-accent/30 transition-colors duration-300">
                      {/* Status badge */}
                      {edu.status && (
                        <span className="inline-block mb-4 px-3 py-1 bg-accent/10 text-accent text-xs font-medium tracking-wider uppercase">
                          {edu.status}
                        </span>
                      )}

                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="heading-card text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="mt-2 font-serif text-lg text-accent">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="text-overline shrink-0">{edu.period}</span>
                      </div>

                      <p className="text-small mb-4">{edu.location}</p>

                      <ul className="space-y-2">
                        {edu.details.map((detail, dIndex) => (
                          <li
                            key={dIndex}
                            className="flex items-start gap-3 text-body"
                          >
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Degree Recognition */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <SectionHeading
            overline="International Recognition"
            title="Cross-Jurisdictional Qualifications"
            subtitle="Degrees obtained from institutions with recognized standing, providing a solid foundation for practice in Luxembourg and across the European Union."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-8 bg-card border border-border/50"
          >
            <div className="flex items-start gap-4">
              <Award size={24} className="text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg font-medium text-foreground">
                  Qualification Recognition
                </h4>
                <p className="mt-2 text-body">
                  The combination of UK and Continental European legal education 
                  provides a unique perspective valued in Luxembourg's international 
                  legal market. The ongoing CCDL qualification demonstrates commitment 
                  to full integration into the Luxembourg legal profession.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-gold-light text-xs tracking-[0.2em] uppercase">
              Academic Distinction
            </span>
            <h2 className="heading-section mt-4 text-primary-foreground">
              Commitment to Excellence
            </h2>
            <div className="divider-gold mt-6 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: BookOpen,
                title: "20+ Publications",
                description:
                  "Academic articles in private law and corporate law journals",
              },
              {
                icon: GraduationCap,
                title: "Dual Jurisdiction",
                description:
                  "Education spanning UK common law and Continental civil law",
              },
              {
                icon: Award,
                title: "Ongoing Development",
                description:
                  "Continuous professional education and CCDL qualification",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center p-6"
              >
                <item.icon size={32} className="mx-auto text-gold" />
                <h3 className="mt-6 font-serif text-xl text-primary-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-primary-foreground/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Education;
