import { useState } from "react";
import FAQListItem, { FAQItemProps } from "./FAQListItem";
import styled from "styled-components";
import { Container } from "../atoms";

export type SectionFAQProps = {
  title: string;
  faqList: Omit<FAQItemProps, "isOpen" | "onClick" | "idx">[];
};

const SectionFAQ: React.FC<SectionFAQProps> = ({ faqList, title }) => {
  const [current, setCurrent] = useState<null | number>();

  const onItemClick = (idx?: number) => {
    setCurrent((prev) => (prev === idx ? null : idx));
  };

  return (
    <Section>
      <Container>
        <Title>{title || "FAQ"}</Title>

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
      </Container>
    </Section>
  );
};

export const Section = styled.section`
  padding: 78px 0 130px;
  min-height: 150px;
  background-color: ${({ theme }) => theme.bageBackground};
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 40px;
  line-height: 1.3;
  text-align: center;
  color: ${({ theme }) => theme.brownPrime};

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
