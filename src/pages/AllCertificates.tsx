import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { certificates } from "@/components/Certificates";
import { useLanguage } from "@/contexts/LanguageContext";

const AllCertificates = () => {
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

        <h1 className="mb-2 text-4xl font-bold text-foreground">{t("certsTitle")}</h1>
        <p className="mb-12 text-muted-foreground">{t("certsSubtitle")}</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:box-glow"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="mx-auto mb-4 h-40 w-40 object-contain transition-transform group-hover:scale-105"
              />
              <h3 className="text-lg font-semibold text-foreground">{cert.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer} · {cert.date}</p>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                {t("certsVerify")} <ExternalLink className="h-3 w-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCertificates;
