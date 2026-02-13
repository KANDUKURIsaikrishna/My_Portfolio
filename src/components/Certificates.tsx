import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    verifyUrl: "https://www.credly.com/",
  },
  {
    id: 2,
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    date: "2024",
    image: "https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
    verifyUrl: "https://www.credly.com/",
  },
  {
    id: 3,
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    date: "2023",
    image: "https://images.credly.com/size/340x340/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png",
    verifyUrl: "https://www.credly.com/",
  },
  {
    id: 4,
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    image: "https://images.credly.com/size/340x340/images/99289602-861e-4929-8277-773e63a2fa6f/image.png",
    verifyUrl: "https://www.credly.com/",
  },
  {
    id: 5,
    name: "GCP Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2023",
    image: "https://images.credly.com/size/340x340/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
    verifyUrl: "https://www.credly.com/",
  },
];

const Certificates = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<Certificate | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + certificates.length) % certificates.length);
  }, []);

  useEffect(() => {
    if (isPaused || lightbox) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isPaused, lightbox, next]);

  return (
    <section id="certificates" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-2 font-mono text-sm text-primary">// {t("certsTag")}</h2>
          <h3 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">{t("certsTitle")}</h3>
          <p className="mb-12 text-muted-foreground">{t("certsSubtitle")}</p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative mx-auto max-w-md"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer p-6"
                onClick={() => setLightbox(certificates[current])}
              >
                <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-lg transition-transform group-hover:scale-105">
                  <img
                    src={certificates[current].image}
                    alt={certificates[current].name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="text-center transition-all group-hover:translate-y-0">
                  <h4 className="text-lg font-semibold text-foreground">{certificates[current].name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {certificates[current].issuer} · {certificates[current].date}
                  </p>
                  <a
                    href={certificates[current].verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    {t("certsVerify")} <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-foreground shadow-md transition-colors hover:bg-muted sm:-translate-x-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border border-border bg-card p-2 text-foreground shadow-md transition-colors hover:bg-muted sm:translate-x-full"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {certificates.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-all hover:bg-muted"
          >
            <Award className="h-4 w-4" />
            {t("certsViewAll")}
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
              <img
                src={lightbox.image}
                alt={lightbox.name}
                className="mx-auto mb-6 h-64 w-64 object-contain"
              />
              <h4 className="text-xl font-bold text-foreground text-center">{lightbox.name}</h4>
              <p className="mt-1 text-center text-muted-foreground">{lightbox.issuer} · {lightbox.date}</p>
              <div className="mt-4 text-center">
                <a
                  href={lightbox.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  {t("certsVerify")} <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
