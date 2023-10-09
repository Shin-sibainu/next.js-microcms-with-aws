//https://zenn.dev/tsuyoshi/articles/8d4a3e748eab0b
// https://dev.classmethod.jp/articles/nextjs-static-cache/
// https://serip39.hatenablog.com/entry/2022/02/01/070000
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center mt-40">
      <div className="text-center">
        <h3 className="font-medium text-5xl">
          Hello There. This is note App👋
        </h3>
        <div className="flex justify-center gap-4 mt-10">
          <Link
            href="/notes"
            className="bg-purple-500 font-medium px-6 py-4 rounded-lg text-white text-base hover:bg-purple-700 duration-200"
          >
            Get Started
          </Link>
          <Link
            className="bg-blue-500 font-medium px-6 py-4 rounded-lg text-white text-base hover:bg-blue-700 duration-200"
            href="/notes"
          >
            Note List
          </Link>
        </div>
      </div>
    </main>
  );
}
