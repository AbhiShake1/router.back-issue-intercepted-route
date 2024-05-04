"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      {"secondary page"}
      <button
        onClick={() => {
          router.push("/signin");
          // router.refresh();
        }}
      >
        {"to signin"}
      </button>
    </div>
  );
}
