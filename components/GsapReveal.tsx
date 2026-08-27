"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GsapRevealProps = PropsWithChildren<{
  className?: string;
  direction?: "up" | "left" | "right";
}>;

export function GsapReveal({
  children,
  className = "",
  direction = "up",
}: GsapRevealProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;

    const context = gsap.context(() => {
      const target = direction === "up" ? ".reveal-item" : root.current;
      const from =
        direction === "left"
          ? { autoAlpha: 0, x: -60 }
          : direction === "right"
            ? { autoAlpha: 0, x: 60 }
            : { autoAlpha: 0, y: 34 };

      gsap.fromTo(target, from, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          toggleActions: "restart none restart none",
        },
      });
    }, root);

    return () => context.revert();
  }, [direction]);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
