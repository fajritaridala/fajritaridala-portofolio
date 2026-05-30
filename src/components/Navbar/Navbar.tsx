import { DesktopMenu, MobileMenu } from "./Menu";

export default function Navbar() {
  return (
    <header className="fixed z-40 w-full px-6 lg:px-18">
      <nav className="border-base mt-4 flex h-16 w-full items-center-safe rounded-full px-6 backdrop-blur-xs lg:h-18 lg:px-10">
        <MobileMenu />
        <DesktopMenu />
      </nav>
    </header>
  );
}
