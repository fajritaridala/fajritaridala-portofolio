import HOME_CONTENT from "@/contents/homeContent";
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
  const heroContent = HOME_CONTENT.hero;

  return (
    <section id="hero" className="relative w-full pt-20 lg:h-screen lg:pt-26">
      <div className="card-base mt-4 flex w-full flex-col rounded-3xl px-6 py-12 lg:mt-0 lg:flex-row">
        {/* left-content-start */}
        <div className="flex w-full flex-col items-center-safe justify-center-safe lg:w-1/2">
          <div className="profile-picture size-32 lg:size-46">
            <img
              src="/src/assets/profile-picture.png"
              alt="profile-picture"
              className="profile-stroke object-cover"
            />
          </div>
          <div className="mt-6 text-center lg:mt-10">
            <h1 className="text-txt-light text-xl font-bold tracking-tight capitalize lg:mb-2 lg:text-3xl">
              {heroContent.name}
            </h1>
            <p className="text-txt-secondary text-lg font-medium tracking-wide capitalize">
              {heroContent.job}
            </p>
          </div>
        </div>
        {/* left-content-end */}

        {/* right-content-start */}
        <div className="space-y-6 text-center lg:w-1/2">
          <div className="my-8 flex w-full justify-center-safe gap-4 lg:mt-0">
            <span className="monochrome-line-gradient-to-l" />
            {BrandIcon.map((brand) => (
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                key={brand.name}
              >
                <brand.icon className="hover:text-txt-light text-txt-secondary size-10 rounded-lg p-1 lg:size-8" />
              </a>
            ))}
            <span className="monochrome-line-gradient-to-r" />
          </div>
          <h2 className="text-txt-light text-3xl leading-tight font-bold tracking-tight capitalize lg:text-5xl">
            {heroContent.headline}
          </h2>
          <p className="text-txt-secondary leading-relaxed font-medium capitalize">
            {heroContent.sub_headline}
          </p>
          <button className="mt-10 flex w-full justify-center-safe">
            <a
              href="#"
              className="btn-primary flex items-center-safe gap-3 rounded-full px-8 py-4 text-lg font-medium"
            >
              <p>{heroContent.cta_text}</p>
              <IconArrowNarrowRight className="size-7" />
            </a>
          </button>
        </div>
        {/* right-content-end */}
      </div>
    </section>
  );
}
