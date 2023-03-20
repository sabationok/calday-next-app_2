import { useState } from "react";
import PriceCard from "./PriceCard";

import testData from "@/testData";
import styled from "styled-components";

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

const StyledByNowZone = styled.div``;

const PeriodButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 343px;
  height: 32px;

  padding: 2px;
  margin: 0 auto 22px;

  background: #f7f6f0;
  border-radius: 6px;
`;
const PeriodButton = styled.button<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? "#62C45B" : "#2B2F36")};
  background-color: ${({ isActive }) => (isActive ? "#ffffff" : "transparent")};

  border: 1px solid;
  border-color: ${({ isActive }) => (isActive ? "#e9e7dd" : "transparent")};
  border-radius: 4px;

  transition: all var(--timing-function__main);
`;

const CardsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  margin-bottom: 48px;
`;

export default ByNowZone;
