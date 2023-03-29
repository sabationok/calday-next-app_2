import { useState } from "react";
import FeatureItem, { FeatureItemProps } from "./FeatureItem";
import Image from "next/image";

import styled from "styled-components";

export type FeaturesListProps = {
  list: FeatureItemProps[];
};

const Features: React.FC<FeaturesListProps> = ({ list }) => {
  const [current, setCurrent] = useState(0);

  const onFutureItemClick = (idx: number) => {
    setCurrent(idx);
  };

  return (
    <StyledFeatures>
      <FeaturesList>
        {list.map((item, idx) => (
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
        <Image src={list[current].imgURL} alt={list[current].imgAlt} />
      </FeaturesIlustrationImage>
    </StyledFeatures>
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
