import Link from "next/link";
export default function Home() {
  return (
    <div>
      {"signin page"}
      <br />
      <Link href="/">home</Link>
      <br />
      <Link href="/secondary">{"secondary"}</Link>
    </div>
  );
}
