import Link from "next/link";
import { Metadata } from "next/types";
import Note from "./Note";
import { getDetailNote, getNotes } from "@/lib/client";

// ページのメタデータを動的に取得
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const note = await getDetailNote(params.id);
  return { title: note.title };
}

export async function generateStaticParams() {
  const { contents } = await getNotes();

  // return [{ id: "0orgc21uh9q" }];
  // console.log(
  //   contents.map((note) => ({
  //     id: note.id,
  //   }))
  // );
  return contents.map((note) => ({
    id: note.id,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const note = await getDetailNote(params.id);
  return (
    <main className="mx-2 sm:mx-4">
      <Link
        href="/notes"
        className="inline-block focus-visible:ring ring-pink-300 text-gray-500 hover:text-pink-500 active:text-pink-600 text-s md:text-base font-semibold rounded-lg outline-none transition duration-100"
      >
        ← back
      </Link>
      <h2 className="my-4 text-gray-400 text-xs">View Note</h2>
      <Note note={note} />
    </main>
  );
}
