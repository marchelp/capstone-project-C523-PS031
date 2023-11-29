// Navbar.js
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Logo />

      <ul className="hidden h-full gap-12 lg:flex">
        <NavLinks />
      </ul>

      <div className="lg:flexCenter hidden">
        <LoginButton />
      </div>

      <MobileMenuButton />
    </nav>
  );
};

export default Navbar;

// Logo.js
const Logo = () => (
  <Link href="/">
    <Image src="/navbarlogo-02.png" alt="logo" width={120} height={29} />
  </Link>
);

// NavLinks.js
const NavLinks = () => (
  <>
    {NAV_LINKS.map(({ href, key, label }) => (
      <Link key={key} href={href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
        {label}
      </Link>
    ))}
  </>
);

// LoginButton.js
const LoginButton = () => (
  <Button
    type="button"
    title="Login"
    variant="btn_dark_green"
  />
);

// MobileMenuButton.js
const MobileMenuButton = () => (
  <Image 
    src="menu.svg"
    alt="menu"
    width={32}
    height={32}
    className="inline-block cursor-pointer lg:hidden"
  />
);
