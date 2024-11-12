import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import getThemeConfig from "@/constants/theme";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thamys.dev",
  description:
    "Full-Stack Developer (FE Heavy) | Front-End Specialist | React - Next.JS - Tailwind - Ant Design",
};

const theme = getThemeConfig(true);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
