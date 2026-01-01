import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, MapPin } from "lucide-react";
import PageTransition from "@/components/layout/PageTransition";
import profileImage from "@/assets/aleksandr-profile.png";

const Index = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating accent elements */}
        <motion.div
          className="absolute top-20 right-[15%] w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 0.95, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-wide relative z-10 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-overline">Legal Professional</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 heading-display text-foreground"
              >
                Aleksandr
                <br />
                <span className="text-primary">Ananev</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="divider-gold-wide mt-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed"
              >
                Junior Legal Professional
                <br />
                Corporate & Investment Funds
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-6 flex items-center gap-2 text-muted-foreground"
              >
                <MapPin size={18} className="text-accent" />
                <span className="text-sm tracking-wide">Luxembourg</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 text-body max-w-lg"
              >
                Dedicated legal professional with a strong foundation in corporate 
                and investment funds law, combining rigorous academic training with 
                practical experience across multiple jurisdictions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  to="/experience"
                  className="btn-primary inline-flex items-center gap-2 group"
                >
                  View Experience
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Contact
                </Link>
                <a
                  href="/ALEKSANDR_ANANEV_CV.pdf"
                  download
                  className="btn-gold inline-flex items-center gap-2"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-accent/30" />
                <div className="absolute -inset-8 border border-border/50" />
                
                {/* Gold accent corner */}
                <div className="absolute -top-8 -right-8 w-16 h-16 border-t-2 border-r-2 border-accent" />
                <div className="absolute -bottom-8 -left-8 w-16 h-16 border-b-2 border-l-2 border-accent" />

                <div className="relative w-72 md:w-80 lg:w-96 aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={profileImage}
                    alt="Aleksandr Ananev - Legal Professional"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </section>

      {/* Brief Introduction Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-overline">Professional Focus</span>
            <h2 className="heading-section mt-4">
              Bridging Legal Excellence
              <br />
              Across Jurisdictions
            </h2>
            <div className="divider-gold mt-6 mx-auto" />
            <p className="mt-8 text-body max-w-2xl mx-auto">
              With international legal education spanning the United Kingdom and 
              Continental Europe, I bring a unique perspective to corporate law, 
              investment funds, and regulatory frameworks. Currently pursuing the 
              CCDL qualification in Luxembourg to strengthen my foundation in 
              this premier financial jurisdiction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "5+", label: "Years of Study" },
              { number: "20+", label: "Publications" },
              { number: "5", label: "Languages" },
              { number: "3", label: "Jurisdictions" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <span className="font-serif text-4xl font-semibold text-primary">
                  {stat.number}
                </span>
                <p className="mt-2 text-small">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-overline">Areas of Practice</span>
            <h2 className="heading-section mt-4">Core Expertise</h2>
            <div className="divider-gold mt-6 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Corporate & Commercial Law",
              "Investment Funds",
              "Regulatory Frameworks",
              "Contract Drafting",
              "Comparative Private Law",
              "Compliance & Risk",
            ].map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 bg-card border border-border/50 hover:border-accent/40 transition-all duration-300"
              >
                <span className="text-accent font-serif text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-xl text-foreground">
                  {area}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 text-primary font-medium link-underline"
            >
              View All Practice Areas
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-light text-xs tracking-[0.2em] uppercase">
              Let's Connect
            </span>
            <h2 className="heading-section mt-4 text-primary-foreground">
              Ready to Discuss Your Legal Needs?
            </h2>
            <div className="divider-gold mt-6 mx-auto" />
            <p className="mt-8 text-primary-foreground/70 max-w-xl mx-auto">
              Whether you're looking for a dedicated legal professional or wish 
              to discuss potential opportunities, I welcome the conversation.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gold text-primary px-8 py-3 font-sans text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-gold-light"
              >
                Get in Touch
              </Link>
              <a
                href="https://linkedin.com/in/aleksandr-ananev"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 font-sans text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-primary-foreground/10"
              >
                View LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
