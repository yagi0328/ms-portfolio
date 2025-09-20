"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useRef, useState, useMemo } from "react";
import styles from "./worksList.module.scss";
import { useFadeIn } from "@/hooks/useAnimation";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Category, Works } from "@/app/_libs/microcms";

type Props = {
  worksData: MicroCMSListResponse<Works>;
  categoryData: MicroCMSListResponse<Category>;
};

export const revalidate = 0;

const WorksList: FC<Props> = ({ worksData, categoryData }) => {
  const fadeInRef = useRef<HTMLElement[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // フィルタリングのみ（Server Action不要）
  const filteredContents = useMemo(() => {
    if (selectedCategory === "ALL") {
      return worksData.contents;
    }
    return worksData.contents.filter((article) => article.categories?.id === selectedCategory);
  }, [worksData.contents, selectedCategory]);

  useFadeIn(fadeInRef.current);

  return (
    <>
      <section className={`${styles.category} ${styles.content_wrap}`}>
        <div className={styles.category_content}>
          <div className={styles.category_content_ttl}>
            <span></span>
            <p>category</p>
          </div>
          <div className={styles.category_item_wrap}>
            <button
              className={`${styles.category_item} ${
                selectedCategory === "ALL" ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory("ALL")}
            >
              ALL
            </button>
            {categoryData.contents.map((category) => (
              <button
                key={category.id}
                className={`${styles.category_item} ${
                  selectedCategory === category.id ? styles.active : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className={`${styles.list} ${styles.content_wrap}`}>
        <div className={styles.list_content}>
          {filteredContents.length > 0 ? (
            <div className={styles.works_article_clm3}>
              {filteredContents.map((article, index) => (
                <article
                  key={article.id}
                  ref={(el) => {
                    if (el) fadeInRef.current[index] = el;
                  }}
                >
                  <Link href={`/works/${article.id}`}>
                    <div className={styles.article_img_area}>
                      {article.thumbnail ? (
                        <Image
                          className={styles.article_img}
                          alt="WORKSのサムネイル"
                          src={article.thumbnail.url}
                          width={675}
                          height={321}
                        />
                      ) : (
                        <Image
                          className={styles.article_img}
                          alt="WORKSのサムネイル"
                          src="/works/detail-img.jpg"
                          width={675}
                          height={321}
                        />
                      )}
                      <div className={styles.arrow_blk}>
                        <Image
                          src="/top/works-btn-arrow-blk.svg"
                          alt="image"
                          width={17}
                          height={14}
                        />
                      </div>
                    </div>
                  </Link>
                  <div className={styles.article_desc}>
                    <div className={styles.article_desc_category}>
                      <p>{article.categories?.category}</p>
                    </div>
                    <p className={styles.article_desc_ttl}>{article.title}</p>
                    <dl className={styles.article_desc_list}>
                      {article.range && (
                        <div className={styles.item}>
                          <dt>range</dt>
                          <dd>{article.range}</dd>
                        </div>
                      )}
                      {article.tool && (
                        <div className={styles.item}>
                          <dt>tools</dt>
                          <dd>{article.tool}</dd>
                        </div>
                      )}
                      {article.period && (
                        <div className={styles.item}>
                          <dt>period</dt>
                          <dd>{article.period}</dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.no_results}>
              <p>記事がありません</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default WorksList;
