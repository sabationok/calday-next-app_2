import Profits from "./Profits/ProfitsList";
import FormCreateEvent from "./FormCreateEvent";
import HeroImage from "./HeroImage/HeroImage";
import HeroTitle from "./HeroTitle";
import HeroSubTitle from "./HeroSubTitle";
import testData from "@/testData";

import SG from "@/styles";
import styled from "styled-components";
import { ThemeType } from "@/styles/theme";
import Image from "next/image";
import images from "@/img";

const SectionHero: React.FC = () => {
  const { title, subTitle, profitsList } = testData.heroSectionData;

  return (
    <StyledSectionHero>
      <BackgroundHeroItems>
        <BackgroundAvatarItem top="15px" left="15px">
          <Image src={images.HeroAvatarLeft_2x} alt="" width={200} />
        </BackgroundAvatarItem>

        <BackgroundAvatarItem top="115px" right="15px">
          <Image src={images.HeroAvatarRight_2x} alt="" width={279} />
        </BackgroundAvatarItem>
      </BackgroundHeroItems>

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
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundHeroItems = styled.div`
  position: absolute;
  left: 50%;
  width: 100%;

  max-width: 1245px;

  transform: translateX(-50%);

  outline: 1px solid tomato;

  @media screen and (max-width: 1220px) {
    display: none;
  }
`;
const BackgroundAvatarItem = styled.div<{
  top?: string;
  left?: string;
  right?: string;
}>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  background-image: url();
  outline: 1px solid tomato;

  width: 350px;
`;

export default SectionHero;
