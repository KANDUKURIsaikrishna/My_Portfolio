import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Terminal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ResumeViewer from "./ResumeViewer";

const TypeWriter = ({ text, delay = 50 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      <span className={`inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-text-bottom ${done ? "animate-blink" : ""}`} />
    </span>
  );
};

// --- Animated Terminal ---
const KUBECTL_COMMANDS = [
  {
    cmd: "kubectl get pods --all-namespaces",
    output: [
      "NAMESPACE     NAME                    READY   STATUS    RESTARTS   AGE",
      "production    api-server-7d8f9b6c4    1/1     Running   0          12d",
      "production    web-app-3b2c1a4e8       1/1     Running   0          12d",
      "monitoring    prometheus-0             1/1     Running   0          30d",
      "kube-system   coredns-5d78c9869d      1/1     Running   0          45d",
    ],
  },
  {
    cmd: "kubectl get nodes -o wide",
    output: [
      "NAME           STATUS   ROLES    AGE   VERSION   OS-IMAGE",
      "node-pool-01   Ready    worker   60d   v1.28.4   Ubuntu 22.04",
      "node-pool-02   Ready    worker   60d   v1.28.4   Ubuntu 22.04",
      "control-01     Ready    master   90d   v1.28.4   Ubuntu 22.04",
    ],
  },
  {
    cmd: "kubectl get services -n production",
    output: [
      "NAME          TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)",
      "api-server    LoadBalancer   10.96.14.22     34.120.55.10    443:31245/TCP",
      "web-app       ClusterIP      10.96.22.180    <none>          8080/TCP",
      "redis-cache   ClusterIP      10.96.5.47      <none>          6379/TCP",
    ],
  },
  {
    cmd: "kubectl top pods -n production",
    output: [
      "NAME                    CPU(cores)   MEMORY(bytes)",
      "api-server-7d8f9b6c4    45m          128Mi",
      "web-app-3b2c1a4e8       22m          96Mi",
      "redis-cache-5f7d8e      8m           64Mi",
    ],
  },
  {
    cmd: "kubectl describe deploy api-server -n production | head -10",
    output: [
      "Name:                   api-server",
      "Namespace:              production",
      "Replicas:               3 desired | 3 updated | 3 available",
      "Strategy:               RollingUpdate",
      "Min ready seconds:      10",
    ],
  },
];

const AnimatedTerminal = () => {
  const [lines, setLines] = useState<{ text: string; type: "cmd" | "output" | "prompt" }[]>([]);
  const [cmdIndex, setCmdIndex] = useState(0);

  const typeCommand = useCallback((cmd: string, output: string[], nextIdx: number) => {
    setLines([]);
    let charIdx = 0;

    // Type command character by character
    const typeInterval = setInterval(() => {
      if (charIdx <= cmd.length) {
        setLines([{ text: cmd.slice(0, charIdx), type: "cmd" }]);
        charIdx++;
      } else {
        clearInterval(typeInterval);
        // Show output lines one by one
        let outIdx = 0;
        const outputInterval = setInterval(() => {
          if (outIdx < output.length) {
            setLines((prev) => {
              const base = [{ text: cmd, type: "cmd" as const }];
              const outs = output.slice(0, outIdx + 1).map((o) => ({ text: o, type: "output" as const }));
              return [...base, ...outs];
            });
            outIdx++;
          } else {
            clearInterval(outputInterval);
            // Add blinking prompt
            setLines((prev) => [...prev, { text: "", type: "prompt" }]);
            // Move to next command after pause
            setTimeout(() => {
              setCmdIndex(nextIdx);
            }, 2500);
          }
        }, 150);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const entry = KUBECTL_COMMANDS[cmdIndex % KUBECTL_COMMANDS.length];
    const nextIdx = (cmdIndex + 1) % KUBECTL_COMMANDS.length;
    const cleanup = typeCommand(entry.cmd, entry.output, nextIdx);
    return cleanup;
  }, [cmdIndex, typeCommand]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="mx-auto mt-16 max-w-lg rounded-xl border border-border bg-card p-4 text-left font-mono text-sm"
    >
      <div className="mb-3 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-destructive/60" />
        <div className="h-3 w-3 rounded-full bg-muted-foreground/40" />
        <div className="h-3 w-3 rounded-full bg-primary/60" />
        <span className="ml-2 text-xs text-muted-foreground">terminal</span>
      </div>
      <div className="space-y-0.5 text-muted-foreground min-h-[140px]">
        {lines.map((line, i) => {
          if (line.type === "cmd") {
            return (
              <p key={`cmd-${i}`}>
                <span className="text-primary">$ </span>
                {line.text}
                {lines.length === 1 && <span className="animate-pulse">▊</span>}
              </p>
            );
          }
          if (line.type === "output") {
            return (
              <p key={`out-${i}`} className="text-xs opacity-70">{line.text}</p>
            );
          }
          return (
            <p key={`prompt-${i}`}>
              <span className="text-primary">$ </span>
              <span className="animate-pulse">▊</span>
            </p>
          );
        })}
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Terminal badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-mono text-sm text-primary"
          >
            <Terminal className="h-4 w-4" />
            <span>{t("heroTitle")}</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-3 text-lg text-muted-foreground"
          >
            {t("heroGreeting")}
          </motion.p>

          {/* Name with typewriter */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <TypeWriter text={t("heroName")} delay={80} />
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t("heroDescription")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90 box-glow"
            >
              {t("heroCta")}
            </button>
            <button
              onClick={() => setResumeOpen(true)}
              className="rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-all hover:bg-muted"
            >
              {t("heroResume")}
            </button>
          </motion.div>

          <ResumeViewer isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

          {/* Animated Terminal */}
          <AnimatedTerminal />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 flex justify-center pb-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
