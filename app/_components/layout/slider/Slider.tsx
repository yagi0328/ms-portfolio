import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectFade, Scrollbar } from "swiper/modules";
import styles from "./slider.module.scss";
import Image from "next/image";
import { useReadMore } from "@/hooks/useAnimation";

const Slider: FC = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const btnRefs = useRef<HTMLElement[]>([]);
  const swiperRef = useRef<SwiperClass>(null);

  useReadMore(btnRefs.current);

  return (
    <div className={styles.carousel_container}>
      <button
        className={styles.carousel_allow_prev}
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isFirst}
      >
        <Image src="/about/about-prev-btn.svg" alt="image" width={48} height={48} />
      </button>
      <button
        className={styles.carousel_allow_next}
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isLast}
      >
        <Image src="/about/about-next-btn.svg" alt="image" width={48} height={48} />
      </button>
      <Swiper
        modules={[EffectFade, Scrollbar]}
        fadeEffect={{
          crossFade: true,
        }}
        effect="fade"
        speed={600}
        scrollbar={{ draggable: false }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setIsFirst(swiper.isBeginning);
          setIsLast(swiper.isEnd);
        }}
      >
        <SwiperSlide>
          <div className={`${styles.carousel_slide}`}>
            <div className={styles.ttl_block}>
              {/* <!-- <span></span> --> */}
              <p>誠実さ・責任感</p>
              <small>Honesty</small>
            </div>
            <div className={styles.desc_block}>
              <div className={styles.pagenation}>
                <span></span>
                <p>01/03</p>
              </div>
              <div className={styles.desc_block_text} id="desc-1">
                <p>
                  私は仕事において常に誠実さと責任感を大切にしています。プロジェクトには必ず納期や予算といった制約が存在しますが、その中でも最善の結果を出すことを念頭に置き、関係者全員が安心して進められるよう努めてきました。クライアントから追加要望をいただいた際には、安易に「できる」と引き受けるのではなく、リソースやスケジュールを丁寧に精査し、現実的に実行可能かを判断します。難しい場合には代替案や追加予算の検討を誠実に提案し、相手に納得感を持ってもらえるよう心がけています。結果として「任せて安心できる人材」として信頼を得ることができました。こうした誠実さと責任感は、チーム全体に安定感をもたらし、結果として品質維持や円滑な納品にもつながっていると考えています。
                </p>
              </div>
              <button
                ref={(el) => {
                  if (el) btnRefs.current[0] = el;
                }}
                className={`${styles["read-more-btn"]} sp`}
                type="button"
                aria-controls="desc-1"
                aria-expanded="false"
              >
                全文読む
              </button>
            </div>
            <div className={styles.indicator}>
              <span className={styles.view}></span>
              <span className={styles["non-view"]}></span>
              <span className={styles["non-view"]}></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.carousel_slide}`}>
            <div className={styles.ttl_block}>
              {/* <!-- <span></span> --> */}
              <p>柔軟さ・調整力</p>
              <small>Flexibility</small>
            </div>
            <div className={styles.desc_block}>
              <div className={styles.pagenation}>
                <span></span>
                <p>02/03</p>
              </div>
              <div className={styles.desc_block_text} id="desc-2">
                <p>
                  私は状況に応じて柔軟に考え、最適な着地点を見つける調整力を強みとしています。案件では、クライアントからの要望と制作チームのリソースが必ずしも一致しない場面があります。その際に一方の立場だけを優先するのではなく、双方の意見や制約条件を整理し、互いに納得できる方法を模索する姿勢を大切にしてきました。例えば追加要望に対しても、予算や納期を意識しながら「できること・難しいこと」を明確にし、合意形成を図ることでプロジェクトを円滑に進めてきました。また、認識齟齬を防ぐために早めに打ち合わせを設けるなど、小さな調整を積み重ねることでトラブルを未然に防いできました。柔軟さと調整力は、プロジェクトを安定して前進させるための大きな武器だと自負しています。
                </p>
              </div>
              <button
                ref={(el) => {
                  if (el) btnRefs.current[1] = el;
                }}
                className={`${styles["read-more-btn"]} sp`}
                type="button"
                aria-controls="desc-1"
                aria-expanded="false"
              >
                全文読む
              </button>

              <div className={styles.indicator}>
                <span className={styles["non-view"]}></span>
                <span className={styles.view}></span>
                <span className={styles["non-view"]}></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.carousel_slide}`}>
            <div className={styles.ttl_block}>
              {/* <!-- <span></span> --> */}
              <p>思いやり・配慮</p>
              <small>Consideration</small>
            </div>
            <div className={styles.desc_block}>
              <div className={styles.pagenation}>
                <span></span>
                <p>03/03</p>
              </div>
              <div className={styles.desc_block_text} id="desc-3">
                <p>
                  私は常に相手の立場を理解し、思いやりを持って行動することを心がけています。Web制作に携わる中で、クライアントの多くは専門知識を十分に持っていない場合がありました。その際には、専門用語を並べるのではなく、図解やビジュアルを活用して分かりやすく説明するなど、相手の理解度に合わせた工夫を行ってきました。また、疑問点が生じた際には迅速にオンライン会議を設け、丁寧に認識をすり合わせることで不安を解消しました。こうした配慮の積み重ねが「安心して任せられる」という信頼につながり、結果的に長期的な関係構築にも貢献できたと考えています。私は、人との関係において相手に寄り添う姿勢を大切にしており、その思いやりが成果物の質やプロジェクトの成功にも直結していると感じています。
                </p>
              </div>
              <button
                ref={(el) => {
                  if (el) btnRefs.current[2] = el;
                }}
                className={`${styles["read-more-btn"]} sp`}
                type="button"
                aria-controls="desc-1"
                aria-expanded="false"
              >
                全文読む
              </button>

              <div className={styles.indicator}>
                <span className={styles["non-view"]}></span>
                <span className={styles["non-view"]}></span>
                <span className={styles.view}></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
