import styles from "../_styles/slide.module.css";

export const PortfolioSlide = () => {
  return (
    <div className="rounded-[16px] border border-black relative w-[360px] h-[330px] md:w-auto md:h-[495px] group">
      <img
        src="/assets/p1.webp"
        alt=""
        className="rounded-[16px] w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0"
      />
      <div className="opacity-0 group-hover:opacity-100 absolute bottom-12 left-0 border-y border-black bg-white py-2 w-full transition-all duration-300 overflow-hidden">
        <div className={`${styles["animate-slide"]} flex items-center`}>
          <div className="flex items-center">
            <span className="text-base font-semibold text-black mx-2">
              SWEET BITES
            </span>
            <div>
              <span className="text-base font-bold text-black mx-2">
                Branding
              </span>
              /
              <span className="text-base font-bold text-black mx-2">
                Packaging
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-base font-semibold text-black mx-2">
              SWEET BITES
            </span>
            <div>
              <span className="text-base font-bold text-black mx-2">
                Branding
              </span>
              /
              <span className="text-base font-bold text-black mx-2">
                Packaging
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-base font-semibold text-black mx-2">
              SWEET BITES
            </span>
            <div>
              <span className="text-base font-bold text-black mx-2">
                Branding
              </span>
              /
              <span className="text-base font-bold text-black mx-2">
                Packaging
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
