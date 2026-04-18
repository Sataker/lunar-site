"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

/**
 * Animated counter that counts up to a target value,
 * then keeps slowly incrementing to simulate live savings.
 */
export default function LiveCounter({
  target,
  suffix = "%",
  duration = 2,
  incrementInterval = 3000,
  incrementAmount = 0.1,
  className,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  incrementInterval?: number;
  incrementAmount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);
  const [reachedTarget, setReachedTarget] = useState(false);

  // Phase 1: count up to target
  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setValue(Math.round(current * 10) / 10);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(target);
        setReachedTarget(true);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  // Phase 2: keep incrementing slowly after reaching target
  useEffect(() => {
    if (!reachedTarget) return;

    const interval = setInterval(() => {
      setValue((v) => Math.round((v + incrementAmount) * 10) / 10);
    }, incrementInterval);

    return () => clearInterval(interval);
  }, [reachedTarget, incrementInterval, incrementAmount]);

  const display = value % 1 === 0 ? `${value}` : `${value.toFixed(1)}`;

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {display}{suffix}
    </motion.span>
  );
}
