"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChatButton() {
  const pathname = usePathname();
  if (pathname === "/chat") return null;

  return (
    <Link
      href="/chat"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-red text-paper pl-4 pr-5 py-3 shadow-lg shadow-red/25 hover:bg-red-deep transition-colors"
    >
      <span className="text-lg leading-none">💬</span>
      <span className="text-sm font-medium">Ask the guide</span>
    </Link>
  );
}
