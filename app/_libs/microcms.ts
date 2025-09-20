import {
  createClient,
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSListResponse,
  MicroCMSQueries,
} from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export type Category = {
  category: string;
} & MicroCMSListContent;

export type Works = {
  title: string;
  categories: Category;
  thumbnail: MicroCMSImage;
  range: string;
  tool: string;
  period: string;
  overview: string;
  client: string;
  link: string;
  images: [
    {
      fieldId: string;
      pcImage: MicroCMSImage;
      spImage: MicroCMSImage;
    }
  ];
};

export const getAllWorks = async (): Promise<MicroCMSListResponse<Works>> => {
  const contents = await client.getAllContents<Works>({
    endpoint: "works",
  });

  return {
    contents,
    totalCount: contents.length,
    limit: contents.length,
    offset: 0,
  };
};

export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Works>({
    endpoint: "works",
    queries,
  });
  return listData;
};

export const getWorksDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Works>({
    endpoint: "works",
    contentId,
    queries,
  });
  return detailData;
};

export const getWorksCategory = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Category>({
    endpoint: "works_categories",
    queries,
  });
  return listData;
};

export const getPrevNextWorks = async (slug: string) => {
  const allWorks = await getAllWorks();

  // 作成日で並べ替え（昇順なら a - b、降順なら b - a）
  const sorted = allWorks.contents.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const index = sorted.findIndex((work) => work.id === slug);

  return {
    prev: index > 0 ? sorted[index - 1] : null,
    next: index < sorted.length - 1 ? sorted[index + 1] : null,
  };
};