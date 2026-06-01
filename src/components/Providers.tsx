"use client";

import AuroraBackground from "@/components/AuroraBackground";
import { ThemeProvider } from "@/context/ThemeContext";
import GsapScrollInit from "@/components/GsapScrollInit";
import LenisProvider from "@/components/LenisProvider";
import { assertUniqueImages } from "@/lib/images";
import { useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    assertUniqueImages();
  }, []);

  return (
    <ThemeProvider>
      <LenisProvider>
        <AuroraBackground />
        <GsapScrollInit />
        {children}
      </LenisProvider>
    </ThemeProvider>
  );
}
