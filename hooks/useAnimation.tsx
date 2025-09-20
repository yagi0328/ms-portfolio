"use client";

import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const splitText = (el: HTMLElement) => {
  const text = el.textContent || "";
  el.textContent = "";
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    el.appendChild(span);
  });
};

type UseTitleAnimationsProps = {
  mvTitleRef?: RefObject<HTMLHeadingElement | null>;
  mvTextRef?: RefObject<HTMLParagraphElement | null>;
  sectionTitleRefs: HTMLElement[];
};

export const useTitleAnimations = ({
  mvTitleRef,
  mvTextRef,
  sectionTitleRefs = [],
}: UseTitleAnimationsProps) => {
  useEffect(() => {
    // MVタイトル
    if (mvTitleRef?.current) {
      // まず span に分割
      splitText(mvTitleRef.current);

      // splitText で span が生成されてからアニメーション
      const spans = Array.from(mvTitleRef.current.querySelectorAll("span"));
      gsap.from(spans, {
        opacity: 0,
        y: 10,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      });
    }

    if (mvTextRef?.current) {
      splitText(mvTextRef.current);
      const spans = Array.from(mvTextRef.current.querySelectorAll("span"));
      gsap.from(spans, {
        opacity: 0,
        y: 10,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.8,
      });
    }

    // セクションタイトル
    sectionTitleRefs.forEach((ref) => {
      if (ref) {
        splitText(ref);
        gsap.from(ref.querySelectorAll("span"), {
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 10,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.6,
        });
      }
    });
  }, [mvTitleRef, mvTextRef, sectionTitleRefs]);
};

export const useFadeIn = (fadeElements: HTMLElement[]) => {
  useGSAP(() => {
    fadeElements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, []);
};

type UseHorizontalScrollProps = {
  carrerSectionRef: RefObject<HTMLElement | null>;
  careerWrapRef: RefObject<HTMLElement | null>;
  contentRef: RefObject<HTMLElement | null>;
};

export const useHorizontalScroll = ({
  carrerSectionRef,
  contentRef,
  careerWrapRef,
}: UseHorizontalScrollProps) => {
  useGSAP(() => {
    if (window.innerWidth <= 768) return;
    const section = carrerSectionRef.current;
    const content = contentRef.current;
    const pinElement = careerWrapRef.current; // pinする要素を基準にする

    if (!content || !pinElement) return;

    // pinする要素の幅を基準に計算
    const distance = () => Math.max(0, content.scrollWidth - pinElement.clientWidth);

    gsap.to(content, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top -15%",
        end: () => `+=${distance()}`,
        pin: section,
        scrub: 1.5,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
  }, [carrerSectionRef, contentRef, careerWrapRef]);
};

export const useReadMore = (btns: HTMLElement[]) => {
  useEffect(() => {
    if (window.innerWidth >= 769) return;
    btns.forEach((btn: HTMLElement) => {
      btn.addEventListener("click", function () {
        const textBlock = btn.previousElementSibling;
        textBlock?.classList.toggle("expanded");
        if (textBlock?.classList.contains("expanded")) {
          btn.textContent = "閉じる";
        } else {
          btn.textContent = "全文読む";
        }
      });
    });
  }, [btns]);
};

export const useParallaxImage = (images: HTMLElement[]) => {
  useGSAP(() => {
    images.forEach((img) => {
      console.log("hoge");
      gsap.set(img, { y: 0 }); // 初期位置リセット
      gsap.to(img, {
        y: 30, // px指定で緩やかな上下移動
        ease: "power2.out",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, [images]);
};
