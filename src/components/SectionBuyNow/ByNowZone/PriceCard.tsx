import Button from "@/components/Button";
// import SvgIcons, { IconsMap } from "@/components/SvgIcon/SvgIcons";

export interface IPriceCard {
  isPremium: boolean;
  period?: string;
  price?: number;
  title?: string;
  subTitle?: string;
  buttonTitle?: string;
  sale?: string;
  options?: string[] | number[];
}
const PriceCard: React.FC<IPriceCard> = ({
  isPremium,
  period,
  price,
  title,
  subTitle,
  buttonTitle,
  sale,
  options = [],
}) => {
  return (
    <Card isPremium={isPremium}>
      <CardTitle isPremium={isPremium}>{title}</CardTitle>

      <CardSubTitle>{subTitle}</CardSubTitle>

      <CardPriceBox>
        <CardPrice>{`$${price}`}</CardPrice>

        <Wrapper>
          <CardSale>{sale || " "}</CardSale>

          <CardPeriod>{`/${period}`}</CardPeriod>
        </Wrapper>
      </CardPriceBox>

      <OptionsList>
        {options.map((opt) => (
          <ListOption isPremium={isPremium} key={opt}>
            <IconBox isPremium={isPremium}>
              {/* <SvgIcons icon={IconsMap.muiDone} size="16px" /> */}
            </IconBox>

            <ListOption isPremium={isPremium}>{opt}</ListOption>
          </ListOption>
        ))}
      </OptionsList>

      <Button
        variant={isPremium ? "outlinedLargeGradient" : "outlinedLarge"}
        style={{ width: "100%" }}
      >
        <span>{buttonTitle}</span>
        {/* <SvgIcons icon={IconsMap.arrowRight} /> */}
      </Button>
    </Card>
  );
};

import styled from "styled-components";

export const Card = styled.li<{ isPremium?: boolean }>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  flex-basis: 300px;
  flex-grow: 1;
  flex-shrink: 1;

  max-width: 335px;
  min-height: 574px;

  overflow: hidden;
  padding: 30px;

  background: ${({ isPremium }) =>
    isPremium
      ? "linear-gradient(#fff, #fff) padding-box, linear-gradient( 120deg, rgba(205, 62, 255, 1) 0%, rgba(237, 163, 20, 1) 100%) border-box"
      : "#fff"};
  border: 4px solid transparent;
  border-radius: 20px;

  transition: transform var(--timing-function__main);
  &:hover {
    transform: scale(1.05);
  }
`;
export const CardTitle = styled.p<{ isPremium?: boolean }>`
  font-family: "Gilroy", sans-serif;
  font-weight: ${({ isPremium }) => (isPremium ? 700 : 400)};
  font-size: 30px;
  line-height: 0.87;
  text-transform: uppercase;
  /* Primary_black */
  color: #40464e;

  background: ${({ isPremium }) =>
    isPremium ? "linear-gradient(94deg, #cc3dff -4.13%, #eda313 101.31%)" : ""};
  -webkit-background-clip: ${({ isPremium }) => (isPremium ? "text" : "")};
  -webkit-text-fill-color: ${({ isPremium }) =>
    isPremium ? "transparent" : ""};
  background-clip: ${({ isPremium }) => (isPremium ? "text" : "")};
`;
export const CardTitlePremium = styled.p`
  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 0.87;
  text-transform: uppercase;

  background: linear-gradient(94deg, #cc3dff -4.13%, #eda313 101.31%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
export const CardSubTitle = styled.span`
  font-family: "Caveat", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.42;
  color: var(--textBlackClr);

  margin-bottom: 31px;
`;

export const CardPriceBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const CardPrice = styled.div`
  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 74px;
  line-height: 0.76;
  color: var(--textBlackClr);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CardSale = styled.div`
  font-family: "Mark Pro", sans-serif;
  font-weight: 700;
  font-size: 15px;
  /* line-height: 1.73; */

  color: #62c45b;
`;
export const CardPeriod = styled.div`
  font-family: "Mark Pro", sans-serif;
  font-weight: 400;
  font-size: 15px;
  /* line-height: 1.73; */

  color: #86888b;
  text-transform: lowercase;
`;

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin: 35px 0;

  flex-grow: 1;
`;
export const ListOption = styled.li<{ isPremium: boolean }>`
  display: flex;
  gap: 13px;

  font-family: "Mark Pro", sans-serif;
  font-weight: 450;
  font-size: 16px;
  line-height: 1.5;
  /* identical to box height, or 150% */

  /* Primary_black */

  color: var(--blackPrimary);
`;
export const IconBox = styled.div<{ isPremium: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  fill: ${({ isPremium }) => (isPremium ? "#62c45b" : "#D8B681")};

  border-radius: 50%;
  background-color: ${({ isPremium }) => (isPremium ? "#E6FBE5" : "#F8F8F8")};
`;

export default PriceCard;
