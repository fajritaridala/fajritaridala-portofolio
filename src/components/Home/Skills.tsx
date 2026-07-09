import HOME_CONTENT from "@/contents/homeContent";

export default function Skills() {
  const content = HOME_CONTENT.skills;

  return (
    <section id="skills" className="z-10 h-screen space-y-8 pt-28">
      <div className="space-y-4">
        <div className="flex gap-4">
          <h1 className="text-txt-primary font-medium tracking-tight uppercase">
            {content.title}
          </h1>
          <span className="monochrome-line-gradient-to-r" />
        </div>
        <h2 className="text-txt-light text-3xl leading-tight font-bold tracking-tight capitalize lg:text-4xl">
          {content.headline}
        </h2>
        <p className="text-txt-secondary text-justify text-lg leading-relaxed">
          {content.sub_headline}
        </p>
      </div>

      {/* skills-start */}
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8">
        {content.skill.map((item) => (
          <div className="card-glass flex flex-col items-center-safe gap-2 rounded-xl p-6 lg:py-12">
            <div className="card-glass size-16 rounded-lg p-3">
              <img src={item.href} alt={item.alt} />
            </div>
            <p className="text-txt-primary font-medium">{item.name}</p>
          </div>
        ))}
      </div>
      {/* skills-end */}
    </section>
  );
}
