import { Note, Notes, zNote, zNotes } from "@/app/notes/type";
import { createClient } from "microcms-js-sdk";
import { MicroCMSQueries } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

//ノート一覧を取得
export const getNotes = async () => {
  const noteLists = await client.getList<Notes>({
    endpoint: "notes",
  });

  return noteLists;
};

//ノートの詳細記事を取得
export const getDetailNote = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailNote = await client.getListDetail<Note>({
    endpoint: "notes",
    contentId,
    queries,
  });

  return detailNote;
};
