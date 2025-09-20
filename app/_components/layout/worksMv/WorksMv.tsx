import Image from "next/image";
import React, { FC } from "react";
import styles from "./worksMv.module.scss";

const WorksMv: FC = () => {
  return (
    <section className={styles.mv}>
      <div className={styles.mv_content}>
        <Image src="/works/works-flower.svg" alt="" width={111} height={111} />
        <h1>WORKS</h1>
      </div>
    </section>
  );
};

export default WorksMv;
