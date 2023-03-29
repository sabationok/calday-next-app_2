import Image, { StaticImageData } from "next/image";
// import SvgIcons, { IconsMap } from "@/components/SvgIcon/SvgIcons";
import styled from "styled-components";

import Icon, { IconId } from "@/components/atoms/Icon";

export type FeatureItemProps = {
  id?: string | number;
  icon: string | StaticImageData;
  iconAlt: string;
  title?: string;
  descr?: string;
  imgURL: string | StaticImageData;
  imgAlt: string;
  isActive?: boolean;
  onClick?: React.MouseEventHandler;
};

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  iconAlt,
  title,
  descr,
  onClick,
  imgURL,
  imgAlt,
  isActive,
}) => {
  return (
    <StyledFeatureItem isActive={isActive}>
      <FutureButton onClick={onClick}>
        <Image src={icon} alt={iconAlt} width={48} />

        <RightSide>
          <TitleWrapper>
            <FutureTitle>{title}</FutureTitle>

            <ItemIcon
              id={IconId.keyboard_arrow_right}
              size="24px"
              isActive={isActive}
            />
          </TitleWrapper>

          <FutureDescr>{descr}</FutureDescr>
        </RightSide>
      </FutureButton>

      {isActive && (
        <FutureItemImage>
          <Image src={imgURL} alt={imgAlt} />
        </FutureItemImage>
      )}
    </StyledFeatureItem>
  );
};

const StyledFeatureItem = styled.li<{ isActive?: boolean }>`
  cursor: default;

  overflow: hidden;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.bagePrimary : "transparent"};

  fill: ${({ isActive }) => (isActive ? "#62C45B" : "#D8B682")};

  transition: all var(--timing-function__main);

  @media screen and (min-width: 960px) {
    border-radius: 26px;
    background-color: ${({ isActive }) => (isActive ? "#fff" : "transparent")};
  }
`;
const ItemIcon = styled(Icon)<{ isActive?: boolean }>`
  color: ${({ theme }) => theme.actionOrange};
  transform: ${({ isActive }) => `rotate(${isActive ? 90 : 0}deg)`};

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const FutureButton = styled.button`
  font-family: inherit;
  display: grid;
  grid-template-columns: 26px 1fr;
  gap: 21px;
  min-height: 113px;
  width: 100%;
  padding: 20px;
  overflow: hidden;

  background-color: transparent;
  border-style: none;

  transition: all ${({ theme }) => theme.timing_function__main};
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0;
`;
const FutureTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  text-align: start;

  color: ${({ theme }) => theme.blackPrimary};
`;
const FutureDescr = styled.span`
  font-weight: 450;
  font-size: 15px;
  line-height: 1.73;
  text-align: left;
  color: ${({ theme }) => theme.blackPrimary};
`;
const FutureItemImage = styled.div`
  width: 100%;
  max-width: 90%;

  padding-bottom: 10px;

  margin: 0 auto;

  @media screen and (min-width: 960px) {
    display: none;
    padding-bottom: 0;
  }
`;

export default FeatureItem;
