import { useState } from "react";
import { NAVBAR_CONTENT } from "../../../data/contents";
import { ArrowUpRightIcon } from "../../ui/arrow-up-right";
import { MenuIcon } from "../../ui/menu";

export default function MobileMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <div className="flex w-full items-center-safe justify-between lg:hidden">
      <h1 className="text-primary text-lg font-medium">
        {NAVBAR_CONTENT.heading}
      </h1>
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="text-primary active:bg-dark-gray rounded-lg p-1 transition-colors duration-75 ease-in-out"
      >
        <MenuIcon size={24} />
      </button>

      <div
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={`fixed top-0 left-0 h-dvh w-full bg-black/40 backdrop-blur-lg transition-opacity duration-400 ease-in-out ${isOpenMenu ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        {/* sidebar menu */}
        <div
          className={`border-dark-gray fixed top-0 right-0 flex h-dvh w-4/5 flex-col justify-between border-l bg-black p-8 transition-transform duration-300 ease-in-out ${isOpenMenu ? "translate-0" : "translate-x-full"}`}
        >
          <div>
            <h2 className="text-primary mb-6 text-lg font-semibold uppercase">
              {NAVBAR_CONTENT.label}
            </h2>
            <ul>
              {NAVBAR_CONTENT.links.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="active:bg-dark-gray mb-4 flex gap-6 rounded-xl p-4 text-lg capitalize"
                  >
                    <p>{item.id}</p>
                    <p>{item.label}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button className="border-dark-gray border-t pt-6">
            <a
              href={NAVBAR_CONTENT.button.cv.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/90 active:bg-primary shadow-button shadow-primary/50 active:shadow-primary flex justify-center-safe rounded-full p-4 text-lg font-medium text-black capitalize transition-colors duration-100 ease-in-out"
            >
              <p>{NAVBAR_CONTENT.button.cv.label}</p>
              <div className="flex items-center-safe justify-center-safe">
                <ArrowUpRightIcon size={24} />
              </div>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
