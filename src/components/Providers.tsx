"use client";

import AuroraBackground from "@/components/AuroraBackground";
import DynamicFavicon from "@/components/DynamicFavicon";
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
      <DynamicFavicon />
      <LenisProvider>
        <AuroraBackground />
        <GsapScrollInit />
        {children}
      </LenisProvider>
    </ThemeProvider>
  );
}
