import { useState } from "react";
import testData from "@/testData";
import FeatureItem from "./FeatureItem";
import Image from "next/image";
import { theme } from "@/styles/theme";

import styled from "styled-components";

const { featuresList } = testData.featuresSectionData;

const Features: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onFutureItemClick = (idx: number) => {
    setCurrent(idx);
  };
  return (
    <>
      <StyledFeatures>
        <FeaturesList>
          {featuresList.map((item, idx) => (
            <FeatureItem
              key={item.id}
              {...{
                ...item,
                onClick: () => {
                  onFutureItemClick(idx);
                },
                isActive: current === idx,
              }}
            />
          ))}
        </FeaturesList>

        <FeaturesIlustrationImage>
          <Image
            src={featuresList[current].imgURL}
            alt={featuresList[current].imgAlt}
          />
        </FeaturesIlustrationImage>
      </StyledFeatures>
    </>
  );
};

const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  margin-bottom: 93px;

  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr;

    padding: 0 85px 0 119px;
  }
`;

const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const FeaturesIlustrationImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  max-height: 512px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export default Features;
