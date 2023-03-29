import FooterMenuList, {
  FooterListProps,
  FooterSectionProps,
} from "./FooterMenuList";

import styled from "styled-components";
import { Container } from "../atoms";

export type FooterProps = {
  footerMenuSections: FooterSectionProps[];
  company: { title: string; name: string };
  contacts: {
    title: string;
    email?: string;
    phone?: string;
  };
  copyright: string;
};
const Footer: React.FC<FooterProps & React.HTMLAttributes<HTMLDivElement>> = ({
  contacts,
  footerMenuSections,
  company,
  copyright,
  ...props
}) => {
  return (
    <FooterContainer {...props}>
      <Container>
        <FooterWrapper>
          <FooterMenuList
            footerMenuSections={footerMenuSections}
            contacts={contacts}
            company={company}
          />

          <Copyright>{copyright}</Copyright>
        </FooterWrapper>
      </Container>
    </FooterContainer>
  );
};

export const FooterContainer = styled.footer`
  width: 100%;

  background: ${({ theme }) => theme.blackPrimary};
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 1100px;

  padding: 56px 0 36px;

  margin: 0 auto;
`;
export const Copyright = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 1.33;

  cursor: default;

  color: ${({ theme }) => theme.bagePrimary};
  text-align: center;
`;

export default Footer;
