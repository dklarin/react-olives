import { lighten, darken, desaturate } from "polished";
import baseStyled, { ThemedStyledInterface } from "styled-components";
const primaryColor = "rgb(0,159,76)";

/** we will derive all accent app colors from this color */
const accentColor = "rgb(255,203,5)";

/**The color palette in use */
export const colorPalette = {
  primary35: lighten(0.65, primaryColor),
  primary40: lighten(0.6, primaryColor),
  primary45: lighten(0.52, primaryColor),
  primary50: lighten(0.5, primaryColor),
  primary52: lighten(0.48, primaryColor),
  primary55: lighten(0.45, primaryColor),
  primary60: lighten(0.4, primaryColor),
  primary70: lighten(0.3, primaryColor),
  primary80: lighten(0.2, primaryColor),
  primary90: lighten(0.1, primaryColor),
  primary100: primaryColor,
  primary120: darken(0.2, primaryColor),
  primary130: darken(0.3, primaryColor),
  primary140: darken(0.4, primaryColor),
  primary150: darken(0.5, primaryColor),

  accent35: lighten(0.65, accentColor),
  accent40: lighten(0.6, accentColor),
  accent45: lighten(0.55, accentColor),
  accent50: lighten(0.5, accentColor),
  accent55: lighten(0.45, accentColor),
  accent60: lighten(0.4, accentColor),
  accent70: lighten(0.3, accentColor),
  accent80: lighten(0.2, accentColor),
  accent100: accentColor,
  accent120: darken(0.2, accentColor),
  accent130: darken(0.3, accentColor),
  accent140: darken(0.4, accentColor),
  accent150: darken(0.5, accentColor),

  errorBase: "#ca3b35",
  errorAlertBackground: " #f8d7da",
  errorAlertText: "#721c24",
  errorAlertBorder: "#f5c6cb",
};

export const light = {
  bp: {
    mobile: "450px",
    tablet: "1195px",
  },
  palette: colorPalette,
  appHeaderBackground: primaryColor,
  cardHeaderBackground: primaryColor,
  buttonBackground: primaryColor,
  activeLinkBackground: primaryColor,

  /**Use in every component that requires user input to specify padding value */
  inputPadding: "0.5rem",
  /**Use in every input like component to specify border-radius*/
  borderRadius: "4px",
  /**Use in every input like component to specify border-color*/
  borderColor: "darkgray",

  /**Use in every input like component to specify border-color*/
  popUpborderColor: colorPalette.primary60,
  /**Use in every input like component to specify border-color when hover*/
  borderHoverColor: colorPalette.primary100,
  /**Use in every input like component to specify border-color when focused*/
  borderFocusColor: colorPalette.primary100,
  /**Use in every input like component to specify box-shadow when focused*/
  borderFocusBoxShadow: `0 0 2px ${colorPalette.primary100}`,

  /**Use in every input like component to specify border-color*/
  borderColorError: colorPalette.errorBase,

  /**Use in every input like component to specify box-shadow when focused*/
  popUpBoxShadow: `0 0 5px silver`,

  borderFocusBoxShadowHasError: `0 0 2px ${colorPalette.errorBase}`,
  /**Use in every input like component to specify placeholder color*/
  placeholderColor: colorPalette.primary70,
  /**The default text color, should be inherited in components*/
  color: "black",

  textColorPrimary: colorPalette.primary130,

  textColorInverted: "white",

  textColorErrorPrimary: colorPalette.errorBase,
  textColorErrorInverted: colorPalette.errorAlertText,

  backgroundColorErrorPrimary: colorPalette.errorAlertBackground,

  newItemSidebarNodeTextColor: colorPalette.accent70,

  /**Use in every input like component to specify background-color*/
  inputBackgroundColor: "white",

  /**Toggle-switch is disabled */
  outerBackgroundColorDisabled: "white",
  innerBackgroundColorDisabled: colorPalette.primary60,

  /**Toggle-switch is off*/
  outerBackgroundColorOff: colorPalette.primary60,

  borderColorOff: colorPalette.primary55,

  buttonHoverBackgroundColor: lighten(
    0.5,
    desaturate(0.6, colorPalette.primary90)
  ),

  /**Toggle-switch is on*/
  outerBackgroundColorOn: colorPalette.primary100,
  borderColorOn: colorPalette.primary100,

  /**Toggle-switch inside */
  innerBackgroundColor: colorPalette.primary70,
  fontFamily: `Arial`,
};
export const TextColors = {
  primary: primaryColor,
  secondary: lighten(0.1, primaryColor),
  tertiary: primaryColor,
  white: "white",
  error: "#ff0000",
};

export const theme = light;

export const styledTheme = baseStyled;
export const styled = baseStyled;
