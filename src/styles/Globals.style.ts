import styled from "styled-components";
import { ThemeType } from "./theme";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: 960px) {
    padding: 0 20px;
  }
`;
export const BackgroundGradient = styled.div`
  width: 100%;

  background: ${({ theme }: { theme: ThemeType }) => theme.backgroundGradient};
`;
