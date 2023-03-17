import Profits from "./Profits/ProfitsList";
import FormCreateEvent from "./FormCreateEvent";
import HeroImage from "./HeroImage/HeroImage";
import HeroTitle from "./HeroTitle";
import HeroSubTitle from "./HeroSubTitle";
import testData from "@/testData";

import SG from "@/styles";
import styled from "styled-components";
import { ThemeType } from "@/styles/theme";

const SectionHero: React.FC = () => {
  const { title, subTitle, profitsList } = testData.heroSectionData;

  return (
    <>
      <StyledSectionHero>
        <SG.Container>
          <FlexWrapper>
            <HeroTitle>{title}</HeroTitle>

            <HeroSubTitle>{subTitle}</HeroSubTitle>

            <FormCreateEvent />
          </FlexWrapper>
        </SG.Container>

        <HeroImage />

        <Profits profitsList={profitsList} />
      </StyledSectionHero>
    </>
  );
};

const StyledSectionHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  width: 100%;
  padding: 84px 0 0;

  background: ${({ theme }: { theme: ThemeType }) => theme.backgroundGradient};
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SectionHero;
