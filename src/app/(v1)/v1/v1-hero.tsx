"use client";

import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SocialItems } from "./social-items";
import { useV1Store } from "./v1-state";
import { HERO_HEIGHT_1, HERO_HEIGHT_2, HERO_WIDTH_1, HERO_WIDTH_2, STEP_1_DURATION, HERO_TITLE_STICK_TOP, HERO_TITLE_STICK_SCALE } from "./v1-constants";

const fontSans = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});


const TRANSITION_STEP1 = { ease: [0.215, 0.61, 0.355, 1.0] as const, type: "tween" as const, duration: 1 };
const TRANSITION_STEP2 = { ease: [0.215, 0.61, 0.355, 1.0] as const, type: "tween" as const, duration: 0.6 };

const leftLineVariants = {
  initial: { opacity: 0, scaleY: 0, x: -HERO_WIDTH_1 / 2 },
  step1: { opacity: 1, scaleY: 1, x: -HERO_WIDTH_1 / 2, transition: TRANSITION_STEP1 },
  step2: { opacity: 1, scaleY: 1, x: -HERO_WIDTH_2 / 2, transition: TRANSITION_STEP2 },
};

const rightLineVariants = {
  initial: { opacity: 0, scaleY: 0, x: HERO_WIDTH_1 / 2 },
  step1: { opacity: 1, scaleY: 1, x: HERO_WIDTH_1 / 2, transition: TRANSITION_STEP1 },
  step2: { opacity: 1, scaleY: 0, x: HERO_WIDTH_2 / 2, transition: TRANSITION_STEP2 },
};

const topLineVariants = {
  initial: { opacity: 0, scaleX: 0 },
  step1: { opacity: 1, scaleX: 1, transition: TRANSITION_STEP1 },
  step2: { opacity: 1, scaleX: 0, transition: TRANSITION_STEP2 },
};

const bottomLineVariants = {
  initial: { opacity: 0, scaleX: 0 },
  step1: { opacity: 1, scaleX: 1, transition: TRANSITION_STEP1 },
  step2: { opacity: 1, scaleX: 1, transition: TRANSITION_STEP2 },
};

