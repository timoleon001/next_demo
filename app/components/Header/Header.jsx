import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <span>Logo</span>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
    </>
  );
}
