import { useState } from "react";
import PriceCard from "./PriceCard";

import testData from "@/testData";

const ByNowZone: React.FC = () => {
  const [current, setCurrentPricePeriod] = useState(0);
  const { pricingPeriods } = testData.buyNowSectionData;

  const onPeriodBtnClick = (idx: number) => {
    setCurrentPricePeriod(idx);
  };

  return (
    <StyledByNowZone>
      <PeriodButtons>
        {testData.buyNowSectionData.pricingPeriods.map((per, idx) => (
          <PeriodButton
            key={per.id}
            type="button"
            isActive={current === idx}
            onClick={() => {
              onPeriodBtnClick(idx);
            }}
          >
            {per.title}
          </PeriodButton>
        ))}
      </PeriodButtons>

      <CardsList>
        {pricingPeriods[current].priceCards.map((card) => (
          <PriceCard
            key={card.title}
            {...card}
            period={pricingPeriods[current].title.toLowerCase()}
          />
        ))}
      </CardsList>
    </StyledByNowZone>
  );
};

import styled from "styled-components";

export const StyledByNowZone = styled.div``;

export const PeriodButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 343px;
  height: 32px;

  padding: 2px;
  margin: 0 auto 22px;

  background: #f7f6f0;
  border-radius: 6px;
`;
export const PeriodButton = styled.button<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? "#62C45B" : "#2B2F36")};
  background-color: ${({ isActive }) => (isActive ? "#ffffff" : "transparent")};

  border: 1px solid;
  border-color: ${({ isActive }) => (isActive ? "#e9e7dd" : "transparent")};
  border-radius: 4px;

  transition: all var(--timing-function__main);
`;

export const CardsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  margin-bottom: 48px;
`;

export const BuyCard = styled.li<{ isPremium?: boolean }>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 335px;
  height: 574px;

  overflow: hidden;
  padding: 30px;

  background: ${({ isPremium }) =>
    isPremium
      ? "linear-gradient(#fff, #fff) padding-box, linear-gradient( 120deg, rgba(205, 62, 255, 1) 0%, rgba(237, 163, 20, 1) 100%) border-box"
      : "#fff"};
  border: 4px solid transparent;
  border-radius: 20px;
`;
export const CardTitle = styled.p<{ isPremium?: boolean }>`
  font-weight: 400;
  font-size: 30px;
  line-height: 0.87;
  text-transform: uppercase;
  /* Primary_black */
  color: #40464e;
`;

export const CardTitlePremium = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 0.87;
  text-transform: uppercase;

  background: linear-gradient(94deg, #cc3dff -4.13%, #eda313 101.31%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export default ByNowZone;
