import { useRef } from "react";
import { NAVBAR_CONTENT } from "../../../data/contents";
import {
  ArrowUpRightIcon,
  type ArrowUpRightIconHandle,
} from "../../ui/arrow-up-right";

export default function DesktopMenu() {
  const iconRef = useRef<ArrowUpRightIconHandle>(null);

  return (
    <div className="hidden h-full w-full items-center-safe justify-between lg:flex">
      <ul className="flex gap-10">
        {NAVBAR_CONTENT.links.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="text-gray capitalize transition-colors duration-300 ease-in-out hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button className="h-full">
        <a
          onMouseEnter={() => iconRef.current?.startAnimation()}
          onMouseLeave={() => iconRef.current?.stopAnimation()}
          href={NAVBAR_CONTENT.button.cv.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary/90 hover:bg-primary shadow-button shadow-primary/50 hover:shadow-primary flex items-center-safe justify-center-safe gap-1 rounded-full px-6 py-3 text-black"
        >
          <p className="font-medium capitalize">
            {NAVBAR_CONTENT.button.cv.label}
          </p>
          <ArrowUpRightIcon size={18} ref={iconRef} />
        </a>
      </button>
    </div>
  );
}
