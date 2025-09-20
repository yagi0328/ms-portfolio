"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useRef } from "react";
import styles from "./header.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Header: FC = () => {
  const headerWrapRef = useRef<HTMLDivElement>(null);
  const naviBtnRef = useRef<HTMLButtonElement>(null);
  const naviAreaRef = useRef<HTMLDivElement>(null);
  const naviCloseRef = useRef<HTMLButtonElement>(null);

  // ヘッダーを隠しておく
  useGSAP(() => {
    gsap.set(headerWrapRef.current, { y: -100 });

    // .mv が終わったら header を表示
    ScrollTrigger.create({
      trigger: document.querySelector("#second"), // 次のセクションに入ったら
      start: "top center", // 次のセクションのトップが画面中央に来たとき
      onEnter: () => {
        gsap.to(headerWrapRef.current, { y: 0, duration: 0.8, ease: "power2.out" });
      },
      onLeaveBack: () => {
        gsap.to(headerWrapRef.current, { y: -100, duration: 0.8, ease: "power2.in" });
      },
    });
  });

  return (
    <header className={styles.header}>
      <div ref={headerWrapRef} className={styles.header_wrap + " pc"}>
        <div className={styles.header_wrap_content}>
          <Link className={styles.logo} href="/">
            <Image src="/top/logo.svg" width={176} height={33} alt="PORTFOLIO mayu sugita" />
          </Link>
          <ul className={styles.header_grovalNavi}>
            <li>
              <Link href="/">
                <span className={styles.icon}></span>
                <p className={styles.text}>HOME</p>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <span className={styles.icon}></span>
                <p className={styles.text}>ABOUT</p>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <span className={styles.icon}></span>
                <p className={styles.text}>WORKS</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className={styles.icon}></span>
                <p className={styles.text}>CONTACT</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <button
        ref={naviBtnRef}
        className={styles.navi_btn + " sp"}
        onClick={() => {
          naviAreaRef.current?.classList.add(styles.active);
        }}
      >
        <Image src="/top/sp-navi-icon.svg" width={52} height={54} alt="menu" />
      </button>

      <div ref={naviAreaRef} className={styles.navi_area + " sp"}>
        <button
          ref={naviCloseRef}
          className={styles.navi_close}
          onClick={() => {
            naviAreaRef.current?.classList.remove(styles.active);
          }}
        >
          <span></span>
          <span></span>
        </button>
        <div className={styles.header_content}>
          <ul className={styles.header_grovalNavi}>
            <li>
              <Link href="/">
                <span className={styles.icon}></span>
                <p className={styles.text}>HOME</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className={styles.icon}></span>
                <p className={styles.text}>ABOUT</p>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <span className={styles.icon}></span>
                <p className={styles.text}>WORKS</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className={styles.icon}></span>
                <p className={styles.text}>CONTACT</p>
              </Link>
            </li>
          </ul>
          <a className={styles.logo} href="">
            <Image src="/top/logo.svg" width={176} height={33} alt="PORTFOLIO mayu sugita" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
