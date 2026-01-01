import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { BookOpen, FileText, Users, ExternalLink } from "lucide-react";

const Publications = () => {
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
            <span className="text-overline">Scholarly Work</span>
            <h1 className="mt-4 heading-display text-foreground">
              Publications & Research
            </h1>
            <div className="divider-gold-wide mt-6" />
            <p className="mt-8 text-body text-lg">
              A sustained commitment to legal scholarship, contributing to 
              academic discourse in private and corporate law through research 
              and publication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Current Research */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-overline">Current Focus</span>
              <h2 className="heading-section mt-4">
                Legal Personality Under Luxembourg Law
              </h2>
              <div className="divider-gold mt-6" />
              <div className="mt-8 space-y-4 text-body">
                <p>
                  My current research examines the concept of legal personality 
                  within the Luxembourg legal framework, analyzing its theoretical 
                  foundations and practical implications for corporate structures 
                  and investment vehicles.
                </p>
                <p>
                  This work contributes to the academic understanding of how 
                  Luxembourg law conceptualizes and regulates legal entities, 
                  with particular attention to the distinctive features of the 
                  Grand Duchy's approach compared to other civil law jurisdictions.
                </p>
              </div>

              <div className="mt-8 p-6 bg-card border border-border/50">
                <div className="flex items-start gap-4">
                  <Users size={20} className="text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      Academic Supervision
                    </h4>
                    <p className="mt-1 text-small">
                      Research conducted under the guidance of established 
                      scholars in Luxembourg private law.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Publication Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-overline">Published Work</span>
              <h2 className="heading-section mt-4">
                Academic Contributions
              </h2>
              <div className="divider-gold mt-6" />

              <div className="mt-8 space-y-6">
                <div className="p-8 bg-card border border-border/50 text-center">
                  <span className="font-serif text-6xl text-primary">20+</span>
                  <p className="mt-4 font-serif text-xl text-foreground">
                    Legal Publications
                  </p>
                  <p className="mt-2 text-small">
                    In private and corporate law journals
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Contract Law & Obligations",
                    "Corporate Governance",
                    "Comparative Private Law",
                    "Legal Personality & Entity Theory",
                    "Civil Code Analysis",
                  ].map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-secondary/30"
                    >
                      <BookOpen size={16} className="text-accent" />
                      <span className="text-foreground">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <SectionHeading
            overline="Research Themes"
            title="Areas of Scholarly Interest"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Private Law Theory",
                description:
                  "Exploration of fundamental concepts in private law, including the nature of obligations, contract formation, and remedial structures.",
              },
              {
                icon: BookOpen,
                title: "Comparative Methodology",
                description:
                  "Analysis of legal institutions across civil and common law traditions, identifying convergences and distinctive approaches.",
              },
              {
                icon: Users,
                title: "Entity & Personality",
                description:
                  "Examination of legal personality concepts, corporate identity, and the theoretical foundations of organizational law.",
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 bg-card border border-border/50 hover:border-accent/30 transition-colors duration-300"
              >
                <area.icon size={28} className="text-accent" />
                <h3 className="mt-6 font-serif text-xl text-foreground">
                  {area.title}
                </h3>
                <p className="mt-4 text-body">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Request */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-light text-xs tracking-[0.2em] uppercase">
              Full Bibliography
            </span>
            <h2 className="heading-section mt-4 text-primary-foreground">
              Publications List Available
            </h2>
            <div className="divider-gold mt-6 mx-auto" />
            <p className="mt-8 text-primary-foreground/70 max-w-xl mx-auto">
              A complete list of publications with citations is available upon 
              request. Please reach out via the contact page for academic 
              inquiries or collaboration opportunities.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-8 bg-gold text-primary px-8 py-3 font-sans text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-gold-light"
            >
              Request Publications List
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Academic Network */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            overline="Academic Engagement"
            title="Scholarly Community"
            subtitle="Active participation in the academic legal community through research, publication, and committee membership."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-card border border-border/50"
          >
            <h4 className="font-serif text-xl text-foreground">
              Committee on the Reform of the General Regime of Obligations
            </h4>
            <p className="mt-4 text-body">
              Member of this international scholarly committee dedicated to 
              analyzing and proposing reforms to the law of obligations. 
              Contributing comparative law perspectives and participating 
              in discussions on modernizing civil law frameworks.
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Publications;
