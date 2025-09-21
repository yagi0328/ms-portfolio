import Image from "next/image";
import React, { FC } from "react";
import styles from "./worksTopList.module.scss";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Works } from "@/app/_libs/microcms";
import Link from "next/link";

type Props = {
  data: MicroCMSListResponse<Works>;
};

const WorksTopList: FC<Props> = ({ data }) => {
  return (
    <div className={styles.works_article_clm}>
      {data.contents.map((article) => (
        <article key={article.id} className={styles.article}>
          <Link href={`works/${article.id}`}>
            <div className={styles.article_img_area}>
              {article.thumbnail ? (
                <Image
                  className={styles.article_img}
                  alt="WORKSのサムネイル"
                  src={article.thumbnail.url}
                  width={article.thumbnail.width}
                  height={article.thumbnail.height}
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
                <Image src="/top/works-btn-arrow-blk.svg" alt="image" width={17} height={14} />
              </div>
            </div>
          </Link>
          <div className={styles.article_desc}>
            <div className={styles.article_desc_tag}>
              <p>{article.categories.category}</p>
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
  );
};

export default WorksTopList;
