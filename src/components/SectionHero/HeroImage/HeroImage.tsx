import Image from "next/image";
import EventItems from "./EventItems/EventItems";
import testData from "@/testData";
import styled from "styled-components";
import images from "@/img";

const HeroImage: React.FC = () => {
  const { image, alt } = testData.heroSectionData.heroImage;

  return (
    <HeroImageContainer>
      <HeroImageBox>
        <Image src={image} alt={alt} />
      </HeroImageBox>

      <EventItems />
      <HeroBackgroundimg>
        <Image src={images.bckgrnd_element_hero} alt={""} />
      </HeroBackgroundimg>
    </HeroImageContainer>
  );
};

const HeroImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 480px;

  padding-top: 76px;
  overflow: hidden;
  @media screen and (min-width: 960px) {
    height: 429px;
  }
`;

const HeroBackgroundimg = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const HeroImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  overflow: hidden;

  width: 100%;

  max-width: 250px;

  box-shadow: -20px -20px 40px #fce6bd, 20px 20px 40px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 480px) {
    max-width: 350px;
  }
`;

export default HeroImage;
