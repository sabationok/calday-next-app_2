import styled from "styled-components";
import testData from "@/testData";
import ByNowZone from "./ByNowZone/ByNowZone";

export type SectionBuyNowProps = {
  title: string;
  subTitle: string;
  descr: string;
};

const SectionBuyNow: React.FC<SectionBuyNowProps> = ({
  title,
  subTitle,
  descr,
}) => {
  return (
    <Section>
      <SectionTopBackground />

      <SectionBuyNowContainer>
        <Title>{title}</Title>

        <SubTitle>{subTitle}</SubTitle>

        <ByNowZone />

        <Description>{descr}</Description>
      </SectionBuyNowContainer>
    </Section>
  );
};

const Section = styled.section`
  position: relative;

  overflow: hidden;

  padding: 34px 0 78px;

  min-height: 530px;
`;
const SectionTopBackground = styled.div`
  position: absolute;
  top: 0;
  height: 0;

  background-color: ${({ theme }) => theme.bageBackground};
  width: 100%;
  min-height: 430px;
`;
const SectionBuyNowContainer = styled.div`
  position: sticky;
  z-index: 10;

  padding: 0 15px;

  max-width: 1440px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: 40px;
  line-height: 1.3;
  text-align: center;

  color: ${({ theme }) => theme.brownPrime};
  padding-bottom: 3px;
`;
const SubTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.83;
  text-align: center;

  margin-bottom: 37px;
`;
const Description = styled.p`
  max-width: 529px;
  padding: 0 15px;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.83;
  text-align: center;
  color: ${({ theme }) => theme.textBlack};

  margin: 0 auto;
`;

export default SectionBuyNow;
