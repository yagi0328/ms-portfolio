import Image from "next/image";
import React, { FC } from "react";
import styles from "./page.module.scss";
import ContactForm from "../_components/layout/contactForm/ContactForm";
import Link from "next/link";

const Page: FC = () => {
  return (
    <main className={styles.contact}>
      <section className={styles.mv}>
        <div className={styles.mv_content}>
          <Image src="/contact/contact-flower.svg" alt="image" width={143} height={133} />
          <h1>CONTACT</h1>
        </div>
      </section>
      {/* <section className={`${styles.thanks_content} ${styles.content_wrap}`}>
        <p>
          お問い合わせいただきありがとうございました。
          <br />
          内容を確認の上、改めてご連絡差し上げます。
        </p>
        <Link href="/">TOPへ戻る</Link>
      </section> */}
      <ContactForm />
    </main>
  );
};

export default Page;
