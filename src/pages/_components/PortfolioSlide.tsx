import styles from "../_styles/slide.module.css";

export const PortfolioSlide = () => {
  return (
    <div className="rounded-[16px] border border-black relative w-[360px] h-[330px] md:w-auto md:h-[495px] group overflow-hidden">
      <div className={`${styles["animate-slide"]} flex`}>
        {/* Duplicamos el contenido para simular el efecto infinito */}
        <div className="flex items-center">
          <SlideContent />
        </div>
        <div className="flex items-center">
          <SlideContent />
        </div>
        <div className="flex items-center">
          <SlideContent />
        </div>
      </div>
    </div>
  );
};

// Componente separado para contenido reutilizable
const SlideContent = () => (
  <>
    <div className="flex items-center">
      <span className="text-base font-semibold text-black mx-2">
        SWEET BITES
      </span>
      <div>
        <span className="text-base font-bold text-black mx-2">Branding</span> /
        <span className="text-base font-bold text-black mx-2">Packaging</span>
      </div>
    </div>
  </>
);
