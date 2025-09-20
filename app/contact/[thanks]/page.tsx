import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styles from "./page.module.scss";

const Page: FC = () => {
  return (
    <main className={`${styles.contact} ${styles.thanks}`}>
      <section className={styles.mv}>
        <div className={styles.mv_content}>
          <Image src="/contact/contact-flower.svg" alt="image" width={143} height={133} />
          <h1>CONTACT</h1>
        </div>
      </section>
      <section className={`${styles.thanks_content} ${styles.content_wrap}`}>
        <p>
          お問い合わせいただきありがとうございました。
          <br />
          内容を確認の上、改めてご連絡差し上げます。
        </p>
        <Link href="/">TOPへ戻る</Link>
      </section>
    </main>
  );
};

export default Page;
