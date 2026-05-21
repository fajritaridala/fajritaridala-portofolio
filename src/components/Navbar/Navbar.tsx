import { DesktopMenu, MobileMenu } from "./Menus";

export default function Navbar() {
  return (
    <header className="fixed w-full px-6 lg:px-18">
      <nav className="border-dark-gray mt-4 flex h-16 w-full items-center-safe rounded-full border bg-transparent px-6 backdrop-blur-lg lg:h-18 lg:px-10">
        <MobileMenu />
        <DesktopMenu />
      </nav>
    </header>
  );
}
