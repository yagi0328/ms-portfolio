import { getWorksList } from "@/app/_libs/microcms";
import { TOP_WORKS_LIMIT } from "./_components/constants";
import HomeClient from "./_components/layout/homeClient/HomeClient";

export const revalidate = 0;

export default async function Home() {
  const worksData = await getWorksList({ limit: TOP_WORKS_LIMIT });
  return <HomeClient worksData={worksData} />;
}
