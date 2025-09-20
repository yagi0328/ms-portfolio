"use client";

import React, { useCallback } from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";

const Footer = () => {
  const onCLickScrollTop = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <Link href="" className={styles.btn_pageTop} onClick={onCLickScrollTop}>
          <Image src="/top/cmn-btn-pagetop.svg" alt="image" width={35} height={33} />
          <p>Back To Top</p>
        </Link>
        <div className={styles.footer_content_item}>
          <p>Thank you for seeing</p>
          <Image src="/top/footer-flower1.svg" alt="image" width={161} height={147} />
        </div>
      </div>
      <small>&copy;mayu sugita</small>
    </footer>
  );
};

export default Footer;
