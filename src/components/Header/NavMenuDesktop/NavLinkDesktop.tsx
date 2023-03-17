import { ThemeType } from "@/styles/theme";
import Link from "next/link";
import styled from "styled-components";

export type NavLinkProps = {
  path: string;
  name: string;
};

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
    color: ${({ theme }: { theme: ThemeType }) => theme.actionOrange};
  }
  &:active {
    color: ${({ theme }: { theme: ThemeType }) => theme.bageDark};
  }
`;

export default NavLinkDesktop;
