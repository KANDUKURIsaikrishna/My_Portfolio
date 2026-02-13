import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, FolderGit2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export interface Project {
  id: number;
  name: string;
  summary: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "K8s GitOps Pipeline",
    summary: "Fully automated GitOps pipeline using ArgoCD, Helm, and GitHub Actions for multi-environment Kubernetes deployments.",
    tags: ["Kubernetes", "ArgoCD", "Helm", "GitHub Actions"],
    githubUrl: "https://github.com/",
  },
  {
    id: 2,
    name: "Terraform AWS Landing Zone",
    summary: "Production-grade AWS multi-account landing zone with VPC, IAM, and security guardrails using Terraform modules.",
    tags: ["Terraform", "AWS", "IAM", "VPC"],
    githubUrl: "https://github.com/",
  },
  {
    id: 3,
    name: "Prometheus Monitoring Stack",
    summary: "Complete observability stack with Prometheus, Grafana, Alertmanager, and custom exporters for microservices.",
    tags: ["Prometheus", "Grafana", "Docker", "Go"],
    githubUrl: "https://github.com/",
  },
  {
    id: 4,
    name: "CI/CD Platform",
    summary: "Internal developer platform with self-service CI/CD pipelines, automated testing, and deployment dashboards.",
    tags: ["Jenkins", "Docker", "Python", "React"],
    githubUrl: "https://github.com/",
  },
  {
    id: 5,
    name: "Cloud Cost Optimizer",
    summary: "Automated cloud cost optimization tool that analyzes usage patterns and recommends right-sizing across AWS & GCP.",
    tags: ["Python", "AWS", "GCP", "Serverless"],
    githubUrl: "https://github.com/",
  },
  {
    id: 6,
    name: "Incident Response Bot",
    summary: "Slack-integrated incident management bot with automated runbooks, PagerDuty integration, and post-mortem generation.",
    tags: ["Go", "Slack API", "PagerDuty", "PostgreSQL"],
    githubUrl: "https://github.com/",
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-2 font-mono text-sm text-primary">// {t("projTag")}</h2>
          <h3 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">{t("projTitle")}</h3>
          <p className="mb-12 text-muted-foreground">{t("projSubtitle")}</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setLightbox(project)}
              className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:box-glow"
            >
              <div className="mb-3 flex items-center justify-between">
                <FolderGit2 className="h-5 w-5 text-primary" />
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.name}
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-all hover:bg-muted"
          >
            <FolderGit2 className="h-4 w-4" />
            {t("projViewAll")}
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-xl border border-border bg-card p-8 shadow-lg"
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
              <FolderGit2 className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h4 className="text-xl font-bold text-foreground text-center">{lightbox.name}</h4>
              <p className="mt-3 text-muted-foreground leading-relaxed">{lightbox.summary}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {lightbox.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex justify-center gap-3">
                <a
                  href={lightbox.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
