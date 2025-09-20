"use client";
import Image from "next/image";
import styles from "./HomeClient.module.scss";
import { useRef } from "react";
import { useTitleAnimations } from "@/hooks/useAnimation";
import BackGroundAnimation from "../../animation/BackGroundAnimation";
import Contact from "../contact/Contact";
import { ButtonMore } from "../../elements/button/Buton";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Works } from "@/app/_libs/microcms";
import WorksTopList from "../../article/WorksTopList";

type Props = {
  worksData: MicroCMSListResponse<Works>;
};

export default function HomeClient({ worksData }: Props) {
  const mvTitleRef = useRef<HTMLHeadingElement>(null);
  const mvTextRef = useRef<HTMLParagraphElement>(null);
  const sectionTitleRefs = useRef<HTMLHeadingElement[]>([]);

  useTitleAnimations({
    mvTitleRef,
    mvTextRef,
    sectionTitleRefs: sectionTitleRefs.current,
  });

  return (
    <>
      <main className={styles.top}>
        <section className={styles.mv}>
          <div>
            <div className={styles.mv_content}>
              <div className={styles.mv_content_title}>
                <h1 ref={mvTitleRef}>PORTFOLIO</h1>
                <p ref={mvTextRef}>mayu sugita</p>
              </div>
              <div className={styles.mv_content_illust}>
                <Image
                  className={styles.mv_illust_flower1}
                  src="/top/mv-flowe1.svg"
                  alt="image"
                  width={297}
                  height={297}
                />
                <Image
                  className={styles.mv_illust_flower2}
                  src="/top/mv-flower2.svg"
                  alt="image"
                  width={283}
                  height={251}
                />
                <Image
                  className={styles.mv_illust_flower3}
                  src="/top/mv-flower3.svg"
                  alt="image"
                  width={320}
                  height={322}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.about} ${styles.second}`}
          data-section
          data-color="#d5dec3"
          id="second"
        >
          <div className={styles.about_content}>
            <div className={styles.about_content_desc}>
              <h2
                ref={(el) => {
                  if (el) sectionTitleRefs.current[0] = el;
                }}
                className={styles.top_sectionTitle}
              >
                ABOUT
              </h2>
              <p>
                クライアントとのヒアリングからサイト要件を設定し、構成（ワイヤーフレーム）を作成、制作チームへの指示と連携を行い、ウェブサイトの公開（納品）までの進行管理を担います。公開後もクライアントのアフターサポートを務め、SEOの観点からのアドバイスや、企画提案を行います。
              </p>
              <ButtonMore link={"/about"} />
            </div>
          </div>
        </section>

        <section className={styles.works} data-section>
          <div className={styles.works_content}>
            <div className={styles.works_ttl_area}>
              <h2
                ref={(el) => {
                  if (el) sectionTitleRefs.current[1] = el;
                }}
                className={styles.top_sectionTitle}
              >
                WORKS
              </h2>
              <ButtonMore link={"/works"} className="pc" />
            </div>
            <WorksTopList data={worksData} />
            <ButtonMore link={"/works"} className="sp" />
          </div>
          <Image
            src="/top/work-star1.svg"
            className={styles.works_img_star1}
            alt="image"
            width="140"
            height="183"
          />
          <Image
            src="/top/work-star2.svg"
            className={styles.works_img_star2}
            alt="image"
            width="140"
            height="183"
          />{" "}
        </section>
        <Contact />
      </main>
      <BackGroundAnimation />
    </>
  );
}
