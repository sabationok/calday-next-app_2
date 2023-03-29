import Logo from "./Logo";
import NavMenuDesktop from "./NavMenuDesktop/NavMenuDesktop";

import styled from "styled-components";
import { Container } from "../atoms";
import LinkIcon from "../atoms/LinkIcon";
import NavMenuMobile from "./NavMenuMobile/NavMenuMobile";

export type NavLinkProps = {
  path: string;
  name: string;
};
export type HeaderProps = {
  navLinks: NavLinkProps[];
};
const Header: React.FC<HeaderProps & React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  navLinks,
}) => {
  return (
    <StHeader className={className}>
      <Container>
        <StHeaderGrid>
          <Logo />

          <NavMenuDesktop navLinks={navLinks} />

          <SignUpBox>
            <LinkIcon variant="outlinedSmall" />

            <NavMenuMobile navLinks={navLinks} />
          </SignUpBox>
        </StHeaderGrid>
      </Container>
    </StHeader>
  );
};

const StHeader = styled.header`
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100%;
  height: 64px;

  /* background: linear-gradient(
    90.06deg,
    rgba(236, 231, 169, 0.8) 8.88%,
    rgba(239, 211, 156, 0.8) 100.02%
  ); */
  background: linear-gradient(90deg, #ece9aa 1.16%, #f1cc97 80.04%);
  /* background-color: rgba(236, 231, 169, 0.8); */
  backdrop-filter: blur(25px);
`;

const StHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  height: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr 1fr;
  }
`;
const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;
export default Header;
