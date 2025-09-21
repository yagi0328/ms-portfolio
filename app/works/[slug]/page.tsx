import Image from "next/image";
import React, { FC } from "react";
import styles from "./page.module.scss";
import { getPrevNextWorks, getWorksDetail } from "@/app/_libs/microcms";
import { formatDate } from "@/app/_libs/utils";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 0;

const Page: FC<Props> = async ({ params }) => {
  const { slug } = await params;
  const data = await getWorksDetail(slug);

  const { prev, next } = await getPrevNextWorks(slug);

  return (
    <div className={styles.works_wrap}>
      <section className={`${styles.detail} ${styles.content_wrap}`}>
        <div className={styles.detail_content}>
          <div className={styles.first_area}>
            <div>
              {data.date && <p className={styles.date}>{data.date}</p>}
              <p className={styles.category}>{data.categories.category}</p>
            </div>
            <h2 className={styles.title}>{data.title}</h2>
          </div>
          <div className={styles.second_area}>
            <dl className={styles.desc}>
              {data.range && (
                <div className={styles.item}>
                  <dt>range</dt>
                  <dd>{data.range}</dd>
                </div>
              )}
              {data.tool && (
                <div className={styles.item}>
                  <dt>tools</dt>
                  <dd>{data.tool}</dd>
                </div>
              )}
              {data.period && (
                <div className={styles.item}>
                  <dt>period</dt>
                  <dd>{data.period}</dd>
                </div>
              )}
            </dl>
            {data.thumbnail ? (
              <Image
                className={styles.thumbnail}
                alt="WORKSのサムネイル"
                src={data.thumbnail.url}
                width={data.thumbnail.width}
                height={data.thumbnail.height}
              />
            ) : (
              <Image
                className={styles.thumbnail}
                alt="WORKSのサムネイル"
                src="/works/detail-img.jpg"
                width={1140}
                height={611}
              />
            )}
          </div>
          <div className={styles.third_area}>
            {data.overview && (
              <dl className={styles.overview}>
                <dt>overview</dt>
                <dd>{data.overview}</dd>
              </dl>
            )}
            {data.client && (
              <dl className={styles.client}>
                <dt>client</dt>
                <dd>{data.client}</dd>
              </dl>
            )}
          </div>
          <button className={styles.btn_more}>
            {data.link && (
              <Link href={data.link} target="_blank">
                website
              </Link>
            )}
          </button>
        </div>
      </section>
      <section className={`${styles.gallery} ${styles.content_wrap}`}>
        {data.images.length > 0 && (
          <div className={styles.gallery_content}>
            {data.images.map((image, index) => (
              <div key={index}>
                <Image
                  className={styles.spde}
                  src={image.spImage.url || "/works/spde-dummy.jpg"}
                  alt="img"
                  width={image.spImage.width || 289}
                  height={image.spImage.height || 489}
                />
                <Image
                  className={styles.pcde}
                  src={image.pcImage?.url || "/works/pcde-dummy.jpg"}
                  alt="img"
                  width={image.pcImage.width || 836}
                  height={image.pcImage.height || 448}
                />
              </div>
            ))}
          </div>
        )}
      </section>
      <section className={`${styles.pager} ${styles.content_wrap}`}>
        {prev ? (
          <Link href={`/works/${prev.id}`} className={styles.perv_btn}>
            <p>prev</p>
            <Image src="/works/works-prev-btn.svg" alt="img" width={48} height={48} />
          </Link>
        ) : (
          <span></span>
        )}

        {next ? (
          <Link href={`/works/${next.id}`} className={styles.next_btn}>
            <p>next</p>
            <Image src="/works/works-next-btn.svg" alt="img" width={48} height={48} />
          </Link>
        ) : (
          <span></span>
        )}
      </section>
    </div>
  );
};

export default Page;
