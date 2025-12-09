import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thamyres Guedes | Lead Software Engineer | Frontend Architect | React, Next.js & Web3 Expert",
  description:
    "Thamyres Guedes - Lead Software Engineer and Frontend Architect with over a decade of experience. Specializing in React.js, Next.js, TypeScript, Node.js, and Web3 technologies. Expert in building scalable web applications, blockchain integrations, and distributed systems.",
  keywords: [
    "Thamyres Guedes",
    "Lead Software Engineer",
    "Frontend Architect",
    "React Developer",
    "Next.js Expert",
    "TypeScript",
    "Web3 Developer",
    "Blockchain",
    "Full Stack Developer",
    "Node.js",
    "NestJS",
    "Frontend Development",
    "Software Engineering",
    "Distributed Systems",
    "São Paulo Developer",
    "Brazil Software Engineer",
  ],
  authors: [{ name: "Thamyres Guedes" }],
  creator: "Thamyres Guedes",
  publisher: "Thamyres Guedes",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://thamys.dev",
    title: "Thamyres Guedes | Lead Software Engineer | Frontend Architect",
    description:
      "Lead Software Engineer and Frontend Architect specializing in React, Next.js, TypeScript, and Web3 technologies. Over a decade of experience building scalable web applications.",
    siteName: "Thamyres Guedes Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thamyres Guedes | Lead Software Engineer | Frontend Architect",
    description:
      "Lead Software Engineer specializing in React, Next.js, TypeScript, and Web3 technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thamyres Guedes",
  jobTitle: "Lead Software Engineer | Frontend Architect",
  url: "https://thamys.dev",
  email: "contato@thamys.dev",
  sameAs: [
    "https://www.linkedin.com/in/thamyres-guedes/",
    "https://github.com/thamys",
  ],
  description:
    "Lead Software Engineer and Frontend Architect with over a decade of experience specializing in React.js, Next.js, TypeScript, Node.js, and Web3 technologies. Expert in building scalable web applications, blockchain integrations, and distributed systems.",
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "Web3",
    "Blockchain",
    "Distributed Systems",
    "Frontend Architecture",
    "Full Stack Development",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Agile Methodologies",
    "Scrum",
    "Team Leadership",
    "Project Management",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Universidade Estácio de Sá",
    },
    {
      "@type": "EducationalOrganization",
      name: "Universidade Federal de Juiz de Fora",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Lumx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
