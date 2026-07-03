/**
 * Global site configuration + copy that appears in the shell (nav, footer,
 * hero) rather than in a CMS-managed collection.
 */

export const site = {
  name: "ELSOC",
  fullName: "ELSOC — Electrical Engineering Society, NIT Hamirpur",
  tagline: "Electrical Engineering Society",
  department: "Department of Electrical Engineering",
  institute: "National Institute of Technology, Hamirpur",
  url: "https://elsoc.nith.ac.in",
  description:
    "ELSOC, the Departmental Society of Electrical Engineering at NIT Hamirpur, empowers aspiring engineers through innovation, collaboration, and excellence.",
  heroBadge: "NIT Hamirpur's Premier Tech Society",
  mission:
    "ELSOC, the Departmental Society of Electrical Engineering at NIT Hamirpur, empowers aspiring engineers through innovation, collaboration, and excellence. We bridge theoretical knowledge with practical application through hands-on workshops, expert lectures, cutting-edge projects, and industry collaborations. Our community fosters creativity, technical expertise, and problem-solving skills, preparing students to lead in the rapidly evolving field of electrical engineering and make meaningful contributions to technology and society.",
  contact: {
    email: "elsoc@nith.ac.in",
    phone: "+91 82331 08540",
    phoneLabel: "General Secretary: +91 82331 08540",
    address: "NIT Hamirpur, Himachal Pradesh, India - 177005",
    addressShort: "NIT Hamirpur, HP - 177005",
    mapsUrl: "https://maps.google.com/?q=NIT+Hamirpur",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.8543814537745!2d76.52677631512648!3d31.469450981397936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a9%3A0x80b2347d4280e84d!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin",
  },
  socials: [
    { platform: "Facebook", url: "https://www.facebook.com/elsoc.nith/" },
    { platform: "Instagram", url: "https://www.instagram.com/elsoc_nith/" },
    {
      platform: "LinkedIn",
      url: "https://in.linkedin.com/company/elsoc-nit-hamirpur",
    },
  ],
  stats: [
    { value: "35+", label: "Projects" },
    { value: "10+", label: "Events / Year" },
    { value: "33", label: "Team Members" },
    { value: "5", label: "Years of Excellence" },
  ],
  maintainer: "Maintained by Ronak Dotasara (24BEE083) and Team ELSOC",
  logo: "/img/brand/elsoc-logo.png",
  nithLogo: "/img/brand/nith-logo.png",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/sparkathon", label: "Sparkathon" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
] as const;

/** Technical domains showcased on the home page (images from legacy site). */
export const homeDomains = [
  {
    image: "/img/domains/circuit-design.jpeg",
    title: "Circuit Design",
    description: "Analog & digital circuits",
  },
  {
    image: "/img/domains/web-development.jpeg",
    title: "Web Development",
    description: "Full-stack development",
  },
  {
    image: "/img/domains/ai-ml.jpeg",
    title: "AI/ML",
    description: "Artificial Intelligence & Machine Learning",
  },
  {
    image: "/img/domains/media-marketing.jpg",
    title: "Media & Marketing",
    description: "Digital content & outreach",
  },
  {
    image: "/img/domains/finance.jpg",
    title: "Finance",
    description: "Budget & fund management",
  },
  {
    image: "/img/domains/content.webp",
    title: "Content",
    description: "Technical writing & documentation",
  },
  {
    image: "/img/domains/design.jpg",
    title: "Design",
    description: "UI/UX & graphic design",
  },
  {
    image: "/img/domains/management.jpg",
    title: "Management",
    description: "Team coordination & planning",
  },
] as const;
