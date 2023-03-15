export type ThemeType = {
  backgroundGradient: string;
  linearGradient_border: string;
  inearGradient_text: string;
  brownClr: string;
  brownPrime: string;
  brownLight: string;
  blackPrimary: string;
  textBlack: string;
  actionOrange: string;
  graySecondary: string;
  iconsDecor: string;
  inputEmptyBackground: string;
  bageBackground: string;
  bageDark: string;
  bagePrimary: string;
  bntOutlineActive: string;
  timing_function__main: string;
  timing_function__long: string;
  desktopWidth: string;
};
export const theme = {
  backgroundGradient:
    "  background: linear-gradient(90deg, #ece9aa 1.16%, #f1cc97 80.04%);",
  linearGradient_border: "linear-gradient(165deg, #cc3dff 0%, #eda313 100%) 1",
  inearGradient_text:
    "linear-gradient(92.94deg, #cc3dff -4.13%, #eda313 101.31%)",
  brownClr: "#372f2a",
  brownPrime: "#423d2f",
  brownLight: " #d8b681",
  blackPrimary: "#40464e",
  textBlack: "#2b2f36",
  actionOrange: "#ea8c1f",
  graySecondary: "#86888b",
  iconsDecor: " #544d3b",
  inputEmptyBackground: " #f7f6f0",
  bageBackground: "#eeede0",
  bageDark: "#f2f0e4",
  bagePrimary: " #f7f6f0",
  bntOutlineActive: "#e9e7dd",
  timing_function__main: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  timing_function__long: " 500ms cubic-bezier(0.4, 0, 0.2, 1)",

  desktopWidth: "960px",
} as ThemeType;

export const colors = {
  activeOrange: "#EA8C1F",
  primaryBlack: "#40464E",
  white: "#fff",
  bageDark: "#D8B681",
  bageLight: "#F2F0E4",
  bagePrimary: "#F7F6F0",
  yelowLight: "#FFF06B",
  blackPrimary: "#372F2A",
  transparent: "transparent",
  borderColorHover: "#2B2F36",

  backgroundGradient:
    "linear-gradient(#fff, #fff) padding-box, linear-gradient( 120deg, rgba(205, 62, 255, 1) 0%, rgba(237, 163, 20, 1) 100%) border-box",
  backgroundGradientActive:
    "linear-gradient(#F2F0E4, #F2F0E4) padding-box, linear-gradient( 120deg, rgba(205, 62, 255, 1) 0%, rgba(237, 163, 20, 1) 100%) border-box",
};

export const paramsMap = {
  backgroundColor: {
    filled: colors.blackPrimary,
    outlinedLarge: colors.white,
    outlinedLargeGradient: colors.backgroundGradientActive,
    outlinedSmall: colors.transparent,
  },
  borderColor: {
    filled: colors.bageDark,
    outlinedLarge: colors.bageDark,
    outlinedLargeGradient: colors.transparent,
    outlinedSmall: colors.bageDark,
  },
  fill: {
    filled: colors.yelowLight,
    outlinedLarge: colors.blackPrimary,
    outlinedLargeGradient: colors.activeOrange,
    outlinedSmall: colors.yelowLight,
  },
  color: {
    filled: colors.white,
    outlinedLarge: colors.primaryBlack,
    outlinedLargeGradient: colors.primaryBlack,
    outlinedSmall: colors.primaryBlack,
  },
  backgroundColorHover: {
    filled: colors.blackPrimary,
    outlinedLarge: colors.white,
    outlinedLargeGradient: colors.white,
    outlinedSmall: colors.transparent,
  },
  borderColorHover: {
    filled: colors.borderColorHover,
    outlinedLarge: colors.bageDark,
    outlinedLargeGradient: colors.transparent,
    outlinedSmall: colors.activeOrange,
  },
  fillHover: {
    filled: colors.white,
    outlinedLarge: colors.primaryBlack,
    outlinedLargeGradient: colors.activeOrange,
    outlinedSmall: colors.activeOrange,
  },
  colorHover: {
    filled: colors.white,
    outlinedLarge: "",
    outlinedLargeGradient: colors.primaryBlack,
    outlinedSmall: colors.primaryBlack,
  },
  backgroundColorActive: {
    filled: colors.blackPrimary,
    outlinedLarge: colors.bagePrimary,
    outlinedLargeGradient: "",
    outlinedSmall: "#F7F6F0",
  },
  borderColorActive: {
    filled: colors.bageDark,
    outlinedLarge: colors.bageDark,
    outlinedLargeGradient: colors.transparent,
    outlinedSmall: "#E9E7DD",
  },
  fillActive: {
    filled: colors.bageLight,
    outlinedLarge: colors.bageDark,
    outlinedLargeGradient: colors.activeOrange,
    outlinedSmall: colors.primaryBlack,
  },
  colorActive: {
    filled: colors.bageLight,
    outlinedLarge: colors.bageDark,
    outlinedLargeGradient: colors.primaryBlack,
    outlinedSmall: colors.primaryBlack,
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
    outlinedLargeGradient: colors.backgroundGradient,
    outlinedSmall: "",
  },
  backgroundActive: {
    filled: "",
    outlinedLarge: "",
    outlinedLargeGradient: "",
    outlinedSmall: "",
  },
};
