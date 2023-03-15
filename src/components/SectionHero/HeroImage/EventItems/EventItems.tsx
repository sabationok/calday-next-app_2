import testData from "@/testData";
import DecoreItem from "./EventItem";
import styled from "styled-components";

const EventItems: React.FC = () => {
  const { eventItemLeft, eventItemRight } = testData.heroSectionData.heroImage;
  return (
    <EventItemsContainer>
      <DecoreItem
        {...eventItemLeft}
        style={{ top: 0, left: 0, minWidth: "253" }}
      />

      <DecoreItem
        {...eventItemRight}
        style={{ bottom: 0, right: 0, minWidth: "265" }}
      />
    </EventItemsContainer>
  );
};

const EventItemsContainer = styled.div`
  position: absolute;
  top: 156px;
  left: 50%;

  width: 80vw;
  height: 100%;
  max-height: 159px;
  max-width: 722px;
  min-width: 250px;

  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    top: 187px;
    max-height: 116px;
  }
`;

export default EventItems;
