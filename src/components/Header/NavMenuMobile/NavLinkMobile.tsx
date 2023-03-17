import { ThemeType } from "@/styles/theme";
import Link from "next/link";
import styled from "styled-components";

export type NavLinkProps = {
  path: string;
  name: string;
};
const NavLinkMobile: React.FC<NavLinkProps> = ({ path, name }) => {
  return (
    <li>
      <StyledLink href={path}>{name}</StyledLink>
    </li>
  );
};

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 24px;
  line-height: 0.75;
  color: ${({ theme }: { theme: ThemeType }) => theme.blackPrimary};
  transition: all var(--timing-function__main);
  &:hover {
    color: ${({ theme }: { theme: ThemeType }) => theme.actionOrange};
  }
  &:active {
    color: ${({ theme }: { theme: ThemeType }) => theme.brownLight};
  }
`;

export default NavLinkMobile;
