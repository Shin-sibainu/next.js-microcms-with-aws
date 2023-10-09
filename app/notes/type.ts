import { z } from "zod";

export const zNote = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const zNotes = z.array(zNote);

export type Note = z.infer<typeof zNote>; //zodで定義したshemaから型定義を得る
export type Notes = z.infer<typeof zNotes>; //zodで定義したshemaから型定義を得る

// id: '8wiwcon-wl0',
// createdAt: '2023-10-08T10:45:58.045Z',
// updatedAt: '2023-10-08T10:45:58.045Z',
// publishedAt: '2023-10-08T10:45:58.045Z',
// revisedAt: '2023-10-08T10:45:58.045Z',
// title: '2つ目のメモ',
// content: '<p>週休3日にすると生産性が上がるらしい。</p>'
