import { useState } from "react";
import FAQListItem from "./FAQListItem";
import testData from "@/testData";
import styled from "styled-components";
import SG from "@/styles";
import { ThemeType } from "@/styles/theme";

const { faqList } = testData.faqSectionData;

const SectionFAQ: React.FC = () => {
  const [current, setCurrent] = useState<null | number>();

  const onItemClick = (idx?: number) => {
    setCurrent((prev) => (prev === idx ? null : idx));
  };

  return (
    <Section>
      <SG.Container>
        <Title>FAQ</Title>

        <FAQList>
          {faqList.map((item, idx) => {
            return (
              <FAQListItem
                key={item.id}
                {...item}
                onClick={() => onItemClick(idx)}
                isOpen={current === idx}
              />
            );
          })}
        </FAQList>
      </SG.Container>
    </Section>
  );
};

export const Section = styled.section`
  padding: 78px 0 130px;
  min-height: 150px;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.bageBackground};
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 40px;
  line-height: 1.3;
  text-align: center;
  color: ${({ theme }: { theme: ThemeType }) => theme.brownPrime};

  text-transform: uppercase;

  margin-bottom: 72px;
`;

export const FAQList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 0 auto;

  max-width: 926px;
`;

export default SectionFAQ;
