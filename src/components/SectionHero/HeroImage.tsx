import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import images from "@/img";
import EventItem, { IEventItem } from "@/components/atoms/EventItem";

export type HeroSectionImgProps = {
  imageUrl: string | StaticImageData;
  alt: string;
  eventItems: {
    left: IEventItem;
    right: IEventItem;
  };
};
const HeroImage: React.FC<HeroSectionImgProps> = ({
  imageUrl,
  alt,
  eventItems,
}) => {
  return (
    <HeroImageContainer>
      <HeroImageBox>
        <Image src={imageUrl} alt={alt} />
      </HeroImageBox>

      <EventItemsContainer>
        <EventItem
          {...eventItems.left}
          style={{ top: 0, left: 0, minWidth: "253" }}
        />
        <EventItem
          {...eventItems.right}
          style={{ bottom: 0, right: 0, minWidth: "265" }}
        />
      </EventItemsContainer>
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

const EventItemsContainer = styled.div`
  position: absolute;
  top: calc(76px + 156px);
  left: 50%;

  width: 80vw;
  height: 100%;
  max-height: 159px;
  max-width: 722px;
  min-width: 250px;

  transform: translateX(-50%);

  @media screen and (min-width: 960px) {
    top: 263px;
    max-height: 116px;
  }
`;

export default HeroImage;
