import FooterList from "./FooterList/FooterList";

import SG from "@/styles";
import styled from "styled-components";
import testData from "@/testData";
import { ThemeType } from "@/styles/theme";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SG.Container>
        <FooterWrapper>
          <FooterList />

          <Copyright>{testData.footerData.copyright}</Copyright>
        </FooterWrapper>
      </SG.Container>
    </FooterContainer>
  );
};

export const FooterContainer = styled.footer`
  width: 100%;
  /* height: 359px; */

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

  color: ${({ theme }) => theme?.bagePrimary};
  text-align: center;
`;

export default Footer;
