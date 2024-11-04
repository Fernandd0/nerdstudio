import { Container } from "../../components/ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="mt-[100px]">
      <Container>
        <div className="flex items-center justify-start gap-16 mb-8">
          <h3 className="italic text-[92px] font-epilogue uppercase text-black leading-none">
            PORTAFOLIO
          </h3>
          <div className="flex items-center gap-6 relative">
            <button className="swiper-button-prev  w-[38px] h-[38px] md:w-[48px] md:h-[48px] z-[2] after:!content-none !static !mt-0 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="45"
                viewBox="0 0 24 45"
                fill="none"
                className="transform rotate-[180deg]"
              >
                <path
                  d="M1.00001 0.99973L22.6597 22.4129C22.847 22.5981 22.847 22.9006 22.6597 23.0858L1 44.499"
                  stroke="#151515"
                  stroke-width="0.946237"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <button className="swiper-button-next  w-[38px] h-[38px] md:w-[48px] md:h-[48px] z-[2] after:!content-none !static !mt-0 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="45"
                viewBox="0 0 24 45"
                fill="none"
              >
                <path
                  d="M1.00001 0.99973L22.6597 22.4129C22.847 22.5981 22.847 22.9006 22.6597 23.0858L1 44.499"
                  stroke="#151515"
                  stroke-width="0.946237"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {/* Slides */}
          <SwiperSlide>
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <h4>Slide 1</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-300 h-96 flex items-center justify-center">
              <h4>Slide 2</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-400 h-96 flex items-center justify-center">
              <h4>Slide 3</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-500 h-96 flex items-center justify-center">
              <h4>Slide 4</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-600 h-96 flex items-center justify-center">
              <h4>Slide 5</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};
