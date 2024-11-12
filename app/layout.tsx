import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thamyres Guedes | Front-End Developer Portfolio | React & Next.js",
  description:
    "Thamyres Guedes - Experienced Front-End Developer specializing in React.js and Next.js. Create responsive interfaces, manage full project lifecycles, and integrate APIs seamlessly.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thamyres Guedes",
  jobTitle: "Front-End Developer",
  url: "https://thamys.dev",
  sameAs: [
    "https://www.linkedin.com/in/thamys-guedes/",
    "https://github.com/thamys",
  ],
  description:
    "Experienced Front-End Developer specializing in responsive web interfaces using React.js and Next.js.",
  skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
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
