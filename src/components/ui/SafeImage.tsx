"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { imageFallback } from "@/lib/images";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
};

/**
 * Next/Image with automatic fallback when remote URL fails (404, network).
 */
export default function SafeImage({ src, alt, onError, ...props }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      onError={(e) => {
        if (currentSrc !== imageFallback) {
          setCurrentSrc(imageFallback);
        }
        onError?.(e);
      }}
    />
  );
}
