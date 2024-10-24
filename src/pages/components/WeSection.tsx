import { Container } from "../../components/ui/Container";

export const WeSection = () => {
  return (
    <div className="mt-[100px]">
      <Container>
        <div>
          <h3 className="italic text-[92px] font-epilogue uppercase text-black leading-none text-center mb-8">
            WHO <span className="font-extrabold">WE ARE</span>
          </h3>
          <p className="text-center max-w-[1000px] mx-auto mb-16">
            <span>NERD STUDIO</span>
            is the place where we master the delicate balance between creativity
            and strategy. This approach enables our meticulously crafted brands
            to genuinely resonate with people. Here, every piece of work is
            purposefully designed to solve a problem, and each innovative action
            we undertake is driven by a distinct purpose.
          </p>
        </div>
      </Container>
      <img
        src="../../../public/assets/weare.webp"
        alt=""
        className="w-full object-cover"
      />
    </div>
  );
};
