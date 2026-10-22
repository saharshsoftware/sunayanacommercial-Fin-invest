export const site = {
  brandName: "Sunayana Commercial Fin-Invest",
  legalName: "Sunayana Commercial FIN-INVEST PRIVATE LIMITED",
  // Restore alongside the address sections once finalized.
  // registeredOffice:
  //   "10th Floor, Poddar Point, Block-A, 113, Park Street, Kolkata – 700016",
  // gstin: "", // Add the GSTIN once obtained, then restore the footer display.
  rbiRegistrationNumber: "N-05.06707 dated 17 Oct 2003",
  rbiRegistration:
    "RBI Registration No. N-05.06707 dated 17 Oct 2003, issued under Section 45-IA of the RBI Act, 1934",
  grievanceEmail: "grievance@sunyanacommercialfininvest.com",
  supportEmail: "support@sunayanacommercialfininvest.com",
  supportPhone: "+91 9958940148",
  rbiCmsUrl: "https://cms.rbi.org.in",
  sachetUrl: "https://sachet.rbi.org.in",
  // Restore alongside the officer details on the grievance page when ready.
  // gro: {
  //   name: "Sumit Rajan",
  //   designation: "Grievance Redressal Officer",
  //   email: "grievance@sunyanacommercialfininvest.com",
  //   phone: "7665466546",
  // },
  lsps: [
    {
      name: "ZapCash",
      legalEntity: "Omnistack Innovation Pvt Ltd.",
      website: "www.zapcash.in",
      websiteUrl: "https://www.zapcash.in",
      tag: "Digital Lending Partner",
      description:
        "Digital lending platform providing quick personal loans with instant approval.",
      logo: "/zapcash-logo.png",
      logoWidth: 172,
      logoHeight: 40,
    },
  ],
} as const;

export const lspNames = site.lsps.map((partner) => partner.name).join(" and ");

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-lsp", label: "Our LSPs" },
  { href: "/contact", label: "Contact" },
] as const;

export const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/our-lsp", label: "Our LSPs" },
  { href: "/grievance", label: "Grievance Redressal" },
  { href: "/faq", label: "FAQ" },
] as const;

export const legalLinks = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms & Conditions" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
  { href: "/legal/refund-cancellation", label: "Refund & Cancellation" },
] as const;
