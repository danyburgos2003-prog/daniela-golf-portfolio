import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="site-logo">
        DB
      </Link>

      <nav className="site-nav">
        <Link href="/journey">Journey</Link>
        <Link href="/partnerships">Partners</Link>
      </nav>
    </header>
  );
}