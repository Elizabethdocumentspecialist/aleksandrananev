import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. I will respond shortly.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ananyev.aestats@gmail.com",
      href: "mailto:ananyev.aestats@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+352 661 16 15 01",
      href: "tel:+352661161501",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Luxembourg",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aleksandr-ananev",
      href: "https://linkedin.com/in/aleksandr-ananev",
    },
  ];

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
            <span className="text-overline">Get in Touch</span>
            <h1 className="mt-4 heading-display text-foreground">Contact</h1>
            <div className="divider-gold-wide mt-6" />
            <p className="mt-8 text-body text-lg">
              I welcome inquiries from legal professionals, firms, and 
              institutions. Whether you wish to discuss opportunities or 
              potential collaboration, I look forward to hearing from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="heading-section">Send a Message</h2>
              <div className="divider-gold mt-4" />

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 p-12 bg-card border border-accent/30 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-16 h-16 mx-auto bg-accent/10 flex items-center justify-center"
                    >
                      <CheckCircle size={32} className="text-accent" />
                    </motion.div>
                    <h3 className="mt-6 font-serif text-2xl text-foreground">
                      Message Sent Successfully
                    </h3>
                    <p className="mt-4 text-body">
                      Thank you for reaching out. I will review your message 
                      and respond at my earliest convenience.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="mt-6 btn-outline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-card border ${
                            errors.name ? "border-destructive" : "border-border"
                          } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-card border ${
                            errors.email ? "border-destructive" : "border-border"
                          } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-card border ${
                          errors.subject ? "border-destructive" : "border-border"
                        } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors`}
                        placeholder="Inquiry subject"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 bg-card border ${
                          errors.message ? "border-destructive" : "border-border"
                        } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none`}
                        placeholder="Your message..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground">
                      Your information is handled in accordance with GDPR 
                      requirements and will only be used to respond to your inquiry.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="heading-section">Contact Information</h2>
              <div className="divider-gold mt-4" />

              <div className="mt-8 space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-card border border-border/50 hover:border-accent/30 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/5">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="mt-1 font-serif text-lg text-foreground hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-serif text-lg text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Availability Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-8 p-6 bg-secondary/50 border border-border/50"
              >
                <h4 className="font-serif text-lg text-foreground">
                  Response Time
                </h4>
                <p className="mt-2 text-body">
                  I typically respond to inquiries within 24-48 hours during 
                  business days. For urgent matters, please indicate so in 
                  your subject line.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-light text-xs tracking-[0.2em] uppercase">
              Location
            </span>
            <h2 className="heading-section mt-4 text-primary-foreground">
              Based in Luxembourg
            </h2>
            <div className="divider-gold mt-6 mx-auto" />
            <p className="mt-8 text-primary-foreground/70 max-w-xl mx-auto">
              Operating from the heart of the European Union's premier 
              financial center, with authorization to work in Luxembourg 
              and ready for opportunities in corporate and funds practice.
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
