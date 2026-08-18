import { HERO_WIDTH_2 } from "./v1-constants";

// Static version of the hairline column frame, for v1 sub-pages that don't
// run the hero's intro animation.
export function V1Frame() {
  return (
    <>
      <div
        className="v1-line fixed top-0 bottom-0 z-10 w-px pointer-events-none left-1/2"
        style={{ transform: `translateX(${-HERO_WIDTH_2 / 2}px)` }}
      />
      <div
        className="v1-line fixed top-0 bottom-0 z-10 w-px pointer-events-none left-1/2"
        style={{ transform: `translateX(${HERO_WIDTH_2 / 2}px)` }}
      />
    </>
  );
}
