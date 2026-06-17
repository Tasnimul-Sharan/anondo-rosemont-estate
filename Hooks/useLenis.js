"use client";

import { useEffect } from "react";

export const useLenis = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let lenis = null;
    let rafId = null;
    let cancelled = false;
    let started = false;

    // Inject Lenis CSS without globals.css
    const styleId = "lenis-runtime-style";

    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        html {
          scroll-behavior: auto;
        }

        html.lenis,
        html.lenis body {
          height: auto;
        }

        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }

        .lenis.lenis-stopped {
          overflow: hidden;
        }

        body {
          overflow-x: hidden;
        }
      `;
      document.head.appendChild(style);
    }

    const startLenis = async () => {
      if (started || cancelled) return;

      started = true;

      try {
        const Lenis = (await import("lenis")).default;

        if (cancelled) return;

        lenis = new Lenis({
          duration: 0.95,
          easing: (t) => 1 - Math.pow(1 - t, 3),
          smoothWheel: true,
          smoothTouch: false,
          syncTouch: false,
          touchMultiplier: 1.2,
          wheelMultiplier: 0.9,
          gestureOrientation: "vertical",
          anchors: {
            offset: -90,
          },
        });

        const raf = (time) => {
          if (!lenis || cancelled) return;

          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);
      } catch (error) {
        console.error("Lenis failed to load:", error);
      }
    };

    const startOnIntent = () => {
      startLenis();
    };

    const startOnKeyboardScroll = (event) => {
      const scrollKeys = [
        "ArrowDown",
        "ArrowUp",
        "PageDown",
        "PageUp",
        "Home",
        "End",
        " ",
      ];

      if (scrollKeys.includes(event.key)) {
        startLenis();
      }
    };

    window.addEventListener("wheel", startOnIntent, {
      once: true,
      passive: true,
    });

    window.addEventListener("touchstart", startOnIntent, {
      once: true,
      passive: true,
    });

    window.addEventListener("keydown", startOnKeyboardScroll);

    return () => {
      cancelled = true;

      window.removeEventListener("wheel", startOnIntent);
      window.removeEventListener("touchstart", startOnIntent);
      window.removeEventListener("keydown", startOnKeyboardScroll);

      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      if (lenis) {
        lenis.destroy();
      }

      lenis = null;
      rafId = null;
    };
  }, []);
};
