import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { MapPin, Calendar, Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Legal Intern",
    organization: "Guardian Europe Sàrl",
    location: "Luxembourg",
    period: "2024",
    responsibilities: [
      "Conducted legal research on Luxembourg corporate and regulatory frameworks",
      "Assisted in drafting corporate documentation and contracts",
      "Supported compliance review processes and due diligence activities",
      "Contributed to internal memoranda on investment fund regulations",
    ],
  },
  {
    title: "Member",
    organization: "Committee on the Reform of the General Regime of Obligations",
    location: "International",
    period: "2023 – Present",
    responsibilities: [
      "Participated in scholarly discussions on civil law reform initiatives",
      "Contributed comparative law perspectives to committee deliberations",
      "Analyzed proposed amendments and their implications across jurisdictions",
      "Collaborated with international legal scholars on reform proposals",
    ],
  },
  {
    title: "Legal Researcher & Author",
    organization: "Independent Legal Scholar",
    location: "International",
    period: "2021 – Present",
    responsibilities: [
      "Published 20+ articles in private and corporate law journals",
      "Conducted research on legal personality under Luxembourg law",
      "Contributed to academic discourse on comparative contract law",
      "Presented findings at legal conferences and symposia",
    ],
  },
  {
    title: "Legal Analyst / Assistant",
    organization: "Lextorium",
    location: "Remote",
    period: "2022 – 2023",
    responsibilities: [
      "Analyzed complex legal questions and prepared research memoranda",
      "Reviewed and summarized case law developments in civil and commercial law",
      "Assisted in the preparation of legal publications and educational materials",
      "Supported senior lawyers in client-facing research projects",
    ],
  },
  {
    title: "Legal Assistant to Private Law Expert",
    organization: "Academic Institution",
    location: "Moscow, Russia",
    period: "2021 – 2022",
    responsibilities: [
      "Provided research support to leading private law academic",
      "Prepared case analyses and statutory interpretations",
      "Assisted in the preparation of academic publications",
      "Organized and maintained legal research databases",
    ],
  },
  {
    title: "Legal Trainee",
    organization: "BGP Litigation",
    location: "Moscow, Russia",
    period: "2020 – 2021",
    responsibilities: [
      "Assisted in court proceedings and litigation support",
      "Drafted procedural documents and legal submissions",
      "Conducted legal research on civil and commercial disputes",
      "Supported senior associates in case preparation and strategy",
    ],
  },
];

const Experience = () => {
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
            <span className="text-overline">Career Path</span>
            <h1 className="mt-4 heading-display text-foreground">
              Professional Experience
            </h1>
            <div className="divider-gold-wide mt-6" />
            <p className="mt-8 text-body text-lg">
              A progressive journey through legal practice, research, and 
              academic contribution across multiple jurisdictions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`hidden md:block absolute top-8 w-3 h-3 bg-accent rounded-full ${
                      index % 2 === 0 ? "right-0 translate-x-[1.375rem]" : "left-0 -translate-x-[1.375rem]"
                    }`}
                  />

                  <AnimatedCard delay={index * 0.05} className="relative">
                    {/* Number indicator */}
                    <span className="absolute top-4 right-4 font-serif text-4xl text-accent/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase size={18} className="text-accent" />
                      <span className="text-overline">{exp.period}</span>
                    </div>

                    <h3 className="heading-card text-foreground">{exp.title}</h3>
                    <p className="mt-2 font-serif text-lg text-accent">
                      {exp.organization}
                    </p>

                    <div className="flex items-center gap-2 mt-3 text-small">
                      <MapPin size={14} className="text-muted-foreground" />
                      <span>{exp.location}</span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {exp.responsibilities.map((resp, rIndex) => (
                        <li
                          key={rIndex}
                          className="flex items-start gap-3 text-body"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <SectionHeading
            overline="Professional Skills"
            title="Developed Competencies"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "Legal Research & Analysis", level: "Advanced" },
              { skill: "Contract Drafting", level: "Proficient" },
              { skill: "Regulatory Compliance", level: "Proficient" },
              { skill: "Academic Writing", level: "Advanced" },
              { skill: "Due Diligence", level: "Proficient" },
              { skill: "Cross-border Transactions", level: "Developing" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-card border border-border/50"
              >
                <span className="font-medium text-foreground">{item.skill}</span>
                <span className="text-xs tracking-wider uppercase text-accent bg-accent/10 px-3 py-1">
                  {item.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Experience;
