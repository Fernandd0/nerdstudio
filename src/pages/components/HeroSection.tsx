import { Container } from "../../components/ui/Container";
import { ContactForm } from "./ContactForm";

export const HeroSection = () => {
  return (
    <Container>
      <div className="flex items-center justify-between gap-6 min-h-[80dvh] py-8">
        <div className="max-w-[500px]">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-[92px] font-epilogue  uppercase text-black leading-none flex flex-col gap-1">
              <img src="../../../public/assets/design.svg" alt="" />
              <span className="font-extrabold">STUDIO</span>
            </h2>
            <img src="../../../public/assets/happy.svg" alt="" />
          </div>
          <p className="leading-tight text-base">
            Creative minds delivering brand strategy, identity design,
            print/digital design and web design for impactful experiences.
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};
