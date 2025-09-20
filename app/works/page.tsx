import React, { FC } from "react";
import styles from "./page.module.scss";
import WorksList from "../_components/article/WorksList";
import { getAllWorks, getWorksCategory } from "../_libs/microcms";

const Page: FC = async () => {
  const categoryData = await getWorksCategory();
  const worksData = await getAllWorks(); // 全件取得

  return (
    <div className={styles.works_wrap}>
      <WorksList worksData={worksData} categoryData={categoryData} />
    </div>
  );
};

export default Page;
