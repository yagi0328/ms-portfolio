"use client";
import React, { FC, useActionState } from "react";
import styles from "./contactForm.module.scss";
import { createContactData } from "@/app/_actions/contact";
import Link from "next/link";

const intialState = {
  status: "",
  message: "",
};

const ContactForm: FC = () => {
  const [state, formAction] = useActionState(createContactData, intialState);
  console.log(state);
  if (state.status === "success") {
    return (
      <section className={`${styles.thanks_content} ${styles.content_wrap}`}>
        <p>
          お問い合わせいただきありがとうございました。
          <br />
          内容を確認の上、改めてご連絡差し上げます。
        </p>
        <Link href="/">TOPへ戻る</Link>
      </section>
    );
  }

  return (
    <section className={`${styles.form} ${styles.content_wrap}`}>
      <form action={formAction}>
        <fieldset>
          <div className={styles.field}>
            <label htmlFor="fullname">
              お名前
              <span className={styles.required} aria-hidden="true">
                必須
              </span>
            </label>
            <input id="fullname" name="name" type="text" placeholder="山田 太郎" />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">
              メールアドレス
              <span className={styles.required} aria-hidden="true">
                必須
              </span>
            </label>
            <input id="email" name="email" type="email" placeholder="taro@example.com" />
          </div>

          <div className={styles.field}>
            <label htmlFor="tel">電話番号</label>
            <input
              id="tel"
              name="tel"
              type="tel"
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
              placeholder="お問い合わせの詳細をご記入ください。"
            ></textarea>
          </div>
        </fieldset>
        {state.status === "error" && <p className={styles.errorText}>{state.message}</p>}
        <button type="submit">送信する</button>
      </form>
    </section>
  );
};

export default ContactForm;
