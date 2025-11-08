import { Connect, SOCIAL_LIST } from "@/components/datas/connect";
import Heading2 from "@/components/heading-2";

type Props = {
  onRef: (el: HTMLElement | null) => void;
};

export default function SectionConnect({ onRef }: Props) {
  return (
    <section
      id="connect"
      ref={(el) => onRef(el)}
      className="py-20 sm:py-32 opacity-0"
    >
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div className="space-y-6 sm:space-y-8">
          <Heading2>Let&apos;s Connect</Heading2>

          <div className="space-y-6">
            <Connect.Interest />
            <Connect.ContactLink />
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="text-sm text-muted-foreground font-mono">SOCIALS</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOCIAL_LIST.map((item) => (
              <Connect.SocialCard item={item} key={item.url} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
