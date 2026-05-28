import { useState } from "react";
import { NAVBAR_CONTENT } from "../../../data/contents";
import { ArrowUpRightIcon } from "../../ui/arrow-up-right";
import { MenuIcon } from "../../ui/menu";

export default function MobileMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <div className="flex w-full items-center-safe justify-between lg:hidden">
      <h1 className="text-txt-primary text-lg font-semibold capitalize">
        {NAVBAR_CONTENT.heading}
      </h1>
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="text-txt-primary active:bg-bg-light rounded-lg p-1 transition-colors duration-75 ease-in-out"
      >
        <MenuIcon size={24} />
      </button>

      {/* sidebar-start */}
      <div
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={`bg-bg-primary/80 fixed -top-4 -left-6 z-10 flex h-dvh w-screen justify-end-safe backdrop-blur-xl transition-opacity duration-400 ease-in-out ${isOpenMenu ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        {/* sidebar-menu-start */}
        <div
          className={`border-bdr-primary bg-bg-dark flex h-dvh w-4/5 flex-col justify-between border-l p-8 transition-transform duration-300 ease-in-out ${isOpenMenu ? "translate-0" : "translate-x-full"}`}
        >
          <div>
            <h2 className="text-txt-accent mb-8 px-2 text-lg font-semibold uppercase">
              {NAVBAR_CONTENT.label}
            </h2>
            <ul>
              {NAVBAR_CONTENT.links.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="active:bg-bg-primary mb-1 flex gap-6 rounded-xl p-4 text-lg capitalize"
                  >
                    <p>{item.id}</p>
                    <p>{item.label}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button className="border-bdr-primary border-t pt-6">
            <a
              href={NAVBAR_CONTENT.button.cv.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex justify-center-safe rounded-full p-4 text-lg font-medium capitalize"
            >
              <p>{NAVBAR_CONTENT.button.cv.label}</p>
              <div className="flex items-center-safe justify-center-safe">
                <ArrowUpRightIcon size={24} />
              </div>
            </a>
          </button>
        </div>
        {/* sidebar-menu-end */}
      </div>
      {/* sidebar-end */}
    </div>
  );
}
