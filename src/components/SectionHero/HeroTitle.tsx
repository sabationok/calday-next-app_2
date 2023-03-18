import { ThemeType } from "@/styles/theme";
import styled from "styled-components";

type IHeroTitle = {
  children?: React.ReactNode;
};

const HeroTitle: React.FC<IHeroTitle> = ({ children }) => {
  return <Title>{children}</Title>;
};

const Title = styled.h1`
  width: 100%;

  text-align: center;

  font-weight: 800;
  font-size: 34px;
  line-height: 1.29;
  letter-spacing: 0px;
  max-width: 410px;

  /* display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
  /* overflow: hidden; */

  margin-bottom: 49px;

  color: ${({ theme }: { theme: ThemeType }) => theme.brownPrime};

  outline: 1px solid tomato;

  @media screen and (min-width: 375px) {
    font-size: 34px;
    line-height: 1.08;
  }
  @media screen and (min-width: 768px) {
    font-size: 64px;
    max-width: 650px;
  }
  @media screen and (min-width: 960px) {
    font-size: 74px;
    max-width: 717px;
  }
`;

export default HeroTitle;
