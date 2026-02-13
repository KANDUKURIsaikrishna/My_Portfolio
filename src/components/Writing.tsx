import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, FileText, Code2, ArrowUpRight } from "lucide-react";

interface WritingPost {
  titleEn: string;
  excerpt: string;
  type: "blog" | "whitepaper" | "leetcode";
  date: string;
  tags: string[];
}

const posts: WritingPost[] = [
  {
    titleEn: "Building Zero-Downtime Deployments with Kubernetes",
    excerpt: "A comprehensive guide to implementing blue-green and canary deployments in production K8s clusters.",
    type: "blog",
    date: "2025-12-15",
    tags: ["Kubernetes", "CI/CD"],
  },
  {
    titleEn: "Infrastructure as Code: Terraform Best Practices",
    excerpt: "Whitepaper on managing multi-cloud infrastructure at scale using Terraform modules and workspaces.",
    type: "whitepaper",
    date: "2025-11-20",
    tags: ["Terraform", "IaC"],
  },
  {
    titleEn: "LeetCode #146: LRU Cache – Optimal Solution",
    excerpt: "Breaking down the LRU Cache problem using a HashMap + Doubly Linked List approach with O(1) operations.",
    type: "leetcode",
    date: "2025-10-05",
    tags: ["Data Structures", "Design"],
  },
  {
    titleEn: "Observability Stack: Prometheus + Grafana + Loki",
    excerpt: "Setting up a full observability pipeline for microservices with alerting and log aggregation.",
    type: "blog",
    date: "2025-09-18",
    tags: ["Monitoring", "DevOps"],
  },
  {
    titleEn: "Securing CI/CD Pipelines: A DevSecOps Guide",
    excerpt: "Integrating security scanning, secret management, and compliance checks into your deployment pipeline.",
    type: "whitepaper",
    date: "2025-08-22",
    tags: ["Security", "CI/CD"],
  },
  {
    titleEn: "LeetCode #200: Number of Islands – BFS/DFS",
    excerpt: "Solving the classic graph traversal problem with both BFS and DFS approaches, including complexity analysis.",
    type: "leetcode",
    date: "2025-07-30",
    tags: ["Graphs", "BFS/DFS"],
  },
];

const typeConfig = {
  blog: { icon: BookOpen, color: "text-primary" },
  whitepaper: { icon: FileText, color: "text-accent-foreground" },
  leetcode: { icon: Code2, color: "text-primary" },
};

const Writing = () => {
  const { t } = useLanguage();

  return (
    <section id="writing" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-2 font-mono text-sm text-primary">// {t("navWriting").toLowerCase()}</h2>
          <h3 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">{t("writingTitle")}</h3>
          <p className="mb-12 text-muted-foreground">{t("writingSubtitle")}</p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const config = typeConfig[post.type];
            const Icon = config.icon;
            return (
              <motion.article
                key={post.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:box-glow"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${config.color}`} />
                    <span className="font-mono text-xs uppercase text-muted-foreground">
                      {t(`writing${post.type.charAt(0).toUpperCase() + post.type.slice(1)}` as keyof typeof t)}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
                </div>
                <h4 className="mb-2 font-semibold text-foreground leading-snug text-sm">
                  {post.titleEn}
                </h4>
                <p className="mb-3 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 font-mono text-[10px] text-muted-foreground opacity-60">{post.date}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Writing;
