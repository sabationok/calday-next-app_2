import Button from "@/components/atoms/Button";
import Icon, { IconId } from "@/components/atoms/Icon";

import { useState } from "react";
import styled from "styled-components";
import { NavLinkProps } from "../Header";
import Logo from "../Logo";
import NavLinkMobile from "./NavLinkMobile";

export type NavMenuMobileProps = {
  navLinks: NavLinkProps[];
};

const NavMenuMobile: React.FC<NavMenuMobileProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen((prev) => !prev);
    document.querySelector("body")?.classList.toggle("notScrolled");
  };

  return (
    <StNavMenuMobileContainer>
      <StNavMenuMobileButton onClick={handleMenuOpen}>
        <Icon id={IconId.menu} size="21px" />
      </StNavMenuMobileButton>

      <StNavMenuMobile {...{ isOpen }}>
        <StNavMenuMobileHeader>
          <Logo />

          <StNavMenuMobileButton onClick={handleMenuOpen}>
            <Icon id={IconId.close} size="21px" />
          </StNavMenuMobileButton>
        </StNavMenuMobileHeader>

        <StMenuList>
          {navLinks.map((link) => (
            <NavLinkMobile key={link.name} {...link} />
          ))}
        </StMenuList>

        <Button type="button" variant="filled" iconId={IconId.arrow_right}>
          <span>Sign Up/ Login</span>
        </Button>
      </StNavMenuMobile>
    </StNavMenuMobileContainer>
  );
};

const StNavMenuMobileContainer = styled.div`
  @media screen and (min-width: 767px) {
    display: none;
  }
`;
const StNavMenuMobile = styled.nav<{ isOpen: boolean }>`
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

  background-color: ${({ theme }) => theme.bageLight};
`;
const StNavMenuMobileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 13px 15px 13px;

  height: 60px;
  width: 100%;
`;
const StNavMenuMobileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2px;

  border: 1px solid transparent;
  background-color: transparent;
`;
const StMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`;

export default NavMenuMobile;
