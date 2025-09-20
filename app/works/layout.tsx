import React, { FC, ReactNode } from "react";
import Contact from "../_components/layout/contact/Contact";
import WorksMv from "../_components/layout/worksMv/WorksMv";

type Props = {
  children: ReactNode;
};

const WorksLayout: FC<Props> = ({ children }) => {
  return (
    <main className="works">
      <WorksMv />
      {children}
      <Contact />
    </main>
  );
};

export default WorksLayout;
