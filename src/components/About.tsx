import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Server, GitBranch, Award } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t("aboutYears"), label: t("aboutYearsLabel"), icon: Server },
    { value: t("aboutProjects"), label: t("aboutProjectsLabel"), icon: GitBranch },
    { value: t("aboutCerts"), label: t("aboutCertsLabel"), icon: Award },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-2 font-mono text-sm text-primary">// {t("navAbout").toLowerCase()}</h2>
          <h3 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl">{t("aboutTitle")}</h3>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t("aboutP1")}</p>
            <p>{t("aboutP2")}</p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:box-glow"
              >
                <stat.icon className="mx-auto mb-3 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
