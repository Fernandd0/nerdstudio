import { NavLinks } from "./components/NavLinks";
import { Container } from "../components/ui/Container";

export const Navbar = () => {
  return (
    <header className="fixed w-full z-[999] top-0 left-0 bg-white border-b-[1.5px] border-black">
      <h1 className="z-[1] absolute indent-0 opacity-0">Nerd Design Agency</h1>
      <Container>
        <nav className="relative flex items-center justify-between py-4">
          <div className="">
            <a href={"/"} className="flex gap-1 md:gap-2">
              <img src="/assets/icon.svg" alt="logo" width="60" height="54" />
            </a>
          </div>
          <NavLinks />
        </nav>
      </Container>
    </header>
  );
};
