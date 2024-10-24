import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
  inactive?: boolean;
}

export const Button = ({
  children,
  className = "",
  href = "#",
  type,
  onClick,
  disabled,
  inactive = false,
}: Props) => {
  const buttonClasses = twMerge(
    "px-8 py-2 border border-black rounded-[50px] transition-all duration-300",
    disabled ? "cursor-default opacity-60" : "cursor-pointer",
    inactive ? "opacity-60" : "opacity-100",
    className
  );

  if (!type) {
    return (
      <a
        href={href}
        className={buttonClasses + " hover:bg-black hover:text-white"}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        type={type}
        onClick={onClick}
        className={buttonClasses + " hover:bg-black hover:text-white"}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
};
