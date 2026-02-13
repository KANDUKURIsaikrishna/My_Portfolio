import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

const PROPERTY_ID = import.meta.env.VITE_TAWKTO_PROPERTY_ID || "";
const WIDGET_ID = import.meta.env.VITE_TAWKTO_WIDGET_ID || "default";

const TawkTo = () => {
  useEffect(() => {
    if (!PROPERTY_ID) return;

    // Initialize Tawk API settings
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Enable pre-chat form so visitors provide name & email
    window.Tawk_API.onLoad = function () {
      // Pre-chat is configured in the Tawk.to dashboard
      // Chat history is preserved automatically via cookies
    };

    // Inject the Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${PROPERTY_ID}/${WIDGET_ID}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkTo;
