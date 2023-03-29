import Profits from "./ProfitsList";
import FormCreateEvent, { FormCreateEventProps } from "./FormCreateEvent";
import HeroImage, { HeroSectionImgProps } from "./HeroImage";
import HeroTitle from "../atoms/HeroTitle";
import HeroSubTitle from "../atoms/HeroSubTitle";
import testData from "@/testData";

import SG from "@/styles";
import styled from "styled-components";

import Image from "next/image";
import images from "@/img";
import { ProfitItemProps } from "../atoms/ProfitItem";
import { Container } from "../atoms";

export type SectionHeroType = {
  title: string;
  subTitle: string;
  profitsList: ProfitItemProps[];
  heroImage: HeroSectionImgProps;
  createEventFormData: FormCreateEventProps;
};

const SectionHero: React.FC<SectionHeroType> = ({
  title,
  subTitle,
  profitsList,
  heroImage,
  createEventFormData,
}) => {
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

      <Container>
        <FlexWrapper>
          <HeroTitle>{title}</HeroTitle>

          <HeroSubTitle>{subTitle}</HeroSubTitle>

          <FormCreateEvent {...createEventFormData} />
        </FlexWrapper>
      </Container>

      <HeroImage {...heroImage} />

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

  /* background: ${({ theme }) => theme.backgroundGradient}; */
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

  width: 350px;
`;

export default SectionHero;
