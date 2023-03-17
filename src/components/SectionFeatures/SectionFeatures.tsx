import { ThemeType } from "@/styles/theme";
import styled from "styled-components";
import Features from "./Features/Features";
import Integrations from "./Integrations/Integrations";

type SectionFeaturesProps = {
  title?: string;
};

const SectionFeatures: React.FC<SectionFeaturesProps> = ({
  title = "Features",
}) => {
  return (
    <StyledSectionFeatures>
      <SectionContainer>
        <FeaturesTitle>{title}</FeaturesTitle>

        <Features />

        <Integrations />
      </SectionContainer>
    </StyledSectionFeatures>
  );
};

const StyledSectionFeatures = styled.section`
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.bageBackground};
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 73px;
  padding-bottom: 79px;

  max-width: 1440px;

  margin: 0 auto;
  @media screen and (min-width: 768px) {
    padding-top: 73px;
    padding-bottom: 79px;
  }
`;
export const FeaturesTitle = styled.h2`
  font-weight: 800;
  font-size: 40px;
  line-height: 1.3;

  color: ${({ theme }: { theme: ThemeType }) => theme.brownPrime};

  padding: 0 18px;

  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 55px;
    padding: 0 138px;
  }
`;

export default SectionFeatures;
