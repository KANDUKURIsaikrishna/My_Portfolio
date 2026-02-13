import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: "Docker", category: "Containers" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Terraform", category: "IaC" },
  { name: "Ansible", category: "Configuration" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "GitLab CI", category: "CI/CD" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "Grafana", category: "Monitoring" },
  { name: "Linux", category: "OS" },
  { name: "Bash", category: "Scripting" },
  { name: "Python", category: "Scripting" },
  { name: "Go", category: "Language" },
  { name: "Helm", category: "K8s" },
  { name: "ArgoCD", category: "GitOps" },
  { name: "Nginx", category: "Web Server" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Elasticsearch", category: "Search" },
  { name: "Vault", category: "Security" },
  { name: "Git", category: "VCS" },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-2 font-mono text-sm text-primary">// {t("navSkills").toLowerCase()}</h2>
          <h3 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">{t("skillsTitle")}</h3>
          <p className="mb-12 text-muted-foreground">{t("skillsSubtitle")}</p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="group relative cursor-default rounded-lg border border-border bg-card px-4 py-2.5 transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="font-mono text-sm font-medium text-foreground">{skill.name}</span>
                <span className="ml-2 text-xs text-muted-foreground opacity-60">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
