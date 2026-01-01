import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import profileImage from "@/assets/aleksandr-profile.png";
import { CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    "International legal education spanning UK and Continental Europe",
    "Currently pursuing CCDL qualification in Luxembourg",
    "Work authorization in Luxembourg",
    "Multilingual professional (5 languages)",
    "Strong academic and analytical background",
    "20+ legal publications in private and corporate law",
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 border border-accent/20" />
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-accent" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-accent" />
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={profileImage}
                    alt="Aleksandr Ananev"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-overline">About Me</span>
              <h1 className="mt-4 heading-display text-foreground">
                Aleksandr Ananev
              </h1>
              <div className="divider-gold-wide mt-6" />
              <p className="mt-8 font-serif text-xl text-muted-foreground leading-relaxed">
                Junior Legal Professional specializing in Corporate & Investment 
                Funds Law, based in Luxembourg.
              </p>
              <div className="mt-8 space-y-4 text-body">
                <p>
                  I am a dedicated legal professional with a comprehensive background 
                  in corporate and investment funds law. My international legal education, 
                  spanning the United Kingdom and Continental Europe, has equipped me with 
                  a unique cross-jurisdictional perspective essential in today's 
                  interconnected legal landscape.
                </p>
                <p>
                  Currently pursuing the Cours Complémentaire en Droit Luxembourgeois (CCDL) 
                  to deepen my expertise in Luxembourg law, I am committed to building a 
                  career at the intersection of corporate transactions, fund structuring, 
                  and regulatory compliance.
                </p>
                <p>
                  My academic work includes over 20 publications in private and corporate 
                  law, demonstrating a sustained commitment to legal scholarship and 
                  analytical rigor.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            overline="Professional Profile"
            title="Key Highlights"
            subtitle="A snapshot of my professional qualifications and capabilities"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-card border border-border/50"
              >
                <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow">
          <SectionHeading
            overline="Professional Philosophy"
            title="Approach to Legal Practice"
            light
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {[
              {
                title: "Analytical Rigor",
                description:
                  "Applying systematic analysis to complex legal questions, ensuring thorough examination of all relevant considerations.",
              },
              {
                title: "Cross-Border Perspective",
                description:
                  "Drawing on international education and multilingual capabilities to navigate multi-jurisdictional legal matters.",
              },
              {
                title: "Academic Foundation",
                description:
                  "Grounding practical work in solid theoretical understanding, informed by ongoing research and publication.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className="text-gold-light font-serif text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-xl text-primary-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-serif text-6xl text-accent/20">"</span>
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed -mt-6">
              My goal is to contribute meaningfully to the legal profession 
              in Luxembourg, combining academic depth with practical excellence 
              in service of clients and the broader legal community.
            </p>
            <div className="mt-8">
              <span className="text-muted-foreground font-serif italic">
                — Aleksandr Ananev
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