export function V1Hero() {
  const { initStep, setInitStep } = useV1Store();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const [scrollScale, setScrollScale] = useState(1);

  useEffect(() => {
    const el = heroTitleRef.current;
    if (!el) return;

    const checkDistance = () => {
      const top = el.getBoundingClientRect().top;
      setScrollScale(top <= HERO_TITLE_STICK_TOP ? HERO_TITLE_STICK_SCALE : 1);
      console.log(top);
    };

    checkDistance();
    window.addEventListener("scroll", checkDistance, { passive: true });
    window.addEventListener("resize", checkDistance);
    return () => {
      window.removeEventListener("scroll", checkDistance);
      window.removeEventListener("resize", checkDistance);
    };
  }, []);

  useEffect(() => {
    if (initStep === 1 && !timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        setInitStep(2);
      }, STEP_1_DURATION);
    }
  }, [initStep]);

  const getContentHeight = () => {
    if (initStep === 1) return HERO_HEIGHT_1;
    return HERO_HEIGHT_2;
  };

  const getContentMaxWidth = () => {
    if (initStep === 1) return HERO_WIDTH_1;
    return HERO_WIDTH_2;
  };

  const animateStep = initStep === 1 ? "step1" : "step2";

  return (
    <div className="flex flex-col items-center justify-center" style={{
      height: initStep === 1 ? "100vh" : `${HERO_HEIGHT_2 + 48}px`,
      transition: `height ${TRANSITION_STEP2.duration}s cubic-bezier(${TRANSITION_STEP2.ease.join(",")})`,
    }}>
      {/* Left vertical line */}
      <motion.div
        variants={leftLineVariants}
        initial="initial"
        animate={animateStep}
        className="fixed top-0 bottom-0 bg-muted w-px z-10 pointer-events-none left-1/2"
      />

      {/* Right vertical line */}
      <motion.div
        variants={rightLineVariants}
        initial="initial"
        animate={animateStep}
        className="fixed top-0 bottom-0 bg-muted w-px z-10 pointer-events-none left-1/2"
      />

      {/* Hero content — horizontal lines are absolute inside so they scroll with the hero */}
      <div
        className="w-full mx-auto relative"
        style={{
          maxWidth: getContentMaxWidth(),
          height: getContentHeight(),
          transition: `height ${TRANSITION_STEP2.duration}s cubic-bezier(${TRANSITION_STEP2.ease.join(",")})`,
        }}
      >
        {/* Top horizontal line — sticks to hero top border */}
        <motion.div
          variants={topLineVariants}
          initial="initial"
          animate={animateStep}
          className="absolute top-0 h-px bg-muted z-10 pointer-events-none"
          style={{ width: "100vw", left: "50%", x: "-50%" }}
        />

        {/* Bottom horizontal line — sticks to hero bottom border */}
        <motion.div
          variants={bottomLineVariants}
          initial="initial"
          animate={animateStep}
          className="absolute bottom-0 h-px bg-muted z-10 pointer-events-none"
          style={{ width: "100vw", left: "50%", x: "-50%" }}
        />

        <div
          className={cn(
            "flex flex-col h-full px-8 py-6 gap-3",
            initStep === 1 ? "items-center justify-center" : "items-start justify-end",
          )}
          ref={heroTitleRef}

        >
          <div
            className="flex flex-row items-end justify-between gap-4 w-full"
            style={{
              justifyContent: initStep === 2 ? "flex-start" : "center",
            }}
          >
            <div
              style={{
                transform: `scale(${scrollScale})`,
                transformOrigin: "left top",
                transition: "transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)",
                ...(scrollScale === HERO_TITLE_STICK_SCALE && {
                  position: "fixed",
                  top: 0,
                  zIndex: 15,
                  // background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(10px)",
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                }),
              }}
            >
              <motion.h1
                layout
                layoutId="hero-title"
                id="hero-title"
                initial={{ opacity: 0, scale: 0.5, filter: "blur(6px)" }}
                animate={
                  initStep === 1
                    ? {
                      opacity: 1,
                      scale: 0.8,
                      filter: "blur(0px)",
                      transition: { ...TRANSITION_STEP1, duration: 0.5 },
                    }
                    : {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: { ...TRANSITION_STEP2, duration: 0.5 },
                    }
                }
                transition={initStep === 1 ? TRANSITION_STEP1 : TRANSITION_STEP2}
                className={`${fontSans.variable} text-6xl`}
              >
                <AnimatePresence>
                  {initStep === 1 && (
                    <motion.span
                      initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)", transition: { ...TRANSITION_STEP2, duration: 0.5, delay: 0.3 } }}
                      exit={{ opacity: 0, x: 20, filter: "blur(6px)", transition: { ...TRANSITION_STEP2, duration: 0.5, delay: 0.3 } }}
                    >
                      Welcome
                    </motion.span>
                  )}
                  {initStep === 2 && (
                    <motion.span
                      initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)", transition: { ...TRANSITION_STEP2, duration: 0.5, delay: 0.3 } }}
                      exit={{ opacity: 0, x: 20, filter: "blur(6px)", transition: { ...TRANSITION_STEP2, duration: 0.5, delay: 0.3 } }}
                    >
                      <span
                        className="font-thin"
                      >
                        {`Hi, I'm `}
                      </span>
                      <span className="font-medium">
                        {`Jeffrey Lan`}
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.h1>
            </div>


            <AnimatePresence>
              {initStep === 2 && (
                <>
                  <div className="flex-1" />
                  <motion.div
                    initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)", transition: { ...TRANSITION_STEP2, duration: 0.5, delay: 0.5 } }}
                    exit={{ opacity: 0, x: 20, filter: "blur(6px)", transition: { ...TRANSITION_STEP2, duration: 0.5 } }}
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
                initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)", transition: { ...TRANSITION_STEP2, duration: 0.5, delay: 0.5 } }}
                className="text-neutral-400 text-sm md:text-lg"
              >
                Full Stack Developer
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

