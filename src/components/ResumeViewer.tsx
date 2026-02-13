import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_PATH = "/resume.pdf";

const ResumeViewer = ({ isOpen, onClose }: ResumeViewerProps) => {
  const { t } = useLanguage();
  const [pdfError, setPdfError] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_PATH;
    link.download = "resume.pdf";
    link.click();
  };

  const handleOpenNewTab = () => {
    window.open(RESUME_PATH, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative flex h-[85vh] w-full max-w-4xl flex-col rounded-2xl border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="font-mono text-lg font-semibold text-foreground">
                  {t("heroResume")}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleOpenNewTab}
                  className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">{t("resumeOpenNew")}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 box-glow"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">{t("resumeDownload")}</span>
                </button>
                <button
                  onClick={onClose}
                  className="ml-1 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden rounded-b-2xl bg-muted">
              {pdfError ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                  <FileText className="h-16 w-16 text-muted-foreground/40" />
                  <div>
                    <p className="mb-2 text-lg font-semibold text-foreground">
                      {t("resumeNotFound")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("resumeNotFoundDesc")}
                    </p>
                  </div>
                  <button
                    onClick={handleDownload}
                    className="mt-2 flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
                  >
                    <Download className="h-4 w-4" />
                    {t("resumeDownload")}
                  </button>
                </div>
              ) : (
                <iframe
                  src={`${RESUME_PATH}#toolbar=0&navpanes=0`}
                  title="Resume"
                  className="h-full w-full"
                  onError={() => setPdfError(true)}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeViewer;
