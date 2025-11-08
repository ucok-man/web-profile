import { Education, EDUCATION_LIST } from "@/components/datas/education";
import Heading2 from "@/components/heading-2";
import "swiper/css";
import "swiper/css/effect-cards";

type Props = {
  onRef: (el: HTMLElement | null) => void;
};

export default function SectionEducation({ onRef }: Props) {
  return (
    <section
      id="education"
      ref={(el) => onRef(el)}
      className=" py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <Heading2>Education</Heading2>

        <div className="">
          {EDUCATION_LIST.map((item) => (
            <Education.Card item={item} key={item.institution} />
          ))}
        </div>
      </div>
    </section>
  );
}
