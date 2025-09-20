"use client";

import React, { FC, useRef } from "react";
import styles from "./contact.module.scss";
import Link from "next/link";
import { useFadeIn } from "@/hooks/useAnimation";

type Props = {
  data_name?: string;
};

const Contact: FC<Props> = ({ data_name }) => {
  const fadeInRes = useRef<HTMLElement[]>([]);

  useFadeIn(fadeInRes.current);
  return (
    <section className={styles.contact} data-section data-class={data_name}>
      <Link
        ref={(el) => {
          if (el) fadeInRes.current[0] = el;
        }}
        href={"/contact"}
        className={styles.contact_btn}
      >
        <p>CONTACT</p>
      </Link>
    </section>
  );
};

export default Contact;
