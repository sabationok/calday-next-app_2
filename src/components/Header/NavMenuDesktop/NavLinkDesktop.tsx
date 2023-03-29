import Link from "next/link";
import styled from "styled-components";
import { NavLinkProps } from "../Header";

const NavLinkDesktop: React.FC<NavLinkProps> = ({ path, name }) => {
  return (
    <li>
      <StLink href={path}>{name}</StLink>
    </li>
  );
};

const StLink = styled(Link)`
  font-weight: 500;
  font-size: 15px;
  line-height: 0.93;

  transition: all var(--timing-function__main);

  &:hover {
    color: ${({ theme }) => theme.actionOrange};
  }
  &:active {
    color: ${({ theme }) => theme.bageDark};
  }
`;

export default NavLinkDesktop;
