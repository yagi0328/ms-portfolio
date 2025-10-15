"use client";

import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import styles from "./page.module.scss";
import Contact from "../_components/layout/contact/Contact";
import clsx from "clsx";
import { useHorizontalScroll, useParallaxImage, useTitleAnimations } from "@/hooks/useAnimation";
import Slider from "../_components/layout/slider/Slider";

const Page: FC = () => {
  const sectionTitleRefs = useRef<HTMLHeadingElement[]>([]);
  const careerSectionRef = useRef<HTMLDivElement>(null);
  const careerWrapRef = useRef<HTMLDivElement>(null);
  const careerContentRef = useRef<HTMLDivElement>(null);
  const careerItemRefs = useRef<HTMLDivElement[]>([]);
  const parallaxImageRefs = useRef<HTMLElement[]>([]);

  useTitleAnimations({ sectionTitleRefs: sectionTitleRefs.current });
  useHorizontalScroll({
    carrerSectionRef: careerSectionRef,
    careerWrapRef: careerWrapRef,
    contentRef: careerContentRef,
  });
  useParallaxImage(parallaxImageRefs.current);

  return (
    <main className={styles.about}>
      <section className={styles.mv}>
        <div className={styles.mv_content}>
          <Image src="/about/about-flower.svg" alt="image" width={122} height={123} />
          <h1>ABOUT</h1>
        </div>
      </section>
      <div className={styles.about_wrap}>
        <section className={`${styles.profile} ${styles.content_wrap}`}>
          <div className={styles.sec_ttl}>
            <p>( 1 )</p>
            <h2
              ref={(el) => {
                if (el) sectionTitleRefs.current[0] = el;
              }}
              className={styles.about_sectionTitle}
            >
              profile
            </h2>
          </div>
          <div className={styles.about_img_01}>
            <Image
              ref={(el) => {
                if (el) parallaxImageRefs.current[0] = el;
              }}
              src="/about/about-img1.jpg"
              alt="image"
              width={1568}
              height={1046}
            />
          </div>

          <div className={styles.profile_content}>
            <div className={styles.profile_content_desc}>
              <dl>
                <div className={styles.desc_item}>
                  <dt>
                    <span>・</span>
                    <p>name</p>
                  </dt>
                  <dd>
                    <p>杉田　茉優</p>
                  </dd>
                </div>
                <div className={styles.desc_item}>
                  <dt>
                    <span>・</span>
                    <p>date of birth</p>
                  </dt>
                  <dd>
                    <p>1995.11.11</p>
                  </dd>
                </div>
                <div className={styles.desc_item}>
                  <dt>
                    <span>・</span>
                    <p>like</p>
                  </dt>
                  <dd>
                    <p>映画・自然・動物</p>
                  </dd>
                </div>
                <div className={styles.desc_item}>
                  <dt>
                    <span>・</span>
                    <p>not like</p>
                  </dt>
                  <dd>
                    <p>プリン・ホラー・寒さ</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <section ref={careerSectionRef} className={`${styles.career} ${styles.content_wrap}`}>
          <div ref={careerWrapRef} className={styles.pinWrap}>
            <div className={styles.sec_ttl}>
              <p>( 2 )</p>
              <h2
                ref={(el) => {
                  if (el) sectionTitleRefs.current[1] = el;
                }}
                className={styles.about_sectionTitle}
              >
                career
              </h2>
            </div>
            <div className={styles.container}>
              <div
                ref={careerContentRef}
                className={styles.career_content}
                data-scroll-container="career" // 追加
              >
                <div
                  ref={(el) => {
                    if (el) careerItemRefs.current[0] = el;
                  }}
                  className={styles.career_content_item}
                >
                  <div className={styles.year}>
                    <p>2014.03</p>
                    <span className={styles.line}></span>
                    <span className={styles.circle}></span>
                  </div>
                  <div className={styles.text}>
                    <p>大阪府立生野高等学校卒業</p>
                    <p className={styles.small}>文理学科</p>
                  </div>
                </div>
                <div
                  ref={(el) => {
                    if (el) careerItemRefs.current[1] = el;
                  }}
                  className={styles.career_content_item}
                >
                  <div className={styles.year}>
                    <p>2019.03</p>
                    <span className={styles.line}></span>
                    <span className={styles.circle}></span>
                  </div>
                  <div className={styles.text}>
                    <p>岡山大学農学部卒業</p>
                    <p className={styles.small}>応用植物科学コース</p>
                    <p className={styles.small}>農産物生理学研究室</p>
                  </div>
                </div>
                <div
                  ref={(el) => {
                    if (el) careerItemRefs.current[2] = el;
                  }}
                  className={styles.career_content_item}
                >
                  <div className={styles.year}>
                    <p>2019.04</p>
                    <span className={styles.line}></span>
                    <span className={styles.circle}></span>
                  </div>
                  <div className={styles.text}>
                    <p>大阪府庁入庁</p>
                    <p className={styles.small}>農学職員(技術職)として入庁</p>
                    <p className={styles.small}>普及指導員資格 取得(2023)</p>
                  </div>
                </div>
                <div
                  ref={(el) => {
                    if (el) careerItemRefs.current[3] = el;
                  }}
                  className={styles.career_content_item}
                >
                  <div className={styles.year}>
                    <p>2023.11</p>
                    <span className={styles.line}></span>
                    <span className={styles.circle}></span>
                  </div>
                  <div className={styles.text}>
                    <p>職業訓練のアップなんば校修了</p>
                    <p className={styles.small}>webデザイン＋プログラミング基礎科</p>
                  </div>
                </div>
                <div
                  ref={(el) => {
                    if (el) careerItemRefs.current[4] = el;
                  }}
                  className={styles.career_content_item}
                >
                  <div className={styles.year}>
                    <p>2024.01</p>
                    <span className={styles.line}></span>
                    <span className={styles.circle}></span>
                  </div>
                  <div className={styles.text}>
                    <p>株式会社figlio就職</p>
                    <p className={styles.small}>webディレクター(主任)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.about_img_02}>
            <Image
              ref={(el) => {
                if (el) parallaxImageRefs.current[1] = el;
              }}
              src="/about/about-img2.jpg"
              alt="image"
              width={1568}
              height={1046}
            />
          </div>
        </section>

        <section className={styles.skills}>
          <div className={styles.content_wrap}>
            <div className={styles.sec_ttl}>
              <p>( 3 )</p>
              <h2
                ref={(el) => {
                  if (el) sectionTitleRefs.current[2] = el;
                }}
                className={styles.about_sectionTitle}
              >
                skills
              </h2>
            </div>
            <div className={styles.skills_content}>
              <div className={styles.skills_content_block}>
                <div className={styles.block_ttl}>
                  <span></span>
                  <p>Web Direction</p>
                </div>
                <p className={styles.block_desc}>
                  受注からウェブサイト公開（納品）までの進行管理及び品質管理を行うことができます。クライアントへのヒアリング、ウェブサイトの要件定義・仕様書の作成、サイトマップ・ワイヤーフレームの作成、デザイナーやエンジニアへの指示・連携、デザイン設計及びシステム設計（WordPress）、公開後のアフターサポート、SEO指導、GA4分析、追加コンテンツの提案など。
                </p>
              </div>
              <div className={styles.skills_content_block}>
                <div className={styles.block_ttl}>
                  <span></span>
                  <p>Web Design</p>
                </div>
                <p className={styles.block_desc}>
                  バナーデザイン、ウェブサイトやLPのデザイン、HTML/CSS/Javascriptを使用したコーディングを行うことができます。クライアントの要望を汲み取り、目的達成または課題解決するために適切なUI/UXを設計します。ノーコードツール（STUDIOなど）を使用したサイト構築も可能です。またAIの活用によりアニメーション表現を向上させます。
                </p>
              </div>
              <div className={styles.skills_content_block}>
                <div className={styles.block_ttl}>
                  <span></span>
                  <p>Web Planning</p>
                </div>
                <p className={styles.block_desc}>
                  クライアントからの相談やプロポーザル案件などに対するウェブコンテンツの企画・提案を行うことができます。市場調査や競合分析を行い、ウェブサイトの目指すべき位置づけ・課題を明確にして適切な解決策を考案し、クライアントの理解を促す提案書を作成します。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.tools}>
          <div className={styles.content_wrap}>
            <div className={styles.sec_ttl}>
              <p>( 4 )</p>
              <h2
                ref={(el) => {
                  if (el) sectionTitleRefs.current[3] = el;
                }}
                className={styles.about_sectionTitle}
              >
                tools
              </h2>
            </div>
            <div className={styles.tools_content}>
              <div className={styles.tools_content_block}>
                <div className={styles.block_item}>
                  <div className={styles.tool_ttl}>
                    <div className={styles.tool_name}>
                      <p>Figma</p>
                    </div>
                    <div className={styles.tool_name}>
                      <p>XD</p>
                    </div>
                    <span></span>
                  </div>
                  <div className={styles.tool_desc}>
                    企画提案資料、ワイヤーフレーム、デザインカンプ作成
                  </div>
                </div>
                <div className={styles.block_item}>
                  <div className={styles.tool_ttl}>
                    <div className={styles.tool_name}>
                      <p>illustrator</p>
                    </div>
                    <div className={styles.tool_name}>
                      <p>Photoshop</p>
                    </div>
                    <span></span>
                  </div>
                  <div className={styles.tool_desc}>画像加工、バナー作成、デザイン制作</div>
                </div>
                <div className={styles.block_item}>
                  <div className={styles.tool_ttl}>
                    <div className={styles.tool_name}>
                      <p>VSCode</p>
                    </div>
                    <div className={styles.tool_name}>
                      <p>Dreamweaver</p>
                    </div>
                    <span></span>
                  </div>
                  <div className={styles.tool_desc}>コーディング</div>
                </div>
              </div>
              <div className={styles.tools_content_block}>
                <div className={styles.block_item}>
                  <div className={styles.tool_ttl}>
                    <div className={styles.tool_name}>
                      <p>WordPress</p>
                    </div>
                    <span></span>
                  </div>
                  <div className={styles.tool_desc}>記事更新、設定操作</div>
                </div>
                <div className={styles.block_item}>
                  <div className={styles.tool_ttl}>
                    <div className={styles.tool_name}>
                      <p>GoogleAnalytics4</p>
                    </div>
                    <span></span>
                  </div>
                  <div className={styles.tool_desc}>ウェブサイトのトラッキング分析</div>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx(styles.about_img_03, "pc")}>
            <Image
              ref={(el) => {
                if (el) parallaxImageRefs.current[2] = el;
              }}
              src="/about/about-img3.jpg"
              alt="image"
              width={1568}
              height={1046}
            />
          </div>
        </section>

        <div className={clsx(styles.about_img_03, "sp")}>
          <Image src="/about/about-img3.jpg" alt="image" width={1568} height={1046} />
        </div>

        <section className={`${styles.strength} ${styles.content_wrap} splide`}>
          <div className={styles.sec_ttl}>
            <p>( 5 )</p>
            <h2
              ref={(el) => {
                if (el) sectionTitleRefs.current[4] = el;
              }}
              className={styles.about_sectionTitle}
            >
              strength
            </h2>
          </div>
          <div className={`${styles.strength_content}`}>
            <Slider />
          </div>
        </section>
      </div>

      <Contact data_name={"about"} />
    </main>
  );
};

export default Page;
