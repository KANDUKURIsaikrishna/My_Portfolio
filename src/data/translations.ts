export type Language = "en" | "de" | "nl" | "sv";

export interface TranslationKeys {
  navHome: string;
  navAbout: string;
  navSkills: string;
  navWriting: string;
  navContact: string;
  navCerts: string;
  navProjects: string;
  heroGreeting: string;
  heroName: string;
  heroTitle: string;
  heroDescription: string;
  heroCta: string;
  heroResume: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutYears: string;
  aboutYearsLabel: string;
  aboutProjects: string;
  aboutProjectsLabel: string;
  aboutCerts: string;
  aboutCertsLabel: string;
  skillsTitle: string;
  skillsSubtitle: string;
  writingTitle: string;
  writingSubtitle: string;
  writingReadMore: string;
  writingBlog: string;
  writingWhitepaper: string;
  writingLeetcode: string;
  contactTitle: string;
  contactSubtitle: string;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactSend: string;
  contactSuccess: string;
  footerRights: string;
  footerBuiltWith: string;
  resumeDownload: string;
  resumeOpenNew: string;
  resumeNotFound: string;
  resumeNotFoundDesc: string;
  blogPlatformsTag: string;
  blogPlatformsTitle: string;
  blogPlatformsSubtitle: string;
  certsTag: string;
  certsTitle: string;
  certsSubtitle: string;
  certsVerify: string;
  certsViewAll: string;
  projTag: string;
  projTitle: string;
  projSubtitle: string;
  projViewAll: string;
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navWriting: "Writing",
    navContact: "Contact",
    navCerts: "Certificates",
    navProjects: "Projects",
    heroGreeting: "Hello, I'm",
    heroName: "Your Name",
    heroTitle: "Cloud & Platform Engineer",
    heroDescription: "Cloud Engineer · Platform Engineer · Site Reliability Engineer. Multi-cloud expert across AWS, Azure & GCP. Building scalable infrastructure, automating everything, and ensuring production reliability at scale.",
    heroCta: "Get in Touch",
    heroResume: "View Resume",
    aboutTitle: "About Me",
    aboutP1: "I'm a Cloud & Platform Engineer with deep expertise across AWS, Azure, and GCP. I specialize in designing resilient, scalable infrastructure and building internal developer platforms that empower teams to ship faster and more reliably.",
    aboutP2: "As an SRE at heart, I'm passionate about observability, incident management, and toil reduction. When I'm not architecting cloud solutions or tuning Kubernetes clusters, I write about my experiences, share LeetCode solutions, and contribute to the open-source community.",
    aboutYears: "5+",
    aboutYearsLabel: "Years Experience",
    aboutProjects: "50+",
    aboutProjectsLabel: "Projects Delivered",
    aboutCerts: "8+",
    aboutCertsLabel: "Certifications",
    skillsTitle: "Tech Stack",
    skillsSubtitle: "Technologies and tools I work with daily",
    writingTitle: "Writing",
    writingSubtitle: "Thoughts, guides, and solutions I share with the community",
    writingReadMore: "Read More",
    writingBlog: "Blog",
    writingWhitepaper: "Whitepaper",
    writingLeetcode: "LeetCode",
    contactTitle: "Get in Touch",
    contactSubtitle: "Have a project in mind or just want to chat? Drop me a message!",
    contactName: "Your Name",
    contactEmail: "Your Email",
    contactMessage: "Your Message",
    contactSend: "Send Message",
    contactSuccess: "Message sent successfully! I'll get back to you soon.",
    footerRights: "All rights reserved.",
    footerBuiltWith: "Built with",
    resumeDownload: "Download",
    resumeOpenNew: "Open in New Tab",
    resumeNotFound: "Resume not available yet",
    resumeNotFoundDesc: "Please upload your resume PDF to the public folder as resume.pdf",
    blogPlatformsTag: "platforms",
    blogPlatformsTitle: "Where I Write",
    blogPlatformsSubtitle: "Follow my writing across different platforms",
    certsTag: "certifications",
    certsTitle: "Certifications",
    certsSubtitle: "Industry-recognized credentials that validate my expertise",
    certsVerify: "Verify",
    certsViewAll: "View All Certificates",
    projTag: "projects",
    projTitle: "Projects",
    projSubtitle: "Open-source tools and infrastructure I've built",
    projViewAll: "View All Projects",
  },
  de: {
    navHome: "Startseite",
    navAbout: "Über mich",
    navSkills: "Fähigkeiten",
    navWriting: "Artikel",
    navContact: "Kontakt",
    navCerts: "Zertifikate",
    navProjects: "Projekte",
    heroGreeting: "Hallo, ich bin",
    heroName: "Dein Name",
    heroTitle: "Cloud & Platform Engineer",
    heroDescription: "Cloud Engineer · Platform Engineer · Site Reliability Engineer. Multi-Cloud-Experte für AWS, Azure & GCP. Aufbau skalierbarer Infrastruktur und Sicherstellung der Produktionszuverlässigkeit.",
    heroCta: "Kontakt aufnehmen",
    heroResume: "Lebenslauf",
    aboutTitle: "Über mich",
    aboutP1: "Ich bin Cloud & Platform Engineer mit fundierter Expertise in AWS, Azure und GCP. Ich spezialisiere mich auf den Entwurf resilienter, skalierbarer Infrastruktur und interner Entwicklerplattformen.",
    aboutP2: "Als SRE im Herzen bin ich leidenschaftlich für Observability, Incident Management und Toil-Reduktion. Ich schreibe über meine Erfahrungen und teile Lösungen.",
    aboutYears: "5+",
    aboutYearsLabel: "Jahre Erfahrung",
    aboutProjects: "50+",
    aboutProjectsLabel: "Projekte geliefert",
    aboutCerts: "8+",
    aboutCertsLabel: "Zertifizierungen",
    skillsTitle: "Tech-Stack",
    skillsSubtitle: "Technologien und Tools, mit denen ich täglich arbeite",
    writingTitle: "Artikel",
    writingSubtitle: "Gedanken, Anleitungen und Lösungen, die ich mit der Community teile",
    writingReadMore: "Mehr lesen",
    writingBlog: "Blog",
    writingWhitepaper: "Whitepaper",
    writingLeetcode: "LeetCode",
    contactTitle: "Kontakt",
    contactSubtitle: "Haben Sie ein Projekt oder möchten Sie einfach plaudern? Schreiben Sie mir!",
    contactName: "Ihr Name",
    contactEmail: "Ihre E-Mail",
    contactMessage: "Ihre Nachricht",
    contactSend: "Nachricht senden",
    contactSuccess: "Nachricht erfolgreich gesendet! Ich melde mich bald.",
    footerRights: "Alle Rechte vorbehalten.",
    footerBuiltWith: "Erstellt mit",
    resumeDownload: "Herunterladen",
    resumeOpenNew: "In neuem Tab öffnen",
    resumeNotFound: "Lebenslauf noch nicht verfügbar",
    resumeNotFoundDesc: "Bitte laden Sie Ihren Lebenslauf als resume.pdf hoch",
    blogPlatformsTag: "plattformen",
    blogPlatformsTitle: "Wo ich schreibe",
    blogPlatformsSubtitle: "Folgen Sie meinem Schreiben auf verschiedenen Plattformen",
    certsTag: "zertifizierungen",
    certsTitle: "Zertifizierungen",
    certsSubtitle: "Branchenanerkannte Nachweise meiner Expertise",
    certsVerify: "Verifizieren",
    certsViewAll: "Alle Zertifikate ansehen",
    projTag: "projekte",
    projTitle: "Projekte",
    projSubtitle: "Open-Source-Tools und Infrastruktur, die ich gebaut habe",
    projViewAll: "Alle Projekte ansehen",
  },
  nl: {
    navHome: "Home",
    navAbout: "Over mij",
    navSkills: "Vaardigheden",
    navWriting: "Artikelen",
    navContact: "Contact",
    navCerts: "Certificaten",
    navProjects: "Projecten",
    heroGreeting: "Hallo, ik ben",
    heroName: "Jouw Naam",
    heroTitle: "Cloud & Platform Engineer",
    heroDescription: "Cloud Engineer · Platform Engineer · Site Reliability Engineer. Multi-cloud expert op AWS, Azure & GCP. Bouwen van schaalbare infrastructuur en waarborgen van productiebetrouwbaarheid.",
    heroCta: "Neem contact op",
    heroResume: "CV bekijken",
    aboutTitle: "Over mij",
    aboutP1: "Ik ben een Cloud & Platform Engineer met diepgaande expertise in AWS, Azure en GCP. Ik specialiseer me in het ontwerpen van veerkrachtige, schaalbare infrastructuur en interne ontwikkelaarplatformen.",
    aboutP2: "Als SRE in hart en nieren ben ik gepassioneerd door observability, incidentbeheer en toil-reductie. Ik schrijf over mijn ervaringen en deel oplossingen.",
    aboutYears: "5+",
    aboutYearsLabel: "Jaar ervaring",
    aboutProjects: "50+",
    aboutProjectsLabel: "Projecten opgeleverd",
    aboutCerts: "8+",
    aboutCertsLabel: "Certificeringen",
    skillsTitle: "Tech Stack",
    skillsSubtitle: "Technologieën en tools waar ik dagelijks mee werk",
    writingTitle: "Artikelen",
    writingSubtitle: "Gedachten, handleidingen en oplossingen die ik deel met de community",
    writingReadMore: "Lees meer",
    writingBlog: "Blog",
    writingWhitepaper: "Whitepaper",
    writingLeetcode: "LeetCode",
    contactTitle: "Contact",
    contactSubtitle: "Heeft u een project in gedachten of wilt u gewoon praten? Stuur me een bericht!",
    contactName: "Uw naam",
    contactEmail: "Uw e-mail",
    contactMessage: "Uw bericht",
    contactSend: "Bericht verzenden",
    contactSuccess: "Bericht succesvol verzonden! Ik neem snel contact op.",
    footerRights: "Alle rechten voorbehouden.",
    footerBuiltWith: "Gebouwd met",
    resumeDownload: "Downloaden",
    resumeOpenNew: "Openen in nieuw tabblad",
    resumeNotFound: "CV nog niet beschikbaar",
    resumeNotFoundDesc: "Upload uw CV als resume.pdf",
    blogPlatformsTag: "platformen",
    blogPlatformsTitle: "Waar ik schrijf",
    blogPlatformsSubtitle: "Volg mijn schrijven op verschillende platformen",
    certsTag: "certificeringen",
    certsTitle: "Certificeringen",
    certsSubtitle: "Erkende certificaten die mijn expertise valideren",
    certsVerify: "Verifiëren",
    certsViewAll: "Alle certificaten bekijken",
    projTag: "projecten",
    projTitle: "Projecten",
    projSubtitle: "Open-source tools en infrastructuur die ik heb gebouwd",
    projViewAll: "Alle projecten bekijken",
  },
  sv: {
    navHome: "Hem",
    navAbout: "Om mig",
    navSkills: "Kompetenser",
    navWriting: "Artiklar",
    navContact: "Kontakt",
    navCerts: "Certifikat",
    navProjects: "Projekt",
    heroGreeting: "Hej, jag är",
    heroName: "Ditt Namn",
    heroTitle: "Cloud & Platform Engineer",
    heroDescription: "Cloud Engineer · Platform Engineer · Site Reliability Engineer. Multi-cloud expert på AWS, Azure & GCP. Bygger skalbar infrastruktur och säkerställer produktionspålitlighet.",
    heroCta: "Kontakta mig",
    heroResume: "Se CV",
    aboutTitle: "Om mig",
    aboutP1: "Jag är Cloud & Platform Engineer med djup expertis inom AWS, Azure och GCP. Jag specialiserar mig på att designa resilient, skalbar infrastruktur och interna utvecklarplattformar.",
    aboutP2: "Som SRE i hjärtat brinner jag för observability, incidenthantering och toil-reducering. Jag skriver om mina erfarenheter och delar lösningar.",
    aboutYears: "5+",
    aboutYearsLabel: "År erfarenhet",
    aboutProjects: "50+",
    aboutProjectsLabel: "Levererade projekt",
    aboutCerts: "8+",
    aboutCertsLabel: "Certifieringar",
    skillsTitle: "Teknikstack",
    skillsSubtitle: "Teknologier och verktyg jag arbetar med dagligen",
    writingTitle: "Artiklar",
    writingSubtitle: "Tankar, guider och lösningar jag delar med communityn",
    writingReadMore: "Läs mer",
    writingBlog: "Blogg",
    writingWhitepaper: "Vitbok",
    writingLeetcode: "LeetCode",
    contactTitle: "Kontakt",
    contactSubtitle: "Har du ett projekt i åtanke eller vill bara prata? Skicka ett meddelande!",
    contactName: "Ditt namn",
    contactEmail: "Din e-post",
    contactMessage: "Ditt meddelande",
    contactSend: "Skicka meddelande",
    contactSuccess: "Meddelandet skickades! Jag återkommer snart.",
    footerRights: "Alla rättigheter förbehållna.",
    footerBuiltWith: "Byggd med",
    resumeDownload: "Ladda ner",
    resumeOpenNew: "Öppna i ny flik",
    resumeNotFound: "CV ännu ej tillgängligt",
    resumeNotFoundDesc: "Ladda upp ditt CV som resume.pdf",
    blogPlatformsTag: "plattformar",
    blogPlatformsTitle: "Där jag skriver",
    blogPlatformsSubtitle: "Följ mitt skrivande på olika plattformar",
    certsTag: "certifieringar",
    certsTitle: "Certifieringar",
    certsSubtitle: "Branscherkända meriter som validerar min expertis",
    certsVerify: "Verifiera",
    certsViewAll: "Visa alla certifikat",
    projTag: "projekt",
    projTitle: "Projekt",
    projSubtitle: "Open-source-verktyg och infrastruktur jag byggt",
    projViewAll: "Visa alla projekt",
  },
};
