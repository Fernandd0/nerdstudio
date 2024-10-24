import { type FC } from "react";

interface Props {
  isMovil?: boolean;
}

export const NavLinks: FC<Props> = ({ isMovil = false }) => {
  const links = [
    { id: "1", path: "#services", title: "Services" },
    {
      id: "2",
      path: "#portfolio",
      title: "Portfolio",
    },
    {
      id: "3",
      path: "#contact-us",
      title: "Contact Us",
    },
  ];

  if (isMovil) {
    return (
      <ul className="flex flex-col gap-0.5 font-semibold text-sm list-none">
        {links.map((link) => (
          <a href={link.path} key={link.id} className="flex items-center py-1">
            <li className="px-4">{link.title}</li>
          </a>
        ))}
      </ul>
    );
  } else {
    return (
      <ul className="relative hidden md:flex gap-16 font-semibold text-sm h-11 items-center list-none">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.path}>
                <span className="">{link.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
};
