import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand" aria-label="Padlok home">
          <Image src="/icons/icon-48.png" alt="" width={34} height={34} priority />
          <span>Padlok</span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-cta">
            <a href="#download" className="btn btn-primary">
              Download
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
