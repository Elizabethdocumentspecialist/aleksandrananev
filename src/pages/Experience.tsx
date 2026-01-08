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
    title: "Legal Intern – Legal Department",
    organization: "Guardian Europe Sàrl",
    location: "Luxembourg",
    period: "09/2025 – Present",
    responsibilities: [
      "Drafted and reviewed commercial contracts, internal correspondence, legal notices, and corporate documentation",
      "Conducted legal risk evaluations in support of ongoing business operations",
      "Assisted the Legal Director with corporate, compliance, and governance-related matters",
      "Participated in client and internal stakeholder calls",
      "Collaborated with Compliance, HR, Treasury, Corporate Governance, and General Administration teams",
      "Received practical training in competition law, AML frameworks, Incoterms, and compliance procedures",
    ],
  },
  {
    title: "Legal Researcher & Author",
    organization: "Independent Legal Scholar",
    location: "Luxembourg",
    period: "01/2021 – Present",
    responsibilities: [
      "Authored 20+ legal publications in private and corporate law (Russia and Germany)",
      "Conducting academic research under the supervision of Prof. David Hiez, University of Luxembourg",
      "Research focus: Legal personality under Luxembourg law",
    ],
  },
  {
    title: "Member",
    organization: "Committee on the Reform of the General Regime of Obligations",
    location: "Luxembourg",
    period: "01/2025",
    responsibilities: [
      "Participated in legislative reform initiatives concerning Luxembourg obligational law",
      "Conducted legal and comparative analysis to support proposed statutory reforms",
      "Assisted in assessing the contractual and corporate law implications of reform proposals",
      "Contributed to high-level legal discussions involving doctrine, practice, and policy",
    ],
  },
  {
    title: "Legal Assistant to Private Law Expert",
    organization: "Private Law Expert",
    location: "Moscow",
    period: "06/2022 – 11/2024",
    responsibilities: [
      "Drafted structured legal opinions and supporting legal arguments",
      "Conducted in-depth private law research to support expert conclusions and publications",
    ],
  },
  {
    title: "Legal Analyst / Assistant",
    organization: "Lextorium",
    location: "Moscow",
    period: "06/2021 – 09/2024",
    responsibilities: [
      "Conducted analysis of domestic and comparative court practice",
      "Prepared legal translations (English and German)",
      "Developed educational legal materials on directors' liability, avoidance of legal acts, and private law concepts",
      "Supported academic and professional legal projects in corporate and private law",
    ],
  },
  {
    title: "Legal Trainee",
    organization: "BGP Litigation",
    location: "Moscow",
    period: "07/2022 – 08/2022",
    responsibilities: [
      "Analysed court practice and litigation materials",
      "Drafted procedural documents, including responses to claims and legal memoranda",
      "Assisted in client consultations and case preparation activities",
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
