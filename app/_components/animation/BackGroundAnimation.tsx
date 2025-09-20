"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BackGroundAnimation = () => {
  useGSAP(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    sections.forEach((section) => {
      // ---------------------------
      //背景色が付くアニメーション
      // ---------------------------
      const color = section.dataset.color;
      gsap.to("body", {
        backgroundColor: color,
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "bottom center",
          toggleActions: "play pause resume reset",
          // markers: true,
        },
      });
    });
  }, []);
  return null;
};

export default BackGroundAnimation;
