import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, FolderGit2 } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/components/Projects";
import { useLanguage } from "@/contexts/LanguageContext";

const AllProjects = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> {t("navHome")}
        </Link>

        <h1 className="mb-2 text-4xl font-bold text-foreground">{t("projTitle")}</h1>
        <p className="mb-12 text-muted-foreground">{t("projSubtitle")}</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:box-glow"
            >
              <div className="mb-3 flex items-center justify-between">
                <FolderGit2 className="h-5 w-5 text-primary" />
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{project.name}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
