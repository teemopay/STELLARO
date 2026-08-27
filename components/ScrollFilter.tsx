"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollFilterProps = PropsWithChildren<{
  className?: string;
}>;

export function ScrollFilter({ children, className = "" }: ScrollFilterProps) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        root.current,
        { filter: "blur(0px) brightness(1) saturate(1)" },
        {
          filter: "blur(3px) brightness(0.9) saturate(0.88)",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section ref={root} className={className}>
      {children}
    </section>
  );
}
