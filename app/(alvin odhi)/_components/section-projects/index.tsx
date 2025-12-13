import Heading2 from "@/components/heading-2";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Project, PROJECT_LIST } from "@/components/datas/project";
import Image from "next/image";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  onRef: (el: HTMLElement | null) => void;
};

export default function SectionProjects({ onRef }: Props) {
  return (
    <section
      id="projects"
      ref={(el) => onRef(el)}
      className="py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <div className="flex items-center gap-2">
          <Heading2>My Projects</Heading2>
          <Image
            alt="Swipe"
            src={"/swipe.png"}
            width={40}
            height={40}
            className="relative -top-1"
          />
        </div>

        <Swiper
          modules={[Navigation, Grid, Pagination]}
          pagination={true}
          slidesPerView={1}
          className="h-[600px] md:h-[860px] lg:h-[760px] max-sm:pt-4! lg:pt-8!"
          wrapperClass="swiper-wrapper items-start place-items-start"
          breakpoints={{
            0: {
              grid: { rows: 2 },
            },
            640: {
              grid: { rows: 3 },
            },
          }}
        >
          {PROJECT_LIST.map((item) => (
            <SwiperSlide key={item.name} className="h-fit!">
              <Project.Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
