import HERO_CONTENT from "@/contents/heroContent";
import {
  IconArrowNarrowRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const BrandIcon = [
  {
    name: "github",
    icon: IconBrandGithub,
    href: "https://github.com/fajritaridala",
  },
  {
    name: "linkedin",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/muh-fadjriano-aprilindo-t/",
  },
  {
    name: "instagram",
    icon: IconBrandInstagram,
    href: "https://www.instagram.com/fajritaridala",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full px-6 pt-20 lg:px-18">
      <div className="border-base mt-4 flex h-full w-full flex-col rounded-3xl px-6 py-12 lg:mt-10 lg:flex-row lg:py-18">
        {/* left-content-start */}
        <div className="flex w-full flex-col items-center-safe justify-center-safe lg:w-1/2">
          <div className="profile-picture size-32 lg:size-46">
            <img
              src="/src/assets/my-profile-picture.png"
              alt="profile-picture"
              className="profile-stroke object-cover"
            />
          </div>
          <div className="mt-6 text-center lg:mt-10">
            <h1 className="text-txt-light text-2xl font-bold tracking-tight capitalize lg:mb-3 lg:text-4xl">
              {HERO_CONTENT.name}
            </h1>
            <p className="text-txt-secondary text-lg font-medium tracking-wide capitalize lg:text-xl">
              {HERO_CONTENT.job}
            </p>
          </div>
        </div>
        {/* left-content-end */}

        {/* right-content-start */}
        <div className="space-y-6 text-center lg:w-1/2">
          <div className="my-8 flex w-full justify-center-safe gap-4 lg:mt-0">
            <span className="monochrome-line-gradient-to-l"></span>
            {BrandIcon.map((brand) => (
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                key={brand.name}
              >
                <brand.icon className="hover:text-txt-light text-txt-secondary size-10 rounded-lg p-1" />
              </a>
            ))}
            <span className="monochrome-line-gradient-to-r"></span>
          </div>
          <h2 className="text-txt-light text-3xl leading-tight font-bold tracking-tight capitalize lg:text-5xl">
            {HERO_CONTENT.hero_headline}
          </h2>
          <p className="text-txt-secondary leading-relaxed font-medium first-letter:capitalize lg:text-xl">
            {HERO_CONTENT.sub_headline}
          </p>
          <button className="mt-10 flex w-full justify-center-safe">
            <a
              href="#"
              className="btn-primary flex items-center-safe gap-3 rounded-full px-8 py-4 text-lg font-medium"
            >
              <p>{HERO_CONTENT.cta_text}</p>
              <IconArrowNarrowRight className="size-7" />
            </a>
          </button>
        </div>
        {/* right-content-end */}
      </div>
    </section>
  );
}
