import Button from "@/components/atoms/Button";
import Icon, { IconId } from "@/components/atoms/Icon";

import styled from "styled-components";

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
              <StyledIconCheck
                id={IconId.check}
                size="14px"
                isPremium={isPremium}
              />
            </IconBox>

            <span>{opt}</span>
          </ListOption>
        ))}
      </OptionsList>

      <StyledButton
        variant={isPremium ? "outlinedLargeGradient" : "outlinedLarge"}
        style={{ width: "100%" }}
        iconId={IconId.arrow_right}
      >
        <span>{buttonTitle}</span>
      </StyledButton>
    </Card>
  );
};

interface IStyledProps {
  isPremium?: boolean;
}

const Card = styled.li<IStyledProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  flex-basis: 300px;
  flex-grow: 1;
  flex-shrink: 1;

  max-width: 335px;
  /* min-height: 574px; */

  overflow: hidden;
  padding: 30px;

  background: ${({ isPremium, theme }) =>
    isPremium ? theme?.linearGradient_border : theme?.white};
  border: 4px solid transparent;
  border-radius: 20px;

  transition: transform var(--timing-function__main);
  &:hover {
    transform: scale(1.05);
  }
`;
const CardTitle = styled.p<IStyledProps>`
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

const CardSubTitle = styled.span`
  font-family: "Caveat", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.42;
  color: var(--textBlackClr);

  margin-bottom: 31px;
`;
const CardPriceBox = styled.div`
  display: flex;
  gap: 10px;
`;
const CardPrice = styled.div`
  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 74px;
  line-height: 0.76;
  color: var(--textBlackClr);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardSale = styled.div`
  font-family: "Mark Pro", sans-serif;
  font-weight: 700;
  font-size: 15px;
  /* line-height: 1.73; */

  color: #62c45b;
`;
const CardPeriod = styled.div`
  font-family: "Mark Pro", sans-serif;
  font-weight: 400;
  font-size: 15px;
  /* line-height: 1.73; */

  color: #86888b;
  text-transform: lowercase;
`;

const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  min-height: 275px;
  width: 100%;
  padding: 35px 0;

  flex-grow: 1;
`;
const ListOption = styled.li<IStyledProps>`
  display: flex;

  gap: 13px;
  font-weight: 450;
  font-size: 16px;
  line-height: 1.5;

  color: ${({ theme }) => theme?.blackPrimary};
`;
const IconBox = styled.div<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  fill: ${({ isPremium }) => (isPremium ? "#62c45b" : "#D8B681")};

  border-radius: 50%;
  background-color: ${({ isPremium }) => (isPremium ? "#E6FBE5" : "#F8F8F8")};
`;
const StyledIconCheck = styled(Icon)<IStyledProps>`
  color: ${({ theme, isPremium }) =>
    isPremium ? theme?.actionGreen : theme?.bageDark};
`;
const StyledButton = styled(Button)`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export default PriceCard;
