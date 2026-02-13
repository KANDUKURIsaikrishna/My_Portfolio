import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: import.meta.env.VITE_GITHUB_URL || "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL || ""}`, label: "Email" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-border p-3 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:box-glow"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>

          {/* Logo */}
          <p className="font-mono text-sm text-muted-foreground">
            &lt;DevOps /&gt;
          </p>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} · {t("footerRights")} · {t("footerBuiltWith")}{" "}
            <Heart className="h-3 w-3 fill-primary text-primary" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
