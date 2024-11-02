import { Container } from "../../components/ui/Container";
import { ServiceComponent } from "./ServiceComponent";

export const ServicesSection = () => {
  return (
    <section className="mt-[100px]" id="services">
      <h3 className="italic text-[92px] font-epilogue uppercase text-black leading-none text-center mb-8">
        WHAT <span className="font-extrabold">WE DO</span>
      </h3>
      <div className="grid grid-cols-3 max-w-[1700px] mx-auto">
        <ServiceComponent
          className=""
          icon="/assets/branding.svg"
          title="Branding"
          content="We create impactful brand strategies, from visual identity to
                positioning, strengthening the emotional connection with your
                customers."
        >
          <li>Brand Strategy</li>
          <li>Logo Design</li>
          <li>Brand Identity</li>
          <li>Naming</li>
          <li>Brand Audit</li>
        </ServiceComponent>

        <ServiceComponent
          className=""
          icon="/assets/web.svg"
          title="Web Development"
          content="We build functional, optimized, and responsive websites that
                deliver engaging and effective digital experiences for your
                business"
        >
          <li>Responsive Web Design</li>
          <li>E-commerce Development</li>
          <li> UX/UI Design</li>
          <li>WordPress Development:</li>
          <li>Packaging Design</li>
          <li>Web Maintenance</li>
        </ServiceComponent>

        <ServiceComponent
          className="border-r border-black"
          icon="/assets/sedign.svg"
          title="Design"
          content="We offer innovative graphic and digital design solutions that
                visually communicate your brand's message in a creative and
                effective way."
        >
          <li>Graphic Design</li>
          <li>Packanging Design</li>
          <li>Print Design</li>
          <li>Advertisign Design</li>
          <li>Digital Design</li>
          <li>Animation design</li>
        </ServiceComponent>
      </div>
    </section>
  );
};
