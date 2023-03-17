import testData from "@/testData";
import TransferItem, { TransferItemType } from "./TransferItem";
import SG from "@/styles";

type SectionType = {
  title: string;
  subTitle: string;
  list: TransferItemType[];
};

const SectionShedulingInfo: React.FC<SectionType> = () => {
  const { title, subTitle, list } = testData.shedulingSectionData;
  return (
    <StyledSection>
      <SG.Container>
        <Title>{title}</Title>

        <SubTitle>{subTitle}</SubTitle>

        <TransfersList>
          {list.map((item) => (
            <TransferItem
              key={item.fill}
              from={item.from}
              to={item.to}
              fill={item.fill}
              descrList={item.descrList}
            />
          ))}
        </TransfersList>
      </SG.Container>
    </StyledSection>
  );
};

import styled from "styled-components";
import { ThemeType } from "@/styles/theme";

export const StyledSection = styled.section`
  padding: 156px 0 115px;

  background: ${({ theme }: { theme: ThemeType }) => theme.backgroundGradient};
`;
export const Title = styled.h2`
  font-weight: 800;
  font-size: 40px;
  line-height: 1.3;
  text-align: center;
  color: ${({ theme }: { theme: ThemeType }) => theme.brownPrime};

  padding: 0 15px;
  margin-bottom: 6px;
`;
export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.89;
  text-align: center;
  color: ${({ theme }: { theme: ThemeType }) => theme.blackPrimary};

  padding: 0 15px;
  margin-bottom: 78px;
`;

export const TransfersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  margin: 0 auto;
`;

export default SectionShedulingInfo;
