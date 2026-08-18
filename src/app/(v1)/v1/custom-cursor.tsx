"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, summary";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 900, damping: 60, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 900, damping: 60, mass: 0.4 });

  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [overLink, setOverLink] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);
    const handleOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      setOverLink(!!target?.closest?.(INTERACTIVE));
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointerover", handleOver, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointerover", handleOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="custom-cursor"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: pressed ? 0.7 : overLink ? 1.7 : 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      aria-hidden
    />
  );
}
