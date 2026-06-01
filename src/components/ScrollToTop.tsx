"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scroll to top when navigating between pages */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
