"use client";

import React, { FC, ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

type Props = {
  children: ReactNode;
};

gsap.registerPlugin(ScrollTrigger);

const GlobalAnimationProvider: FC<Props> = ({ children }) => {
  useEffect(() => {
    // ======================
    // Lenis初期化
    // ======================
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // ScrollTriggerとLenisを同期
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // ScrollTriggerにLenisのスクロールを渡す
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value as number | string | HTMLElement);
        } else {
          return lenis.scroll;
        }
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // スクロールバー位置計算のための設定
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    // RAFループ
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
};

export default GlobalAnimationProvider;
