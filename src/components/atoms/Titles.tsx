import styled from "styled-components";

export const TitleH2 = styled.h2<{
  fontWeight?: number;
  fontSize?: number;
  textTransform?: "uppercase";
  margin?: string;
  textAlign?: "start" | "center" | "end";
  lineHeight?: number | string;
}>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 700)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "40px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 1)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  color: ${({ theme }) => theme.brownPrime};
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : ""};
`;

export const SubTitle = styled.p<{
  fontWeight?: number;
  fontSize?: number;
  margin?: string;
  textAlign?: "start" | "center" | "end";
  lineHeight?: number | string;
}>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "18px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 1)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  color: ${({ theme }) => theme.brownPrime};
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
`;
