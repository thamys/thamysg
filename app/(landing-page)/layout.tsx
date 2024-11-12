"use client";
import { ThemeProvider } from "@/hooks/useThemeMode";
import React, { PropsWithChildren } from "react";

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default layout;
