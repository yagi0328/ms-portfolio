import React, { FC } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";
import clsx from "clsx";

type Props = {
  className?: string;
  link: string;
};

export const ButtonMore: FC<Props> = ({ className, link }) => {
  return (
    <div className={clsx(styles.btn_more, className)}>
      <Link href={link} scroll={true}>
        more view
      </Link>
    </div>
  );
};
