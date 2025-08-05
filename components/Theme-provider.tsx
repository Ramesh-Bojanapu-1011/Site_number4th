"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.className = isDark ? "dark" : "light";
  }, []);

  if (!isMounted) return null; // or a loading state
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
