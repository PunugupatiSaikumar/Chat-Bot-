"use client";

import { motion, useReducedMotion } from "framer-motion";

export function TypingIndicator() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="inline-flex items-center gap-1 rounded-2xl bg-naya-shell px-3 py-2 shadow-soft">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="h-1.5 w-1.5 rounded-full bg-naya-mauve/70"
          animate={
            reducedMotion
              ? undefined
              : {
                  opacity: [0.3, 1, 0.3],
                  y: [0, -2, 0]
                }
          }
          transition={
            reducedMotion
              ? undefined
              : { duration: 1, repeat: Infinity, delay: dot * 0.16, ease: "easeInOut" }
          }
        />
      ))}
      <span className="ml-1 text-xs text-naya-mauve">Naya is thinking...</span>
    </div>
  );
}
