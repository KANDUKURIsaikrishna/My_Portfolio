/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_KEY: string;
  readonly VITE_GITHUB_URL: string;
  readonly VITE_LINKEDIN_URL: string;
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_TAWKTO_PROPERTY_ID: string;
  readonly VITE_TAWKTO_WIDGET_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
