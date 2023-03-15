import { INavLink } from "@/types/types";
import Link from "next/link";
import styled from "styled-components";

const NavLinkMobile: React.FC<INavLink> = ({ path, name }) => {
  return (
    <li>
      <StyledLink href={path}>{name}</StyledLink>
    </li>
  );
};

const StyledLink = styled(Link)`
  font-family: "Mark Pro", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 0.75;
  color: var(--blackPrimary);
  transition: all var(--timing-function__main);
  &:hover {
    color: var(--actionOrangeClr);
  }
  &:active {
    color: var(--brownLightClr);
  }
`;

export default NavLinkMobile;
