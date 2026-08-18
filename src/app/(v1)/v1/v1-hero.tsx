"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { SocialItems } from "./social-items";
import { useV1Store } from "./v1-state";
import {
  HERO_HEIGHT_1,
  HERO_HEIGHT_2,
  HERO_WIDTH_1,
  HERO_WIDTH_2,
  HERO_SUBTEXT,
  STEP_1_DURATION,
  V1_EASE,
} from "./v1-constants";

const TRANSITION_STEP1 = { ease: V1_EASE, type: "tween" as const, duration: 1 };
const TRANSITION_STEP2 = { ease: V1_EASE, type: "tween" as const, duration: 0.6 };

const INTRO_SEEN_KEY = "v1-intro-seen";

// Vertical lines frame the content column. Both persist in step 2 so the
// whole page reads as a single hairline-framed column.
const leftLineVariants = {
  initial: { opacity: 0, scaleY: 0, x: -HERO_WIDTH_1 / 2 },
  step1: { opacity: 1, scaleY: 1, x: -HERO_WIDTH_1 / 2, transition: TRANSITION_STEP1 },
  step2: { opacity: 1, scaleY: 1, x: -HERO_WIDTH_2 / 2, transition: TRANSITION_STEP2 },
};

const rightLineVariants = {
  initial: { opacity: 0, scaleY: 0, x: HERO_WIDTH_1 / 2 },
  step1: { opacity: 1, scaleY: 1, x: HERO_WIDTH_1 / 2, transition: TRANSITION_STEP1 },
  step2: { opacity: 1, scaleY: 1, x: HERO_WIDTH_2 / 2, transition: TRANSITION_STEP2 },
};

// The top line closes the welcome box; it dissolves once the page opens up.
const topLineVariants = {
  initial: { opacity: 0, scaleX: 0 },
  step1: { opacity: 1, scaleX: 1, transition: TRANSITION_STEP1 },
  step2: { opacity: 0, scaleX: 1, transition: TRANSITION_STEP2 },
};

// The bottom line stays as the hero's baseline and scrolls with the page.
const bottomLineVariants = {
  initial: { opacity: 0, scaleX: 0 },
  step1: { opacity: 1, scaleX: 1, transition: TRANSITION_STEP1 },
  step2: { opacity: 1, scaleX: 1, transition: TRANSITION_STEP2 },
};

const enterRight = {
  initial: { opacity: 0, x: 20, filter: "blur(6px)" },
  animate: (delay: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { ...TRANSITION_STEP2, duration: 0.5, delay },
  }),
  exit: {
    opacity: 0,
    x: -20,
    filter: "blur(6px)",
    transition: { ...TRANSITION_STEP2, duration: 0.25 },
  },
};

export function V1Hero() {
  const { initStep, setInitStep } = useV1Store();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (initStep !== 1) return;

    // Skip the intro for reduced motion and for repeat visits in this session.
    if (reducedMotion || sessionStorage.getItem(INTRO_SEEN_KEY)) {
      setInitStep(2);
      return;
    }

    if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        sessionStorage.setItem(INTRO_SEEN_KEY, "1");
        setInitStep(2);
      }, STEP_1_DURATION);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [initStep, reducedMotion, setInitStep]);

  const animateStep = initStep === 1 ? "step1" : "step2";

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        height: initStep === 1 ? "100vh" : `${HERO_HEIGHT_2 + 48}px`,
        transition: `height ${TRANSITION_STEP2.duration}s cubic-bezier(${V1_EASE.join(",")})`,
      }}
    >
      {/* Left vertical line */}
      <motion.div
        variants={leftLineVariants}
        initial={reducedMotion ? false : "initial"}
        animate={animateStep}
        className="v1-line fixed top-0 bottom-0 w-px z-10 pointer-events-none left-1/2"
      />

      {/* Right vertical line */}
      <motion.div
        variants={rightLineVariants}
        initial={reducedMotion ? false : "initial"}
        animate={animateStep}
        className="v1-line fixed top-0 bottom-0 w-px z-10 pointer-events-none left-1/2"
      />

      {/* Hero content — horizontal lines are absolute inside so they scroll with the hero */}
      <div
        className="w-full mx-auto relative"
        style={{
          maxWidth: initStep === 1 ? HERO_WIDTH_1 : HERO_WIDTH_2,
          height: initStep === 1 ? HERO_HEIGHT_1 : HERO_HEIGHT_2,
          transition: `max-width ${TRANSITION_STEP2.duration}s cubic-bezier(${V1_EASE.join(",")}), height ${TRANSITION_STEP2.duration}s cubic-bezier(${V1_EASE.join(",")})`,
        }}
      >
        {/* Top horizontal line */}
        <motion.div
          variants={topLineVariants}
          initial={reducedMotion ? false : "initial"}
          animate={animateStep}
          className="v1-line absolute top-0 h-px z-10 pointer-events-none"
          style={{ width: "100vw", left: "50%", x: "-50%" }}
        />

        {/* Bottom horizontal line — the hero's baseline */}
        <motion.div
          variants={bottomLineVariants}
          initial={reducedMotion ? false : "initial"}
          animate={animateStep}
          className="v1-line absolute bottom-0 h-px z-10 pointer-events-none"
          style={{ width: "100vw", left: "50%", x: "-50%" }}
        />

        <div
          className={cn(
            "flex flex-col h-full px-8 py-6 gap-3",
            initStep === 1 ? "items-center justify-center" : "items-start justify-end"
          )}
        >
          <div className="flex flex-row items-end gap-4 w-full justify-start">
            <motion.h1
              initial={reducedMotion ? false : { opacity: 0, scale: 0.5, filter: "blur(6px)" }}
              animate={{
                opacity: 1,
                scale: initStep === 1 ? 0.8 : 1,
                filter: "blur(0px)",
                transition: { ...TRANSITION_STEP2, duration: 0.5 },
              }}
              className="text-5xl md:text-6xl"
            >
              <AnimatePresence mode="wait">
                {initStep === 1 ? (
                  <motion.span
                    key="welcome"
                    variants={enterRight}
                    custom={0.2}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="inline-block"
                  >
                    Welcome
                  </motion.span>
                ) : (
                  <motion.span
                    key="name"
                    variants={enterRight}
                    custom={0.1}
                    initial={reducedMotion ? false : "initial"}
                    animate="animate"
                    className="inline-block"
                  >
                    <span className="font-thin">{`Hi, I'm `}</span>
                    <span className="font-medium">Jeffrey Lan</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.h1>

            <AnimatePresence>
              {initStep === 2 && (
                <>
                  <div className="flex-1" />
                  <motion.div
                    variants={enterRight}
                    custom={0.5}
                    initial={reducedMotion ? false : "initial"}
                    animate="animate"
                  >
                    <SocialItems className="pb-1" />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {initStep === 2 && (
              <motion.p
                variants={enterRight}
                custom={0.4}
                initial={reducedMotion ? false : "initial"}
                animate="animate"
                className="text-neutral-400 text-sm md:text-lg"
              >
                {HERO_SUBTEXT}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
