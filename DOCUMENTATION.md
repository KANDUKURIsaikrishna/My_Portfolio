# 📚 Portfolio Site — Full Documentation

---

## Table of Contents

1. [Codebase Overview](#1-codebase-overview)
2. [Build & Deployment](#2-build--deployment)
3. [Security & Secrets](#3-security--secrets)
4. [Live Chat Integration (Tawk.to)](#4-live-chat-integration-tawkto)
5. [Design Alternatives](#5-design-alternatives)
6. [Maintenance & Customization](#6-maintenance--customization)

---

## 1. Codebase Overview

### Folder Structure

```
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions CI/CD pipeline
├── content/
│   └── settings/
│       ├── profile.json        # CMS-managed profile data (name, bio, email)
│       └── social.json         # CMS-managed social links
├── public/
│   ├── admin/
│   │   ├── index.html          # Decap CMS admin panel entry point
│   │   └── config.yml          # CMS collection/field definitions
│   ├── CNAME                   # Custom domain for GitHub Pages
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/                 # Static images (imported as ES6 modules)
│   ├── components/
│   │   ├── ui/                 # shadcn/ui primitives (button, card, dialog, etc.)
│   │   ├── About.tsx           # About section
│   │   ├── BlogPlatforms.tsx   # Writing/blog links
│   │   ├── Certificates.tsx    # Certifications display
│   │   ├── Contact.tsx         # Contact form (Web3Forms)
│   │   ├── Footer.tsx          # Footer with social links
│   │   ├── Hero.tsx            # Hero/landing section
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── Skills.tsx          # Skills section
│   │   ├── TawkTo.tsx          # Tawk.to live chat widget
│   │   └── Writing.tsx         # Blog/writing section
│   ├── contexts/
│   │   ├── LanguageContext.tsx  # i18n provider (multi-language support)
│   │   └── ThemeContext.tsx     # Dark/light theme provider
│   ├── data/
│   │   └── translations.ts     # Translation strings
│   ├── hooks/                  # Custom React hooks
│   ├── pages/
│   │   ├── Index.tsx           # Main landing page (composes all sections)
│   │   ├── AllProjects.tsx     # Full projects listing
│   │   ├── AllCertificates.tsx # Full certificates listing
│   │   └── NotFound.tsx        # 404 page
│   ├── env.d.ts                # TypeScript types for environment variables
│   ├── index.css               # Global styles + Tailwind + CSS custom properties
│   ├── main.tsx                # React entry point
│   └── App.tsx                 # Router setup
├── tailwind.config.ts          # Tailwind theme tokens & extensions
├── vite.config.ts              # Vite bundler configuration
└── tsconfig.json               # TypeScript compiler options
```

### How TypeScript & CSS Interact

- **TypeScript (`.tsx`)**: All UI components are React + TypeScript. Props are typed, and `src/env.d.ts` provides type-safe access to `import.meta.env.VITE_*` variables.
- **CSS**: Global styles live in `src/index.css`, which defines CSS custom properties (design tokens) consumed by Tailwind via `tailwind.config.ts`. Components use Tailwind utility classes referencing semantic tokens like `bg-primary`, `text-foreground`, etc. — never raw color values.
- **shadcn/ui**: Pre-built accessible components in `src/components/ui/` styled with Tailwind + `class-variance-authority`.

### Decap CMS Integration

| File | Purpose |
|---|---|
| `public/admin/index.html` | Loads the Decap CMS script from CDN; accessible at `/admin` |
| `public/admin/config.yml` | Defines the CMS backend (GitHub), media storage, and content collections |
| `content/settings/*.json` | Stores CMS-managed data committed directly to the repo |

**How it works:**
1. You visit `https://yourdomain.com/admin`.
2. Decap CMS authenticates via GitHub OAuth.
3. Edits are committed directly to your GitHub repo as JSON/Markdown files in `content/`.
4. The commit triggers GitHub Actions → rebuild → deploy.

**Collections defined in `config.yml`:**
- **Projects** (`content/projects/*.json`) — title, description, image, tags, URLs
- **Certificates** (`content/certificates/*.json`) — title, issuer, date, image
- **Blog Posts** (`content/posts/*.md`) — title, date, body (Markdown)
- **Site Settings** — Profile info and social links

---

## 2. Build & Deployment

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

The pipeline runs on every push to `main`:

```
Push to main → Checkout → Setup Node 20 → npm ci → npm run build → Upload artifact → Deploy to GitHub Pages
```

| Step | What it does |
|---|---|
| `actions/checkout@v4` | Clones the repo |
| `actions/setup-node@v4` | Installs Node.js 20 with npm cache |
| `npm ci` | Clean-installs dependencies from lockfile |
| `npm run build` | Runs Vite build; injects `VITE_*` env vars from GitHub Secrets |
| `actions/configure-pages@v4` | Prepares GitHub Pages environment |
| `actions/upload-pages-artifact@v3` | Uploads `./dist` as a deployable artifact |
| `actions/deploy-pages@v4` | Publishes to GitHub Pages |

### GitHub Pages Setup

1. Go to **repo → Settings → Pages**.
2. Set **Source** to **GitHub Actions** (not "Deploy from a branch").
3. The workflow handles everything automatically.

### Custom Domain (CNAME + DNS)

The file `public/CNAME` contains your domain (e.g., `yourdomain.com`). Vite copies it to `dist/` during build.

**DNS records to add at your registrar:**

| Type | Name | Value |
|---|---|---|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `YOUR_USERNAME.github.io` |

After adding records, go to **repo → Settings → Pages → Custom domain** and enter your domain. GitHub will auto-provision HTTPS. DNS propagation takes up to 72 hours.

---

## 3. Security & Secrets

### Principle

**No sensitive values are hardcoded in source code.** All secrets are stored in GitHub Secrets and injected at build time as `VITE_*` environment variables.

### Required GitHub Secrets

Go to **repo → Settings → Secrets and variables → Actions → New repository secret** and add:

| Secret Name | Where to Get It | Used In |
|---|---|---|
| `VITE_WEB3FORMS_KEY` | [web3forms.com](https://web3forms.com) → Create Access Key | `Contact.tsx` — contact form submissions |
| `VITE_GITHUB_URL` | Your GitHub profile URL | `Footer.tsx` — social link |
| `VITE_LINKEDIN_URL` | Your LinkedIn profile URL | `Footer.tsx` — social link |
| `VITE_CONTACT_EMAIL` | Your email address | `Footer.tsx` — mailto link |
| `VITE_TAWKTO_PROPERTY_ID` | [tawk.to](https://tawk.to) → Administration → Chat Widget → Direct Chat Link (the ID in the URL) | `TawkTo.tsx` — loads chat widget |
| `VITE_TAWKTO_WIDGET_ID` | Same Tawk.to widget page (usually `default`) | `TawkTo.tsx` — widget identifier |

### How Secrets Flow

```
GitHub Secrets
  ↓ (injected by deploy.yml as env vars)
Vite build (npm run build)
  ↓ (VITE_* vars are inlined into JS bundles)
Static dist/ files
  ↓ (deployed)
GitHub Pages serves the site
```

### How Code Accesses Them

```typescript
// src/env.d.ts provides type safety
const key = import.meta.env.VITE_WEB3FORMS_KEY; // string

// Fallback pattern used throughout:
const url = import.meta.env.VITE_GITHUB_URL || "https://github.com";
```

> **⚠️ Important:** `VITE_*` variables are embedded in the client-side bundle. They are "secret" from the source code repo, but visible in the browser's JS. This is acceptable for publishable keys (Web3Forms, Tawk.to IDs) and non-sensitive URLs. For truly private keys (e.g., payment processors), use a server-side function instead.

---

## 4. Live Chat Integration (Tawk.to)

### How It's Embedded

The component `src/components/TawkTo.tsx`:
1. Reads `VITE_TAWKTO_PROPERTY_ID` and `VITE_TAWKTO_WIDGET_ID` from env.
2. Dynamically injects the Tawk.to script into `<head>`.
3. Initializes `window.Tawk_API` for configuration.
4. Cleans up the script on component unmount.

It's rendered in `src/pages/Index.tsx` at the bottom of the page, so it loads on every visit.

### Visitor Name & Email Capture

This is configured in the **Tawk.to dashboard**, not in code:

1. Log in at [dashboard.tawk.to](https://dashboard.tawk.to).
2. Go to **Administration → Chat Widget → Pre-Chat Form**.
3. Enable the form and add **Name** and **Email** as required fields.
4. Save. Visitors will now be prompted before starting a chat.

### Chat History

- **Visitor side:** Tawk.to uses browser cookies/localStorage to persist chat sessions. Returning visitors on the same device/browser see their previous conversations automatically.
- **Dashboard side:** All conversations are stored permanently. Go to **Messaging → Chat History** to view, search, and filter past chats by visitor name/email.

### Multiple Simultaneous Chats

Each visitor gets a unique session. In the Tawk.to dashboard, simultaneous chats appear as separate threads in the **Messaging** panel. You can switch between them freely.

### Push Notifications (Mobile App)

1. Install the **Tawk.to** app from [App Store](https://apps.apple.com/app/tawk-to/id948755498) or [Google Play](https://play.google.com/store/apps/details?id=to.tawk.android).
2. Log in with your Tawk.to account.
3. Go to **app Settings → Notifications** and enable push notifications.
4. You'll receive instant alerts for new chats and messages, allowing real-time replies from your phone.

---

## 5. Design Alternatives

### Current Status

Design alternatives were **skipped** per your request. The current design is the single active theme.

### How to Add Alternatives in the Future

**Recommended approach — Theme Switcher:**

1. Define additional color palettes in `src/index.css` using CSS custom properties:
   ```css
   [data-theme="ocean"] {
     --primary: 200 80% 50%;
     --background: 210 30% 10%;
     /* ... */
   }
   ```
2. Add a theme toggle in `Navbar.tsx` that sets `document.documentElement.dataset.theme`.
3. All components automatically pick up new colors via Tailwind semantic tokens — no component changes needed.

**Alternative approach — Separate Branches:**

1. Create a Git branch (e.g., `theme-minimal`) from `main`.
2. Modify `index.css` and layout components on that branch.
3. Preview via a separate GitHub Pages deployment or web preview.
4. Merge into `main` when satisfied.

### Consistency Guarantee

Any alternative design will inherit:
- ✅ Security setup (env vars, GitHub Secrets) — defined in `deploy.yml` and `env.d.ts`
- ✅ Tawk.to integration — `TawkTo.tsx` is theme-agnostic (no styling)
- ✅ CMS integration — content is decoupled from presentation

---

## 6. Maintenance & Customization

### Making Safe Content Changes

**Via Decap CMS (no code):**
1. Go to `https://yourdomain.com/admin`.
2. Log in with GitHub.
3. Edit projects, certificates, blog posts, or settings.
4. Click **Publish** → changes are committed → auto-deployed.

**Via Code:**
1. Edit files in `content/` directory directly.
2. Push to `main` → auto-deployed.

### Adding New Projects via CMS

1. Open `/admin` → **Projects** → **New Project**.
2. Fill in title, description, tags, GitHub URL, optional live URL and image.
3. Toggle **Featured** if it should appear on the homepage.
4. Click **Publish**.

### Adding a New Section to the Site

1. Create `src/components/NewSection.tsx`:
   ```tsx
   const NewSection = () => (
     <section id="new-section" className="py-24">
       <div className="container mx-auto px-4">
         <h2 className="text-3xl font-bold text-foreground">New Section</h2>
       </div>
     </section>
   );
   export default NewSection;
   ```
2. Import and add it to `src/pages/Index.tsx`:
   ```tsx
   import NewSection from "@/components/NewSection";
   // Add <NewSection /> in the desired position
   ```
3. Optionally add a nav link in `Navbar.tsx`.

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update a specific package
npm install package-name@latest

# Update all (review changelogs first!)
npm update

# Test locally before pushing
npm run build
npm run preview
```

### Security Best Practices

- **Rotate secrets** periodically — update both GitHub Secrets and the third-party service.
- **Review dependencies** for vulnerabilities: `npm audit`.
- **Never commit** `.env` files (already in `.gitignore`).
- **Keep Node.js** version in `deploy.yml` up to date.
- **Monitor** Tawk.to dashboard for suspicious chat activity.

### File Quick Reference

| Task | File(s) to Edit |
|---|---|
| Change colors/theme | `src/index.css`, `tailwind.config.ts` |
| Edit navigation links | `src/components/Navbar.tsx` |
| Modify contact form | `src/components/Contact.tsx` |
| Update social links | Add/update GitHub Secrets |
| Change CMS collections | `public/admin/config.yml` |
| Modify deploy pipeline | `.github/workflows/deploy.yml` |
| Add a new page/route | `src/App.tsx` + new file in `src/pages/` |
| Update translations | `src/data/translations.ts` |

---

*Last updated: February 2026*
