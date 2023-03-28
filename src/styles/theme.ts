export const theme = {
  backgroundGradient: "linear-gradient(90deg, #ece9aa 1.16%, #f1cc97 80.04%);",
  linearGradient_border:
    "linear-gradient(#fff, #fff) padding-box, linear-gradient( 120deg, rgba(205, 62, 255, 1) 0%, rgba(237, 163, 20, 1) 100%) border-box",
  inearGradient_text:
    "linear-gradient(92.94deg, #cc3dff -4.13%, #eda313 101.31%)",
  brownClr: "#372f2a",
  brownPrime: "#423d2f",
  blackPrimary: "#40464e",
  textBlack: "#2b2f36",
  actionOrange: "#ea8c1f",
  actionGreen: "#62C45B",
  errorClr: "#FF3A44",
  graySecondary: "#86888b",
  iconsDecor: " #544d3b",
  inputEmptyBackground: " #f7f6f0",
  bageBackground: "#eeede0",
  bageBackgroundSecondary: "#D9D9D9",
  bageDark: "#D8B681",
  bagePrimary: " #f7f6f0",
  bageLight: "#F2F0E4",
  bntOutlineActive: "#e9e7dd",
  timing_function__main: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  timing_function__long: " 500ms cubic-bezier(0.4, 0, 0.2, 1)",
  transparent: "transparent",
  yelowLight: "#FFF06B",
  white: "#fff",
  borderColorHover: "#2B2F36",
  subTitleFontWeight: 400,
};

export interface ButtonVariant
  extends Record<string, string | number | undefined> {
  filled?: string;
  outlinedLarge?: string;
  outlinedLargeGradient?: string;
  outlinedSmall?: string;
}

export const paramsMap = {
  backgroundColor: {
    filled: theme.blackPrimary,
    outlinedLarge: theme.white,
    outlinedLargeGradient: theme.backgroundGradient,
    outlinedSmall: theme.transparent,
  },
  borderColor: {
    filled: theme.bageDark,
    outlinedLarge: theme.bageDark,
    outlinedLargeGradient: theme.transparent,
    outlinedSmall: theme.bageDark,
  },
  fill: {
    filled: theme.yelowLight,
    outlinedLarge: theme.blackPrimary,
    outlinedLargeGradient: theme.actionOrange,
    outlinedSmall: theme.yelowLight,
  },
  color: {
    filled: theme.white,
    outlinedLarge: theme.blackPrimary,
    outlinedLargeGradient: theme.blackPrimary,
    outlinedSmall: theme.blackPrimary,
  },
  backgroundColorHover: {
    filled: theme.blackPrimary,
    outlinedLarge: theme.white,
    outlinedLargeGradient: theme.white,
    outlinedSmall: theme.transparent,
  },
  borderColorHover: {
    filled: theme.borderColorHover,
    outlinedLarge: theme.bageDark,
    outlinedLargeGradient: theme.transparent,
    outlinedSmall: theme.actionOrange,
  },
  fillHover: {
    filled: theme.white,
    outlinedLarge: theme.blackPrimary,
    outlinedLargeGradient: theme.actionOrange,
    outlinedSmall: theme.actionOrange,
  },
  colorHover: {
    filled: theme.white,
    outlinedLarge: "",
    outlinedLargeGradient: theme.blackPrimary,
    outlinedSmall: theme.blackPrimary,
  },
  backgroundColorActive: {
    filled: theme.blackPrimary,
    outlinedLarge: theme.bagePrimary,
    outlinedLargeGradient: "",
    outlinedSmall: "#F7F6F0",
  },
  borderColorActive: {
    filled: theme.bageDark,
    outlinedLarge: theme.bageDark,
    outlinedLargeGradient: theme.transparent,
    outlinedSmall: "#E9E7DD",
  },
  fillActive: {
    filled: theme.bageLight,
    outlinedLarge: theme.bageDark,
    outlinedLargeGradient: theme.actionOrange,
    outlinedSmall: theme.blackPrimary,
  },
  colorActive: {
    filled: theme.bageLight,
    outlinedLarge: theme.bageDark,
    outlinedLargeGradient: theme.blackPrimary,
    outlinedSmall: theme.blackPrimary,
  },
  borderRadius: {
    filled: "8px",
    outlinedLarge: "8px",
    outlinedLargeGradient: "8px",
    outlinedSmall: "100px",
  },
  borderWidth: {
    filled: "1px",
    outlinedLarge: "1px",
    outlinedLargeGradient: "1px",
    outlinedSmall: "2px",
  },
  fontSize: {
    filled: "15px",
    outlinedLarge: "15px",
    outlinedLargeGradient: "15px",
    outlinedSmall: "14px",
  },
  lineHeight: {
    filled: "0.87",
    outlinedLarge: "0.87",
    outlinedLargeGradient: "0.87",
    outlinedSmall: "0.93",
  },
  minHeight: {
    filled: "58px",
    outlinedLarge: "58px",
    outlinedLargeGradient: "58px",
    outlinedSmall: "36px",
  },
  minWidth: {
    filled: "210px",
    outlinedLarge: "210px",
    outlinedLargeGradient: "210px",
    outlinedSmall: "127px",
  },
  padding: {
    filled: "10px 25px",
    outlinedLarge: "10px 25px",
    outlinedLargeGradient: "10px 25px",
    outlinedSmall: "10px 19px",
  },
  background: {
    filled: "",
    outlinedLarge: "",
    outlinedLargeGradient: theme.linearGradient_border,
    outlinedSmall: "",
  },
  backgroundActive: {
    filled: "",
    outlinedLarge: "",
    outlinedLargeGradient: "",
    outlinedSmall: "",
  },
};
export type ThemeType = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
