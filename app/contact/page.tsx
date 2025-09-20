import Image from "next/image";
import React, { FC } from "react";
import styles from "./page.module.scss";

const Page: FC = () => {
  return (
    <main className={styles.contact}>
      <section className={styles.mv}>
        <div className={styles.mv_content}>
          <Image src="/contact/contact-flower.svg" alt="image" width={143} height={133} />
          <h1>CONTACT</h1>
        </div>
      </section>
      <section className={`${styles.form} ${styles.content_wrap}`}>
        <form action="confirm.html" method="post">
          <fieldset>
            <div className={styles.field}>
              <label htmlFor="name">
                お名前
                <span className={styles.required} aria-hidden="true">
                  必須
                </span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                // autocomplete="name"
                required
                aria-required="true"
                placeholder="山田 太郎"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">
                メールアドレス
                <span className={styles.required} aria-hidden="true">
                  必須
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                // autocomplete="email"
                required
                aria-required="true"
                placeholder="taro@example.com"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="tel">電話番号</label>
              <input
                id="tel"
                name="tel"
                type="tel"
                // inputmode="tel"
                // autocomplete="tel"
                placeholder="03-1234-5678"
                pattern="^[0-9+\-()\s]{9,16}$"
                title="数字・+・-・( )・スペースが使えます（9〜16文字）"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">
                お問い合わせ内容
                <span className={styles.required} aria-hidden="true">
                  必須
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                placeholder="お問い合わせの詳細をご記入ください。"
                // maxlength="4000"
              ></textarea>
            </div>
          </fieldset>
          <button type="submit">送信する</button>
        </form>
      </section>
    </main>
  );
};

export default Page;
