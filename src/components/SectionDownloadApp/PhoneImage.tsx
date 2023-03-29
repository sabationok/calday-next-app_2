import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import EventItem, { IEventItem } from "../atoms/EventItem";

export type DownloadSectionImgProps = {
  imageUrl: string | StaticImageData;
  alt: string;
  eventItems: {
    left: IEventItem;
    right: IEventItem;
  };
};
const PhoneImage: React.FC<DownloadSectionImgProps> = ({
  imageUrl,
  alt,
  eventItems,
}) => {
  return (
    <PhoneImageContainer>
      <PhoneImageBox>
        <Image src={imageUrl} alt={alt} />
      </PhoneImageBox>

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
    </PhoneImageContainer>
  );
};

const PhoneImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: relative;

  width: 100%;

  /* height: 480px; */

  /* padding-top: 76px; */
  /* overflow: hidden; */
  /* @media screen and (min-width: 960px) {
    height: 429px;
  } */
`;

const PhoneImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  overflow: hidden;

  width: 100%;

  max-width: 250px;

  /* box-shadow: -20px -20px 40px #fce6bd, 20px 20px 40px rgba(0, 0, 0, 0.1); */
  @media screen and (min-width: 480px) {
    max-width: 350px;
  }
`;

const EventItemsContainer = styled.div`
  position: absolute;
  top: 175px;
  left: 50%;

  width: 80vw;
  height: 100%;
  max-height: 370px;
  max-width: 660px;
  min-width: 250px;

  transform: translateX(-50%);

  @media screen and (min-width: 960px) {
    max-height: 370px;
  }
`;
export default PhoneImage;
