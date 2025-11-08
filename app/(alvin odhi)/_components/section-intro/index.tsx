import { Intro } from "@/components/datas/intro";

type Props = {
  onRef: (el: HTMLElement | null) => void;
};

export default function SectionIntro({ onRef }: Props) {
  return (
    <section
      id="intro"
      ref={(el) => onRef(el)}
      className="min-h-screen flex items-center opacity-0"
    >
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
        {/* Left Section */}
        <article className="lg:col-span-3 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-2">
            <Intro.Sub />
            <Intro.Name />
          </div>

          <div className="space-y-6 max-w-md">
            <Intro.About />
            <Intro.Status />
          </div>
        </article>

        {/* Right Section */}
        <article className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
          <div className="space-y-4">
            <h3 className="text-sm text-muted-foreground font-mono">
              CURRENTLY
            </h3>
            <Intro.CurrentJob />
          </div>

          <div className="space-y-4">
            <h3 className="text-sm text-muted-foreground font-mono">FOCUS</h3>
            <Intro.Focus />
          </div>
        </article>
      </div>
    </section>
  );
}
