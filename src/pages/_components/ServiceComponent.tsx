import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  icon: string;
  title: string;
  content: string;
  children: React.ReactNode;
}

export const ServiceComponent: React.FC<Props> = ({
  className = "",
  icon,
  title,
  content,
  children,
}: Props) => {
  return (
    <div
      className={`text-center px-[50px] py-[70px] border-y border-l border-black  ${className}`}
    >
      <img src={icon} alt="" className="mx-auto mb-[45px] w-[60px] h-[60px]" />
      <h2 className="font-epilogue font-medium text-[45px] mb-[45px] text-center leading-none">
        {title}
      </h2>
      <p className="text-[18px] mb-[45px]">{content}</p>
      <ul className="text-[18px] font-semibold text-center space-y-4">
        {children}
      </ul>
    </div>
  );
};
