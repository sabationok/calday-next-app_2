import { IEventItem } from "@/types/types";
import Image from "next/image";

const EventItem: React.FC<IEventItem> = ({
  avatar,
  name,
  event,
  date,
  alt,
  style,
}) => {
  return (
    <StEventItem style={style}>
      <AvatarBox>
        <Image src={avatar} alt={alt} width={36} />
      </AvatarBox>

      <ItemRapper>
        <ItemNameWrapper>
          <ItemName>{name}</ItemName>

          <ItemEvent>{event}</ItemEvent>
        </ItemNameWrapper>

        <ItemDate>{date}</ItemDate>
      </ItemRapper>
    </StEventItem>
  );
};
import styled from "styled-components";

const StEventItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  position: absolute;

  height: 58px;

  width: 100%;
  min-width: max-content;

  max-width: 268px;

  border-radius: 50px;
  padding: 6px 12px;

  overflow: hidden;

  background-color: #fff;
  box-shadow: -20px 20px 50px rgba(122, 64, 19, 0.3);
`;
const AvatarBox = styled.div<{ size?: number }>`
  width: ${({ size }) => size || "36px"};
`;
const ItemRapper = styled.div``;
const ItemNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const ItemName = styled.span`
  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.71;
  color: #86888b;
`;
const ItemEvent = styled.span`
  font-family: "Gilroy", sans-serif;
  font-size: 14px;
  line-height: 1.71;
  color: #86888b;
`;
const ItemDate = styled.span`
  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.71;
  color: #000000;
`;

export default EventItem;
