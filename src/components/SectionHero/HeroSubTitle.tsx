import styled from "styled-components";

type IHeroSubTitle = {
  children?: React.ReactNode;
};

const HeroSubTitle: React.FC<IHeroSubTitle> = ({ children }) => {
  return <Title>{children}</Title>;
};

const Title = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.89;

  text-align: center;

  margin-bottom: 56px;

  color: ${({ theme }) => theme.brownPrime};

  max-width: 847px;
  width: 100%;
`;

export default HeroSubTitle;
