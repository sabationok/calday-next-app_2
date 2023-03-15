import Button from "@/components/Button";
// import SvgIcons, { IconsMap } from "@/components/SvgIcon/SvgIcons";
import { navLinks } from "@/testData/testData.data";
import { useState } from "react";
import styled from "styled-components";
import Logo from "../Logo";
import NavLinkMobile from "./NavLinkMobile";

const NavMenuMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen((prev) => !prev);
    document.querySelector("body")?.classList.toggle("notScrolled");
  };

  return (
    <StNavMenuMobileContainer>
      <StNavMenuMobileButton onClick={handleMenuOpen}>
        {/* <SvgIcons icon={IconsMap.menuBurger} size="21px" /> */}
      </StNavMenuMobileButton>

      <StNavMenuMobile {...{ isOpen }}>
        <StNavMenuMobileHeader>
          <Logo />

          <StNavMenuMobileButton onClick={handleMenuOpen}>
            {/* <SvgIcons icon={IconsMap.close} size="21px" /> */}
          </StNavMenuMobileButton>
        </StNavMenuMobileHeader>

        <StMenuList>
          {navLinks.map((link) => (
            <NavLinkMobile key={link.name} {...link} />
          ))}
        </StMenuList>

        <Button type="button" variant="filled">
          <span>Sign Up/ Login</span>
          {/* <SvgIcons icon={IconsMap.arrowRight} size="15px" /> */}
        </Button>
      </StNavMenuMobile>
    </StNavMenuMobileContainer>
  );
};

export const StNavMenuMobileContainer = styled.div`
  @media screen and (min-width: 767px) {
    display: none;
  }
`;
export const StNavMenuMobile = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  padding-bottom: 69px;

  background-color: var(--bageDarkClr);
`;
export const StNavMenuMobileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 13px 15px 13px;

  height: 60px;
  width: 100%;
`;
export const StNavMenuMobileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2px;

  border: 1px solid transparent;
  background-color: transparent;
`;
export const StMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`;

export default NavMenuMobile;
