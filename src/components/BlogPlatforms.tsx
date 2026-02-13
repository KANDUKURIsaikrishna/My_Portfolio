import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight } from "lucide-react";

interface BlogPlatform {
  name: string;
  url: string;
  description: string;
  icon: string;
}

const platforms: BlogPlatform[] = [
  {
    name: "Medium",
    url: "https://medium.com/@yourusername",
    description: "In-depth articles on cloud architecture & DevOps",
    icon: "M",
  },
  {
    name: "Hashnode",
    url: "https://yourusername.hashnode.dev",
    description: "Technical tutorials and engineering deep-dives",
    icon: "#",
  },
  {
    name: "Dev.to",
    url: "https://dev.to/yourusername",
    description: "Community posts, tips & quick guides",
    icon: "D",
  },
  {
    name: "Personal Blog",
    url: "https://yourblog.com",
    description: "Long-form writing on SRE & platform engineering",
    icon: "✦",
  },
];

const BlogPlatforms = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-2 font-mono text-sm text-primary">// {t("blogPlatformsTag")}</h2>
          <h3 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">{t("blogPlatformsTitle")}</h3>
          <p className="mb-10 text-muted-foreground">{t("blogPlatformsSubtitle")}</p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {platforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:box-glow"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-lg font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {platform.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-foreground">{platform.name}</h4>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {platform.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPlatforms;
