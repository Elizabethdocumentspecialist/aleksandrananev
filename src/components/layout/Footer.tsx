import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-semibold tracking-tight">
                AA
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Junior Legal Professional specializing in Corporate & Investment Funds Law, based in Luxembourg.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-medium">Navigation</h4>
            <ul className="space-y-3">
              {["About", "Experience", "Expertise", "Education"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-medium">Resources</h4>
            <ul className="space-y-3">
              {["Publications", "Languages", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-medium">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="text-gold shrink-0" />
                <span>Luxembourg</span>
              </li>
              <li>
                <a
                  href="mailto:ananyev.aestats@gmail.com"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Mail size={16} className="text-gold shrink-0" />
                  <span>ananyev.aestats@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+352661161501"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold shrink-0" />
                  <span>+352 661 16 15 01</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/aleksandr-ananev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Linkedin size={16} className="text-gold shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} Aleksandr Ananev. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/40">
              Legal Professional · Luxembourg
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
