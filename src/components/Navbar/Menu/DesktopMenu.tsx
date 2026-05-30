import { NAVBAR_CONTENT } from "../../../contents";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function DesktopMenu() {
  return (
    <div className="hidden h-full w-full items-center-safe justify-between lg:flex">
      <ul className="flex gap-10">
        {NAVBAR_CONTENT.links.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="text-txt-secondary hover:text-txt-primary capitalize transition-colors duration-300 ease-in-out"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button className="h-full">
        <a
          href={NAVBAR_CONTENT.button.cv.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center-safe justify-center-safe gap-1 rounded-full px-6 py-3"
        >
          <p className="font-medium capitalize">
            {NAVBAR_CONTENT.button.cv.label}
          </p>
          <IconArrowUpRight size={18} />
        </a>
      </button>
    </div>
  );
}
