import FooterMenuList from "./FooterMenuList";

import SG from "@/styles";
import styled from "styled-components";
import testData from "@/testData";
import { ThemeType } from "@/styles/theme";

type FooterProps = {
  className: string;
};
const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <FooterContainer className={className}>
      <SG.Container>
        <FooterWrapper>
          <FooterMenuList />

          <Copyright>{testData.footerData.copyright}</Copyright>
        </FooterWrapper>
      </SG.Container>
    </FooterContainer>
  );
};

export const FooterContainer = styled.footer`
  width: 100%;

  background: ${({ theme }: { theme: ThemeType }) => theme.blackPrimary};
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

  color: ${({ theme }: { theme: ThemeType }) => theme.bagePrimary};
  text-align: center;
`;

export default Footer;
