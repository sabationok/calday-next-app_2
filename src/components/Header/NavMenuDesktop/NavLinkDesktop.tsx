import { INavLink } from "@/types/types";
import Link from "next/link";
import styled from "styled-components";

const NavLinkDesktop: React.FC<INavLink> = ({ path, name }) => {
  return (
    <li>
      <StLink href={path}>{name}</StLink>
    </li>
  );
};

const StLink = styled(Link)`
  font-family: "Mark Pro", sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 0.93;

  transition: all var(--timing-function__main);

  &:hover {
    color: var(--actionOrangeClr);
  }
  &:active {
    color: var(--brownLightClr);
  }
`;

export default NavLinkDesktop;
