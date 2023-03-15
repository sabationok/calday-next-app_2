import { navLinks } from "@/testData/testData.data";
import styled from "styled-components";
import NavLinkDesktop from "./NavLinkDesktop";

const NavMenuDesktop: React.FC = () => {
  return (
    <StNavMenu>
      <StNavMenuList>
        {navLinks.map((link) => (
          <NavLinkDesktop key={link.name} {...link} />
        ))}
      </StNavMenuList>
    </StNavMenu>
  );
};

const StNavMenu = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const StNavMenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 44px;
`;

export default NavMenuDesktop;
