"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  as?: "h2" | "div";
}>;

export function TextReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "h2",
}: TextRevealProps) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ paused: true, delay });

      timeline.set(root.current, { visibility: "visible" });
      timeline.fromTo(
        root.current,
        {
          scale: 0.95,
          y: 40,
          transformOrigin: "bottom center",
        },
        {
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "cubic-bezier(.16, 1, .3, 1)",
        },
      );
      const highlight = root.current?.querySelector(".title-highlight");
      if (highlight) {
        timeline.to(highlight, {
          "--highlight-progress": "100%",
          duration: 0.85,
          ease: "power2.out",
        });
      }

      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        onEnter: () => timeline.restart(true),
        onEnterBack: () => timeline.restart(true),
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <Tag
      ref={(element) => {
        root.current = element;
      }}
      className={`text-reveal ${className}`}
      style={{ visibility: "hidden" }}
    >
      {children}
    </Tag>
  );
}
