"use client";

import GradientText from "@/components/ui/GradientText";
import { useTheme } from "@/context/ThemeContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  id?: string;
  className?: string;
};

export default function HeroHeadline({ id = "hero-heading", className = "" }: Props) {
  const { theme } = useTheme();
  const reduced = useReducedMotion();

  const colors = [
    theme.accent,
    "#ffffff",
    theme.accentDark,
    "#f5d0fe",
    theme.accent,
  ];

  if (reduced) {
    return (
      <h1
        id={id}
        className={`heading-display hero-headline text-center text-on-gradient lg:text-left ${className}`}
      >
        Tally On Phone
      </h1>
    );
  }

  return (
    <h1
      id={id}
      className={`heading-display hero-headline w-full text-center lg:text-left ${className}`}
    >
      <GradientText
        colors={colors}
        animationSpeed={4}
        showBorder={false}
        direction="horizontal"
        yoyo
        className="hero-headline-gradient heading-display"
      >
        Tally On Phone
      </GradientText>
    </h1>
  );
}
