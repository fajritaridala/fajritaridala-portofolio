import { DesktopMenu, MobileMenu } from "./Menu";

export default function Navbar() {
  return (
    <header className="fixed z-10 w-full px-6 lg:px-18">
      <nav className=" bg-bg-primary/80 mt-4 flex h-16 w-full items-center-safe rounded-full border-base px-6 backdrop-blur-xl lg:h-18 lg:px-10">
        <MobileMenu />
        <DesktopMenu />
      </nav>
    </header>
  );
}
