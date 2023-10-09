"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Note } from "../type";
import parse from "html-react-parser";

type Props = {
  note: Note;
};

const Note: React.FC<Props> = ({ note }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg relative p-5 gap-2.5">
      <h3 className="text-pink-500 text-lg md:text-xl font-semibold break-all">
        {note.title}
      </h3>
      {parse(note.content)}
    </div>
  );
};

export default Note;
