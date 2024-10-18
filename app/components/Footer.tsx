import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
